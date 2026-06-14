import { useState } from 'react'
import { colors, radii } from '../../tokens.js'

export function TotalArrow({ onClick, forceHover = false, forceExpanded }) {
  const [hovered, setHovered] = useState(false)
  const [toggled, setToggled] = useState(false)

  const isExpanded = forceExpanded ?? toggled
  const isHovered  = forceHover || hovered

  const bg           = isExpanded ? colors.surfacePressed : isHovered ? colors.surfaceHover : 'transparent'
  const borderRadius = (isHovered || isExpanded) ? `${radii.box} 0 0 ${radii.box}` : undefined

  function handleClick() {
    setToggled(t => !t)
    onClick?.()
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '35px',
        borderRight: `1px solid ${colors.dividerSubtle}`,
        backgroundColor: bg,
        borderRadius,
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background-color 0.12s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px' }}>
        <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg
            width="10" height="6" viewBox="0 0 10 6" fill="none"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
          >
            <path d="M1 5L5 1L9 5" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
