#!/usr/bin/env bash
# Start a local web server for the exercises site.
# Usage: ./start.sh [port]   (default port: 8777)

set -e

PORT="${1:-8777}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$DIR"

URL="http://localhost:${PORT}/index.html"
echo "Serving exercises at ${URL}"
echo "Press Ctrl+C to stop."

# Open the browser (macOS: open, Linux: xdg-open) once the server is up.
( sleep 1; (command -v open >/dev/null && open "$URL") || (command -v xdg-open >/dev/null && xdg-open "$URL") ) >/dev/null 2>&1 &

exec python3 -m http.server "$PORT"
