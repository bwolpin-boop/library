import { useState } from 'react'
import { strokeWidths, colors } from '../../tokens.js'

export function Link2Button({
  label = 'Link 2',
  size = 'default',
  disabled = false,
  onClick,
}) {
  const [pressed, setPressed] = useState(false)

  const baseClasses = 'dc:inline-flex dc:items-center dc:font-montserrat dc:border-none dc:bg-transparent dc:rounded-box dc:[transition:background-color_0.15s] dc:whitespace-nowrap'

  const sizeClasses = size === 'small'
    ? 'dc:gap-gap8 dc:py-gap4 dc:[padding-left:4px] dc:[padding-right:7px] dc:text-xs dc:font-regular dc:leading-sm dc:text-primary'
    : 'dc:gap-gap4 dc:[padding-top:4px] dc:[padding-bottom:4px] dc:[padding-left:3px] dc:pr-gap8 dc:text-sm dc:font-medium dc:[line-height:normal] dc:text-primary'

  const stateClasses = disabled
    ? 'dc:text-muted dc:cursor-not-allowed'
    : pressed
    ? 'dc:bg-surface-pressed dc:cursor-pointer'
    : 'dc:cursor-pointer dc:hover:bg-surface-hover'

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${stateClasses}`}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      <span className="dc:inline-flex dc:items-center dc:justify-center dc:w-[24px] dc:h-[24px] dc:shrink-0">
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
          <rect x="0.6" y="0.6" width="12.8" height="9.8" rx="1.4" stroke={disabled ? colors.muted : colors.primary} strokeWidth={strokeWidths.icon} />
          <path d="M1 1L7 6.5L13 1" stroke={disabled ? colors.muted : colors.primary} strokeWidth={strokeWidths.icon} />
        </svg>
      </span>
      {label}
    </button>
  )
}
