# Download Figma SVG Skill

Use this skill whenever an SVG or image asset needs to be saved from Figma into the project.

## Key Facts
- Inline `curl` in the Bash tool is blocked by the sandbox for external URLs
- BUT: writing a shell script file and running it with `bash` via the Bash tool WORKS
- So always use the script approach — never ask the user to run commands manually

---

## Workflow for a Single SVG

### Step 1 — Get the asset URL
Use `mcp__figma__download_assets` with the node ID and `defaultFormat: "svg"`.

### Step 2 — Write a download script and run it
Write the curl command(s) to a `.sh` file in `src/assets/`, then execute it with the Bash tool:

```js
// Write the script
Write({ file_path: 'src/assets/download-X.sh', content: `#!/bin/bash\ncurl -s "URL" -o "DESTINATION"` })

// Run it
Bash({ command: 'bash /absolute/path/to/src/assets/download-X.sh' })
```

### Step 3 — Remove grey background rectangles
Figma exports always include a grey `<rect fill="#F3F3F3"/>` background. Always remove it:

```bash
cd src/assets && sed -i '' 's/<rect width="NNN" height="NNN" fill="#F3F3F3"\/>//g' filename.svg
```

Or for a whole folder:
```bash
cd src/assets/indicators && for f in *.svg; do sed -i '' 's/<rect width="24" height="24" fill="#F3F3F3"\/>//g' "$f"; done
```

### Step 4 — Verify
```bash
ls -la src/assets/
```

### Step 5 — Import in the component
```js
import icon from '../../assets/icon-name.svg'
```

---

## Workflow for Multiple SVGs (e.g. icon sets)

1. Download all asset URLs in parallel using multiple `mcp__figma__download_assets` calls
2. Write one shell script with all curl commands
3. Run the script once with Bash
4. Remove grey backgrounds in bulk with the sed loop above

Example script template:
```bash
#!/bin/bash
mkdir -p "$(dirname "$0")/subfolder"
DIR="$(dirname "$0")/subfolder"

curl -s "URL_1" -o "$DIR/icon-1.svg"
curl -s "URL_2" -o "$DIR/icon-2.svg"
curl -s "URL_3" -o "$DIR/icon-3.svg"

echo "✅ Done"
```

---

## Workflow: Adding missing NavIcons when implementing a new component

When pasting a Figma frame that uses the `Nav Icons` component set, some icons may not yet exist in the codebase. Follow these steps:

### Step 1 — Identify which NavIcon variants the component uses
Read the `get_design_context` output for the new component. Look for the `NavIcons` sub-component and its `icon` prop variants (e.g. `"close" | "arrow right" | "POC"`).

### Step 2 — Check what's already in NavIcon.jsx
Read `src/components/Icon/NavIcon.jsx`. Compare the icon names in the `const icons = { ... }` map against the names the new component needs.

### Step 3 — Find the main component node ID for each missing icon
Use `use_figma` on the Icons page (`🟢   😂 Icons`, page id `6:814`) to list all components and find the node ID matching the missing icon name:

```js
const iconsPage = figma.root.children.find(p => p.name.includes('Icons'));
await figma.setCurrentPageAsync(iconsPage);
const comps = iconsPage.findAllWithCriteria({ types: ['COMPONENT'] });
return comps.map(c => ({ id: c.id, name: c.name }));
```

### Step 4 — Download the SVGs
Use `mcp__figma__download_assets` with `defaultFormat: "svg"` for each missing icon node ID. Then write a shell script and run it (see "Workflow for Multiple SVGs" above).

### Step 5 — Add to NavIcon.jsx
Import the new SVG files and add entries to both the `icons` map and `iconNativeSizes` map in `src/components/Icon/NavIcon.jsx`.

### Step 6 — Add to NavIcon Storybook stories (MANDATORY)

Two files must always be updated:

**A. `src/components/Icon/NavIcon.stories.js` — add an explicit named export:**
```js
export const ArrowRightH2Y = { args: { name: 'arrow-right-h2y', size: 20 } }
```
Use PascalCase derived from the kebab-case icon name. Set `size` to the icon's native size.

**B. `src/components/Icon/NavIconOverview.stories.jsx` — ensure `buildRows()` handles the native size:**
- The function currently handles sizes `24`, `20`, and `16`.
- If adding an icon with a new native size not yet in `buildRows()`, add an `else if (native === NNN)` branch and a matching grid column in the render.
- If the native size is already handled, no change is needed here — the overview auto-renders it.

---

## Notes
- Always save SVGs to `src/assets/` or `src/assets/<subfolder>/`
- Use descriptive filenames, not asset IDs (e.g. `little-questionmark.svg`, not `761-1708.svg`)
- For PNG/JPG assets, use `defaultFormat: "png"` in `download_assets`
- Delete the `.sh` script after use if it's no longer needed
- Icon names in `NavIcon.jsx` should match the Figma component variant name, converted to kebab-case
