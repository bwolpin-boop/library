import { useState } from 'react'

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: '"Montserrat", sans-serif',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    borderRadius: '10px',
    transition: 'background-color 0.15s',
  },
  default: {
    gap: '4px',
    padding: '4px 0',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: '#222222',
  },
  small: {
    gap: '8px',
    padding: '4px',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    color: '#222222',
  },
  hover:    { backgroundColor: '#F7F7F8' },
  pressed:  { backgroundColor: '#F1F1F1' },
  disabled: { color: '#A3A3A3', cursor: 'not-allowed' },
}

export function Link2Button({
  label = 'Give us feedback',
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
          <rect x="0.6" y="0.6" width="12.8" height="9.8" rx="1.4" stroke={disabled ? '#A3A3A3' : '#222222'} strokeWidth="1.2" />
          <path d="M1 1L7 6.5L13 1" stroke={disabled ? '#A3A3A3' : '#222222'} strokeWidth="1.2" />
        </svg>
      </span>
      {label}
    </button>
  )
}
