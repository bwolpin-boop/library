# Figma Variables Skill

**CRITICAL RULE — applies to every single `use_figma` write call:**
Every color, radius, font size, font weight, and spacing value set in Figma MUST be bound to a variable. Never pass raw hex values or pixel numbers directly. Use `setBoundVariableForPaint` for fills/strokes and `setBoundVariable` for number properties. If a value has no variable in the system, stop and ask the user before proceeding.

**ALWAYS use these variable IDs when updating anything in Figma. Never hardcode raw values.**

File key: `PxJWC0CTQkrrQtb39uP08N`

---

## How to use variables in Figma scripts

### Bind a color variable to a fill:
```js
const variable = await figma.variables.getVariableByIdAsync('VariableID:...')
const fill = figma.variables.setBoundVariableForPaint(
  { type: 'SOLID', color: { r: 0, g: 0, b: 0 } },
  'color',
  variable
)
node.fills = [fill]
```

### Bind a number variable to corner radius:
```js
const variable = await figma.variables.getVariableByIdAsync('VariableID:...')
node.setBoundVariable('topLeftRadius', variable)
node.setBoundVariable('topRightRadius', variable)
node.setBoundVariable('bottomLeftRadius', variable)
node.setBoundVariable('bottomRightRadius', variable)
```

### Bind a number variable to width/height/spacing:
```js
const variable = await figma.variables.getVariableByIdAsync('VariableID:...')
node.setBoundVariable('width', variable)
node.setBoundVariable('itemSpacing', variable)
```

---

## Font Family Variables (Numbers collection — STRING type)

| Token | Variable Name | ID |
|---|---|---|
| `fonts.montserrat` | `👨‍👩‍👦 Family/montserrat` | `VariableID:6:782` |
| `fonts.inter` | `👨‍👩‍👦 Family/inter` | `VariableID:27:2854` |

---

## Spacing / Gap Variables (Numbers collection)

| Value | Variable Name | ID |
|---|---|---|
| 0px | `🚀 Spacing/Gap_0` | `VariableID:45:9698` |
| 4px | `🚀 Spacing/Gap_4` | `VariableID:19:34633` |
| 8px | `🚀 Spacing/Gap_8` | `VariableID:6:805` |
| 12px | `🚀 Spacing/Gap_12` | `VariableID:19:34632` |
| 16px | `🚀 Spacing/Gap_16` | `VariableID:6:807` |
| 24px | `🚀 Spacing/Gap_24` | `VariableID:6:808` |
| 32px | `🚀 Spacing/Gap_32` | `VariableID:64:1430` |
| 40px | `🚀 Spacing/Gap_40` | `VariableID:19:34638` |
| 60px | `🚀 Spacing/Gap_60` | `VariableID:438:3703` |

---

## Line Height Variables (Numbers collection)

| Token | Variable Name | ID |
|---|---|---|
| `lineHeights.sm` (18px) | `⛰ Line height/Line height_16` | `VariableID:27:2891` |
| `lineHeights.base` (21px) | `⛰ Line height/Line height_20` | `VariableID:225:7333` |
| 24px | `⛰ Line height/Line height_24` | `VariableID:6:809` |

---

## Stroke Width Variables (Numbers collection)

| Value | Variable Name | ID |
|---|---|---|
| 1px | `⭕ Stroke/Line thin` | `VariableID:438:2904` |
| 1.2px | `⭕ Stroke/Icons` | `VariableID:225:7280` |
| 2px | `⭕ Stroke/Line thick` | `VariableID:225:7391` |

---

## Corner Radius Variables (Numbers collection: `VariableCollectionId:6:781`)

| Token | Variable Name | ID |
|---|---|---|
| `radii.icon` (3px) | `🍕 corners/icons` | `VariableID:225:3477` |
| `radii.boxSm` (4px) | `🍕 corners/boxes small` | `VariableID:374:465` |
| `radii.box` (10px) | `🍕 corners/boxes` | `VariableID:225:7342` |
| `radii.rounded` (100px) | `🍕 corners/Rounded` | `VariableID:225:3476` |

---

## Font Size Variables (Numbers collection)

| Token | Variable Name | ID |
|---|---|---|
| `fontSizes.xxxs` (8px) | `✎ Text/xxxs` | `VariableID:223:820` |
| `fontSizes.xxs` (10px) | `✎ Text/xxs` | `VariableID:3266:239946` |
| `fontSizes.xs` (12px) | `✎ Text/xs` | `VariableID:16:1204` |
| `fontSizes.sm` (14px) | `✎ Text/sm` | `VariableID:16:1203` |
| `fontSizes.base` (16px) | `✎ Text/base` | `VariableID:27:2860` |
| `fontSizes.lg` (20px) | `✎ Text/lg` | `VariableID:227:5570` |
| `fontSizes.xl2` (24px) | `✎ Text/xl2` | `VariableID:16:1202` |
| `fontSizes.xl3` (40px) | `✎ Text/xl3` | `VariableID:1703:8557` |

---

## Font Weight Variables (Numbers collection)

| Token | Variable Name | ID |
|---|---|---|
| `fontWeights.regular` (400) | `🏋 Weight/Regular` | `VariableID:16:1211` |
| `fontWeights.medium` (500) | `🏋 Weight/Medium` | `VariableID:16:1212` |
| `fontWeights.semibold` (600) | `🏋 Weight/Semi Bold` | `VariableID:16:1213` |
| `fontWeights.bold` (700) | `🏋 Weight/Bold` | `VariableID:16:1214` |

---

## Color Variables (Colors collection: `VariableCollectionId:6:784`, modes: light/dark)

### Button Colors
| Token | Variable Name | ID |
|---|---|---|
| `colors.purple` | `🆗 Button/primary` | `VariableID:6:792` |
| `colors.purpleHover` | `🆗 Button/hover` | `VariableID:27:2634` |
| `colors.purplePressed` | `🆗 Button/pressed` | `VariableID:27:2635` |
| `colors.disabled` | `🆗 Button/Disabled` | `VariableID:19:42772` |
| `colors.white` | `🆗 Button/White` | `VariableID:18:653` |
| `colors.purpleTint` | `🆗 Button/white hover` | `VariableID:27:2877` |
| `colors.surfaceHover` | `🆗 Button/grey hover` | `VariableID:225:7762` |
| `colors.surfacePressed` | `🆗 Button/grey pressed` | `VariableID:225:7768` |

### Text Colors
| Token | Variable Name | ID |
|---|---|---|
| `colors.primary` | `✎ Text/primary` | `VariableID:6:789` |
| `colors.secondary` | `✎ Text/secondary` | `VariableID:6:790` |
| `colors.muted` | `✎ Text/Disabled` | `VariableID:27:2717` |
| `colors.white` | `✎ Text/Inverted` | `VariableID:26:1980` |
| `colors.purple` | `✎ Text/Emphasis` | `VariableID:19:1785` |
| `colors.error` | `✎ Text/Error` | `VariableID:19:34623` |

### Stroke Colors
| Token | Variable Name | ID |
|---|---|---|
| `colors.primary` | `⌙ 🦧 Stroke/primary` | `VariableID:6:800` |
| `colors.dividerSubtle` | `⌙ 🦧 Stroke/subtle` | `VariableID:17:403` |
| `colors.dividerDisabled` | `⌙ 🦧 Stroke/Disabled` | `VariableID:27:2718` |
| `colors.purple` | `⌙ 🦧 Stroke/emphasis` | `VariableID:19:34620` |
| `colors.error` | `⌙ 🦧 Stroke/Error` | `VariableID:19:34622` |

### Primitive Colors
| Token | Variable Name | ID |
|---|---|---|
| `colors.purple100` | `💖 Primes/Brand Purple 100` | `VariableID:2399:52110` |
| `colors.purpleTint` | `💖 Primes/Brand Purple 200` | `VariableID:65:9928` |
| `colors.purple` | `💖 Primes/Brand Purple 500` | `VariableID:17:377` |
| `colors.purpleHover` | `💖 Primes/Brand Purple 600` | `VariableID:2607:109302` |
| `colors.purplePressed` | `💖 Primes/Brand Purple 700` | `VariableID:2607:109303` |
| `colors.muted` | `💖 Primes/Grey 600` | `VariableID:27:2720` |
| `colors.dividerDisabled` | `💖 Primes/Grey 500` | `VariableID:27:2721` |
| `colors.dividerSubtle` | `💖 Primes/Grey 400` | `VariableID:17:402` |
| `colors.disabled` | `💖 Primes/Grey 300` | `VariableID:27:2719` |
| `colors.surfacePressed` | `💖 Primes/Grey 200` | `VariableID:77:4871` |
| `colors.surfaceHover` / `surface` | `💖 Primes/Grey 100` | `VariableID:17:397` |
| `colors.background` | `💖 Primes/Grey 000` | `VariableID:2289:16788` |
| `colors.error` | `💖 Primes/Brand Error` | `VariableID:19:34621` |
| `colors.green` | `💖 Primes/BrandGreen 900` | `VariableID:19:42914` |
| `colors.yellow` | `💖 Primes/Yellow 900` | `VariableID:6:786` |
| `colors.blue` | `💖 Primes/Brand Blue` | `VariableID:17:405` |

### Icon Colors
| Semantic use | Variable Name | ID |
|---|---|---|
| Default icon | `😂 icons/Icons_default` | `VariableID:6:796` |
| Secondary icon | `😂 icons/Icons_secondary` | `VariableID:225:7323` |
| Disabled icon | `😂 icons/Icons_Disabled` | `VariableID:19:42915` |
| White icon | `😂 icons/Icons_White` | `VariableID:17:431` |
| Purple icon | `😂 icons/Icons_Purple` | `VariableID:17:429` |
| Blue icon | `😂 icons/Icons_blue` | `VariableID:17:430` |
| Red icon | `😂 icons/Icons_red` | `VariableID:19:42912` |
| Yellow icon | `😂 icons/Icons_yellow` | `VariableID:19:42916` |
| Green icon | `😂 icons/Icons_Green` | `VariableID:19:42913` |

### Background Colors
| Semantic use | Variable Name | ID |
|---|---|---|
| `colors.white` (primary bg) | `🟦 Background/primary` | `VariableID:6:802` |
| `colors.surface` (secondary bg) | `🟦 Background/secondary` | `VariableID:6:803` |
| `colors.surfacePressed` (secondary bg 2) | `🟦 Background/secondary 2` | `VariableID:2399:63671` |
| `colors.background` (tertiary bg) | `🟦 Background/tertiary` | `VariableID:2289:16789` |
| `colors.purple100` (brand 100) | `🟦 Background/Brand 100` | `VariableID:2399:52109` |
| `colors.purpleTint` (brand 200) | `🟦 Background/Brand 200` | `VariableID:2613:136670` |
| Error 100 bg | `🟦 Background/Error 100` | `VariableID:2289:16473` |
| Error 200 bg | `🟦 Background/Error 200` | `VariableID:2289:16474` |
| Green verified 100 | `🟦 Background/verified 100` | `VariableID:1873:9457` |
| Yellow pending 100 | `🟦 Background/pending 100` | `VariableID:2243:1892` |

### Field Colors
| Semantic use | Variable Name | ID |
|---|---|---|
| Field fill default (`colors.white`) | `🍃 Fields/Fill Default` | `VariableID:6:798` |
| Field fill disabled | `🍃 Fields/Fill Disabled` | `VariableID:19:34624` |
| Field outline default | `🍃 Fields/Outline Default` | `VariableID:6:799` |
| Field outline selected | `🍃 Fields/Outline Selected` | `VariableID:17:398` |
