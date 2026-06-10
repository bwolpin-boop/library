#!/bin/bash
curl -s "https://www.figma.com/api/mcp/asset/d89cbebc-c00f-4aeb-bafe-05da8b99400b" -o "/Users/batshevamandel/Documents/component-library-dolphincare/src/assets/icons/close.svg"
sed -i '' 's/<rect width="24" height="24" fill="#F3F3F3"\/>//g' "/Users/batshevamandel/Documents/component-library-dolphincare/src/assets/icons/close.svg"
echo "✅ Close icon downloaded"
