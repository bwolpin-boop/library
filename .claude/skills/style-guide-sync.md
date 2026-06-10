# Style Guide Sync Skill

Use this skill when:
- Starting work on any new component
- The user asks to sync the style guide
- A deviation from the style guide is being considered
- The user types `/style-guide-sync`

---

## The Three Connected Files

All three must stay in sync. They all represent the same design system from different angles:

| File | Purpose | Changes when |
|---|---|---|
| `style-guide.md` | Human-readable reference — what are the tokens? | Any token value changes or is added |
| `src/tokens.js` | Code implementation — components import this | Any token value changes or is added |
| `.claude/skills/figma-variables.md` | Figma script lookup — variable IDs for `use_figma` calls | A variable is **added or deleted** in Figma (IDs never change when values change) |

**Rule: always update all relevant files together. Never update one without checking the others.**

---

## Figma Style Guide

File key: `PxJWC0CTQkrrQtb39uP08N`
Node ID: `3367:154`
URL: https://www.figma.com/design/PxJWC0CTQkrrQtb39uP08N/Design-System-DolphinCare?node-id=3367-154

---

## Sync Directions

### Before asking always clarify: which direction?
Before any sync, ask the user: **"Are we syncing Figma → code, or code → Figma?"**

### Direction 1: Figma → code (Figma was updated, code needs to catch up)
1. Read Figma style guide node using `get_design_context` (nodeId `3367:154`)
2. Compare changed values against `style-guide.md`
3. Update `style-guide.md` with new values
4. Update `src/tokens.js` with the same values
5. If a brand new variable was added in Figma: also add its ID to `.claude/skills/figma-variables.md`
6. Check if any existing components use the changed token — flag to user if they need visual review

### Direction 2: Code → Figma (code was updated, Figma needs to catch up)
1. Read `style-guide.md` to confirm the new/changed token
2. Update `src/tokens.js` if not already done
3. Ask the user before writing to Figma
4. Load `.claude/skills/figma-variables.md` to get the correct variable ID
5. Use `use_figma` to update the variable value in Figma (bind using variable ID, never hardcode)
6. Update `style-guide.md` to reflect the change

### Direction 3: New token added (doesn't exist yet anywhere)
1. Ask the user: what should the token be named and what value?
2. Add to `style-guide.md`
3. Add to `src/tokens.js`
4. Ask user before creating in Figma
5. Create the variable in Figma using `use_figma`
6. Add the new variable ID to `.claude/skills/figma-variables.md`

---

## Before building any component
1. Read `style-guide.md` — this is the local source of truth
2. Every color, font, radius, and spacing value used must exist as a token in `src/tokens.js`
3. If a value is missing, STOP and ask the user before proceeding

---

## Rules
- Never hardcode a color, font, or radius that exists as a token
- Never update Figma with raw values — always use variable bindings (see `figma-variables.md`)
- Always ask before writing to Figma
- The Tailwind prefix for this project is `dc:` — all Tailwind classes must use it
- Components use inline styles importing from `src/tokens.js` (CSS variables don't resolve in inline styles)
