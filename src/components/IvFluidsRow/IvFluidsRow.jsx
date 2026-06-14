import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, spacing } from '../../tokens.js'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'

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

export function IvFluidsRow({
  purpose = 'prescrub',     // 'prescrub' | 'source popup'
  type = 'Default',         // 'Default' | 'verified' | 'pending' | 'denied'
  // cell content
  name = 'Sodium Chloride',
  volume = '50 mL',
  dosage = '80 mL/3x a day',
  date = '15/04/2025',
  pageRef = 'pg. 12',
  lineNumber,               // shown instead of verify/deny when purpose='source popup'
  // row hover action handlers
  onVerify,
  onDeny,
  onPending,
  onCommentsClick,
  onUpClick,
  onDownClick,
}) {
  const [hovered, setHovered] = useState(false)

  const isSourcePopup = purpose === 'source popup'
  const bgColor = hovered ? colors.surface : colors.white

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: spacing.gap24,
        height: '32px',
        padding: `0 ${spacing.gap24}`,
        borderBottom: `1px solid ${colors.dividerSubtle}`,
        backgroundColor: bgColor,
        boxSizing: 'border-box',
        transition: 'background-color 0.1s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Name cell */}
      <Cell flex="1 0 0">
        {isSourcePopup ? (
          <span style={{ ...textStyle, width: '16px', flexShrink: 0, textAlign: 'center' }}>
            {lineNumber ?? ''}
          </span>
        ) : (
          <VerifyAndDeny type={vdTypeMap[type] ?? 'empty'} size="small" />
        )}
        <span style={textStyle}>{name}</span>
      </Cell>

      {/* Volume */}
      <Cell width="55px">
        <span style={textStyle}>{volume}</span>
      </Cell>

      {/* Dosage */}
      <Cell width="120px">
        <span style={textStyle}>{dosage}</span>
      </Cell>

      {/* Date */}
      <Cell width="80px">
        <span style={textStyle}>{date}</span>
      </Cell>

      {/* Page ref */}
      <Cell width="128px">
        <span style={textStyle}>{pageRef}</span>
      </Cell>

      {/* Hover overlay with gradient fade + actions */}
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
            background: `linear-gradient(to right, rgba(247,247,248,0) 0%, ${colors.surface} 25%)`,
            gap: spacing.gap24,
          }}
        >
          <RowHoverActions
            hasVerifyAndDeny={!isSourcePopup}
            hasPending={!isSourcePopup}
            onVerify={onVerify}
            onDeny={onDeny}
            onPending={onPending}
            onCommentsClick={onCommentsClick}
            onUpClick={onUpClick}
            onDownClick={onDownClick}
          />
        </div>
      )}
    </div>
  )
}
