import { useState } from 'react'
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
export const TABLE_COL_WIDTHS = { vol: 50, dosage: 95, date: 75, page: 60 }

const textStyle = {
  fontFamily: fonts.montserrat,
  fontSize: fontSizes.xs,
  fontWeight: fontWeights.regular,
  lineHeight: lineHeights.sm,
  color: colors.primary,
  whiteSpace: 'nowrap',
}

function Cell({ width, flex, children }) {
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
      }}
    >
      {children}
    </div>
  )
}

// type: 'Default' | 'verified' | 'pending' | 'denied'
const vdTypeMap = { verified: 'verify', pending: 'pending', denied: 'deny', Default: 'empty' }

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
  pageRef = 'pg. 12',
  hasMorePages = false,     // shows + icon after page text (e.g. "pg. 1, 2, 3 +")
  lineNumber,               // shown instead of verify/deny when purpose='source popup'
  count,                    // number shown in 'view more' e.g. 234
  // callbacks
  onClick,
  onMorePages,              // called when the + page icon is clicked
  onVerify,
  onDeny,
  onPending,
  onCommentsClick,
  onUpClick,
  onDownClick,
  style,
  className,
}) {
  const [hovered, setHovered]     = useState(false)
  const [vote, setVote]           = useState(null)     // null | 'up' | 'down'
  const [verifyStatus, setVerify] = useState(type)     // tracks the left-side dot

  if (purpose === 'view more' || purpose === 'view less') {
    return <ViewToggleRow purpose={purpose} count={count} onClick={onClick} style={style} />
  }

  const isSourcePopup = purpose === 'source popup'

  // Background colors per verify status — base and hover states from Figma
  // verified-200 (#ebf8e9) and pending-200 (#fff9e5) are Figma tokens not yet in tokens.js
  const STATUS_BASE  = { verified: colors.green100, denied: colors.error100, pending: colors.yellow100 }
  const STATUS_HOVER = { verified: '#ebf8e9',        denied: colors.error200, pending: '#fff9e5'        }
  const STATUS_GRAD  = { verified: 'rgba(246,255,246,0.5)', denied: 'rgba(255,242,242,0.5)', pending: 'rgba(255,249,228,0.5)' }

  const isStatusSet   = verifyStatus !== 'Default'
  const baseBg        = isStatusSet ? (STATUS_BASE[verifyStatus]  ?? colors.white)   : colors.white
  const hoverBg       = isStatusSet ? (STATUS_HOVER[verifyStatus] ?? colors.surface)  : colors.surface
  const gradientStart = isStatusSet ? (STATUS_GRAD[verifyStatus]  ?? 'rgba(247,247,248,0)') : 'rgba(247,247,248,0)'
  const gradientEnd   = isStatusSet ? (STATUS_HOVER[verifyStatus] ?? colors.surface)  : colors.surface
  const bgColor       = hovered ? hoverBg : baseBg

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
        {isSourcePopup ? (
          lineNumber != null && (
            <span style={{ ...textStyle, width: '12px', flexShrink: 0, textAlign: 'right' }}>
              {lineNumber}
            </span>
          )
        ) : (
          <VerifyAndDeny
            type={vdTypeMap[verifyStatus] ?? 'empty'}
            size="small"
            tooltipLabel={`Status: ${{ Default: 'Empty', verified: 'Verified', denied: 'Denied', pending: 'Pending' }[verifyStatus] ?? 'Empty'}`}
            onClick={() => setVerify('Default')}
          />
        )}
        <span
          title={name}
          style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}
        >
          {name}
        </span>
      </Cell>

      {/* Volume */}
      <Cell width={`${TABLE_COL_WIDTHS.vol}px`}>
        <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }} title={volume}>{volume}</span>
      </Cell>

      {/* Dosage / Rate */}
      <Cell width={`${TABLE_COL_WIDTHS.dosage}px`}>
        <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }} title={dosage}>{dosage}</span>
      </Cell>

      {/* Date / Given on */}
      <Cell width={`${TABLE_COL_WIDTHS.date}px`}>
        <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}>{date}</span>
      </Cell>

      {/* Page ref — optional + icon when there are multiple pages */}
      <Cell width={`${TABLE_COL_WIDTHS.page}px`}>
        <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}>{pageRef}</span>
        {hasMorePages && (
          <button
            onClick={e => { e.stopPropagation(); onMorePages?.() }}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <NavIcon name="more" size={16} />
          </button>
        )}
      </Cell>

      {/* Compact vote badge — shown when voted but not hovering */}
      {vote !== null && !hovered && (
        <div style={{
          position:        'absolute',
          right:           spacing.gap24,
          top:             '50%',
          transform:       'translateY(-50%)',
          display:         'flex',
          alignItems:      'center',
          padding:         '2px',
          backgroundColor: colors.surfacePressed,
          borderRadius:    '2px',
          flexShrink:      0,
        }}>
          <NavIcon name={vote === 'up' ? 'thumbs-up-pressed' : 'thumbs-down-pressed'} size={16} />
        </div>
      )}

      {/* Full actions overlay — visible on hover */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            right: spacing.gap24,
            top: 0,
            bottom: 0,
            width: '359px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            background: `linear-gradient(to right, ${gradientStart} 2.5%, ${gradientEnd} 25%)`,
            gap: spacing.gap24,
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
