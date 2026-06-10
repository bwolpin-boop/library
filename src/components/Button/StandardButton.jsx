import { useState } from 'react'

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: '"Montserrat", sans-serif',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    border: '1px solid #C3C3C3',
    borderRadius: '8px',
    gap: '4px',
    transition: 'background-color 0.15s',
  },
  default: {
    height: '32px',
    padding: '8px 12px 8px 8px',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '22px',
    color: '#222222',
  },
  small: {
    padding: '4px 8px 4px 4px',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    color: '#222222',
  },
  hover:    { backgroundColor: '#F7F7F8' },
  pressed:  { backgroundColor: '#F1F1F1' },
  disabled: { backgroundColor: '#E7E7E7', color: '#A3A3A3', border: '1px solid #C3C3C3', cursor: 'not-allowed' },
}

function TagIcon({ disabled }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(168, 82, 255, 0.1)',
      borderRadius: '6px',
      width: '20px',
      height: '20px',
      flexShrink: 0,
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1 5.5L4.5 9L9 1"
          stroke={disabled ? '#A3A3A3' : '#A852FF'}
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
