import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    fontFamily: fonts.montserrat,
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.15s, border-color 0.15s',
  },
  primary: {
    default: { backgroundColor: colors.purple, color: colors.white, borderRadius: radii.rounded, border: 'none' },
    hover:   { backgroundColor: colors.purpleHover },
    pressed: { backgroundColor: colors.purplePressed },
    disabled:{ backgroundColor: colors.disabled, color: colors.muted, cursor: 'not-allowed', borderRadius: radii.rounded },
  },
  secondary: {
    default: { backgroundColor: colors.white, color: colors.purple, borderRadius: radii.rounded, border: `1px solid ${colors.dividerSubtle}` },
    hover:   { backgroundColor: colors.purpleTint },
    disabled:{ backgroundColor: colors.disabled, color: colors.muted, border: `1px solid ${colors.dividerSubtle}`, cursor: 'not-allowed', borderRadius: radii.rounded },
  },
  tertiary: {
    default: { backgroundColor: colors.white, color: colors.primary, borderRadius: radii.box, border: `1px solid ${colors.dividerSubtle}` },
    hover:   { border: `1px solid ${colors.dividerDisabled}` },
    pressed: { backgroundColor: colors.surfaceHover, border: `1px solid ${colors.primary}` },
    disabled:{ backgroundColor: colors.disabled, color: colors.secondary, border: `1px solid ${colors.dividerDisabled}`, cursor: 'not-allowed', borderRadius: radii.box },
  },
  sizeDefault:         { height: '52px', padding: '0 24px', fontSize: fontSizes.base, fontWeight: fontWeights.medium },
  sizeSmall:           { height: '32px', padding: '0 12px', fontSize: fontSizes.xs, fontWeight: fontWeights.semibold },
  sizeTertiaryDefault: { height: '48px', padding: '0 24px', fontSize: fontSizes.base, fontWeight: fontWeights.medium, color: colors.primary },
  sizeTertiarySmall:   { padding: '8px 12px', fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, color: colors.primary },
}

function PlaceholderIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, opacity: 0.6 }}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  )
}

export function Button({
  label = 'Button',
  type = 'primary',
  size = 'default',
  disabled = false,
  iconLeft = false,
  iconRight = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const variant = styles[type] ?? styles.primary

  const sizeStyle =
    type === 'tertiary'
      ? size === 'small' ? styles.sizeTertiarySmall : styles.sizeTertiaryDefault
      : size === 'small' ? styles.sizeSmall : styles.sizeDefault

  const variantStyle = disabled
    ? variant.disabled
    : pressed && variant.pressed
    ? { ...variant.default, ...variant.pressed }
    : hovered && variant.hover
    ? { ...variant.default, ...variant.hover }
    : variant.default

  return (
    <button
      style={{ ...styles.base, ...sizeStyle, ...variantStyle }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {iconLeft && <PlaceholderIcon />}
      {label}
      {iconRight && <PlaceholderIcon />}
    </button>
  )
}
