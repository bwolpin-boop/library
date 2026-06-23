# Page Components Skill

Use this skill when the user types `/page-components [PageName]` or `/page-components [Page1] [Page2] ...`.

---

## Multi-page mode

If **more than one page name** is given, do NOT immediately spawn agents. Follow the pre-pass first.

### Pre-pass — find shared sub-components

Before spawning any per-page agents:

1. Run **Phase 2 (discovery)** for every requested page simultaneously — collect the full dependency tree for each page.
2. Flatten all dependency lists and look for any component that appears as a nested dependency on **more than one page**.
3. Present the shared components to the user:

   > "These components are needed by multiple pages and must be created before the parallel work starts:
   > - **SharedComponentA** (used by: calendar, labels)
   > - **SharedComponentB** (used by: calendar, comments)
   > Creating them now in a single pre-pass."

4. Run Phases 3–7 (the full single-page workflow) for each shared component — one at a time, in dependency order among themselves.
5. After the pre-pass completes, mark every shared component as **already exists** so the per-page agents skip them.

### Spawn per-page agents

Only after the pre-pass completes, spawn one sub-agent **per page in parallel**. Each agent receives:

- The single page name it is responsible for
- The full text of this skill file as its instructions
- An explicit list of components already created in the pre-pass: *"Do not create these — they already exist: [list]"*
- The rule: *"Do not create any component that already exists under `src/components/`"*

Wait for all agents to finish, then print a combined summary (created / skipped / failed per page).

---

If only **one page name** is given, skip directly to the single-page workflow below.

---

## Single-page workflow

### Phase 1 — Locate the Figma page

Use `use_figma` to list all pages in the file and find the one whose name matches (case-insensitive) the page name the user supplied.

```js
const pages = figma.root.children;
return pages.map(p => ({ id: p.id, name: p.name }));
```

If no match is found, ask the user to confirm the exact page name before continuing.

---

### Labels and context elements — do NOT create stories for these

Figma pages sometimes contain standalone text labels, annotation frames, or title cards that give context to the designer but are not real UI components (e.g. "Assign to nurse", section headings, callout boxes). These are identifiable because they:
- Are plain text or simple frames with no variant properties
- Have names like "label", "title", "note", or are just descriptive strings
- Are not instances and have no interactive states

**Skip these entirely** — do not create a component file, story, or export for them.

---

### Phase 2 — Discover all components on the page

Use `use_figma` on the matched page to:

1. Collect every **top-level frame** — these are the candidate components to build.
2. For every node anywhere in the page tree that is an **INSTANCE**, read its `mainComponent` — this is the "go to main component" check.

```js
await figma.setCurrentPageAsync(page);

const topLevel = page.children.filter(n => n.type === 'FRAME' || n.type === 'COMPONENT');

const instances = page.findAllWithCriteria({ types: ['INSTANCE'] });
const nestedMains = instances
  .map(i => i.mainComponent)
  .filter(Boolean)
  .map(c => ({ id: c.id, name: c.name, parentPage: c.parent?.name }));

return { topLevel: topLevel.map(n => ({ id: n.id, name: n.name })), nestedMains };
```

---

### Phase 3 — Identify what already exists

For each component name discovered (both top-level and nested mains):

- Check `src/components/[Name]/[Name].jsx` — file exists?
- Check `src/index.js` — named export present?

Mark each as **exists** or **missing**.

---

### Phase 4 — Ask about nested main components

For each nested main component that is **missing** from the codebase AND is **not** part of the NavIcons / icon set (i.e. not on the `🟢   😂 Icons` page):

Ask the user:

> "I found **[ComponentName]** nested inside **[ParentComponent]**. It has its own main component in Figma (on page: [parentPage]). Should I create it as an independent component first?
> - **yes** — create it before [ParentComponent]
> - **no** — skip it (inline the design instead)
> - **later** — I'll handle it in a separate /page-components run"

Wait for confirmation on all of them before proceeding. Do not assume — always ask.

---

### Phase 5 — Audit missing icons

Before writing any code, scan every component on the page for icon usage:

1. Find all instances whose `mainComponent` lives on the Icons page (`🟢   😂 Icons`).
2. Cross-check each icon name against the `const icons = { ... }` map in `src/components/Icon/NavIcon.jsx`.
3. List every missing icon.

#### Variant families — always ask before importing

When a missing icon is a **numbered variant** of a logical family (e.g. `Icon=profile person 3` implies `profile person 1` and `profile person 2` exist), check the parent COMPONENT_SET for sibling variants with the same name prefix. Then ask:

> "**[IconName]** is variant 3 of the **[family]** set. There are also: [variant 1], [variant 2]. Do you want me to import all of them, or only the one that's used?"

Never assume — always ask the user before importing extra variants. They may want the full family or only the specific variant.

If any icons are missing:

> "The following icons are used on this page but are not yet in NavIcon.jsx: [list]. I'll add them now before creating any components."

Follow `.claude/skills/download-figma-svg.md` for each missing icon. Register all of them in NavIcon.jsx and NavIcon.stories.js **before** creating any component file. Verify with `ls src/assets/icons/`.

---

### Phase 6 — Build the creation order (topological sort)

Assign each component to a tier:

- **Tier 1 — Atoms**: no dependencies on other missing components (only uses icons, tokens, HTML)
- **Tier 2 — Molecules**: depends only on Tier 1 components
- **Tier 3 — Organisms**: depends on Tier 1 and/or Tier 2
- …continue as needed

Present the full plan to the user before starting:

```
📋 Creation plan for [PageName]:

Tier 1 (atoms, no deps):
  • ComponentA
  • ComponentB

Tier 2 (uses Tier 1):
  • ComponentC  →  uses ComponentA, ComponentB

Tier 3 (uses Tier 1+2):
  • ComponentD  →  uses ComponentB, ComponentC

Already in codebase (skip):
  • ComponentE
  • ComponentF

Awaiting your decision:
  • ComponentG  (nested main, asked in Phase 4)

Proceed? (yes / adjust)
```

Wait for confirmation before starting Phase 7.

---

### Phase 7 — Create each component in order

Work through each tier in order. For every component:

1. Follow `.claude/skills/new-component.md` exactly — all steps 0–9.
2. When importing sub-components inside a composite, **always import from the already-created component file**, not inline/duplicated JSX:
   ```jsx
   import { ComponentA } from '../ComponentA/ComponentA.jsx'
   import { ComponentB } from '../ComponentB/ComponentB.jsx'
   ```
3. After each component is created, **verify before moving on**:
   ```bash
   ls src/components/[Name]/[Name].jsx src/components/[Name]/[Name].stories.js
   grep -n "[Name]" src/index.js
   ```
   If any check fails, stop and report the error. Do **not** proceed to the next component until it is resolved.

---

### Phase 8 — Final summary

Print a table:

```
✅ Created:   ComponentA, ComponentB, ComponentC, ComponentD
⏭️  Skipped:   ComponentE, ComponentF  (already existed)
⚠️  Deferred:  ComponentG  (user chose "later")
❌ Failed:    —
```

End with 🎉✅
