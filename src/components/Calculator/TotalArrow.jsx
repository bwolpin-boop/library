import { useState } from 'react'

export function TotalArrow({ onClick, forceHover = false, forceExpanded }) {
  const [hovered, setHovered] = useState(false)
  const [toggled, setToggled] = useState(false)

  const isExpanded = forceExpanded ?? toggled
  const isHovered  = forceHover || hovered

  function handleClick() {
    setToggled(t => !t)
    onClick?.()
  }

  const bgClass = isExpanded
    ? 'dc:bg-surface-pressed'
    : isHovered
      ? 'dc:bg-surface-hover'
      : 'dc:bg-transparent'

  const borderRadiusStyle = (isHovered || isExpanded)
    ? { borderRadius: 'var(--dc-radius-box) 0 0 var(--dc-radius-box)' }
    : {}

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`dc:flex dc:items-center dc:justify-center dc:border-r dc:border-divider-subtle dc:cursor-pointer dc:shrink-0 ${bgClass}`}
      style={{
        height: '35px',
        transition: 'background-color 0.12s',
        ...borderRadiusStyle,
      }}
    >
      <div className="dc:flex dc:items-center" style={{ padding: '0 8px' }}>
        <div className="dc:w-gap24 dc:h-gap24 dc:flex dc:items-center dc:justify-center">
          <svg
            width="10" height="6" viewBox="0 0 10 6" fill="none"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
          >
            <path d="M1 5L5 1L9 5" stroke="var(--dc-color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
