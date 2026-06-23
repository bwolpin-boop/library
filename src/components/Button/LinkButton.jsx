import { useState } from 'react'

function PlaceholderIcon({ size }) {
  const dim = size === 'small' ? 16 : 24
  return (
    <svg width={dim} height={dim} viewBox="0 0 24 24" fill="currentColor" className="dc:shrink-0 dc:opacity-60">
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

  const isHovered = state === 'hover' || hovered
  const isPressed = state === 'pressed' || pressed

  const baseClasses = 'dc:inline-flex dc:items-center dc:justify-center dc:gap-gap4 dc:font-montserrat dc:font-regular dc:border-none dc:bg-transparent dc:p-0 dc:no-underline'

  const sizeClasses = size === 'small'
    ? 'dc:text-xs dc:leading-sm dc:text-primary'
    : 'dc:text-base dc:[line-height:1.428] dc:text-primary'

  const stateClasses = disabled
    ? 'dc:text-muted dc:cursor-not-allowed'
    : isPressed
    ? 'dc:text-purple dc:underline dc:[text-underline-offset:4px] dc:cursor-pointer'
    : isHovered
    ? 'dc:underline dc:[text-underline-offset:4px] dc:cursor-pointer'
    : 'dc:cursor-pointer'

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${stateClasses}`}
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
