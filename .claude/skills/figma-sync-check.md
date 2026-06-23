# Figma Sync Check Skill

Use this skill when the user types `/figma-sync-check [ComponentName]` or asks to compare a component against the Figma design.

Compares a coded component against its Figma counterpart and reports any visual or structural differences.

---

## Step 0 — Get the component name

If the user didn't provide a name, ask: **"Which component would you like to check?"**

---

## Step 1 — Find the Figma node

Use the style guide reference from `.claude/skills/style-guide-sync.md`:
- Figma file key: `PxJWC0CTQkrrQtb39uP08N`
- Base URL: `https://www.figma.com/design/PxJWC0CTQkrrQtb39uP08N/Design-System-DolphinCare`

Use `get_design_context` or `get_metadata` to locate the component by name in the Figma file.
If multiple matches are found, show the list and ask the user which one to check against.

---

## Step 2 — Read the code

Read the component file at `src/components/[Name]/[Name].jsx`.

---

## Step 3 — Compare

Check for differences between Figma and code across these dimensions:

| Dimension | What to check |
|-----------|--------------|
| **Colors** | Background, text, border colors — do Tailwind token classes match Figma fill/stroke values? |
| **Typography** | Font family, size, weight, line height |
| **Spacing** | Padding, gap, margin values |
| **Border radius** | Corner radius values |
| **Variants** | Do all Figma variants (states, sizes, types) exist as props in the component? |
| **Icons** | Are the correct icons used? Check against NavIcon.jsx |
| **Structure** | Does the layout/hierarchy match Figma (flex direction, alignment, nesting)? |

---

## Step 4 — Report

```
FIGMA SYNC CHECK — [ComponentName]
===================================

✅ Matches:
  - Colors: primary bg matches dc:bg-purple ✓
  - Border radius: dc:rounded-rounded matches 100px ✓

⚠️  Differences found:
  - Typography: Figma uses 14px/semibold, code uses dc:text-sm/dc:font-medium
  - Missing variant: Figma has a "warning" state, code does not
  - Spacing: Figma gap is 12px, code uses dc:gap-gap8 (8px)

❓ Cannot verify:
  - Hover state (Figma shows prototype, not static — manual check needed)
```

---

## Step 5 — Offer to fix

Ask: **"Would you like me to update the component to match Figma?"**

If yes, fix each difference. Always follow the Tailwind rules from `.claude/skills/new-component.md` — no hardcoded values.

**Never update Figma from this skill.** If you find the code is correct and Figma is wrong, flag it to the user and suggest using `/style-guide-sync` to push the fix to Figma.

End with 🎉✅ when complete.
