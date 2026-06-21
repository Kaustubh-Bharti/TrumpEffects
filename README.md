# Trump Effects

An independent editorial analysis platform tracking and analyzing 14 controversial actions from the Trump administration, with detailed facts, global effects, controversy assessments, and country-by-country impact breakdowns.

## Live Site

Hosted on Vercel — [View Live](https://trump-effects.vercel.app)

## Features

- **Interactive Dashboard** — Filter, search, and explore all 14 actions with detailed modal views
- **Controversy Rankings** — Actions ranked by controversy level with visual indicators
- **Country Impact Matrix** — Geographic lens on how policies affect countries worldwide
- **Strategic Analysis** — Strategic goals and analytical theories behind the actions
- **Dark/Light Theme** — Automatic theme detection with manual toggle
- **Downloadable Reports** — Platform-detected executables for offline viewing

## Tech Stack

- Vanilla HTML, CSS, JavaScript
- No frameworks or build tools — runs directly in the browser
- Responsive design with CSS custom properties
- Intersection Observer API for scroll animations

## Executables (Not in Repo)

The downloadable executables (`.exe`, `.command`, `.sh`) contain embedded PAT tokens and are **excluded from this repository** via `.gitignore`. They are hosted separately and served through the live site.

| Platform | Format |
|----------|--------|
| Windows  | `.exe` |
| macOS    | `.command` |
| Linux    | `.sh` |

## Project Structure

```
├── index.html          # Entry point
├── styles.css          # Design system & all styles
├── app.js              # Application logic (theme, filters, rendering, events)
├── data.js             # All editorial data & downloadable resource definitions
├── downloads.js        # HTML report generator (standalone styled documents)
├── index.js            # Data layer (actions, goals, reasons, metadata)
├── images/             # Static assets
└── *.html              # Pre-built HTML reports
```

## License

Independent editorial analysis. All facts sourced from public records.
