import { useState, useEffect } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { WithTooltip } from '../Tooltip/WithTooltip.jsx'

// ── Shared layout constants ─────────────────────────────────────────────────
// IMPORTANT: TABLE_COL_GAP is imported by SourceTypeTable's TableHeaderRow.
// If you change any value here you MUST keep SourceTypeTable's DEFAULT_COLUMNS in sync.
export const TABLE_COL_GAP = spacing.gap16   // gap between every column cell
// Fixed column widths — must match DEFAULT_COLUMNS in SourceTypeTable
export const TABLE_COL_WIDTHS = { vol: 50, dosage: 95, date: 75, page: 90 }

const textStyle = {
  fontFamily: fonts.montserrat,
  fontSize: fontSizes.xs,
  fontWeight: fontWeights.regular,
  lineHeight: lineHeights.sm,
  color: colors.primary,
  whiteSpace: 'nowrap',
}

function Cell({ width, flex, children, style: extraStyle }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: '32px',
        padding: 0,
        flexShrink: width ? 0 : undefined,
        width: width ?? undefined,
        flex: flex ?? undefined,
        minWidth: flex ? '1px' : undefined,
        position: 'relative',
        ...extraStyle,
      }}
    >
      {children}
    </div>
  )
}

function PlusButton({ onClick }) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 16, height: 16, flexShrink: 0,
        background: pressed ? colors.surfaceActive : hovered ? colors.surfacePressed : 'none',
        border: 'none', borderRadius: radii.boxSm, cursor: 'pointer', padding: 0,
      }}
    >
      <NavIcon name="plus-small" size={16} />
    </button>
  )
}

// type: 'Default' | 'verified' | 'pending' | 'denied'
const vdTypeMap = { verified: 'verify', pending: 'pending', denied: 'deny', Default: 'empty' }

// Inline vote badge — shows after the name, counts existing votes + own
function VoteBadge({ direction, count, isSelected, onClick }) {
  const [hov, setHov] = useState(false)
  if (count <= 0) return null
  return (
    <button
      onClick={e => { e.stopPropagation(); onClick() }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:         'inline-flex',
        alignItems:      'center',
        gap:             '2px',
        background:      'none',
        border:          'none',
        cursor:          'pointer',
        padding:         '1px 3px',
        borderRadius:    '3px',
        backgroundColor: isSelected ? colors.surfacePressed : (hov ? colors.surfaceHover : 'transparent'),
        flexShrink:      0,
        transition:      'background-color 0.1s',
      }}
    >
      <NavIcon
        name={direction === 'up'
          ? (isSelected ? 'thumbs-up-pressed'   : 'thumbs-up')
          : (isSelected ? 'thumbs-down-pressed' : 'thumbs-down')}
        size={12}
      />
      <span style={{
        fontFamily:  fonts.montserrat,
        fontSize:    fontSizes.xxxs,
        fontWeight:  fontWeights.medium,
        lineHeight:  'normal',
        color:       isSelected ? colors.primary : colors.secondary,
        whiteSpace:  'nowrap',
      }}>
        {count}
      </span>
    </button>
  )
}

function ViewToggleRow({ purpose, count, onClick, style }) {
  const isMore = purpose === 'view more'
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32px',
        padding: `0 ${spacing.gap24}`,
        backgroundColor: hovered ? colors.surface : colors.white,
        boxSizing: 'border-box',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background-color 0.1s',
        ...style,
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: spacing.gap8, padding: spacing.gap4, borderRadius: radii?.box ?? '10px' }}>
        <NavIcon name={isMore ? 'arrow-down' : 'arrow-up'} size={24} />
        <span style={{ ...textStyle }}>
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
  const STATUS_BASE  = { verified: colors.green100, denied: colors.error100, pending: colors.yellow100 }
  const STATUS_HOVER = { verified: '#ebf8e9',        denied: colors.error200, pending: '#fff9e5'        }
  const STATUS_GRAD  = { verified: 'rgba(246,255,246,0.5)', denied: 'rgba(255,242,242,0.5)', pending: 'rgba(255,249,228,0.5)' }

  const isStatusSet   = !isSourcePopup && verifyStatus !== 'Default'
  const baseBg        = isStatusSet ? (STATUS_BASE[verifyStatus]  ?? colors.white)   : colors.white
  const hoverBg       = isStatusSet ? (STATUS_HOVER[verifyStatus] ?? colors.surface)  : colors.surface
  const gradientStart = isStatusSet ? (STATUS_GRAD[verifyStatus]  ?? 'rgba(247,247,248,0)') : 'rgba(247,247,248,0)'
  const gradientEnd   = isStatusSet ? (STATUS_HOVER[verifyStatus] ?? colors.surface)  : colors.surface
  const bgColor       = hovered ? hoverBg : baseBg
  const dimStyle      = verifyStatus === 'denied' ? { opacity: 0.5, transition: 'opacity 0.15s' } : {}

  function handleUpClick()    { setVote(v => v === 'up'   ? null : 'up');   onUpClick?.()   }
  function handleDownClick()  { setVote(v => v === 'down' ? null : 'down'); onDownClick?.() }
  function handleVerify()     { setVerify(s => s === 'verified' ? 'Default' : 'verified'); onVerify?.()  }
  function handleDeny()       { setVerify(s => s === 'denied'   ? 'Default' : 'denied');   onDeny?.()    }
  function handlePending()    { setVerify(s => s === 'pending'  ? 'Default' : 'pending');  onPending?.() }

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: TABLE_COL_GAP,
        height: '32px',
        padding: `0 ${spacing.gap24}`,
        borderBottom: `1px solid ${colors.dividerSubtle}`,
        backgroundColor: bgColor,
        boxSizing: 'border-box',
        transition: 'background-color 0.1s',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Name cell: status dot (or line number) + name text */}
      <Cell flex="1 0 0">
        <VerifyAndDeny
          type={vdTypeMap[verifyStatus] ?? 'empty'}
          size="small"
          tooltipLabel={`Status: ${{ Default: 'Empty', verified: 'Verified', denied: 'Denied', pending: 'Pending' }[verifyStatus] ?? 'Empty'}`}
          onClick={() => setVerify('Default')}
        />
        <span
          title={name}
          style={{ ...textStyle, ...dimStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}
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
          <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }} title={volume}>{volume}</span>
        </Cell>
      )}

      {/* Dosage / Rate — hidden for tube-feeding, surgery & diagnosis */}
      {showDosage && (
        <Cell width={`${TABLE_COL_WIDTHS.dosage}px`} style={dimStyle}>
          <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }} title={dosage}>{dosage}</span>
        </Cell>
      )}

      {/* Date / Given on / Category — hidden for diagnosis */}
      {showDate && (
        <Cell width={`${TABLE_COL_WIDTHS.date}px`} style={dimStyle}>
          <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}>{date}</span>
        </Cell>
      )}

      {/* Page ref */}
      <Cell width={`${TABLE_COL_WIDTHS.page}px`} style={dimStyle}>
        {pages != null ? (
          <>
            <span style={{ ...textStyle, flexShrink: 0 }}>
              {pages.slice(0, 3).join(', ')}
            </span>
            {pages.length > 3 && (
              <PlusButton onClick={e => { e.stopPropagation(); onMorePages?.() }} />
            )}
          </>
        ) : (
          <>
            <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}>{pageRef}</span>
            {hasMorePages && (
              <PlusButton onClick={e => { e.stopPropagation(); onMorePages?.() }} />
            )}
          </>
        )}
      </Cell>

      {/* Actions overlay — mounted whenever voted OR hovered so ThumbsComponent never loses state */}
      {(hovered || vote !== null) && (
        <div
          style={{
            position:   'absolute',
            right:      spacing.gap24,
            top:        0,
            bottom:     0,
            width:      '359px',
            display:    'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            background: hovered ? `linear-gradient(to right, ${gradientStart} 2.5%, ${gradientEnd} 25%)` : 'none',
            gap:        spacing.gap24,
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
