#!/bin/bash
mkdir -p "$(dirname "$0")/indicators"
DIR="$(dirname "$0")/indicators"

curl -s "https://www.figma.com/api/mcp/asset/500c9cb0-6d23-4943-becf-7d012300c336" -o "$DIR/source-found.svg"
curl -s "https://www.figma.com/api/mcp/asset/da8ec244-ccac-46b2-88ba-7fb870b415cb" -o "$DIR/accepted.svg"
curl -s "https://www.figma.com/api/mcp/asset/69d8028f-0a08-4042-b87e-86b71e9cfb78" -o "$DIR/dismissed.svg"
curl -s "https://www.figma.com/api/mcp/asset/1582150e-b73c-4de7-a836-8f1fd967224b" -o "$DIR/non-applicable.svg"
curl -s "https://www.figma.com/api/mcp/asset/dc96a16b-2123-4615-95c0-668351b543e5" -o "$DIR/indicator-source.svg"
curl -s "https://www.figma.com/api/mcp/asset/dc76ce33-33cc-4e3e-9018-1f7ca09786c9" -o "$DIR/same-as-previous-mds.svg"
curl -s "https://www.figma.com/api/mcp/asset/c3434d3a-865f-41b5-89cb-b694757d050f" -o "$DIR/assessment-needed.svg"
curl -s "https://www.figma.com/api/mcp/asset/8938bf4f-624e-4bfa-af25-d4b049005adc" -o "$DIR/missed.svg"

echo "✅ All 8 indicator SVGs downloaded"
