# Story Check Skill

Use this skill when the user types `/story-check` or asks to verify that all components have proper Storybook stories.

Audits every component in `src/components/` and checks that nothing is missing from Storybook.

---

## What a complete component needs

For each component folder in `src/components/`, verify:

| File | Required? | Notes |
|------|-----------|-------|
| `[Name].jsx` | ✅ The component itself | — |
| `[Name].stories.js` | ✅ Variants story | Must have at least a `Default` export |
| `[Name]Overview.stories.jsx` | ✅ Overview story | Must export `Overview` |
| Entry in `src/index.js` | ✅ Public export | `export { [Name] } from './components/[Name]/[Name]'` |
| Entry in `AllComponents.stories.jsx` | ✅ Top-level index | Import + named export |

---

## Process

1. List all folders in `src/components/` (skip `AllComponents.stories.jsx` — it's not a component folder)
2. For each component folder, check for each required file/entry above
3. Read `src/index.js` and check for the component's export
4. Read `src/components/AllComponents.stories.jsx` and check for the component's import and export

---

## Output format

```
STORY CHECK REPORT
==================

✅ Complete components: [list]

⚠️  Components with gaps:

Button
  ✅ Button.jsx
  ✅ Button.stories.js
  ✅ ButtonOverview.stories.jsx
  ✅ src/index.js export
  ❌ Missing from AllComponents.stories.jsx

CategoryTag
  ✅ CategoryTag.jsx
  ❌ Missing CategoryTagOverview.stories.jsx
  ✅ CategoryTag.stories.js
  ✅ src/index.js export
  ✅ AllComponents.stories.jsx

SUMMARY: X complete, Y have gaps
```

---

## After reporting

Ask: **"Would you like me to create the missing files now?"**

If yes:
- For missing story files, follow the patterns in `.claude/skills/new-component.md` and reference existing stories like `ButtonOverview.stories.jsx`
- For missing `src/index.js` exports, add them
- For missing `AllComponents.stories.jsx` entries, follow `.claude/skills/all-components-overview.md`
- Always use the correct emoji prefix from `.claude/skills/storybook-naming.md`

End with 🎉✅ when complete.
