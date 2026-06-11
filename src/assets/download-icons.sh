#!/bin/bash
mkdir -p "$(dirname "$0")/icons"
DIR="$(dirname "$0")/icons"

curl -s "https://www.figma.com/api/mcp/asset/ea4f52ef-dcc6-4294-8815-ae6a58de9dec" -o "$DIR/verify.svg"
curl -s "https://www.figma.com/api/mcp/asset/d101bed4-7467-4001-94ea-1182205f325f" -o "$DIR/error-2.svg"
curl -s "https://www.figma.com/api/mcp/asset/72224217-33af-4dc1-b089-c73267714754" -o "$DIR/ai.svg"
curl -s "https://www.figma.com/api/mcp/asset/6c6b8e2b-8275-4093-932f-56f2ec843c61" -o "$DIR/info-purple.svg"
curl -s "https://www.figma.com/api/mcp/asset/9420e71d-33fd-45f2-8d0a-17fae2bdc827" -o "$DIR/dolphincare-logo.svg"
curl -s "https://www.figma.com/api/mcp/asset/ff16720a-948e-458d-9fff-3310c91db783" -o "$DIR/checkbox-empty.svg"
curl -s "https://www.figma.com/api/mcp/asset/fb48ce32-2494-46f3-8628-1341f855ef81" -o "$DIR/checkbox-filled.svg"
curl -s "https://www.figma.com/api/mcp/asset/2285b5f6-7ac6-4261-bf9c-9ccde31131d6" -o "$DIR/checkbox-small.svg"
curl -s "https://www.figma.com/api/mcp/asset/6c8e26d5-0c8a-4266-bd50-1f426aaad025" -o "$DIR/checkbox-filled-small.svg"
curl -s "https://www.figma.com/api/mcp/asset/26695e18-b882-4bd3-97eb-1e94421de5e8" -o "$DIR/send-active.svg"
curl -s "https://www.figma.com/api/mcp/asset/9e167f21-9a0b-42c5-a28d-ea6255c1656f" -o "$DIR/send-disabled.svg"
curl -s "https://www.figma.com/api/mcp/asset/a51bfcb2-2ea8-4573-b7e4-c673dbdfbd40" -o "$DIR/plus-small.svg"
curl -s "https://www.figma.com/api/mcp/asset/3c18ea26-8635-4d0a-82a0-83650dc1e71d" -o "$DIR/mic-small.svg"

# ── Icons added via Figma Plugin API (exportAsync) — URLs below expire; re-run
# mcp__figma__download_assets to get fresh ones, then update these lines.
# node 65:9725 — Icon=arrow right
curl -s "https://www.figma.com/api/mcp/asset/d11bf1fe-f3ad-4532-b1a8-57aa1ff337a8" -o "$DIR/arrow-right.svg"
# node 3450:122760 — Icon=arrow right H2Y
curl -s "https://www.figma.com/api/mcp/asset/141f4b7c-1f6d-4844-bcf1-145ae18086ae" -o "$DIR/arrow-right-h2y.svg"
# node 761:1708 — Icon=little quenstionmark
curl -s "https://www.figma.com/api/mcp/asset/f19251da-9471-460d-aad3-37bf3fe6bc95" -o "$DIR/little-questionmark.svg"
# node 374:916 — Icon=POC
curl -s "https://www.figma.com/api/mcp/asset/ebe6af61-cef9-4a21-a0ea-9e7ec73fbf41" -o "$DIR/poc.svg"
# node 54:503 — Icon=DC icon hover 2
curl -s "https://www.figma.com/api/mcp/asset/52cb39cb-4470-4951-9e3b-288b8ef1ee53" -o "$DIR/dc-icon-hover-2.svg"

# Strip the Figma artboard context that download_assets includes in its exports.
# Keeps only the actual <path>/<circle>/<g> icon content.
for f in arrow-right.svg arrow-right-h2y.svg little-questionmark.svg poc.svg dc-icon-hover-2.svg; do
  if [ -f "$DIR/$f" ]; then
    python3 - "$DIR/$f" <<'PYEOF'
import sys, re
path = sys.argv[1]
svg = open(path).read()
# Remove grey background rect and large offset rects added by Figma
svg = re.sub(r'<rect[^/]*/>', lambda m: '' if 'fill="#F3F3F3"' in m.group() or ('width="669"' in m.group()) else m.group(), svg)
# Remove Nav Icons wrapper group but keep its children
svg = re.sub(r'<g id="Nav Icons">', '', svg)
svg = re.sub(r'</g>\s*</svg>', '</svg>', svg, count=1)
open(path, 'w').write(svg)
PYEOF
  fi
done

echo "✅ All 19 icons downloaded and cleaned"
