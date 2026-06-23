import { useState } from 'react'
import { NavIcon } from '../Icon/NavIcon.jsx'

function PlusBadge({ count = 4, size = 'default' }) {
  const isSmall = size === 'small'
  return (
    <div
      className={`dc:flex dc:flex-col dc:items-center dc:justify-center dc:rounded-rounded dc:shrink-0 ${isSmall ? 'dc:h-gap16' : 'dc:h-gap24'}`}
      style={{
        padding: isSmall ? '0 5.33px' : '0 var(--dc-spacing-gap8)',
        backgroundColor: 'var(--dc-color-green300)',
      }}
    >
      <span
        className={`dc:font-montserrat dc:font-semibold dc:whitespace-nowrap dc:w-full ${isSmall ? 'dc:text-xxxs' : 'dc:text-xs'}`}
        style={{ lineHeight: 'normal', color: '#1ca73a' }}
      >
        +{count}
      </span>
    </div>
  )
}

export function CategoryTab({
  text           = 'Pending (1)',
  selected       = true,
  size           = 'default',   // 'default' | 'small'
  showPlusBadge  = false,
  plusCount      = 4,
  navIconLeft,                  // NavIcon name, small size only
  onClick,
  className,
  style,
}) {
  const [hover,    setHover]    = useState(false)
  const [pressing, setPressing] = useState(false)

  const isSmall = size === 'small'

  // Background computed via inline style since it depends on multiple state combos
  let bgColor, borderValue, textColorClass
  if (selected) {
    bgColor       = pressing ? 'var(--dc-color-purple-pressed)' : hover ? 'var(--dc-color-purple-hover)' : 'var(--dc-color-purple)'
    borderValue   = 'none'
    textColorClass = 'dc:text-white'
  } else {
    bgColor       = pressing ? 'var(--dc-color-surface)' : 'var(--dc-color-white)'
    const borderColor = (hover || pressing) ? 'var(--dc-color-primary)' : 'var(--dc-color-divider-subtle)'
    borderValue   = `1px solid ${borderColor}`
    textColorClass = 'dc:text-primary'
  }

  const heightClass   = isSmall ? 'dc:h-gap32' : 'dc:h-gap40'
  const fontClass     = selected
    ? `dc:font-semibold ${isSmall ? 'dc:text-xs' : 'dc:text-sm'}`
    : `dc:font-regular  ${isSmall ? 'dc:text-xs' : 'dc:text-sm'}`
  const lineHeightStyle = isSmall
    ? (selected ? { lineHeight: 'var(--dc-line-height-md)' }   : { lineHeight: 'var(--dc-line-height-sm)' })
    : (selected ? { lineHeight: 'normal' }                     : { lineHeight: 'var(--dc-line-height-base)' })

  const gapValue = selected ? (isSmall ? '10px' : '8px') : 'var(--dc-spacing-gap4)'
  const paddingX = isSmall ? 'var(--dc-spacing-gap12)' : 'var(--dc-spacing-gap16)'
  const paddingY = isSmall ? 'var(--dc-spacing-gap4)'  : '6px'

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressing(false) }}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      className={`dc:inline-flex dc:items-center dc:justify-center dc:rounded-rounded dc:cursor-pointer dc:shrink-0 dc:font-montserrat ${heightClass} ${fontClass} ${textColorClass} ${className ?? ''}`}
      style={{
        gap:             gapValue,
        padding:         `${paddingY} ${paddingX}`,
        backgroundColor: bgColor,
        border:          borderValue,
        transition:      'background-color 0.1s, border-color 0.1s',
        ...style,
      }}
    >
      {isSmall && navIconLeft && (
        <NavIcon name={navIconLeft} size={16} />
      )}

      <span
        className={`dc:font-montserrat dc:whitespace-nowrap dc:shrink-0 ${fontClass} ${textColorClass}`}
        style={lineHeightStyle}
      >
        {text}
      </span>

      {!selected && showPlusBadge && (
        <PlusBadge count={plusCount} size={size} />
      )}
    </button>
  )
}
