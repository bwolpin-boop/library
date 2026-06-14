#!/bin/bash
DIR="$(dirname "$0")/icons"
curl -s "https://www.figma.com/api/mcp/asset/79fb0aa5-4d2d-408a-8044-cebff732b0e6" -o "$DIR/arrow-left.svg"
echo "✅ Done"
