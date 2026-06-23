# Token Audit Skill

Use this skill when the user types `/token-audit` or asks to check for hardcoded values in components.

Scans every component file in `src/components/` and reports anything that is hardcoded instead of using Tailwind token classes.

---

## What counts as a violation

| Type | Violation example | Correct Tailwind class |
|------|-------------------|------------------------|
| Hex color | `#A852FF`, `#222222` | `dc:bg-purple`, `dc:text-primary` |
| RGB/RGBA | `rgba(168, 82, 255, 0.1)` | `dc:bg-purple-overlay` |
| Raw font name | `"Montserrat"`, `"Inter"` | `dc:font-montserrat`, `dc:font-inter` |
| Raw font size | `fontSize: '14px'`, `font-size: 12px` | `dc:text-sm`, `dc:text-xs` |
| Raw pixel spacing | `padding: '16px'`, `gap: 8` | `dc:px-gap16`, `dc:gap-gap8` |
| Raw border radius | `borderRadius: '10px'` | `dc:rounded-box` |
| Import from tokens.js | `import { colors } from '../../tokens.js'` | Remove — use Tailwind classes |
| Inline style prop | `style={{ color: '...' }}` | Convert to `className` |

---

## Process

1. Scan all `.jsx` and `.js` files inside `src/components/` (exclude `.stories.` files — story wrappers may use inline styles for layout)
2. For each file, check for:
   - Any `style={{` or `style={` props
   - Any `import` from `tokens.js`
   - Any hex color patterns (`#` followed by 3 or 6 hex characters)
   - Any hardcoded font family strings
   - Any hardcoded pixel values in style context
3. Group results by file
4. For each violation, show:
   - File path
   - Line number
   - The offending code
   - The correct Tailwind replacement

---

## Output format

```
TOKEN AUDIT REPORT
==================

✅ Clean files: [list]

⚠️  Files with violations:

src/components/Button/Button.jsx
  Line 3:  import { colors } from '../../tokens.js'  →  Remove import, use dc: classes
  Line 12: style={{ color: '#A852FF' }}               →  className="dc:text-purple"

src/components/CategoryTag/CategoryTag.jsx
  Line 8:  backgroundColor: colors.purple            →  dc:bg-purple

SUMMARY: X files clean, Y files need updates
```

---

## After reporting

Ask the user: **"Would you like me to fix these now?"**

If yes, fix each violation file by file — convert inline styles to `className` with `dc:` prefixed Tailwind classes, remove `tokens.js` imports. Follow the same rules as `/new-component`.

End with 🎉✅ when complete.
