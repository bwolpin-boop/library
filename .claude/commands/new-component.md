# New Component Skill

Use this skill when the user asks to create a new component, or types `/new-component [ComponentName]`.

---

## Step 0 — Get the component name

If the user didn't provide a name, ask: **"What should the component be called?"**
Use PascalCase (e.g. `StatusBadge`, `PatientCard`).

---

## Step 1 — Identify the Figma page (for Storybook naming)

Check `.claude/skills/storybook-naming.md` to find which Figma page this component belongs to, and get the correct emoji prefix for the story title.

If the component doesn't match any existing page, ask the user: **"Which Figma page does this component belong to?"** before continuing.

---

## Step 2 — Read the style guide

Read `style-guide.md` — this is the source of truth for all tokens. All Tailwind classes must use token-mapped values (e.g. `dc:bg-purple`, `dc:text-primary`, `dc:rounded-box`). Never hardcode hex colors, raw pixel sizes, or font names.

---

## Step 3 — NavIcon audit (if the component uses icons)

If the component design includes any icons, follow the NavIcon audit from `.claude/skills/style-guide-sync.md` before writing any code:
1. Scan the Figma design for icon nodes
2. Cross-check every icon against `src/components/Icon/NavIcon.jsx`
3. Export and register any missing icons before continuing
4. Never substitute an approximate icon — always export the real one from Figma

---

## Step 4 — Create the component file

**Path:** `src/components/[Name]/[Name].jsx`

### Styling rules
- Use **`className`** with Tailwind classes — never use the `style` prop or inline style objects
- All classes must have the **`dc:` prefix** — e.g. `dc:flex`, `dc:bg-purple`, `dc:text-sm`
- Use token-mapped class names from `src/index.css`:
  - Colors: `dc:bg-purple`, `dc:text-primary`, `dc:border-divider-subtle`
  - Typography: `dc:font-montserrat`, `dc:text-sm`, `dc:font-semibold`
  - Spacing: `dc:gap-gap8`, `dc:px-gap24`, `dc:py-gap12`
  - Radius: `dc:rounded-box`, `dc:rounded-rounded`, `dc:rounded-icon`
- Use Tailwind state variants where possible: `dc:hover:bg-purple-hover`, `dc:disabled:bg-disabled`, `dc:disabled:cursor-not-allowed`
- For complex interactive states (pressed, active) that Tailwind can't handle alone, use `useState` + conditional classnames with template literals or `clsx`

### Structure pattern
```jsx
import { useState } from 'react'

export function [Name]({ prop1 = 'default', disabled = false, onClick }) {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      className={`
        dc:inline-flex dc:items-center dc:justify-center
        dc:font-montserrat dc:text-sm dc:font-medium
        dc:rounded-rounded dc:cursor-pointer dc:transition-colors
        ${disabled
          ? 'dc:bg-disabled dc:text-muted dc:cursor-not-allowed'
          : pressed
          ? 'dc:bg-purple-pressed dc:text-white'
          : 'dc:bg-purple dc:text-white dc:hover:bg-purple-hover'
        }
      `}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {/* content */}
    </button>
  )
}
```

### Do NOT import from tokens.js
Tokens are mapped to Tailwind in `src/index.css`. Use the Tailwind classes directly — do not import `colors`, `spacing`, etc. from `../../tokens.js`.

---

## Step 5 — Create the variants story file

**Path:** `src/components/[Name]/[Name].stories.js`

Use the emoji prefix from Step 1. Follow this pattern:

```js
import { [Name] } from './[Name]'

export default {
  title: '[emoji prefix] [Name]',
  component: [Name],
  args: { /* default props */ },
  argTypes: { /* controls */ },
}

export const Default = { args: { /* default variant args */ } }
export const Small   = { args: { /* small variant args */ } }
// Add more named exports for each meaningful variant
```

---

## Step 6 — Create the Overview story file

**Path:** `src/components/[Name]/[Name]Overview.stories.jsx`

The Overview shows all variants in a visual grid — states as rows, sizes/types as columns. Follow the card/grid layout pattern from `ButtonOverview.stories.jsx`.

Title must be: `'[emoji prefix] [Name]/Overview'`

Must export: `export const Overview = { render: () => ( ... ) }`

The Overview story itself may use inline styles for layout (the grid, cards, labels) — Tailwind is for the components, not the story wrapper.

---

## Step 7 — Add export to src/index.js

Add a named export to `src/index.js`:

```js
export { [Name] } from './components/[Name]/[Name]'
```

Group it near similar components.

---

## Step 8 — Update AllComponents.stories.jsx

Follow `.claude/skills/all-components-overview.md`:

```js
// Add import at top:
import { Overview as _[Name] } from './[Name]/[Name]Overview.stories.jsx'

// Add export at bottom:
export const [Name] = { ..._[Name], name: '[emoji] [Name]' }
```

---

## Step 9 — Final check

- [ ] Component uses only `className` with `dc:` prefixed Tailwind classes
- [ ] No imports from `tokens.js` in the component file
- [ ] No hardcoded hex values, pixel sizes, or font names
- [ ] Story title uses correct emoji prefix from `storybook-naming.md`
- [ ] Overview story exported and follows grid layout pattern
- [ ] Export added to `src/index.js`
- [ ] `AllComponents.stories.jsx` updated
- [ ] No icons used without first checking NavIcon.jsx

End with 🎉✅ when complete.
