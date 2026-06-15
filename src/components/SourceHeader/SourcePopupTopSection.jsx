import { useState, useEffect, useRef } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { DcSuggests } from './DcSuggests.jsx'
import { SourceTypeTabs } from '../SourceTypeTab/SourceTypeTabs.jsx'

// ── Internal sub-components ─────────────────────────────────────────────────

function QuestionTitle({ qCode, title, previousAnswer, truncate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap4 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: spacing.gap8, color: colors.primary }}>
        <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xl2, fontWeight: fontWeights.semibold, lineHeight: 'normal', whiteSpace: 'nowrap' }}>
          {qCode}
        </span>
        <span style={{
          fontFamily: fonts.montserrat, fontSize: fontSizes.base, fontWeight: fontWeights.regular, lineHeight: '1.428',
          whiteSpace: truncate ? 'nowrap' : undefined,
          overflow: truncate ? 'hidden' : undefined,
          textOverflow: truncate ? 'ellipsis' : undefined,
          maxWidth: truncate ? '120px' : undefined,
        }}>
          {title}
        </span>
      </div>
      <div style={{ display: 'flex', gap: spacing.gap4, alignItems: 'flex-start', color: colors.secondary, fontSize: fontSizes.xs, lineHeight: lineHeights.base }}>
        <span style={{ fontFamily: fonts.montserrat, fontWeight: fontWeights.regular, fontStyle: 'italic', whiteSpace: 'pre' }}>{'Previous MDS Answer:  '}</span>
        <span style={{ fontFamily: fonts.montserrat, fontWeight: fontWeights.semibold, fontStyle: 'italic', whiteSpace: 'nowrap' }}>{previousAnswer}</span>
      </div>
    </div>
  )
}

function Divider() {
  return (
    <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ width: '1px', height: '100%', backgroundColor: colors.dividerSubtle }} />
    </div>
  )
}

function IconBtn({ name, size = 24, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: spacing.gap4, borderRadius: radii.box, border: 'none', background: 'none', cursor: 'pointer', flexShrink: 0 }}
    >
      <NavIcon name={name} size={size} />
    </button>
  )
}

// ── Exported tabs bar — used as a standalone sticky element in SourcePopup ──
// Must be a *direct child* of the scroll container for position:sticky to work.

export function SourceTabsBar({
  sourceTabs  = [],
  selectedTab = null,
  onTabSelect,
  onVerifyAll,
  onComments,
  sticky      = false,
}) {
  // Sentinel-based detection: border only appears when the bar is actually stuck
  const sentinelRef = useRef(null)
  const [isStuck, setIsStuck] = useState(false)

  useEffect(() => {
    if (!sticky || !sentinelRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [sticky])

  return (
    <>
      {sticky && <div ref={sentinelRef} style={{ height: 1, flexShrink: 0 }} />}
      <div style={{
        display:         'flex',
        alignItems:      'center',
        width:           '100%',
        backgroundColor: colors.white,
        ...(sticky ? {
          position:      'sticky',
          top:           0,
          zIndex:        10,
          paddingTop:    spacing.gap12,
          paddingBottom: spacing.gap12,
          paddingLeft:   spacing.gap24,
          paddingRight:  spacing.gap24,
          borderBottom:  isStuck ? `1px solid ${colors.dividerSubtle}` : 'none',
        } : {}),
      }}>
      <div style={{ flex: '1 0 0', minWidth: '1px' }}>
        <SourceTypeTabs
          tabs={sourceTabs}
          selectedTab={selectedTab}
          onTabSelect={onTabSelect}
          size="small"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <Divider />
        <IconBtn name="verify"           size={24} onClick={onVerifyAll} />
        <IconBtn name="reaction-comment" size={24} onClick={onComments} />
      </div>
    </div>
    </>
  )
}

// ── Main export ─────────────────────────────────────────────────────────────

export function SourcePopupTopSection({
  size              = 'Default',   // 'Default' | 'small'
  qCode             = '#K0520A2',
  questionTitle     = 'IV Fluids in hospital',
  previousAnswer    = '1. Yes',
  hasLittleMan      = true,
  assignAndCalendar = false,
  assignee          = 'No Assignee',
  dueDate           = 'Mar 23, 2025',
  sourceTabs        = ['Progress Notes', 'Assessments', 'Mars', 'Therapy Docs'],  // source type strings
  selectedTab       = null,   // null/'All' or a sourceType string
  answerType        = 'yes-dc',
  stickyTabs        = false,
  hideTabsRow       = false,  // set true when parent renders SourceTabsBar separately
  onClose,
  onTabSelect,
  onVerifyAll,
  onComments,
}) {
  const isSmall = size === 'small'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: stickyTabs ? 0 : spacing.gap32, width: '100%' }}>

      {/* ── Top row: title left, DcSuggests + close right ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: spacing.gap16, width: '100%', marginBottom: stickyTabs ? spacing.gap32 : undefined }}>

        {/* Left: question info + optional assign section */}
        <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', gap: spacing.gap16, minWidth: '1px', overflow: 'hidden' }}>
          <QuestionTitle
            qCode={qCode}
            title={questionTitle}
            previousAnswer={previousAnswer}
            truncate={isSmall}
          />

          {assignAndCalendar && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap8, width: '233px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>Assignees</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8 }}>
                  <NavIcon name="profile" size={24} />
                  <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>{assignee}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>Due Date</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8 }}>
                  <NavIcon name="arrow-right" size={24} />
                  <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>{dueDate}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: DcSuggests + close button */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          {hasLittleMan && (
            <DcSuggests size={isSmall ? 'small' : 'big'} answerType={answerType} />
          )}
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: 0, right: 0, background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', transform: hasLittleMan ? 'translate(0, -4px)' : 'none' }}
          >
            <NavIcon name="close" size={24} />
          </button>
        </div>
      </div>

      {/* Tabs row — rendered inline when not hoisted out as a sticky element */}
      {!hideTabsRow && (
        <SourceTabsBar
          sourceTabs={sourceTabs}
          selectedTab={selectedTab}
          onTabSelect={onTabSelect}
          onVerifyAll={onVerifyAll}
          onComments={onComments}
          sticky={stickyTabs}
        />
      )}

    </div>
  )
}
