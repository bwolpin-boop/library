import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii } from '../../tokens.js'

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: fonts.montserrat,
    cursor: 'pointer',
    backgroundColor: colors.white,
    border: `1px solid ${colors.dividerDisabled}`,
    borderRadius: radii.boxSm,
    gap: '4px',
    transition: 'background-color 0.15s',
    whiteSpace: 'nowrap',
  },
  default: {
    height: '32px',
    padding: '8px 12px 8px 8px',
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.md,
    color: colors.primary,
  },
  small: {
    padding: '4px 8px 4px 4px',
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.sm,
    color: colors.primary,
  },
  hover:    { backgroundColor: colors.surfaceHover },
  pressed:  { backgroundColor: colors.surfacePressed },
  disabled: { backgroundColor: colors.disabled, color: colors.muted, border: `1px solid ${colors.dividerDisabled}`, cursor: 'not-allowed' },
}

function TagIcon({ disabled }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.purpleOverlay,
      borderRadius: radii.boxSm,
      width: '20px',
      height: '20px',
      flexShrink: 0,
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1 5.5L4.5 9L9 1"
          stroke={disabled ? colors.muted : colors.purple}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function StandardButton({
  label = 'View All Diagnoses',
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
      <TagIcon disabled={disabled} />
      {label}
    </button>
  )
}
