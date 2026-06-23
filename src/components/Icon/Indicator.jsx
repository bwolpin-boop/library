import { useState } from 'react'
import { colors } from '../../tokens.js'

const GREEN_TINT = 'rgba(17,190,104,0.16)'
const GREEN_TEXT = '#2DA743'
const BADGE_RADIUS = '3.746px'
const BADGE_PAD    = '3.746px'

function VerifyBadge({ size = 4.28 }) {
  return (
    <div className="dc:absolute dc:top-0 dc:right-0" style={{ width: `${size}px`, height: `${size}px` }}>
      <svg width={size} height={size} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="dc:absolute dc:inset-0 dc:w-full dc:h-full">
        <circle cx="4" cy="4" r="4" fill={colors.green} />
        <path d="M1.8 4L3.2 5.5L6.2 2.2" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

function Badge({ count, completed }) {
  return (
    <div
      className="dc:relative dc:flex dc:flex-col dc:items-center dc:justify-center dc:shrink-0"
      style={{
        padding: `0 ${BADGE_PAD}`,
        borderRadius: BADGE_RADIUS,
        backgroundColor: completed ? GREEN_TINT : colors.purple,
        minWidth: completed ? '17.281px' : '16px',
        height: completed ? '15.019px' : '13px',
      }}
    >
      <span
        className="dc:font-montserrat dc:font-bold dc:text-center dc:whitespace-nowrap"
        style={{
          fontSize: '8.561px',
          lineHeight: '1.4',
          color: completed ? GREEN_TEXT : colors.white,
        }}
      >
        {count}
      </span>
      {completed && <VerifyBadge />}
    </div>
  )
}

function Tooltip({ text = 'Dolphincare Suggestions' }) {
  return (
    <div className="dc:relative dc:flex dc:items-center dc:shrink-0">
      {/* Arrow border (gray stroke, slightly wider, rendered first so fill goes on top) */}
      <div className="dc:absolute dc:pointer-events-none" style={{ left: '-3.5px', top: '9px', width: '5px', height: '9px' }}>
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="dc:block">
          <path d="M4.08569 0.5L0.7928 3.79289C0.402275 4.18342 0.402276 4.81658 0.7928 5.20711L4.08569 8.5" stroke="#D9D9D9" strokeLinecap="round"/>
        </svg>
      </div>
      {/* Arrow white fill */}
      <div className="dc:absolute dc:pointer-events-none" style={{ left: '-3px', top: '9px', width: '4px', height: '8px' }}>
        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="dc:block">
          <path d="M0.2928 3.29289L3.58569 0L3.58569 8L0.2928 4.70711C-0.0977241 4.31658 -0.0977248 3.68342 0.2928 3.29289Z" fill="white"/>
        </svg>
      </div>

      {/* Tooltip box */}
      <div className="dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box-sm dc:shrink-0" style={{ padding: '8px 12px' }}>
        <p className="dc:font-montserrat dc:font-medium dc:text-xxs dc:text-primary dc:whitespace-nowrap dc:m-0 dc:[line-height:normal]">
          {text}
        </p>
      </div>
    </div>
  )
}

export function Indicator({
  count = 15,
  state = 'todo',          // 'todo' | 'completed'
  tooltip = true,
  tooltipText = 'Dolphincare Suggestions',
}) {
  const completed = state === 'completed'
  const [hovered, setHovered] = useState(false)

  const showTooltip = tooltip || hovered

  return (
    <div
      className="dc:inline-flex dc:items-center dc:gap-gap8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Badge count={count} completed={completed} />
      {showTooltip && <Tooltip text={tooltipText} />}
    </div>
  )
}
