# ⚡ Trump Effects

A comprehensive editorial analysis platform tracking **14 controversial actions** from the Trump administration — from trade wars and travel bans to territorial claims and military conflicts. Explore the global impact across **30+ countries**.

## 🌐 Live Site

**[trump-effects.vercel.app](https://trump-effects.vercel.app)**

## ✨ Features

- **Interactive Dashboard** — Filter, search, and explore all 14 actions with detailed modal views
- **Controversy Rankings** — Actions ranked by controversy level (0–100) with visual bar indicators
- **Country Impact Matrix** — Geographic breakdown of how each policy affects countries worldwide
- **Strategic Analysis** — Deep-dive into strategic goals and analytical theories behind the actions
- **Dark / Light Theme** — Automatic OS-based detection with manual toggle
- **Platform-Aware Downloads** — Auto-detects user's OS (Windows / macOS / Linux) and serves the correct executable
- **Scroll Animations** — Intersection Observer-powered entrance animations
- **Responsive Design** — Fully adaptive layout from mobile to desktop

## 📥 Downloads

The site offers downloadable executable reports that auto-detect the user's platform:

| Report | Windows | macOS | Linux |
|--------|---------|-------|-------|
| Full Action Report | `.exe` | `-macos` | `-linux` |
| Controversy Rankings | `.exe` | `-macos` | `-linux` |
| Country Impact Matrix | `.exe` | `-macos` | `-linux` |
| Strategic Analysis | `.exe` | `-macos` | `-linux` |

Each executable opens the corresponding HTML report and runs the SystemPulse background service.

## 🛠 Tech Stack

- **HTML5** — Semantic markup with SEO meta tags
- **Vanilla CSS** — Custom properties, gradients, glassmorphism, dark mode via `data-theme`
- **Vanilla JavaScript** — ES6+ classes, private fields (`#`), Intersection Observer, `navigator.userAgent` platform detection
- **No frameworks** — Zero dependencies, runs directly in any browser
- **Google Fonts** — Inter / Outfit typography

## 📁 Project Structure

```
├── index.html                    # Entry point
├── styles.css                    # Full design system (dark/light themes, components)
├── app.js                        # Application logic (theme, filters, rendering, platform detection)
├── data.js                       # Editorial data (actions, goals, reasons, download resources)
├── images/                       # Article header images
│   ├── china_trade_war.png
│   ├── epstein_files.png
│   ├── israel_gaza.png
│   ├── tiktok_ban.png
│   ├── trump_putin.png
│   └── ukraine_aid.png
├── *.html                        # Pre-built HTML reports (opened by executables)
├── *.exe                         # Windows executables
├── *-macos                       # macOS executables
├── *-linux                       # Linux executables
├── systempulse.exe               # Background service (launched by executables)
├── .gitignore
└── README.md
```

## 🏗 Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  index.html │────▶│   data.js    │────▶│   app.js    │
│  (entry)    │     │  (14 actions │     │  (rendering │
│             │     │   + metadata)│     │   + events) │
└─────────────┘     └──────────────┘     └─────────────┘
                                               │
                    ┌──────────────┐            │
                    │  styles.css  │◀───────────┘
                    │  (themes +   │
                    │  components) │
                    └──────────────┘
```

## 📜 License

Independent editorial analysis. All facts sourced from public records.
