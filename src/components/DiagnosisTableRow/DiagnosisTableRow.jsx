import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'
import { TABLE_COL_GAP } from '../IvFluidsRow/IvFluidsRow.jsx'

// ─── VoteBadge (same pattern as IvFluidsRow) ─────────────────────────────────

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
        fontFamily: fonts.montserrat,
        fontSize:   fontSizes.xxxs,
        fontWeight: fontWeights.medium,
        lineHeight: 'normal',
        color:      isSelected ? colors.primary : colors.secondary,
        whiteSpace: 'nowrap',
      }}>
        {count}
      </span>
    </button>
  )
}

// ─── vdTypeMap (same as IvFluidsRow) ─────────────────────────────────────────
const vdTypeMap = { verified: 'verify', pending: 'pending', denied: 'deny', none: 'empty' }

// ─── Shared text style ───────────────────────────────────────────────────────
const textSm = {
  fontFamily: fonts.montserrat,
  fontSize:   fontSizes.xs,
  fontWeight: fontWeights.regular,
  lineHeight: lineHeights.sm,
  color:      colors.primary,
  whiteSpace: 'nowrap',
}

// ─── DiagnosisTableRow ───────────────────────────────────────────────────────

export function DiagnosisTableRow({
  // Initial verify state (matches IvFluidsRow `type` prop pattern)
  verifyStatus  = 'none',     // 'none' | 'verified' | 'pending' | 'denied'
  // Alternating row shading
  rowVariant    = 'light',    // 'light' | 'dark'
  // Cell content
  diagnosis     = 'Hypertension (High Blood Pressure)',
  clinicalCategory = 'Acute',
  mdsMapping    = 'HGHGD',
  // Other-people votes (shows inline badge in name cell, never selected)
  upVotes       = 0,
  downVotes     = 0,
  // Hover actions
  commentsCount,
  hasPending    = true,
  // Callbacks
  onVerify, onDeny, onPending,
  onUpClick, onDownClick, onCommentsClick,
  onClick,
  style, className,
}) {
  const [hovered, setHovered]     = useState(false)
  const [vote, setVote]           = useState(null)          // null | 'up' | 'down'
  const [status, setStatus]       = useState(verifyStatus)  // interactive verify dot

  // ── Background (same logic as IvFluidsRow status colors) ──────────────────
  const STATUS_BASE  = { verified: colors.green100, denied: colors.error100, pending: colors.yellow100 }
  const STATUS_HOVER = { verified: '#ebf8e9',        denied: colors.error200, pending: '#fff9e5' }
  const STATUS_GRAD  = { verified: 'rgba(246,255,246,0.5)', denied: 'rgba(255,242,242,0.5)', pending: 'rgba(255,249,228,0.5)' }

  const isStatusSet   = status !== 'none'
  const baseBg        = isStatusSet ? (STATUS_BASE[status]  ?? (rowVariant === 'dark' ? colors.surface : colors.white))
                                    : (rowVariant === 'dark' ? colors.surface : colors.white)
  const hoverBg       = isStatusSet ? (STATUS_HOVER[status] ?? colors.surface) : colors.surface
  const gradientStart = isStatusSet ? (STATUS_GRAD[status]  ?? 'rgba(247,247,248,0)') : 'rgba(247,247,248,0)'
  const bgColor       = hovered ? hoverBg : baseBg

  // ── Handlers ──────────────────────────────────────────────────────────────
  function handleUpClick()   { setVote(v => v === 'up'   ? null : 'up');                      onUpClick?.()   }
  function handleDownClick() { setVote(v => v === 'down' ? null : 'down');                    onDownClick?.() }
  function handleVerify()    { setStatus(s => s === 'verified' ? 'none' : 'verified');         onVerify?.()    }
  function handleDeny()      { setStatus(s => s === 'denied'   ? 'none' : 'denied');           onDeny?.()      }
  function handlePending()   { setStatus(s => s === 'pending'  ? 'none' : 'pending');          onPending?.()   }

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        position:        'relative',
        display:         'flex',
        alignItems:      'center',
        gap:             TABLE_COL_GAP,
        height:          '32px',
        padding:         `0 ${spacing.gap24}`,
        backgroundColor: bgColor,
        borderBottom:    `1px solid ${colors.dividerSubtle}`,
        cursor:          onClick ? 'pointer' : 'default',
        boxSizing:       'border-box',
        transition:      'background-color 0.1s',
        ...style,
      }}
    >
      {/* Column 1 — Diagnosis (flex): verify dot + name + vote badges */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1 0 0', minWidth: '1px', height: '32px', overflow: 'hidden' }}>
        <VerifyAndDeny type={vdTypeMap[status] ?? 'empty'} size="small" />
        <span style={{ ...textSm, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}>
          {diagnosis}
        </span>
        {(upVotes > 0 || vote === 'up') && (
          <VoteBadge direction="up"   count={upVotes   + (vote === 'up'   ? 1 : 0)} isSelected={vote === 'up'}   onClick={handleUpClick}   />
        )}
        {(downVotes > 0 || vote === 'down') && (
          <VoteBadge direction="down" count={downVotes + (vote === 'down' ? 1 : 0)} isSelected={vote === 'down'} onClick={handleDownClick} />
        )}
      </div>

      {/* Column 2 — Clinical Category (120px) */}
      <div style={{ display: 'flex', alignItems: 'center', width: '120px', height: '32px', flexShrink: 0 }}>
        <span style={textSm}>{clinicalCategory}</span>
      </div>

      {/* Column 3 — MDS Mapping (80px) */}
      <div style={{ display: 'flex', alignItems: 'center', width: '80px', height: '32px', flexShrink: 0 }}>
        <span style={textSm}>{mdsMapping}</span>
      </div>

      {/* Hover overlay — same pattern as IvFluidsRow */}
      {hovered && (
        <div style={{
          position:    'absolute',
          right:       spacing.gap24,
          top:         0,
          bottom:      0,
          width:       '359px',
          display:     'flex',
          alignItems:  'center',
          justifyContent: 'flex-end',
          background:  `linear-gradient(to right, ${gradientStart} 0%, ${hoverBg} 25%)`,
          gap:         spacing.gap24,
        }}>
          <RowHoverActions
            hasVerifyAndDeny
            hasPending={hasPending}
            upPressed={vote === 'up'}
            downPressed={vote === 'down'}
            activeVerify={status !== 'none' ? vdTypeMap[status] : null}
            commentsCount={commentsCount}
            onUpClick={handleUpClick}
            onDownClick={handleDownClick}
            onCommentsClick={onCommentsClick}
            onVerify={handleVerify}
            onDeny={handleDeny}
            onPending={handlePending}
          />
        </div>
      )}
    </div>
  )
}
