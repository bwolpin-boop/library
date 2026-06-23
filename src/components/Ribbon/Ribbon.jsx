import { useState, useCallback } from 'react'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { IconButton } from '../Icon/IconButton.jsx'
import { Button } from '../Button/Button.jsx'
import { StandardButton } from '../Button/StandardButton.jsx'
import { H2YLetters } from './H2YLetters.jsx'
import { SectionsRow, DEFAULT_SECTIONS } from './SectionsRow.jsx'
import { RibbonStates } from './RibbonStates.jsx'

// ─── ARD date navigator ──────────────────────────────────────────────────────

function ArdDate({ date = '04/23/24' }) {
  return (
    <div className="dc:flex dc:items-center dc:shrink-0">
      <NavIcon name="arrow-left" size={24} />
      <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:text-purple" style={{ lineHeight: '22px' }}>{date}</span>
      <NavIcon name="arrow-right" size={24} />
    </div>
  )
}


// ─── H2Y change indicator ────────────────────────────────────────────────────

function H2YChange() {
  return (
    <div className="dc:flex dc:items-center" style={{ gap: '0px' }}>
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
  const [pressed, setPressed] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`dc:flex dc:items-center dc:shrink-0 dc:cursor-pointer dc:rounded-rounded dc:gap-gap4 ${pressed ? 'dc:bg-purple-pressed' : 'dc:bg-purple dc:hover:bg-purple-hover'}`}
      style={{ height: '32px', padding: '4px 12px', transition: 'background-color 0.15s' }}
    >
      <NavIcon name="comment" size={24} />
      <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:text-white" style={{ lineHeight: '22px' }}>{label}</span>
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

  // Incremented each time the Calculate button is pressed; passed to RibbonStates
  const [calcTrigger, setCalcTrigger] = useState(0)
  const handleCalculate = useCallback(() => setCalcTrigger(n => n + 1), [])

  const containerClass = `dc:flex dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box dc:relative dc:overflow-hidden ${banner ? '' : 'dc:w-full'}`

  if (banner && isRibbon) {
    return (
      <div className={`${containerClass} dc:flex-col`}>
        {/* Top row */}
        <div className="dc:flex dc:items-center dc:justify-between dc:px-gap16 dc:py-gap4 dc:border-b dc:border-divider-subtle">
          <div className="dc:flex dc:flex-col" style={{ gap: '4px' }}>
            <span className="dc:font-montserrat dc:text-sm dc:font-semibold dc:text-primary" style={{ lineHeight: 'normal' }}>{title}</span>
            <div className="dc:flex dc:items-center">
              <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:text-primary" style={{ lineHeight: '18px' }}>Based on ARD: </span>
              <ArdDate date={ardDate} />
            </div>
          </div>
          <div className="dc:flex dc:items-center dc:gap-gap16">
            <FeedbackButton label="Give feedback" />
            <IconButton name="close" size={24} onClick={onClose} />
          </div>
        </div>
        {/* Sections row */}
        <div className="dc:flex dc:items-center" style={{ height: '50px' }}>
          <SectionsRow sections={sections} />
        </div>
        {/* Bottom row */}
        <div className="dc:flex dc:items-center dc:justify-between dc:px-gap16 dc:py-gap12 dc:border-t dc:border-divider-subtle">
          <span className="dc:font-montserrat dc:text-sm dc:font-semibold dc:text-primary" style={{ lineHeight: 'normal' }}>{title}</span>
          <div className="dc:flex dc:items-center dc:gap-gap16">
            <StandardButton label="Set as Primary diagnosis" />
            <IconButton name="close" size={24} onClick={onClose} />
          </div>
        </div>
      </div>
    )
  }

  if (isNta) {
    return (
      <div className={`${containerClass} dc:flex-row dc:items-center dc:justify-between dc:px-gap16 dc:py-gap12`}>
        <div className="dc:flex dc:items-center dc:gap-gap12">
          <NavIcon name="arrow-right" size={24} />
          <NavIcon name="dolphincare-logo" size={24} />
          <span className="dc:font-montserrat dc:text-sm dc:font-semibold dc:text-primary" style={{ lineHeight: 'normal' }}>Dolphincare detected 34 diagnoses in discharge summaries</span>
        </div>
        <div className="dc:flex dc:items-center dc:gap-gap16">
          <Button type="primary" size="small" label="View sources" />
          <IconButton name="close" size={24} onClick={onClose} />
        </div>
      </div>
    )
  }

  // ribbon or CMI (default compact row)
  return (
    <div className={`${containerClass} dc:flex-row dc:items-center dc:justify-between dc:px-gap16 dc:py-gap4`} style={{ height: '58px' }}>
      {/* Left: title + question mark + ARD */}
      <div className="dc:flex dc:flex-col dc:shrink-0" style={{ gap: '4px' }}>
        <div className="dc:flex dc:items-center" style={{ gap: '4px' }}>
          <span className="dc:font-montserrat dc:text-sm dc:font-semibold dc:text-primary dc:whitespace-nowrap" style={{ lineHeight: 'normal' }}>{title}</span>
          <NavIcon name="little-questionmark" size={24} />
        </div>
        <div className="dc:flex dc:items-center">
          <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:text-primary" style={{ lineHeight: '18px' }}>Based on ARD: </span>
          <ArdDate date={ardDate} />
        </div>
      </div>

      {/* Middle: sections row */}
      <div className="dc:flex dc:items-center" style={{ height: '50px' }}>
        {isCmi ? (
          <RibbonStates type={cmiType} calcTrigger={calcTrigger} />
        ) : (
          <SectionsRow sections={sections} />
        )}
      </div>

      {/* Right: feedback / calculate + close */}
      <div className="dc:flex dc:items-center dc:shrink-0" style={{ gap: '16px' }}>
        <FeedbackButton
          label={isCmi ? 'Calculate' : 'Give feedback'}
          onClick={isCmi ? handleCalculate : undefined}
        />
        <IconButton name="close" size={24} onClick={onClose} />
      </div>
    </div>
  )
}
