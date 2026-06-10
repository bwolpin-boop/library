import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights } from '../../tokens.js'

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    fontFamily: fonts.montserrat,
    fontWeight: fontWeights.regular,
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    padding: 0,
    textDecoration: 'none',
  },
  default: {
    fontSize: fontSizes.base,
    lineHeight: '1.428',
    color: colors.primary,
  },
  small: {
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.sm,
    color: colors.primary,
  },
  hover:    { textDecoration: 'underline', textUnderlineOffset: '4px' },
  pressed:  { color: colors.purple, textDecoration: 'underline', textUnderlineOffset: '4px' },
  disabled: { color: colors.muted, cursor: 'not-allowed' },
}

function PlaceholderIcon({ size }) {
  const dim = size === 'small' ? 16 : 24
  return (
    <svg width={dim} height={dim} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, opacity: 0.6 }}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  )
}

export function LinkButton({
  label = 'Link',
  size = 'default',
  disabled = false,
  iconLeft = false,
  iconRight = false,
  state,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const sizeStyle = size === 'small' ? styles.small : styles.default

  const isHovered = state === 'hover' || hovered
  const isPressed = state === 'pressed' || pressed

  const stateStyle = disabled
    ? styles.disabled
    : isPressed
    ? { ...styles.pressed }
    : isHovered
    ? { ...styles.hover }
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
      {iconLeft && <PlaceholderIcon size={size} />}
      {label}
      {iconRight && <PlaceholderIcon size={size} />}
    </button>
  )
}
