import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'

const DOT_COLOR = {
  pending:  colors.muted,
  verified: colors.green,
  dismissed: colors.error,
  complete: colors.purple,
}

const LABEL = {
  pending:         'Pending',
  verified:        'Verified',
  dismissed:       'Dismissed',
  complete:        'Complete',
  'combi-pending':  'Pending',
  'combi-verified': 'Verified',
  'combi-dismissed': 'Dismissed',
}

const COMBI_COLORS = {
  'combi-pending':   [colors.muted,  colors.muted],
  'combi-verified':  [colors.green,  colors.green],
  'combi-dismissed': [colors.muted,  colors.error],
}

function SingleDot({ color, size }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      flexShrink: 0,
    }} />
  )
}

function CombiDot({ colors: [c1, c2], size }) {
  const gap = size <= 8 ? 1 : 2
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: `${gap}px`, flexShrink: 0 }}>
      <div style={{ width: size, height: size, borderRadius: '50%', backgroundColor: c1, flexShrink: 0 }} />
      <div style={{ width: size, height: size, borderRadius: '50%', backgroundColor: c2, flexShrink: 0 }} />
    </div>
  )
}

export function Status({
  status = 'pending',
  size = 'default',
  onClick,
}) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  const isSmall = size === 'small'
  const isCombi = status.startsWith('combi')

  const dotSize  = isSmall ? 8 : 12
  const gap      = isSmall ? spacing.gap4 : spacing.gap8
  const paddingV = isSmall ? spacing.gap0 : spacing.gap4
  const paddingH = spacing.gap8

  const bg = pressed ? colors.surfaceActive
    : hover   ? colors.surfaceHover
    : 'transparent'

  const textStyle = isSmall ? {
    fontFamily: fonts.montserrat,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.sm,
    color: colors.primary,
    whiteSpace: 'nowrap',
  } : {
    fontFamily: fonts.montserrat,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.base,
    color: colors.primary,
    whiteSpace: 'nowrap',
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${paddingV} ${paddingH}`,
        borderRadius: radii.boxSm,
        backgroundColor: bg,
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background-color 0.1s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap }}>
        {isCombi
          ? <CombiDot colors={COMBI_COLORS[status]} size={dotSize} />
          : <SingleDot color={DOT_COLOR[status]} size={dotSize} />
        }
        <span style={textStyle}>{LABEL[status]}</span>
      </div>
    </button>
  )
}
