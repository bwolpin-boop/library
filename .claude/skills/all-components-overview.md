# All Components Overview — Keep the Top-Level Index in Sync

Every component overview must appear in `src/components/AllComponents.stories.jsx`.
This file is the "🗂️ All Components" folder in Storybook — it sorts to the top because
the 🗂️ emoji precedes 🟢/🟠 alphabetically.

## Rule

**Whenever you create a new component**, you MUST also update `AllComponents.stories.jsx`:

1. Add an import for the new `Overview` export from the component's `*Overview.stories.jsx` file.
2. Add a named export entry at the bottom of the file that spreads the overview and gives it a display name.

## Pattern

```js
// 1. Import (add near the other imports, grouped by component family)
import { Overview as _MyComponent } from './MyFolder/MyComponentOverview.stories.jsx'

// 2. Export (add at the bottom)
export const MyComponent = { ..._MyComponent, name: '🔵 MyComponent' }
```

Use the same emoji as the component's Storybook section (check the `title:` in the Overview story file).

## Current file location

`src/components/AllComponents.stories.jsx`

## How to check for gaps

Run this to list every `*Overview.stories.*` file that exports `Overview`:

```bash
grep -rn "^export const Overview" src --include="*Overview.stories.*" | awk -F: '{print $1}'
```

Then compare against the imports already in `AllComponents.stories.jsx`. Any file not imported there is a gap — add it.

## Example entry

```js
import { Overview as _RibbonStates } from './Ribbon/RibbonStatesOverview.stories.jsx'
// ...
export const RibbonStates = { ..._RibbonStates, name: '🎀 RibbonStates' }
```
