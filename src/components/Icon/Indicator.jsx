import { useState } from 'react'
import { colors, fonts, fontWeights, fontSizes, radii } from '../../tokens.js'

const GREEN_TINT = 'rgba(17,190,104,0.16)'
const GREEN_TEXT = '#2DA743'
const BADGE_RADIUS = '3.746px'
const BADGE_PAD    = '3.746px'
const BADGE_FONT   = { fontFamily: fonts.montserrat, fontWeight: fontWeights.bold, fontSize: '8.561px', lineHeight: '1.4', textAlign: 'center', whiteSpace: 'nowrap' }

function VerifyBadge({ size = 4.28 }) {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: `${size}px`, height: `${size}px` }}>
      <svg width={size} height={size} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <circle cx="4" cy="4" r="4" fill={colors.green} />
        <path d="M1.8 4L3.2 5.5L6.2 2.2" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

function Badge({ count, completed }) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `0 ${BADGE_PAD}`,
      borderRadius: BADGE_RADIUS,
      backgroundColor: completed ? GREEN_TINT : colors.purple,
      // Completed is slightly larger to accommodate the verify badge overflow
      minWidth: completed ? '17.281px' : '16px',
      height: completed ? '15.019px' : '13px',
      flexShrink: 0,
    }}>
      <span style={{ ...BADGE_FONT, color: completed ? GREEN_TEXT : colors.white }}>
        {count}
      </span>
      {completed && <VerifyBadge />}
    </div>
  )
}

function Tooltip({ text = 'Dolphincare Suggestions' }) {
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
      {/* Arrow border (gray stroke, slightly wider, rendered first so fill goes on top) */}
      <div style={{ position: 'absolute', left: '-3.5px', top: '9px', width: '5px', height: '9px', pointerEvents: 'none' }}>
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M4.08569 0.5L0.7928 3.79289C0.402275 4.18342 0.402276 4.81658 0.7928 5.20711L4.08569 8.5" stroke="#D9D9D9" strokeLinecap="round"/>
        </svg>
      </div>
      {/* Arrow white fill */}
      <div style={{ position: 'absolute', left: '-3px', top: '9px', width: '4px', height: '8px', pointerEvents: 'none' }}>
        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0.2928 3.29289L3.58569 0L3.58569 8L0.2928 4.70711C-0.0977241 4.31658 -0.0977248 3.68342 0.2928 3.29289Z" fill="white"/>
        </svg>
      </div>

      {/* Tooltip box */}
      <div style={{
        backgroundColor: colors.white,
        border: `1px solid ${colors.dividerSubtle}`,
        borderRadius: radii.boxSm,
        padding: '8px 12px',
        flexShrink: 0,
      }}>
        <p style={{
          fontFamily: fonts.montserrat,
          fontWeight: fontWeights.medium,
          fontSize: fontSizes.xxs,
          color: colors.primary,
          whiteSpace: 'nowrap',
          margin: 0,
          lineHeight: 'normal',
        }}>
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
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Badge count={count} completed={completed} />
      {showTooltip && <Tooltip text={tooltipText} />}
    </div>
  )
}
