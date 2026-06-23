import { useState } from 'react'
import { NavIcon } from './NavIcon.jsx'

export function IconButton({ name, size = 24, onClick, disabled, active = false, className, color, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp }) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  const btnSize = Math.max(size, 24)

  const bgClass = disabled
    ? 'dc:bg-transparent'
    : pressed
    ? 'dc:bg-divider-subtle'
    : active || hover
    ? 'dc:bg-surface-pressed'
    : 'dc:bg-transparent'

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={(e) => { if (!disabled) setHover(true); onMouseEnter?.(e) }}
      onMouseLeave={(e) => { setHover(false); setPressed(false); onMouseLeave?.(e) }}
      onMouseDown={(e) => { if (!disabled) setPressed(true); onMouseDown?.(e) }}
      onMouseUp={(e) => { setPressed(false); onMouseUp?.(e) }}
      style={{ width: btnSize, height: btnSize }}
      className={`dc:border-none dc:p-0 ${disabled ? 'dc:cursor-default' : 'dc:cursor-pointer'} dc:flex dc:items-center dc:justify-center dc:rounded-box-sm dc:shrink-0 dc:[transition:background-color_0.1s] ${bgClass}${className ? ` ${className}` : ''}`}
    >
      <NavIcon name={name} size={size} color={color} />
    </button>
  )
}
