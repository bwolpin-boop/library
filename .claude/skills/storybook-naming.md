# Storybook Naming Convention Skill

When creating or updating any Storybook story title, **always prefix it with the matching emoji from the Figma page name**. The emoji + spacing must match exactly as it appears in Figma.

## Rules
- Story titles do NOT include a `Components/` root prefix — the emoji is the root
- Format: `'<emoji> <ComponentName>/<SubFolder>'`
- Example: `title: '🟢   🆗 Button/Primary'`
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
