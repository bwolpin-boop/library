import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii, spacing, strokeWidths } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { IconButton } from '../Icon/IconButton.jsx'
import { Button } from '../Button/Button.jsx'
import { StandardButton } from '../Button/StandardButton.jsx'
import { H2YLetters } from './H2YLetters.jsx'
import { SectionsRow, DEFAULT_SECTIONS } from './SectionsRow.jsx'
import { RibbonStates } from './RibbonStates.jsx'

// Shared text style helpers
const sb14  = { fontFamily: fonts.montserrat, fontSize: fontSizes.sm,   fontWeight: fontWeights.semibold, lineHeight: 'normal' }
const reg12 = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs,   fontWeight: fontWeights.regular,  lineHeight: '18px' }
const sb12  = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs,   fontWeight: fontWeights.semibold, lineHeight: '22px' }
const bold16caps = { fontFamily: fonts.montserrat, fontSize: fontSizes.base, fontWeight: fontWeights.bold, lineHeight: 'normal', letterSpacing: '1.28px', textTransform: 'uppercase' }

// ─── ARD date navigator ──────────────────────────────────────────────────────

function ArdDate({ date = '04/23/24' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
      <NavIcon name="arrow-left" size={24} />
      <span style={{ ...sb12, color: colors.purple }}>{date}</span>
      <NavIcon name="arrow-right" size={24} />
    </div>
  )
}


// ─── H2Y change indicator ────────────────────────────────────────────────────

function H2YChange() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
      <H2YLetters type="H" before="before" />
      <H2YLetters type="2" before="before" />
      <H2YLetters type="Y" before="before" />
      <NavIcon name="arrow-right-h2y" size={20} />
      <H2YLetters type="H" before="after" />
      <H2YLetters type="2" before="after" />
      <H2YLetters type="Y" before="after" />
    </div>
  )
}

// ─── Feedback button ─────────────────────────────────────────────────────────

function FeedbackButton({ label = 'Give feedback', onClick }) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? colors.purplePressed : hovered ? colors.purpleHover : colors.purple
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '32px', padding: '4px 12px', backgroundColor: bg, borderRadius: radii.rounded, flexShrink: 0, cursor: 'pointer', transition: 'background-color 0.15s' }}
    >
      <NavIcon name="comment" size={24} />
      <span style={{ ...sb12, color: colors.white }}>{label}</span>
    </div>
  )
}

// ─── Main Ribbon component ───────────────────────────────────────────────────

export function Ribbon({
  type = 'ribbon',   // 'ribbon' | 'nta' | 'CMI'
  banner = false,
  title = 'Dolphincare Findings',
  ardDate = '04/23/24',
  sections = DEFAULT_SECTIONS,
  cmiType = 'all',   // 'all' | 'nursing' | 'NTA' | 'Cognitive' — active tab when type='CMI'
  onClose,
}) {
  const isCmi = type === 'CMI'
  const isNta = type === 'nta'
  const isRibbon = type === 'ribbon'

  const containerStyle = {
    display: 'flex',
    width: banner ? undefined : '100%',
    backgroundColor: colors.white,
    border: `${strokeWidths.thin}px solid ${colors.dividerSubtle}`,
    borderRadius: radii.box,
    position: 'relative',
    overflow: 'hidden',
  }

  if (banner && isRibbon) {
    return (
      <div style={{ ...containerStyle, flexDirection: 'column' }}>
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${spacing.gap4} ${spacing.gap16}`, borderBottom: `${strokeWidths.thin}px solid ${colors.dividerSubtle}` }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ ...sb14, color: colors.primary }}>{title}</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ ...reg12, color: colors.primary }}>Based on ARD: </span>
              <ArdDate date={ardDate} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap16 }}>
            <FeedbackButton label="Give feedback" />
            <IconButton name="close" size={24} onClick={onClose} />
          </div>
        </div>
        {/* Sections row */}
        <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
          <SectionsRow sections={sections} />
        </div>
        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${spacing.gap12} ${spacing.gap16}`, borderTop: `${strokeWidths.thin}px solid ${colors.dividerSubtle}` }}>
          <span style={{ ...sb14, color: colors.primary }}>{title}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap16 }}>
            <StandardButton label="Set as Primary diagnosis" />
            <IconButton name="close" size={24} onClick={onClose} />
          </div>
        </div>
      </div>
    )
  }

  if (isNta) {
    return (
      <div style={{ ...containerStyle, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: `${spacing.gap12} ${spacing.gap16}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap12 }}>
          <NavIcon name="arrow-right" size={24} />
          <NavIcon name="dolphincare-logo" size={24} />
          <span style={{ ...sb14, color: colors.primary }}>Dolphincare detected 34 diagnoses in discharge summaries</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap16 }}>
          <Button type="primary" size="small" label="View sources" />
          <IconButton name="close" size={24} onClick={onClose} />
        </div>
      </div>
    )
  }

  // ribbon or CMI (default compact row)
  return (
    <div style={{ ...containerStyle, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '58px', padding: `${spacing.gap4} ${spacing.gap16}` }}>
      {/* Left: title + question mark + ARD */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ ...sb14, color: colors.primary, whiteSpace: 'nowrap' }}>{title}</span>
          <NavIcon name="little-questionmark" size={24} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ ...reg12, color: colors.primary }}>Based on ARD: </span>
          <ArdDate date={ardDate} />
        </div>
      </div>

      {/* Middle: sections row */}
      <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
        {isCmi ? (
          <RibbonStates type={cmiType} />
        ) : (
          <SectionsRow sections={sections} />
        )}
      </div>

      {/* Right: feedback + close */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
        <FeedbackButton label="Give feedback" />
        <IconButton name="close" size={24} onClick={onClose} />
      </div>
    </div>
  )
}
