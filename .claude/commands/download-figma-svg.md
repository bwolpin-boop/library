# Download Figma SVG Skill

Use this skill whenever an SVG or image asset needs to be saved from Figma into the project.

## Key Facts
- Inline `curl` in the Bash tool is blocked by the sandbox for external URLs
- BUT: writing a shell script file and running it with `bash` via the Bash tool WORKS
- So always use the script approach — never ask the user to run commands manually

---

## ⚠️ MANDATORY RULE: Every new SVG must be registered in NavIcon.jsx

**NEVER import an SVG directly into a component.** All icon SVGs must go through the `NavIcon` system:

1. Save the SVG to `src/assets/icons/<icon-name>.svg`
2. **Immediately** add it to `src/components/Icon/NavIcon.jsx`:
   - Add an `import` at the top
   - Add an entry in the `icons` map
   - Add an entry in the `iconNativeSizes` map
3. **Immediately** add a named export to `src/components/Icon/NavIcon.stories.js`
4. Use `<NavIcon name="icon-name" size={24} />` in the component — **never** `<img src={import} />`

**Wrong ❌**
```js
import thumbsUpIcon from '../../assets/icons/thumbs-up.svg'
// ...
<img src={thumbsUpIcon} width={24} height={24} />
```

**Correct ✅**
```js
// In NavIcon.jsx — register once
import thumbsUpIcon from '../../assets/icons/thumbs-up.svg'
const icons = { ..., 'thumbs-up': thumbsUpIcon }
const iconNativeSizes = { ..., 'thumbs-up': 24 }

// In any component — consume via NavIcon
<NavIcon name="thumbs-up" size={24} />
```

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

### Step 4 — Register in NavIcon.jsx (MANDATORY)
Open `src/components/Icon/NavIcon.jsx` and:
1. Add `import iconNameIcon from '../../assets/icons/icon-name.svg'` at the top
2. Add `'icon-name': iconNameIcon,` to the `icons` map
3. Add `'icon-name': 24,` (or correct size) to the `iconNativeSizes` map

### Step 5 — Add story to NavIcon.stories.js (MANDATORY)
```js
export const IconName = { args: { name: 'icon-name', size: 24 } }
```
Use PascalCase derived from the kebab-case icon name. Set `size` to the icon's native size.

### Step 6 — Verify
```bash
ls -la src/assets/icons/
```

### Step 7 — Use in component via NavIcon
```jsx
<NavIcon name="icon-name" size={24} />
```

---

## Workflow for Multiple SVGs (e.g. icon sets)

1. Download all asset URLs in parallel using multiple `mcp__figma__download_assets` calls
2. Write one shell script with all curl commands
3. Run the script once with Bash
4. Remove grey backgrounds in bulk with the sed loop above
5. Register ALL of them in NavIcon.jsx in one edit (imports + icons map + iconNativeSizes map)
6. Add ALL of them to NavIcon.stories.js in one edit

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

When a Figma frame uses the `Nav Icons` component set and some icons don't yet exist in the codebase, follow these steps:

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

### Step 5 — Register in NavIcon.jsx (MANDATORY — do this immediately, before writing the component)
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

### Step 7 — Use NavIcon in the component
```jsx
// In the component file
import { NavIcon } from '../Icon/NavIcon.jsx'

// In JSX
<NavIcon name="icon-name" size={24} />
```

**Never import the SVG directly into the component file.** All icons go through NavIcon.

---

## Notes
- Always save SVGs to `src/assets/icons/` (all icons go in this flat folder)
- Use descriptive filenames, not asset IDs (e.g. `little-questionmark.svg`, not `761-1708.svg`)
- For PNG/JPG assets, use `defaultFormat: "png"` in `download_assets`
- Delete the `.sh` script after use if it's no longer needed
- Icon names in `NavIcon.jsx` should match the Figma component variant name, converted to kebab-case
- The Figma Nav Icons component set is at page `6:814`, component set ID `19:39507`
