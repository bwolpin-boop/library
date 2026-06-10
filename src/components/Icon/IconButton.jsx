import { useState } from 'react'
import { colors, radii } from '../../tokens.js'
import { NavIcon } from './NavIcon.jsx'

export function IconButton({ name, size = 24, onClick, disabled, className, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp }) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  const bg = disabled ? 'transparent'
    : pressed ? colors.dividerSubtle
    : hover    ? colors.surfacePressed
    : 'transparent'

  const btnSize = Math.max(size, 24)

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={(e) => { if (!disabled) setHover(true); onMouseEnter?.(e) }}
      onMouseLeave={(e) => { setHover(false); setPressed(false); onMouseLeave?.(e) }}
      onMouseDown={(e) => { if (!disabled) setPressed(true); onMouseDown?.(e) }}
      onMouseUp={(e) => { setPressed(false); onMouseUp?.(e) }}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radii.boxSm,
        backgroundColor: bg,
        width: btnSize,
        height: btnSize,
        flexShrink: 0,
        transition: 'background-color 0.1s',
      }}
      className={className}
    >
      <NavIcon name={name} size={size} />
    </button>
  )
}
