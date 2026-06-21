/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                     SystemPulse CLI                         ║
 * ║  System Info via Terminal Commands & File CRUD Manager      ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * This tool gathers system information by executing NATIVE TERMINAL
 * COMMANDS (systeminfo, wmic, uname, sw_vers, etc.) via child_process.
 * The Node.js `os` module is used only as a fallback.
 *
 * If Node.js is not available, use the standalone scripts instead:
 *   Windows  →  powershell -File system-info.ps1
 *   Mac/Linux →  bash system-info.sh
 *
 * Usage:
 *   node index.js                          → Gather system info → JSON
 *   node index.js create <file> <content>  → Create a new file
 *   node index.js read <file>              → Read a file
 *   node index.js update <file> <content>  → Update a file
 *   node index.js delete <file>            → Delete a file
 */

const os = require("os");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ─────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────

const OUTPUT_FILE = "system-info.json";
const WORKSPACE_DIR = path.join(__dirname, "workspace");
const PLATFORM = os.platform(); // "win32" | "darwin" | "linux"

// ─────────────────────────────────────────────
//  TERMINAL COMMAND RUNNER
// ─────────────────────────────────────────────

/**
 * Runs a shell command and returns its stdout as a trimmed string.
 * Returns null if the command fails (graceful degradation).
 *
 * @param {string} cmd - The command to execute.
 * @returns {string|null}
 */
function run(cmd) {
  try {
    return execSync(cmd, {
      encoding: "utf-8",
      timeout: 15000,
      stdio: ["pipe", "pipe", "pipe"],
    }).trim();
  } catch {
    return null;
  }
}

/**
 * Parses "Key=Value" or "Key: Value" lines from command output
 * into a plain object.
 *
 * @param {string} text - Raw multi-line output.
 * @param {string} [sep="="] - Separator character.
 * @returns {Object<string,string>}
 */
function parseKeyValue(text, sep = "=") {
  const result = {};
  if (!text) return result;
  for (const line of text.split("\n")) {
    const idx = line.indexOf(sep);
    if (idx > 0) {
      const key = line.substring(0, idx).trim();
      const val = line.substring(idx + 1).trim();
      if (key) result[key] = val;
    }
  }
  return result;
}

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────

function formatBytes(bytes) {
  if (!bytes || bytes === 0) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(" ");
}

function sanitizeFilename(filename) {
  return path.basename(filename);
}

function printHeader(title) {
  const line = "─".repeat(50);
  console.log(`\n  \x1b[36m${line}\x1b[0m`);
  console.log(`  \x1b[1m\x1b[35m  ${title}\x1b[0m`);
  console.log(`  \x1b[36m${line}\x1b[0m`);
}

function printRow(key, value) {
  const v = value !== null && value !== undefined && value !== ""
    ? value
    : "\x1b[33m(not available)\x1b[0m";
  console.log(`  \x1b[90m│\x1b[0m  \x1b[37m${String(key).padEnd(28)}\x1b[0m \x1b[32m${v}\x1b[0m`);
}

// ─────────────────────────────────────────────
//  PLATFORM-SPECIFIC DATA GATHERERS
//  Each function runs native terminal commands.
// ─────────────────────────────────────────────

// ──── WINDOWS ────────────────────────────────

function gatherWindows() {
  // OS details via wmic
  const osRaw = run('wmic os get Caption,Version,BuildNumber,OSArchitecture /format:list');
  const osKv = parseKeyValue(osRaw);

  // CPU details via wmic
  const cpuRaw = run('wmic cpu get Name,NumberOfCores,NumberOfLogicalProcessors,MaxClockSpeed /format:list');
  const cpuKv = parseKeyValue(cpuRaw);

  // Memory via wmic (total physical in bytes)
  const memTotalRaw = run('wmic ComputerSystem get TotalPhysicalMemory /format:list');
  const memTotalKv = parseKeyValue(memTotalRaw);
  const totalBytes = parseInt(memTotalKv["TotalPhysicalMemory"] || "0", 10);

  // Free memory via wmic
  const memFreeRaw = run('wmic OS get FreePhysicalMemory /format:list');
  const memFreeKv = parseKeyValue(memFreeRaw);
  const freeKB = parseInt(memFreeKv["FreePhysicalMemory"] || "0", 10);
  const freeBytes = freeKB * 1024;

  // Hostname
  const hostname = run("hostname") || os.hostname();

  // Disk info via wmic
  const diskRaw = run('wmic logicaldisk get DeviceID,Size,FreeSpace,FileSystem /format:list');
  const diskLines = (diskRaw || "").split(/\n\n+/).filter(Boolean);
  const disks = diskLines.map((block) => parseKeyValue(block)).filter((d) => d.DeviceID);

  // Uptime via wmic (LastBootUpTime)
  const bootRaw = run('wmic os get LastBootUpTime /format:list');
  const bootKv = parseKeyValue(bootRaw);
  let uptimeFormatted = formatUptime(os.uptime());
  if (bootKv["LastBootUpTime"]) {
    // Format: 20260602100000.000000+330
    const b = bootKv["LastBootUpTime"];
    try {
      const year = b.substring(0, 4);
      const month = b.substring(4, 6);
      const day = b.substring(6, 8);
      const hour = b.substring(8, 10);
      const min = b.substring(10, 12);
      const sec = b.substring(12, 14);
      const bootDate = new Date(`${year}-${month}-${day}T${hour}:${min}:${sec}`);
      const uptimeSec = Math.floor((Date.now() - bootDate.getTime()) / 1000);
      uptimeFormatted = formatUptime(uptimeSec);
    } catch { /* fall back to os.uptime() */ }
  }

  // Network via ipconfig
  const ipconfigRaw = run("ipconfig") || "";

  // Environment variables (Windows-specific)
  const envVars = [
    "PATH", "USERNAME", "COMPUTERNAME", "USERPROFILE", "OS",
    "PROCESSOR_ARCHITECTURE", "NUMBER_OF_PROCESSORS", "APPDATA",
    "LOCALAPPDATA", "TEMP", "SYSTEMROOT", "PROGRAMFILES", "COMSPEC",
    "JAVA_HOME", "NODE_ENV",
  ];

  return {
    os_name: osKv["Caption"] || run("ver") || "Windows",
    os_version: osKv["Version"] || "N/A",
    os_build: osKv["BuildNumber"] || "N/A",
    os_arch: osKv["OSArchitecture"] || os.arch(),
    hostname,
    cpu_model: cpuKv["Name"] || "N/A",
    cpu_physical_cores: cpuKv["NumberOfCores"] || "N/A",
    cpu_logical_cores: cpuKv["NumberOfLogicalProcessors"] || "N/A",
    cpu_max_speed_mhz: cpuKv["MaxClockSpeed"] || "N/A",
    mem_total_bytes: totalBytes,
    mem_total: formatBytes(totalBytes),
    mem_free_bytes: freeBytes,
    mem_free: formatBytes(freeBytes),
    mem_used: formatBytes(totalBytes - freeBytes),
    mem_usage_percent: totalBytes ? ((1 - freeBytes / totalBytes) * 100).toFixed(1) + "%" : "N/A",
    uptime: uptimeFormatted,
    disks: disks.map((d) => ({
      drive: d.DeviceID,
      filesystem: d.FileSystem || "N/A",
      total: formatBytes(parseInt(d.Size || "0", 10)),
      free: formatBytes(parseInt(d.FreeSpace || "0", 10)),
    })),
    network_raw: ipconfigRaw.substring(0, 2000),
    env_vars: envVars,
    command_used: "wmic, ipconfig, hostname, ver",
  };
}

// ──── LINUX ──────────────────────────────────

function gatherLinux() {
  // OS release info
  const releaseRaw = run("cat /etc/os-release 2>/dev/null") || "";
  const releaseKv = parseKeyValue(releaseRaw);

  // Kernel
  const kernel = run("uname -r") || "N/A";
  const arch = run("uname -m") || os.arch();
  const hostname = run("hostname") || os.hostname();

  // CPU from /proc/cpuinfo
  const cpuinfoRaw = run("cat /proc/cpuinfo 2>/dev/null") || "";
  const cpuModel = (cpuinfoRaw.match(/model name\s*:\s*(.*)/i) || [])[1] || "N/A";
  const cpuCores = (cpuinfoRaw.match(/cpu cores\s*:\s*(\d+)/i) || [])[1] || "N/A";
  const cpuProcessors = (cpuinfoRaw.split("processor").length - 1) || "N/A";

  // Memory from /proc/meminfo (in kB)
  const meminfoRaw = run("cat /proc/meminfo 2>/dev/null") || "";
  const memTotalMatch = meminfoRaw.match(/MemTotal:\s+(\d+)/);
  const memFreeMatch = meminfoRaw.match(/MemAvailable:\s+(\d+)/);
  const totalBytes = memTotalMatch ? parseInt(memTotalMatch[1], 10) * 1024 : 0;
  const freeBytes = memFreeMatch ? parseInt(memFreeMatch[1], 10) * 1024 : 0;

  // Disk via df
  const dfRaw = run("df -h / 2>/dev/null") || "";

  // Uptime
  const uptimeRaw = run("cat /proc/uptime 2>/dev/null") || "";
  const uptimeSec = parseFloat(uptimeRaw.split(" ")[0] || os.uptime());

  // Network via ip or ifconfig
  const networkRaw = run("ip addr 2>/dev/null") || run("ifconfig 2>/dev/null") || "";

  // Environment variables (Linux-specific)
  const envVars = [
    "PATH", "USER", "HOME", "SHELL", "TERM", "LANG",
    "XDG_SESSION_TYPE", "XDG_CURRENT_DESKTOP", "DESKTOP_SESSION",
    "DISPLAY", "SSH_CONNECTION", "EDITOR", "NODE_ENV",
    "JAVA_HOME", "GOPATH",
  ];

  return {
    os_name: (releaseKv["PRETTY_NAME"] || "").replace(/"/g, "") || "Linux",
    os_id: (releaseKv["ID"] || "").replace(/"/g, "") || "N/A",
    os_version: (releaseKv["VERSION_ID"] || "").replace(/"/g, "") || "N/A",
    kernel,
    os_arch: arch,
    hostname,
    cpu_model: cpuModel.trim(),
    cpu_physical_cores: cpuCores,
    cpu_logical_processors: String(cpuProcessors),
    mem_total_bytes: totalBytes,
    mem_total: formatBytes(totalBytes),
    mem_free_bytes: freeBytes,
    mem_free: formatBytes(freeBytes),
    mem_used: formatBytes(totalBytes - freeBytes),
    mem_usage_percent: totalBytes ? ((1 - freeBytes / totalBytes) * 100).toFixed(1) + "%" : "N/A",
    uptime: formatUptime(uptimeSec),
    disk_usage: dfRaw,
    network_raw: networkRaw.substring(0, 2000),
    env_vars: envVars,
    command_used: "uname, cat /proc/cpuinfo, cat /proc/meminfo, df, ip addr, cat /etc/os-release",
  };
}

// ──── macOS ──────────────────────────────────

function gatherMac() {
  // macOS version via sw_vers
  const productName = run("sw_vers -productName") || "macOS";
  const productVersion = run("sw_vers -productVersion") || "N/A";
  const buildVersion = run("sw_vers -buildVersion") || "N/A";

  const arch = run("uname -m") || os.arch();
  const hostname = run("hostname") || os.hostname();

  // CPU via sysctl
  const cpuModel = run("sysctl -n machdep.cpu.brand_string 2>/dev/null") || "N/A";
  const cpuCores = run("sysctl -n hw.physicalcpu 2>/dev/null") || "N/A";
  const cpuLogical = run("sysctl -n hw.logicalcpu 2>/dev/null") || "N/A";

  // Memory via sysctl (bytes)
  const memTotal = parseInt(run("sysctl -n hw.memsize 2>/dev/null") || "0", 10);
  // Free memory approximation via vm_stat
  const vmstatRaw = run("vm_stat 2>/dev/null") || "";
  const pageSizeMatch = vmstatRaw.match(/page size of (\d+)/);
  const freeMatch = vmstatRaw.match(/Pages free:\s+(\d+)/);
  const inactiveMatch = vmstatRaw.match(/Pages inactive:\s+(\d+)/);
  const pageSize = pageSizeMatch ? parseInt(pageSizeMatch[1], 10) : 4096;
  const freePages = (freeMatch ? parseInt(freeMatch[1], 10) : 0) +
                    (inactiveMatch ? parseInt(inactiveMatch[1], 10) : 0);
  const freeBytes = freePages * pageSize;

  // Disk via df
  const dfRaw = run("df -h / 2>/dev/null") || "";

  // Uptime from sysctl kern.boottime
  const bootRaw = run("sysctl -n kern.boottime 2>/dev/null") || "";
  const bootSecMatch = bootRaw.match(/sec\s*=\s*(\d+)/);
  const uptimeSec = bootSecMatch
    ? Math.floor(Date.now() / 1000) - parseInt(bootSecMatch[1], 10)
    : os.uptime();

  // Network via ifconfig
  const networkRaw = run("ifconfig 2>/dev/null") || "";

  // Environment variables (macOS-specific)
  const envVars = [
    "PATH", "USER", "HOME", "SHELL", "TERM", "TERM_PROGRAM",
    "LANG", "TMPDIR", "LOGNAME", "DISPLAY",
    "HOMEBREW_PREFIX", "EDITOR", "NODE_ENV",
    "JAVA_HOME", "GOPATH",
  ];

  return {
    os_name: `${productName} ${productVersion}`,
    os_build: buildVersion,
    os_arch: arch,
    hostname,
    cpu_model: cpuModel,
    cpu_physical_cores: cpuCores,
    cpu_logical_cores: cpuLogical,
    mem_total_bytes: memTotal,
    mem_total: formatBytes(memTotal),
    mem_free_bytes: freeBytes,
    mem_free: formatBytes(freeBytes),
    mem_used: formatBytes(memTotal - freeBytes),
    mem_usage_percent: memTotal ? ((1 - freeBytes / memTotal) * 100).toFixed(1) + "%" : "N/A",
    uptime: formatUptime(uptimeSec),
    disk_usage: dfRaw,
    network_raw: networkRaw.substring(0, 2000),
    env_vars: envVars,
    command_used: "sw_vers, sysctl, vm_stat, df, ifconfig, hostname",
  };
}

// ─────────────────────────────────────────────
//  MAIN SYSTEM INFO GATHERER
// ─────────────────────────────────────────────

/**
 * Gathers system information by running native terminal commands
 * appropriate for the detected platform.
 *
 * Flow:
 *  1. Detect platform (win32 / darwin / linux).
 *  2. Call the platform-specific gatherer which runs terminal commands.
 *  3. Read the requested environment variables from process.env.
 *  4. Bundle everything into a JSON-ready object.
 *
 * @returns {object} Complete system info snapshot.
 */
function gatherSystemInfo() {
  let platformData;
  let platformLabel;

  if (PLATFORM === "win32") {
    platformData = gatherWindows();
    platformLabel = "Windows";
  } else if (PLATFORM === "darwin") {
    platformData = gatherMac();
    platformLabel = "macOS";
  } else {
    platformData = gatherLinux();
    platformLabel = "Linux";
  }

  // Read environment variables
  const envVarNames = platformData.env_vars || [];
  const environmentVariables = {};
  for (const key of envVarNames) {
    const val = process.env[key] || null;
    environmentVariables[key] = {
      value: val,
      available: val !== null,
    };
  }

  // Remove helper fields from platformData
  const commandsUsed = platformData.command_used;
  delete platformData.env_vars;
  delete platformData.command_used;

  return {
    _meta: {
      generated_at: new Date().toISOString(),
      generator: "SystemPulse CLI",
      detected_platform: platformLabel,
      node_version: process.version,
      commands_used: commandsUsed,
    },
    system: platformData,
    user: {
      username: os.userInfo().username || process.env.USERNAME || process.env.USER || "N/A",
      home_directory: os.homedir(),
    },
    environment_variables: environmentVariables,
  };
}

// ─────────────────────────────────────────────
//  DISPLAY & SAVE
// ─────────────────────────────────────────────

function runSystemInfo() {
  console.log("\n\x1b[1m\x1b[95m  ⚡ SystemPulse — System Information (via Terminal Commands)\x1b[0m");

  const info = gatherSystemInfo();
  const sys = info.system;

  // ── OS ──
  printHeader("Operating System");
  printRow("OS Name", sys.os_name);
  printRow("Version", sys.os_version || sys.os_build);
  printRow("Architecture", sys.os_arch);
  printRow("Hostname", sys.hostname);
  if (sys.kernel) printRow("Kernel", sys.kernel);
  if (sys.os_build && sys.os_version) printRow("Build", sys.os_build);

  // ── CPU ──
  printHeader("CPU");
  printRow("Model", sys.cpu_model);
  printRow("Physical Cores", sys.cpu_physical_cores);
  printRow("Logical Cores", sys.cpu_logical_cores || sys.cpu_logical_processors);
  if (sys.cpu_max_speed_mhz) printRow("Max Speed (MHz)", sys.cpu_max_speed_mhz);

  // ── Memory ──
  printHeader("Memory");
  printRow("Total", sys.mem_total);
  printRow("Used", sys.mem_used);
  printRow("Free", sys.mem_free);
  printRow("Usage", sys.mem_usage_percent);

  // ── Disk ──
  if (sys.disks && sys.disks.length > 0) {
    printHeader("Disks");
    for (const d of sys.disks) {
      printRow(`${d.drive} (${d.filesystem})`, `Total: ${d.total}  Free: ${d.free}`);
    }
  } else if (sys.disk_usage) {
    printHeader("Disk Usage");
    sys.disk_usage.split("\n").forEach((line) => {
      console.log(`  \x1b[90m│\x1b[0m  ${line}`);
    });
  }

  // ── Uptime ──
  printHeader("Uptime & Runtime");
  printRow("System Uptime", sys.uptime);
  printRow("Node.js Version", process.version);

  // ── User ──
  printHeader("User");
  printRow("Username", info.user.username);
  printRow("Home Directory", info.user.home_directory);

  // ── Environment Variables ──
  printHeader("Environment Variables");
  for (const [key, entry] of Object.entries(info.environment_variables)) {
    const val = entry.available
      ? (entry.value.length > 60 ? entry.value.substring(0, 57) + "..." : entry.value)
      : null;
    printRow(key, val);
  }

  // ── Commands used ──
  printHeader("Data Source");
  printRow("Commands Used", info._meta.commands_used);

  // ── Write JSON ──
  const outputPath = path.join(__dirname, OUTPUT_FILE);
  try {
    fs.writeFileSync(outputPath, JSON.stringify(info, null, 2), "utf-8");
    console.log(`\n  \x1b[1m\x1b[92m✔ Full report saved to:\x1b[0m \x1b[4m${outputPath}\x1b[0m\n`);
  } catch (err) {
    console.error(`\n  \x1b[31m✖ Failed to write JSON: ${err.message}\x1b[0m\n`);
    process.exit(1);
  }
}

// ─────────────────────────────────────────────
//  FILE CRUD OPERATIONS
// ─────────────────────────────────────────────

function ensureWorkspace() {
  if (!fs.existsSync(WORKSPACE_DIR)) {
    fs.mkdirSync(WORKSPACE_DIR, { recursive: true });
    console.log(`  \x1b[90m(created workspace: ${WORKSPACE_DIR})\x1b[0m`);
  }
}

function createFile(filename, content) {
  ensureWorkspace();
  const safe = sanitizeFilename(filename);
  const filePath = path.join(WORKSPACE_DIR, safe);
  if (fs.existsSync(filePath)) {
    console.error(`  \x1b[31m✖ File "${safe}" already exists. Use 'update' to modify it.\x1b[0m`);
    process.exit(1);
  }
  try {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`  \x1b[92m✔ Created:\x1b[0m ${filePath}`);
  } catch (err) {
    console.error(`  \x1b[31m✖ Create failed: ${err.message}\x1b[0m`);
    process.exit(1);
  }
}

function readFile(filename) {
  ensureWorkspace();
  const safe = sanitizeFilename(filename);
  const filePath = path.join(WORKSPACE_DIR, safe);
  if (!fs.existsSync(filePath)) {
    console.error(`  \x1b[31m✖ File "${safe}" not found in workspace.\x1b[0m`);
    process.exit(1);
  }
  try {
    const stats = fs.statSync(filePath);
    const content = fs.readFileSync(filePath, "utf-8");
    printHeader(`File: ${safe}`);
    printRow("Size", formatBytes(stats.size));
    printRow("Created", stats.birthtime.toISOString());
    printRow("Modified", stats.mtime.toISOString());
    console.log(`  \x1b[90m│\x1b[0m`);
    console.log(`  \x1b[90m│  ── Content ──────────────────────────────\x1b[0m`);
    content.split("\n").forEach((line) => {
      console.log(`  \x1b[90m│\x1b[0m  ${line}`);
    });
    console.log();
  } catch (err) {
    console.error(`  \x1b[31m✖ Read failed: ${err.message}\x1b[0m`);
    process.exit(1);
  }
}

function updateFile(filename, content) {
  ensureWorkspace();
  const safe = sanitizeFilename(filename);
  const filePath = path.join(WORKSPACE_DIR, safe);
  if (!fs.existsSync(filePath)) {
    console.error(`  \x1b[31m✖ File "${safe}" not found. Use 'create' first.\x1b[0m`);
    process.exit(1);
  }
  try {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`  \x1b[92m✔ Updated:\x1b[0m ${filePath}`);
  } catch (err) {
    console.error(`  \x1b[31m✖ Update failed: ${err.message}\x1b[0m`);
    process.exit(1);
  }
}

function deleteFile(filename) {
  ensureWorkspace();
  const safe = sanitizeFilename(filename);
  const filePath = path.join(WORKSPACE_DIR, safe);
  if (!fs.existsSync(filePath)) {
    console.error(`  \x1b[31m✖ File "${safe}" not found.\x1b[0m`);
    process.exit(1);
  }
  try {
    fs.unlinkSync(filePath);
    console.log(`  \x1b[92m✔ Deleted:\x1b[0m ${safe}`);
  } catch (err) {
    console.error(`  \x1b[31m✖ Delete failed: ${err.message}\x1b[0m`);
    process.exit(1);
  }
}

function listFiles() {
  ensureWorkspace();
  try {
    const files = fs.readdirSync(WORKSPACE_DIR);
    if (files.length === 0) {
      console.log("  \x1b[33m(workspace is empty)\x1b[0m\n");
      return;
    }
    printHeader("Workspace Files");
    files.forEach((file) => {
      const stats = fs.statSync(path.join(WORKSPACE_DIR, file));
      printRow(file, formatBytes(stats.size));
    });
    console.log();
  } catch (err) {
    console.error(`  \x1b[31m✖ List failed: ${err.message}\x1b[0m`);
    process.exit(1);
  }
}

// ─────────────────────────────────────────────
//  CLI ROUTER
// ─────────────────────────────────────────────

function printUsage() {
  console.log(`
  \x1b[1m\x1b[95m⚡ SystemPulse CLI\x1b[0m
  \x1b[90mSystem Info (via Terminal Commands) & File CRUD Manager\x1b[0m

  \x1b[1mUsage:\x1b[0m
    node index.js \x1b[36m[command]\x1b[0m \x1b[33m[arguments]\x1b[0m

  \x1b[1mCommands:\x1b[0m
    \x1b[36m(no command)\x1b[0m               Gather system info → ${OUTPUT_FILE}
    \x1b[36minfo\x1b[0m                       Same as above
    \x1b[36mcreate\x1b[0m  \x1b[33m<file> <content>\x1b[0m  Create a new file in workspace
    \x1b[36mread\x1b[0m    \x1b[33m<file>\x1b[0m             Read a file from workspace
    \x1b[36mupdate\x1b[0m  \x1b[33m<file> <content>\x1b[0m  Update an existing file
    \x1b[36mdelete\x1b[0m  \x1b[33m<file>\x1b[0m             Delete a file from workspace
    \x1b[36mlist\x1b[0m                       List all workspace files
    \x1b[36mhelp\x1b[0m                       Show this help message

  \x1b[1mNo Node.js? Use the standalone scripts:\x1b[0m
    \x1b[36mWindows:\x1b[0m   powershell -ExecutionPolicy Bypass -File system-info.ps1
    \x1b[36mMac/Linux:\x1b[0m bash system-info.sh
`);
}

function main() {
  const args = process.argv.slice(2);
  const command = (args[0] || "info").toLowerCase();

  switch (command) {
    case "info":
      runSystemInfo();
      break;
    case "create":
      if (args.length < 3) { console.error('  \x1b[31m✖ Usage: node index.js create <filename> <content>\x1b[0m'); process.exit(1); }
      createFile(args[1], args.slice(2).join(" "));
      break;
    case "read":
      if (args.length < 2) { console.error('  \x1b[31m✖ Usage: node index.js read <filename>\x1b[0m'); process.exit(1); }
      readFile(args[1]);
      break;
    case "update":
      if (args.length < 3) { console.error('  \x1b[31m✖ Usage: node index.js update <filename> <content>\x1b[0m'); process.exit(1); }
      updateFile(args[1], args.slice(2).join(" "));
      break;
    case "delete":
      if (args.length < 2) { console.error('  \x1b[31m✖ Usage: node index.js delete <filename>\x1b[0m'); process.exit(1); }
      deleteFile(args[1]);
      break;
    case "list":
      listFiles();
      break;
    case "help": case "--help": case "-h":
      printUsage();
      break;
    default:
      console.error(`  \x1b[31m✖ Unknown command: "${command}"\x1b[0m`);
      printUsage();
      process.exit(1);
  }
}

main();
