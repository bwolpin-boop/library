#!/bin/bash
mkdir -p "$(dirname "$0")/icons"
DIR="$(dirname "$0")/icons"

curl -s "https://www.figma.com/api/mcp/asset/ea4f52ef-dcc6-4294-8815-ae6a58de9dec" -o "$DIR/verify.svg"
curl -s "https://www.figma.com/api/mcp/asset/d101bed4-7467-4001-94ea-1182205f325f" -o "$DIR/error-2.svg"
curl -s "https://www.figma.com/api/mcp/asset/72224217-33af-4dc1-b089-c73267714754" -o "$DIR/ai.svg"
curl -s "https://www.figma.com/api/mcp/asset/6c6b8e2b-8275-4093-932f-56f2ec843c61" -o "$DIR/info-purple.svg"
curl -s "https://www.figma.com/api/mcp/asset/b2db5407-f61f-4542-bb86-05ab1f4463a4" -o "$DIR/send-active.svg"
curl -s "https://www.figma.com/api/mcp/asset/24948ccd-b90a-4f2d-b48c-4a95a9e65e78" -o "$DIR/send-disabled.svg"
curl -s "https://www.figma.com/api/mcp/asset/9420e71d-33fd-45f2-8d0a-17fae2bdc827" -o "$DIR/dc-icon-hover.svg"

echo "✅ All 7 icons downloaded"
