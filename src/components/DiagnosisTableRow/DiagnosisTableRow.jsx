import { useState } from 'react'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'
import { TABLE_COL_GAP } from '../IvFluidsRow/IvFluidsRow.jsx'
import { TypeTag } from '../TypeTag/TypeTag.jsx'

// ─── VoteBadge (same pattern as IvFluidsRow) ─────────────────────────────────

function VoteBadge({ direction, count, isSelected, onClick }) {
  const [hov, setHov] = useState(false)
  if (count <= 0) return null
  return (
    <button
      onClick={e => { e.stopPropagation(); onClick() }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={[
        'dc:inline-flex dc:items-center dc:border-none dc:cursor-pointer dc:shrink-0',
        isSelected ? 'dc:bg-surface-pressed' : hov ? 'dc:bg-surface-hover' : 'dc:bg-transparent',
      ].join(' ')}
      style={{
        gap: '2px',
        background: 'none',
        padding: '1px 3px',
        borderRadius: '3px',
        backgroundColor: isSelected ? 'var(--dc-color-surface-pressed)' : (hov ? 'var(--dc-color-surface-hover)' : 'transparent'),
        transition: 'background-color 0.1s',
      }}
    >
      <NavIcon
        name={direction === 'up'
          ? (isSelected ? 'thumbs-up-pressed'   : 'thumbs-up')
          : (isSelected ? 'thumbs-down-pressed' : 'thumbs-down')}
        size={12}
      />
      <span
        className={`dc:font-montserrat dc:text-xxxs dc:font-medium dc:whitespace-nowrap ${isSelected ? 'dc:text-primary' : 'dc:text-secondary'}`}
        style={{ lineHeight: 'normal' }}
      >
        {count}
      </span>
    </button>
  )
}

// ─── vdTypeMap (same as IvFluidsRow) ─────────────────────────────────────────
const vdTypeMap = { verified: 'verify', pending: 'pending', denied: 'deny', none: 'empty' }

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
  const STATUS_BASE  = { verified: 'var(--dc-color-green-100)', denied: 'var(--dc-color-error-100)', pending: 'var(--dc-color-yellow-100)' }
  const STATUS_HOVER = { verified: '#ebf8e9',                   denied: 'var(--dc-color-error-200)', pending: '#fff9e5' }
  const STATUS_GRAD  = { verified: 'rgba(246,255,246,0.5)', denied: 'rgba(255,242,242,0.5)', pending: 'rgba(255,249,228,0.5)' }

  const isStatusSet   = status !== 'none'
  const baseBg        = isStatusSet ? (STATUS_BASE[status]  ?? (rowVariant === 'dark' ? 'var(--dc-color-surface)' : 'var(--dc-color-white)'))
                                    : (rowVariant === 'dark' ? 'var(--dc-color-surface)' : 'var(--dc-color-white)')
  const hoverBg       = isStatusSet ? (STATUS_HOVER[status] ?? 'var(--dc-color-surface)') : 'var(--dc-color-surface)'
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
      className={`dc:relative dc:flex dc:items-center dc:border-b dc:border-divider-subtle dc:box-border ${onClick ? 'dc:cursor-pointer' : 'dc:cursor-default'} ${className ?? ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        gap:             TABLE_COL_GAP,
        height:          '32px',
        padding:         '0 var(--dc-spacing-gap24)',
        backgroundColor: bgColor,
        transition:      'background-color 0.1s',
        ...style,
      }}
    >
      {/* Column 1 — Diagnosis (flex): verify dot + name + vote badges */}
      <div className="dc:flex dc:items-center dc:flex-1 dc:overflow-hidden" style={{ gap: '8px', minWidth: '1px', height: '32px' }}>
        <VerifyAndDeny type={vdTypeMap[status] ?? 'empty'} size="small" />
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:shrink" style={{ textOverflow: 'ellipsis', minWidth: 0 }}>
          {diagnosis}
        </span>
        {(upVotes > 0 || vote === 'up') && (
          <VoteBadge direction="up"   count={upVotes   + (vote === 'up'   ? 1 : 0)} isSelected={vote === 'up'}   onClick={handleUpClick}   />
        )}
        {(downVotes > 0 || vote === 'down') && (
          <VoteBadge direction="down" count={downVotes + (vote === 'down' ? 1 : 0)} isSelected={vote === 'down'} onClick={handleDownClick} />
        )}
      </div>

      {/* Column 2 — Clinical Category (165px): TypeTag label */}
      <div className="dc:flex dc:items-center dc:shrink-0" style={{ width: '165px', height: '32px' }}>
        <TypeTag label={clinicalCategory} />
      </div>

      {/* Column 3 — MDS Mapping (80px) */}
      <div className="dc:flex dc:items-center dc:shrink-0" style={{ width: '80px', height: '32px' }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{mdsMapping}</span>
      </div>

      {/* Hover overlay — same pattern as IvFluidsRow */}
      {hovered && (
        <div
          className="dc:absolute dc:top-0 dc:bottom-0 dc:flex dc:items-center dc:justify-end"
          style={{
            right:      'var(--dc-spacing-gap24)',
            width:      '359px',
            background: `linear-gradient(to right, ${gradientStart} 0%, ${hoverBg} 25%)`,
            gap:        'var(--dc-spacing-gap24)',
          }}
        >
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
