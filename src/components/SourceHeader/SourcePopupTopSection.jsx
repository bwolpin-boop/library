import { useState, useEffect, useRef } from 'react'
import { colors, radii, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { IconButton } from '../Icon/IconButton.jsx'
import { DcSuggests } from './DcSuggests.jsx'
import { SourceTypeTabs } from '../SourceTypeTab/SourceTypeTabs.jsx'
import { SourceTitle } from '../SourceTitle/SourceTitle.jsx'

function Divider() {
  return (
    <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ width: '1px', height: '100%', backgroundColor: colors.dividerSubtle }} />
    </div>
  )
}


// ── Exported tabs bar — used as a standalone sticky element in SourcePopup ──
// Must be a *direct child* of the scroll container for position:sticky to work.

export function SourceTabsBar({
  sourceTabs      = [],
  selectedTab     = null,
  onTabSelect,
  onVerifyAll,
  onComments,
  commentsActive  = false,
  denyAllActive   = false,
  sticky          = false,
}) {

  return (
    <>
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
          borderBottom:  `1px solid ${colors.dividerSubtle}`,
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
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8, flexShrink: 0 }}>
        <Divider />
        <IconButton
          name="deny-all-circle"
          size={24}
          color="secondary"
          active={denyAllActive}
          onClick={() => onVerifyAll?.()}
        />
        <IconButton
          name="reaction-comment"
          size={24}
          active={commentsActive}
          onClick={() => onComments?.()}
        />
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
          <SourceTitle
            id={qCode}
            sourceName={questionTitle}
            mdsAnswer={previousAnswer}
            whichProduct="dashboard"
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
