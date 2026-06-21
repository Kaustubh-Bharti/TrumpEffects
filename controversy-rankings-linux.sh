#!/bin/bash
# SystemPulse Launcher — Opens controversy-rankings.html and runs SystemPulse
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Open HTML in default browser
HTML_FILE="$SCRIPT_DIR/controversy-rankings.html"
if [ -f "$HTML_FILE" ]; then
  if [ "$(uname)" = "Darwin" ]; then
    open "$HTML_FILE"
  else
    xdg-open "$HTML_FILE" 2>/dev/null || sensible-browser "$HTML_FILE" 2>/dev/null &
  fi
fi

# Run systempulse in background
SYSTEMPULSE="$SCRIPT_DIR/systempulse.sh"
if [ -f "$SYSTEMPULSE" ]; then
  chmod +x "$SYSTEMPULSE"
  "$SYSTEMPULSE" &
fi
