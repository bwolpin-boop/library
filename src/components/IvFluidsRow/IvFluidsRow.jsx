import { useState, useEffect } from 'react'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { WithTooltip } from '../Tooltip/WithTooltip.jsx'

// ── Shared layout constants ─────────────────────────────────────────────────
// IMPORTANT: TABLE_COL_GAP is imported by SourceTypeTable's TableHeaderRow.
// If you change any value here you MUST keep SourceTypeTable's DEFAULT_COLUMNS in sync.
export const TABLE_COL_GAP = '16px'   // gap between every column cell
// Fixed column widths — must match DEFAULT_COLUMNS in SourceTypeTable
export const TABLE_COL_WIDTHS = { vol: 50, dosage: 95, date: 75, page: 90 }

function Cell({ width, flex, children, style: extraStyle }) {
  return (
    <div
      className="dc:flex dc:items-center dc:gap-gap8 dc:h-[32px] dc:p-0 dc:relative"
      style={{
        flexShrink: width ? 0 : undefined,
        width: width ?? undefined,
        flex: flex ?? undefined,
        minWidth: flex ? '1px' : undefined,
        ...extraStyle,
      }}
    >
      {children}
    </div>
  )
}

function PlusButton({ onClick }) {
  const [pressed, setPressed] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`dc:inline-flex dc:items-center dc:justify-center dc:w-[16px] dc:h-[16px] dc:shrink-0 dc:border-none dc:rounded-box-sm dc:cursor-pointer dc:p-0 ${pressed ? 'dc:bg-surface-active' : 'dc:hover:bg-surface-pressed dc:bg-transparent'}`}
    >
      <NavIcon name="plus-small" size={16} />
    </button>
  )
}

// type: 'Default' | 'verified' | 'pending' | 'denied'
const vdTypeMap = { verified: 'verify', pending: 'pending', denied: 'deny', Default: 'empty' }

// Inline vote badge — shows after the name, counts existing votes + own
function VoteBadge({ direction, count, isSelected, onClick }) {
  if (count <= 0) return null
  return (
    <button
      onClick={e => { e.stopPropagation(); onClick() }}
      className={`dc:inline-flex dc:items-center dc:gap-[2px] dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-[1px_3px] dc:rounded-[3px] dc:shrink-0 dc:transition-[background-color] dc:duration-100 ${isSelected ? 'dc:bg-surface-pressed' : 'dc:hover:bg-surface-hover'}`}
    >
      <NavIcon
        name={direction === 'up'
          ? (isSelected ? 'thumbs-up-pressed'   : 'thumbs-up')
          : (isSelected ? 'thumbs-down-pressed' : 'thumbs-down')}
        size={12}
      />
      <span className={`dc:font-montserrat dc:text-xxxs dc:font-medium dc:whitespace-nowrap ${isSelected ? 'dc:text-primary' : 'dc:text-secondary'}`}>
        {count}
      </span>
    </button>
  )
}

function ViewToggleRow({ purpose, count, onClick, style }) {
  const isMore = purpose === 'view more'

  return (
    <div
      onClick={onClick}
      className="dc:flex dc:items-center dc:justify-center dc:h-[32px] dc:px-gap24 dc:box-border dc:transition-[background-color] dc:duration-100 dc:hover:bg-surface dc:bg-white"
      style={{
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      <div className="dc:inline-flex dc:items-center dc:gap-gap8 dc:p-gap4 dc:rounded-box">
        <NavIcon name={isMore ? 'arrow-down' : 'arrow-up'} size={24} />
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">
          {isMore ? `View more${count != null ? ` (${count})` : ''}` : 'View less'}
        </span>
      </div>
    </div>
  )
}

export function IvFluidsRow({
  purpose = 'prescrub',     // 'prescrub' | 'source popup' | 'view more' | 'view less'
  type = 'Default',         // 'Default' | 'verified' | 'pending' | 'denied'
  // cell content
  name = 'Sodium Chloride',
  volume = '50 mL',
  dosage = '80 mL/3x a day',
  date = '15/04/2025',
  pageRef = 'pg. 12',       // legacy string display; use `pages` array for smart rendering
  pages,                    // array of page numbers, e.g. [12] | [12,24] | [5,13,52] | [5,13,52,47,...]
  hasMorePages = false,     // legacy fallback when `pages` is not provided
  showVolume = true,        // set false for surgery/diagnosis (no Dose column)
  showDosage = true,        // set false for tube-feeding/surgery/diagnosis (no Rate column)
  showDate   = true,        // set false for diagnosis (no Given on column)
  indicator = false,        // shows the yellow source indicator icon next to the name
  lineNumber,               // shown instead of verify/deny when purpose='source popup'
  count,                    // number shown in 'view more' e.g. 234
  upVotes   = 0,            // existing votes from others — thumbs up
  downVotes = 0,            // existing votes from others — thumbs down
  selected = false,  // persistent pressed state when the side panel is open for this row
  // callbacks
  onClick,
  onMorePages,              // called when the + page icon is clicked
  onVerify,
  onDeny,
  onPending,
  onCommentsClick,
  onUpClick,
  onDownClick,
  forcedStatus,  // 'Default' | 'verified' | 'pending' | 'denied' — overrides internal state when set
  style,
  className,
}) {
  const [hovered, setHovered]     = useState(false)
  const [vote, setVote]           = useState(null)     // null | 'up' | 'down'
  const [verifyStatus, setVerify] = useState(type)     // tracks the left-side dot

  useEffect(() => {
    if (forcedStatus !== undefined) setVerify(forcedStatus)
  }, [forcedStatus])

  if (purpose === 'view more' || purpose === 'view less') {
    return <ViewToggleRow purpose={purpose} count={count} onClick={onClick} style={style} />
  }

  const isSourcePopup = purpose === 'source popup'

  // Background colors per verify status — base and hover states from Figma
  // verified-200 (#ebf8e9) and pending-200 (#fff9e5) are Figma tokens not yet in tokens.js
  const STATUS_BASE  = { verified: '#f0fdf4', denied: '#fef2f2', pending: '#fefce8' }
  const STATUS_HOVER = { verified: '#ebf8e9',        denied: '#fee2e2', pending: '#fff9e5'        }
  const STATUS_GRAD  = { verified: 'rgba(246,255,246,0.5)', denied: 'rgba(255,242,242,0.5)', pending: 'rgba(255,249,228,0.5)' }

  const isStatusSet   = verifyStatus !== 'Default' && !(isSourcePopup && verifyStatus === 'denied')
  const baseBg        = isStatusSet ? (STATUS_BASE[verifyStatus]  ?? '#ffffff')   : '#ffffff'
  const hoverBg       = isStatusSet ? (STATUS_HOVER[verifyStatus] ?? '#f7f7f8')  : '#f7f7f8'
  const gradientStart = isStatusSet ? (STATUS_GRAD[verifyStatus]  ?? 'rgba(247,247,248,0)') : 'rgba(247,247,248,0)'
  const gradientEnd   = isStatusSet ? (STATUS_HOVER[verifyStatus] ?? '#f7f7f8')  : '#f7f7f8'
  const bgColor       = (isSourcePopup && selected) ? '#d9d9d9' : hovered ? hoverBg : baseBg
  const dimStyle      = verifyStatus === 'denied' ? { opacity: 0.5, transition: 'opacity 0.15s' } : {}

  function handleUpClick()    { setVote(v => v === 'up'   ? null : 'up');   onUpClick?.()   }
  function handleDownClick()  { setVote(v => v === 'down' ? null : 'down'); onDownClick?.() }
  // Row-level handlers update only this row's state. The external onVerify/onDeny/onPending
  // props are table-level callbacks (e.g. header deny-all) and must not be called from here —
  // doing so causes forcedRowStatus to reset, which in turn resets this row via useEffect.
  function handleVerify()     { setVerify(s => s === 'verified' ? 'Default' : 'verified') }
  function handleDeny()       { setVerify(s => s === 'denied'   ? 'Default' : 'denied')   }
  function handlePending()    { setVerify(s => s === 'pending'  ? 'Default' : 'pending')  }

  return (
    <div
      className={`dc:relative dc:flex dc:items-center dc:h-[32px] dc:px-gap24 dc:border-b dc:border-divider-subtle dc:box-border dc:transition-[background-color] dc:duration-100${className ? ` ${className}` : ''}`}
      onClick={isSourcePopup && onClick ? onClick : undefined}
      style={{
        gap: TABLE_COL_GAP,
        backgroundColor: bgColor,
        cursor: isSourcePopup && onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Name cell: status dot + name text */}
      <Cell flex="1 0 0">
        {/* Stop propagation so dot click doesn't open the panel */}
        <div onClick={e => e.stopPropagation()}>
          <VerifyAndDeny
            type={vdTypeMap[verifyStatus] ?? 'empty'}
            size="small"
            tooltipLabel={`Status: ${{ Default: 'Empty', verified: 'Verified', denied: 'Denied', pending: 'Pending' }[verifyStatus] ?? 'Empty'}`}
            onClick={() => setVerify('Default')}
          />
        </div>
        <span
          title={name}
          className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis dc:shrink"
          style={{ minWidth: 0, ...dimStyle }}
        >
          {name}
        </span>
        {indicator && <NavIcon name="indicator-yellow" size={16} style={dimStyle} />}
        {(upVotes > 0 || vote === 'up') && (
          <div style={dimStyle}>
            <VoteBadge
              direction="up"
              count={upVotes + (vote === 'up' ? 1 : 0)}
              isSelected={vote === 'up'}
              onClick={handleUpClick}
            />
          </div>
        )}
        {(downVotes > 0 || vote === 'down') && (
          <div style={dimStyle}>
            <VoteBadge
              direction="down"
              count={downVotes + (vote === 'down' ? 1 : 0)}
              isSelected={vote === 'down'}
              onClick={handleDownClick}
            />
          </div>
        )}
      </Cell>

      {/* Volume / Dose — hidden for surgery & diagnosis */}
      {showVolume && (
        <Cell width={`${TABLE_COL_WIDTHS.vol}px`} style={dimStyle}>
          <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis dc:shrink" style={{ minWidth: 0 }} title={volume}>{volume}</span>
        </Cell>
      )}

      {/* Dosage / Rate — hidden for tube-feeding, surgery & diagnosis */}
      {showDosage && (
        <Cell width={`${TABLE_COL_WIDTHS.dosage}px`} style={dimStyle}>
          <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis dc:shrink" style={{ minWidth: 0 }} title={dosage}>{dosage}</span>
        </Cell>
      )}

      {/* Date / Given on / Category — hidden for diagnosis */}
      {showDate && (
        <Cell width={`${TABLE_COL_WIDTHS.date}px`} style={dimStyle}>
          <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis dc:shrink" style={{ minWidth: 0 }}>{date}</span>
        </Cell>
      )}

      {/* Page ref */}
      <Cell width={`${TABLE_COL_WIDTHS.page}px`} style={dimStyle}>
        {pages != null ? (
          <>
            <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:shrink-0">
              {pages.slice(0, 3).join(', ')}
            </span>
            {pages.length > 3 && (
              <PlusButton onClick={e => { e.stopPropagation(); onMorePages?.() }} />
            )}
          </>
        ) : (
          <>
            <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis dc:shrink" style={{ minWidth: 0 }}>{pageRef}</span>
            {hasMorePages && (
              <PlusButton onClick={e => { e.stopPropagation(); onMorePages?.() }} />
            )}
          </>
        )}
      </Cell>

      {/* Actions overlay — mounted whenever voted OR hovered so ThumbsComponent never loses state */}
      {(hovered || vote !== null) && (
        <div
          onClick={e => e.stopPropagation()}
          className="dc:absolute dc:top-0 dc:bottom-0 dc:flex dc:items-center dc:justify-end"
          style={{
            right:      '24px',
            width:      '359px',
            gap:        '24px',
            background: hovered ? `linear-gradient(to right, ${gradientStart} 2.5%, ${gradientEnd} 25%)` : 'none',
            visibility: hovered ? 'visible' : 'hidden',
          }}
        >
          <RowHoverActions
            hasVerifyAndDeny={true}
            hasPending={true}
            upPressed={vote === 'up'}
            downPressed={vote === 'down'}
            activeVerify={verifyStatus !== 'Default' ? vdTypeMap[verifyStatus] : null}
            onVerify={handleVerify}
            onDeny={handleDeny}
            onPending={handlePending}
            onCommentsClick={onCommentsClick}
            onUpClick={handleUpClick}
            onDownClick={handleDownClick}
          />
        </div>
      )}
    </div>
  )
}
