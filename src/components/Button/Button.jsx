import { useState } from 'react'

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    fontFamily: '"Montserrat", sans-serif',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.15s, border-color 0.15s',
  },
  primary: {
    default: { backgroundColor: '#A852FF', color: '#ffffff', borderRadius: '100px', border: 'none' },
    hover:   { backgroundColor: '#9E46F7' },
    pressed: { backgroundColor: '#983FF2' },
    disabled:{ backgroundColor: '#E7E7E7', color: '#A3A3A3', cursor: 'not-allowed', borderRadius: '100px' },
  },
  secondary: {
    default: { backgroundColor: '#ffffff', color: '#A852FF', borderRadius: '100px', border: '1px solid #D9D9D9' },
    hover:   { backgroundColor: '#F5EBFF' },
    disabled:{ backgroundColor: '#E7E7E7', color: '#A3A3A3', border: '1px solid #D9D9D9', cursor: 'not-allowed', borderRadius: '100px' },
  },
  tertiary: {
    default: { backgroundColor: '#ffffff', color: '#222222', borderRadius: '8px', border: '1px solid #D9D9D9' },
    hover:   { border: '1px solid #C3C3C3' },
    pressed: { backgroundColor: '#F7F7F8', border: '1px solid #222222' },
    disabled:{ backgroundColor: '#E7E7E7', color: '#838383', border: '1px solid #C3C3C3', cursor: 'not-allowed', borderRadius: '8px' },
  },
  sizeDefault:         { height: '52px', padding: '0 24px', fontSize: '16px', fontWeight: 500 },
  sizeSmall:           { height: '32px', padding: '0 12px', fontSize: '12px', fontWeight: 600 },
  sizeTertiaryDefault: { height: '48px', padding: '0 24px', fontSize: '16px', fontWeight: 500, color: '#222222' },
  sizeTertiarySmall:   { padding: '8px 12px', fontSize: '12px', fontWeight: 600, color: '#222222' },
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
