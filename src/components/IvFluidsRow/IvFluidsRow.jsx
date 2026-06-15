import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'
import { NavIcon } from '../Icon/NavIcon.jsx'

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
  lineNumber,               // shown instead of verify/deny when purpose='source popup'
  count,                    // number shown in 'view more' e.g. 234
  // callbacks
  onClick,
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
        gap: spacing.gap16,
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
      {/* Line number — absolutely in the left padding gutter (source popup only) */}
      {isSourcePopup && lineNumber != null && (
        <span style={{
          position:  'absolute',
          left:      spacing.gap8,
          width:     '14px',
          textAlign: 'right',
          ...textStyle,
          flexShrink: 0,
        }}>
          {lineNumber}
        </span>
      )}

      {/* Name cell — text starts flush at the 24px padding edge */}
      <Cell flex="1 0 0">
        {!isSourcePopup && (
          <VerifyAndDeny type={vdTypeMap[verifyStatus] ?? 'empty'} size="small" />
        )}
        <span style={{ ...textStyle, overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flexShrink: 1 }}>
          {name}
        </span>
      </Cell>

      {/* Volume */}
      <Cell width="55px">
        <span style={textStyle}>{volume}</span>
      </Cell>

      {/* Dosage */}
      <Cell width="100px">
        <span style={textStyle}>{dosage}</span>
      </Cell>

      {/* Date */}
      <Cell width="72px">
        <span style={textStyle}>{date}</span>
      </Cell>

      {/* Page ref */}
      <Cell width="80px">
        <span style={textStyle}>{pageRef}</span>
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
            hasVerifyAndDeny={!isSourcePopup}
            hasPending={!isSourcePopup}
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
