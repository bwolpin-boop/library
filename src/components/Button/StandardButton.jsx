import { useState } from 'react'
import { colors, strokeWidths } from '../../tokens.js'

function TagIcon({ disabled }) {
  return (
    <span className="dc:inline-flex dc:items-center dc:justify-center dc:bg-purple-overlay dc:rounded-box-sm dc:w-[20px] dc:h-[20px] dc:shrink-0">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
          d="M1 5.5L4.5 9L9 1"
          stroke={disabled ? colors.muted : colors.purple}
          strokeWidth={strokeWidths.icon}
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
  const [pressed, setPressed] = useState(false)

  const baseClasses = 'dc:inline-flex dc:items-center dc:font-montserrat dc:bg-white dc:border dc:border-divider-disabled dc:rounded-box-sm dc:gap-gap4 dc:[transition:background-color_0.15s] dc:whitespace-nowrap'

  const sizeClasses = size === 'small'
    ? 'dc:py-gap4 dc:pl-gap4 dc:pr-gap8 dc:text-xs dc:font-regular dc:leading-sm dc:text-primary'
    : 'dc:h-[32px] dc:pt-gap8 dc:pb-gap8 dc:pl-gap8 dc:pr-gap12 dc:text-xs dc:font-semibold dc:leading-md dc:text-primary'

  const stateClasses = disabled
    ? 'dc:bg-disabled dc:text-muted dc:border dc:border-divider-disabled dc:cursor-not-allowed'
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
      <TagIcon disabled={disabled} />
      {label}
    </button>
  )
}
