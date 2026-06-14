import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'

function PlusBadge({ count = 4, size = 'default' }) {
  const isSmall = size === 'small'
  return (
    <div style={{
      display:         'flex',
      flexDirection:   'column',
      alignItems:      'center',
      justifyContent:  'center',
      height:          isSmall ? '16px' : '24px',
      padding:         isSmall ? '0 5.33px' : `0 ${spacing.gap8}`,
      borderRadius:    radii.rounded,
      backgroundColor: colors.green300,
      flexShrink:      0,
    }}>
      <span style={{
        fontFamily:  fonts.montserrat,
        fontWeight:  fontWeights.semibold,
        fontSize:    isSmall ? fontSizes.xxxs : fontSizes.xs,
        lineHeight:  'normal',
        color:       '#1ca73a',
        whiteSpace:  'nowrap',
        width:       '100%',
      }}>
        +{count}
      </span>
    </div>
  )
}

export function CategoryTab({
  text           = 'Pending (1)',
  selected       = true,
  size           = 'default',   // 'default' | 'small'
  showPlusBadge  = false,
  plusCount      = 4,
  navIconLeft,                  // NavIcon name, small size only
  onClick,
  className,
  style,
}) {
  const [hover,    setHover]    = useState(false)
  const [pressing, setPressing] = useState(false)

  const isSmall = size === 'small'
  const h  = isSmall ? '32px' : '40px'
  const px = isSmall ? spacing.gap12 : spacing.gap16
  const py = isSmall ? spacing.gap4  : '6px'
  const gap = selected ? (isSmall ? '10px' : '8px') : spacing.gap4

  // Background
  let bg, border, textColor
  if (selected) {
    bg        = pressing ? colors.purplePressed : hover ? colors.purpleHover : colors.purple
    border    = 'none'
    textColor = colors.white
  } else {
    bg        = pressing ? colors.surface : colors.white
    const borderColor = (hover || pressing) ? colors.primary : colors.dividerSubtle
    border    = `1px solid ${borderColor}`
    textColor = colors.primary
  }

  const labelStyle = {
    fontFamily:  fonts.montserrat,
    fontWeight:  selected ? fontWeights.semibold : fontWeights.regular,
    fontSize:    isSmall ? fontSizes.xs  : fontSizes.sm,
    lineHeight:  isSmall
      ? (selected ? lineHeights.md : lineHeights.sm)
      : (selected ? 'normal'       : lineHeights.base),
    color:       textColor,
    whiteSpace:  'nowrap',
    flexShrink:  0,
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressing(false) }}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      className={className}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        gap,
        height:          h,
        padding:         `${py} ${px}`,
        borderRadius:    radii.rounded,
        backgroundColor: bg,
        border,
        cursor:          'pointer',
        background:      'none',
        backgroundColor: bg,
        transition:      'background-color 0.1s, border-color 0.1s',
        flexShrink:      0,
        ...style,
      }}
    >
      {isSmall && navIconLeft && (
        <NavIcon name={navIconLeft} size={16} />
      )}

      <span style={labelStyle}>{text}</span>

      {!selected && showPlusBadge && (
        <PlusBadge count={plusCount} size={size} />
      )}
    </button>
  )
}
