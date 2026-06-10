import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

function TooltipArrow({ arrow, mode }) {
  const isDark = mode === 'dark'
  const fill = isDark ? colors.primary : colors.white
  const stroke = colors.dividerSubtle

  if (arrow === 'left') {
    return (
      <svg
        width="5" height="8" viewBox="0 0 5 8" fill="none"
        style={{
          position: 'absolute',
          left: '-4px',
          top: '50%',
          transform: 'translateY(-50%)',
          overflow: 'visible',
          flexShrink: 0,
        }}
      >
        <path d="M5 0L0 4L5 8Z" fill={fill} />
        {!isDark && (
          <path d="M5 0L0 4L5 8" stroke={stroke} strokeWidth="1" strokeLinejoin="round" fill="none" />
        )}
      </svg>
    )
  }

  if (arrow === 'right') {
    return (
      <svg
        width="5" height="8" viewBox="0 0 5 8" fill="none"
        style={{
          position: 'absolute',
          right: '-4px',
          top: '50%',
          transform: 'translateY(-50%)',
          overflow: 'visible',
          flexShrink: 0,
        }}
      >
        <path d="M0 0L5 4L0 8Z" fill={fill} />
        {!isDark && (
          <path d="M0 0L5 4L0 8" stroke={stroke} strokeWidth="1" strokeLinejoin="round" fill="none" />
        )}
      </svg>
    )
  }

  if (arrow === 'down') {
    return (
      <svg
        width="8" height="5" viewBox="0 0 8 5" fill="none"
        style={{
          position: 'absolute',
          bottom: '-4px',
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'visible',
          flexShrink: 0,
        }}
      >
        <path d="M0 0L4 5L8 0Z" fill={fill} />
        {!isDark && (
          <path d="M0 0L4 5L8 0" stroke={stroke} strokeWidth="1" strokeLinejoin="round" fill="none" />
        )}
      </svg>
    )
  }

  if (arrow === 'up') {
    return (
      <svg
        width="8" height="5" viewBox="0 0 8 5" fill="none"
        style={{
          position: 'absolute',
          top: '-4px',
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'visible',
          flexShrink: 0,
        }}
      >
        <path d="M0 5L4 0L8 5Z" fill={fill} />
        {!isDark && (
          <path d="M0 5L4 0L8 5" stroke={stroke} strokeWidth="1" strokeLinejoin="round" fill="none" />
        )}
      </svg>
    )
  }

  return null
}

export function Tooltip({
  children = 'Tooltip text',
  arrow = 'left',
  mode = 'light',
  size = 'big',
  maxWidth,
}) {
  const isDark = mode === 'dark'
  const isSmall = size === 'small'

  return (
    <div style={{ position: 'relative', display: 'inline-block', maxWidth }}>
      <div style={{
        backgroundColor: isDark ? colors.primary : colors.white,
        border: isDark ? 'none' : `1px solid ${colors.dividerSubtle}`,
        borderRadius: radii.boxSm,
        padding: '8px 12px',
        boxSizing: 'border-box',
      }}>
        <span style={{
          display: 'block',
          fontFamily: fonts.montserrat,
          fontSize: isSmall ? fontSizes.xxxs : fontSizes.xs,
          fontWeight: fontWeights.regular,
          color: isDark ? colors.white : colors.primary,
          lineHeight: isSmall ? 'normal' : '18px',
          wordBreak: 'break-word',
        }}>
          {children}
        </span>
      </div>
      <TooltipArrow arrow={arrow} mode={mode} />
    </div>
  )
}
