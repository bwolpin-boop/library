# Figma Variables Skill

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
