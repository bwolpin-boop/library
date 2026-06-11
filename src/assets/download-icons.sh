#!/bin/bash
mkdir -p "$(dirname "$0")/icons"
DIR="$(dirname "$0")/icons"

curl -s "https://www.figma.com/api/mcp/asset/ea4f52ef-dcc6-4294-8815-ae6a58de9dec" -o "$DIR/verify.svg"
curl -s "https://www.figma.com/api/mcp/asset/d101bed4-7467-4001-94ea-1182205f325f" -o "$DIR/error-2.svg"
curl -s "https://www.figma.com/api/mcp/asset/72224217-33af-4dc1-b089-c73267714754" -o "$DIR/ai.svg"
curl -s "https://www.figma.com/api/mcp/asset/6c6b8e2b-8275-4093-932f-56f2ec843c61" -o "$DIR/info-purple.svg"
curl -s "https://www.figma.com/api/mcp/asset/9420e71d-33fd-45f2-8d0a-17fae2bdc827" -o "$DIR/dc-icon-hover.svg"
curl -s "https://www.figma.com/api/mcp/asset/ff16720a-948e-458d-9fff-3310c91db783" -o "$DIR/checkbox-empty.svg"
curl -s "https://www.figma.com/api/mcp/asset/fb48ce32-2494-46f3-8628-1341f855ef81" -o "$DIR/checkbox-filled.svg"
curl -s "https://www.figma.com/api/mcp/asset/2285b5f6-7ac6-4261-bf9c-9ccde31131d6" -o "$DIR/checkbox-small.svg"
curl -s "https://www.figma.com/api/mcp/asset/6c8e26d5-0c8a-4266-bd50-1f426aaad025" -o "$DIR/checkbox-filled-small.svg"
curl -s "https://www.figma.com/api/mcp/asset/26695e18-b882-4bd3-97eb-1e94421de5e8" -o "$DIR/send-active.svg"
curl -s "https://www.figma.com/api/mcp/asset/9e167f21-9a0b-42c5-a28d-ea6255c1656f" -o "$DIR/send-disabled.svg"
curl -s "https://www.figma.com/api/mcp/asset/a51bfcb2-2ea8-4573-b7e4-c673dbdfbd40" -o "$DIR/plus-small.svg"
curl -s "https://www.figma.com/api/mcp/asset/3c18ea26-8635-4d0a-82a0-83650dc1e71d" -o "$DIR/mic-small.svg"

echo "✅ All 13 icons downloaded"
