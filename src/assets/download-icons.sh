#!/bin/bash
mkdir -p "$(dirname "$0")/icons"
DIR="$(dirname "$0")/icons"

curl -s "https://www.figma.com/api/mcp/asset/ea4f52ef-dcc6-4294-8815-ae6a58de9dec" -o "$DIR/verify.svg"
curl -s "https://www.figma.com/api/mcp/asset/d101bed4-7467-4001-94ea-1182205f325f" -o "$DIR/error-2.svg"
curl -s "https://www.figma.com/api/mcp/asset/72224217-33af-4dc1-b089-c73267714754" -o "$DIR/ai.svg"
curl -s "https://www.figma.com/api/mcp/asset/6c6b8e2b-8275-4093-932f-56f2ec843c61" -o "$DIR/info-purple.svg"

echo "✅ All 4 icons downloaded"
