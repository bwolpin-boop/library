import { useState } from 'react'

function PlaceholderIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="dc:shrink-0 dc:opacity-60">
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  )
}

export function Button({
  label = 'Button',
  type = 'primary',
  size = 'default',
  disabled = false,
  selected = false,
  iconLeft = false,
  iconRight = false,
  onClick,
}) {
  const [pressed, setPressed] = useState(false)

  const baseClasses = 'dc:inline-flex dc:items-center dc:justify-center dc:gap-gap4 dc:font-montserrat dc:cursor-pointer dc:[transition:background-color_0.15s,border-color_0.15s]'

  // Size classes
  const sizeClasses = (() => {
    if (type === 'tertiary') {
      return size === 'small'
        ? 'dc:py-gap8 dc:px-gap12 dc:text-xs dc:font-semibold dc:text-primary'
        : 'dc:h-[48px] dc:px-gap24 dc:text-base dc:font-medium dc:text-primary'
    }
    return size === 'small'
      ? 'dc:h-[32px] dc:px-gap12 dc:text-xs dc:font-semibold'
      : 'dc:h-[52px] dc:px-gap24 dc:text-base dc:font-medium'
  })()

  // Variant + state classes
  const variantClasses = (() => {
    if (type === 'primary') {
      if (disabled) return 'dc:bg-disabled dc:text-muted dc:cursor-not-allowed dc:rounded-rounded dc:border-0'
      if (pressed) return 'dc:bg-purple-pressed dc:text-white dc:rounded-rounded dc:border-0'
      return 'dc:bg-purple dc:text-white dc:rounded-rounded dc:hover:bg-purple-hover dc:border-0'
    }
    if (type === 'secondary') {
      if (disabled) return 'dc:bg-disabled dc:text-muted dc:border dc:border-divider-subtle dc:cursor-not-allowed dc:rounded-rounded'
      if (selected) return 'dc:bg-purple-tint dc:text-purple dc:rounded-rounded dc:border dc:border-purple'
      if (pressed) return 'dc:bg-surface-hover dc:text-purple dc:rounded-rounded dc:border dc:border-divider-subtle'
      return 'dc:bg-white dc:text-purple dc:rounded-rounded dc:border dc:border-divider-subtle dc:hover:bg-surface-hover'
    }
    if (type === 'tertiary') {
      if (disabled) return 'dc:bg-disabled dc:text-secondary dc:border dc:border-divider-disabled dc:cursor-not-allowed dc:rounded-box'
      if (pressed) return 'dc:bg-surface-hover dc:border dc:border-primary dc:rounded-box'
      return 'dc:bg-white dc:text-primary dc:rounded-box dc:border dc:border-divider-subtle dc:hover:bg-surface-hover dc:hover:border-divider-disabled'
    }
    // fallback to primary
    if (disabled) return 'dc:bg-disabled dc:text-muted dc:cursor-not-allowed dc:rounded-rounded dc:border-0'
    if (pressed) return 'dc:bg-purple-pressed dc:text-white dc:rounded-rounded dc:border-0'
    return 'dc:bg-purple dc:text-white dc:rounded-rounded dc:hover:bg-purple-hover dc:border-0'
  })()

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses}`}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      {iconLeft && <PlaceholderIcon />}
      {label}
      {iconRight && <PlaceholderIcon />}
    </button>
  )
}
