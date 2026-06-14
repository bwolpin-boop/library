import { useState } from 'react'
import { colors, fonts, fontWeights } from '../../tokens.js'

if (typeof document !== 'undefined' && !document.getElementById('ribbon-underline-kf')) {
  const s = document.createElement('style')
  s.id = 'ribbon-underline-kf'
  s.textContent = '@keyframes drawUnderline { from { clip-path: inset(0 50% 0 50%); } to { clip-path: inset(0 0 0 0); } }'
  document.head.appendChild(s)
}

const DENY_BG = '#FCEBEB'

// Growth scale matching the updated Figma "hover/selected" dimensions
const GROW = {
  letter: { default: 26 / 24,       small: 16.56 / 16   },  // 1.0833, 1.035
  all:    { default: 37.143 / 34,   small: 23 / 22.667  },  // 1.0924, 1.0147
}

// Base dimensions (always the default/small size — transform handles growth)
const BASE = {
  letter: { default: [24, 24, 4],        small: [16, 16, 2.667] },
  all:    { default: [34, 24, 4],        small: [22.667, 16, 2.667] },
  verify: { default: [24, 24, 4],        small: [16, 16, 2.667] },
  deny:   { default: [24, 24, 4],        small: [16, 16, 2.667] },
}

// Base font sizes (transform scales them along with the container)
const FONT = {
  letter: { default: [16, 1.28],         small: [10.667, 0.8533] },
  all:    { default: [14, 1.12],         small: [9.333,  0.7467] },
  verify: { default: [16, 1.28],         small: [10.667, 0.8533] },
  deny:   { default: [16, 1.28],         small: [10.667, 0.8533] },
}

function NotificationBadge({ count, sizeKey, type }) {
  const isSmall = sizeKey === 'small'
  // Default: 10×10px badge; small: 5.333×5.333px badge (updated per Figma)
  const dim  = isSmall ? 5.333 : 10
  const fs   = isSmall ? 2.5   : 5
  const left = type === 'all'
    ? (isSmall ? '18.33px' : '26px')
    : (isSmall ? '11.33px' : '15px')
  const top  = isSmall ? '-2px' : '-4px'

  return (
    <div style={{
      position: 'absolute', left, top,
      width: `${dim}px`, height: `${dim}px`, borderRadius: '50%',
      backgroundColor: colors.purple,
      border: `${isSmall ? 0.6 : 1}px solid ${colors.primary}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ fontFamily: fonts.montserrat, fontWeight: fontWeights.bold, fontSize: `${fs}px`, color: colors.white, lineHeight: 'normal' }}>
        {count}
      </span>
    </div>
  )
}

function VerifyBadge({ sizeKey }) {
  const dim = sizeKey === 'small' ? 6 : 8
  return (
    <div style={{ position: 'absolute', bottom: '75%', left: '75%', right: '-8.33%', top: '-8.33%' }}>
      <svg width={dim} height={dim} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <circle cx="4" cy="4" r="4" fill={colors.green} />
        <path d="M1.8 4L3.2 5.5L6.2 2.2" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

function DenyBadge({ sizeKey }) {
  const isSmall = sizeKey === 'small'
  const dim = isSmall ? 5.333 : 8
  return (
    <div style={{ position: 'absolute', left: isSmall ? '12px' : '18px', top: isSmall ? '-1.33px' : '-2px', width: `${dim}px`, height: `${dim}px` }}>
      <svg width={dim} height={dim} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <circle cx="4" cy="4" r="4" fill={colors.error} />
        <path d="M2.5 2.5L5.5 5.5M2.5 5.5L5.5 2.5" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

export function Section({
  letter = 'A',
  type = 'letter',    // 'letter' | 'all' | 'verify' | 'deny'
  state = 'disabled', // 'default' | 'selected' | 'disabled'
  size = 'default',   // 'default' | 'small'
  badge,
  forceHover = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const isDisabled    = state === 'disabled'
  const isSelected    = state === 'selected'
  const isVerify      = type === 'verify'
  const isDeny        = type === 'deny'
  const isAll         = type === 'all'
  const isInteractive = !isDisabled && !isVerify && !isDeny

  const sizeKey = size === 'small' ? 'small' : 'default'
  const [w, h, r]            = BASE[type][sizeKey]
  const [fontSize, tracking] = FONT[type][sizeKey]
  const growScale             = GROW[isAll ? 'all' : 'letter'][sizeKey]

  const effectiveHovered = forceHover || hovered

  // Scale: hover OR selected = grown; press = 10% shrink from grown state
  let scale = 1
  if (isInteractive) {
    const grown = isSelected || effectiveHovered
    scale = grown
      ? (pressed ? growScale * 0.9 : growScale)
      : (pressed ? 0.9 : 1)
  }

  // No drop shadow on any state (including selected/pressed)
  const showShadow = false

  // Colors
  const bg        = isVerify ? colors.green300 : isDeny ? DENY_BG : isDisabled ? colors.disabled : colors.purple
  const textColor = isVerify ? colors.green    : isDeny ? colors.error : isDisabled ? colors.dividerDisabled : colors.white
  const border    = (!isDisabled && !isVerify && !isDeny) ? `1px solid ${colors.primary}` : undefined

  const letterWidth = isAll ? undefined : (sizeKey === 'small' ? 8 : 12)

  return (
    <div
      onClick     ={isInteractive ? onClick : undefined}
      onMouseEnter={isInteractive ? () => setHovered(true)  : undefined}
      onMouseLeave={isInteractive ? () => { setHovered(false); setPressed(false) } : undefined}
      onMouseDown ={isInteractive ? () => setPressed(true)  : undefined}
      onMouseUp   ={isInteractive ? () => setPressed(false) : undefined}
      style={{
        position: 'relative',
        width: `${w}px`,
        height: `${h}px`,
        borderRadius: `${r}px`,
        backgroundColor: bg,
        border,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transform: `scale(${scale})`,
        filter: undefined,
        transition: 'transform 0.12s ease, filter 0.12s ease',
        cursor: isInteractive ? 'pointer' : 'default',
        userSelect: 'none',
      }}
    >
      <span style={{
        fontFamily: fonts.montserrat,
        fontWeight: fontWeights.bold,
        fontSize: `${fontSize}px`,
        letterSpacing: `${tracking}px`,
        color: textColor,
        lineHeight: 'normal',
        textTransform: isAll ? undefined : 'uppercase',
        width: letterWidth ? `${letterWidth}px` : undefined,
        textAlign: 'center',
        whiteSpace: isAll ? 'nowrap' : undefined,
      }}>
        {letter}
      </span>

      {badge != null && !isDisabled && !isVerify && !isDeny && (
        <NotificationBadge count={badge} sizeKey={sizeKey} type={type} />
      )}
      {isVerify && <VerifyBadge sizeKey={sizeKey} />}
      {isDeny   && <DenyBadge  sizeKey={sizeKey} />}

      {isSelected && (
        <div style={{
          position: 'absolute',
          top: `${h + (sizeKey === 'small' ? 1.1 : 2.42)}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: `${sizeKey === 'small' ? 8 : 12}px`,
          height: '2px',
          backgroundColor: colors.purple,
          borderRadius: '1px',
          animation: 'drawUnderline 0.25s ease-out forwards',
        }} />
      )}
    </div>
  )
}
