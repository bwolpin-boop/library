import { useState, useEffect, useRef } from 'react'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { IconButton } from '../Icon/IconButton.jsx'
import { DcSuggests } from './DcSuggests.jsx'
import { SourceTypeTabs } from '../SourceTypeTab/SourceTypeTabs.jsx'
import { SourceTitle } from '../SourceTitle/SourceTitle.jsx'

function Divider() {
  return (
    <div className="dc:w-gap24 dc:h-gap24 dc:flex dc:items-center dc:justify-center dc:shrink-0">
      <div className="dc:w-px dc:h-full dc:bg-divider-subtle" />
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
      <div
        className={[
          'dc:flex dc:items-center dc:w-full dc:bg-white',
          sticky ? 'dc:sticky dc:top-0 dc:z-10 dc:py-gap12 dc:px-gap24 dc:border-b dc:border-divider-subtle' : '',
        ].join(' ')}
      >
        <div className="dc:flex-1" style={{ minWidth: '1px' }}>
          <SourceTypeTabs
            tabs={sourceTabs}
            selectedTab={selectedTab}
            onTabSelect={onTabSelect}
            size="small"
          />
        </div>
        <div className="dc:flex dc:items-center dc:gap-gap8 dc:shrink-0">
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
    <div
      className="dc:flex dc:flex-col dc:w-full"
      style={{ gap: stickyTabs ? 0 : '32px' }}
    >

      {/* ── Top row: title left, DcSuggests + close right ── */}
      <div
        className="dc:flex dc:items-start dc:justify-between dc:gap-gap16 dc:w-full"
        style={{ marginBottom: stickyTabs ? '32px' : undefined }}
      >

        {/* Left: question info + optional assign section */}
        <div className="dc:flex dc:flex-1 dc:flex-col dc:gap-gap16 dc:overflow-hidden" style={{ minWidth: '1px' }}>
          <SourceTitle
            id={qCode}
            sourceName={questionTitle}
            mdsAnswer={previousAnswer}
            whichProduct="dashboard"
          />

          {assignAndCalendar && (
            <div className="dc:flex dc:flex-col dc:gap-gap8" style={{ width: '233px' }}>
              <div className="dc:flex dc:items-center dc:justify-between">
                <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">Assignees</span>
                <div className="dc:flex dc:items-center dc:gap-gap8">
                  <NavIcon name="profile" size={24} />
                  <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">{assignee}</span>
                </div>
              </div>
              <div className="dc:flex dc:items-center dc:justify-between">
                <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">Due Date</span>
                <div className="dc:flex dc:items-center dc:gap-gap8">
                  <NavIcon name="arrow-right" size={24} />
                  <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">{dueDate}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: DcSuggests + close button */}
        <div className="dc:relative dc:shrink-0">
          {hasLittleMan && (
            <DcSuggests size={isSmall ? 'small' : 'big'} answerType={answerType} />
          )}
          <button
            onClick={onClose}
            className="dc:absolute dc:top-0 dc:right-0 dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-0 dc:flex"
            style={{ transform: hasLittleMan ? 'translate(0, -4px)' : 'none' }}
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
