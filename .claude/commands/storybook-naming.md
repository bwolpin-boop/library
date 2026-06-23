# Storybook Naming Convention Skill

When creating or updating any Storybook story title, **always prefix it with the matching emoji from the Figma page name**. The emoji + spacing must match exactly as it appears in Figma.

## Rules
- Story titles do NOT include a `Components/` root prefix — the emoji is the root
- The emoji prefix IS the section root — do NOT add the Figma page name (e.g. "Tabs & Tags") as an extra folder level
- For a **standalone component** (not grouped in a section with sub-components): `'<emoji> <ComponentName>'` for variants, `'<emoji> <ComponentName>/Overview'` for overview
- For a **section with sub-components** (e.g. Ribbon containing H2YLetters, H2YSequence, Ribbon): use `'<emoji> <Section>/<ComponentName>'` for each component. Never use "Variants" as a folder name — the component's own name IS the folder.
- Examples:
  - `title: '🟢   📮 Category Tag'` ✅ (standalone)
  - `title: '🟢   🎀 Ribbon/Ribbon'` ✅ (Ribbon component inside Ribbon section)
  - `title: '🟢   🎀 Ribbon/H2YLetters'` ✅ (sub-component inside Ribbon section)
  - `title: '🟢   🎀 Ribbon/Variants'` ❌ (never use "Variants" as a folder name)
- The spacing between the green circle and the second emoji is 3 spaces (matching Figma exactly)

## Figma Page → Storybook Prefix Mapping

| Component | Figma Page Name | Storybook Prefix |
|---|---|---|
| Button, Link, Link 2, Standard | `🟢   🆗 Buttons` | `🟢   🆗 ` |
| Logo | `🟢   💜 Logo` | `🟢   💜 ` |
| Icons, Indicator Dolphin, Nav Icons, Source Type Icons | `🟢   😂 Icons` | `🟢   😂 ` |
| Source Type Tabs | `🟢   📮 Tabs & Tags` | `🟢   📮 ` |
| Tabs, Tags | `🟢   📮 Tabs & Tags` | `🟢   📮 ` |
| Sub Menu | `🟢   🍓 Sub Menu` | `🟢   🍓 ` |
| Nav Menu | `🟢   ☰ Nav menu` | `🟢   ☰ ` |
| Table | `🟢   🏓 Table` | `🟢   🏓 ` |
| Calendar | `🟢   🗓 calendar` | `🟢   🗓 ` |
| Ribbon | `🟢   🎀 Ribbon` | `🟢   🎀 ` |
| Tooltips, Toasts | `🟢   🏷 Tooltips & toasts` | `🟢   🏷 ` |
| Comments, Agent | `🟢   💬 comments and agent` | `🟢   💬 ` |
| IPA Components | `🟢   💊 IPA components` | `🟢   💊 ` |
| Empty States | `🟢   🪹 empty states` | `🟢   🪹 ` |
| Labels | `🟢   ✒️ Labels` | `🟢   ✒️ ` |
| Dashboard | `🟢   ☰ dashboard` | `🟢   ☰ ` |
| Text Fields | `🟠   🍃  fields` | `🟠   🍃 ` |
| Status | `🟢   📮 Tabs & Tags` | `🟢   📮 ` |
| Sources | `🟠   📁 sources` | `🟠   📁 ` |
| Illustrations | `🟢   🎁 Illustrations` | `🟢   🎁 ` |

## When a new component doesn't match any page
Ask the user which Figma page the component belongs to before creating stories.

## Example story title
```js
export default {
  title: '🟢   😂 Icon/Nav Icons/Overview',
  ...
}
```
