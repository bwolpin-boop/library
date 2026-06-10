import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii } from '../../tokens.js'

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: fonts.montserrat,
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    borderRadius: radii.box,
    transition: 'background-color 0.15s',
    whiteSpace: 'nowrap',
  },
  default: {
    gap: '4px',
    padding: '4px 8px 4px 3px',
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: 'normal',
    color: colors.primary,
  },
  small: {
    gap: '8px',
    padding: '4px 7px 4px 4px',
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.sm,
    color: colors.primary,
  },
  hover:    { backgroundColor: colors.surfaceHover },
  pressed:  { backgroundColor: colors.surfacePressed },
  disabled: { color: colors.muted, cursor: 'not-allowed' },
}

export function Link2Button({
  label = 'Link 2',
  size = 'default',
  disabled = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const sizeStyle = size === 'small' ? styles.small : styles.default

  const stateStyle = disabled
    ? styles.disabled
    : pressed
    ? styles.pressed
    : hovered
    ? styles.hover
    : {}

  return (
    <button
      style={{ ...styles.base, ...sizeStyle, ...stateStyle }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
        flexShrink: 0,
      }}>
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
          <rect x="0.6" y="0.6" width="12.8" height="9.8" rx="1.4" stroke={disabled ? colors.muted : colors.primary} strokeWidth="1.2" />
          <path d="M1 1L7 6.5L13 1" stroke={disabled ? colors.muted : colors.primary} strokeWidth="1.2" />
        </svg>
      </span>
      {label}
    </button>
  )
}
