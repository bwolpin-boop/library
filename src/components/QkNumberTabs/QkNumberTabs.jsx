import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights } from '../../tokens.js'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'

const stateStyles = {
  default: {
    backgroundColor: 'transparent',
    border: `1px solid ${colors.dividerSubtle}`,
  },
  hover: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.dividerSubtle}`,
  },
  clicked: {
    backgroundColor: 'transparent',
    border: `1px solid ${colors.primary}`,
  },
}

export function QkNumberTabs({
  label = 'M1200B',
  size = 'big',              // 'big' | 'small'
  state = 'default',         // 'default' | 'hover' | 'clicked'
  verifiedDenied = 'Default', // 'Default' | 'verified' | 'denied'
  onClick,
}) {
  const [hovered, setHovered] = useState(false)

  const isInteractive = state === 'default'
  const effectiveState = isInteractive && hovered ? 'hover' : state
  const stateStyle = stateStyles[effectiveState] ?? stateStyles.default

  const hasIndicator = verifiedDenied === 'verified' || verifiedDenied === 'denied'
  const isBig = size === 'big'

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: hasIndicator ? '4px' : undefined,
        borderRadius: '6px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        padding: isBig ? '4px 8px' : '0 6px',
        height: isBig ? undefined : '20px',
        flexShrink: 0,
        ...stateStyle,
      }}
      onClick={onClick}
      onMouseEnter={() => isInteractive && setHovered(true)}
      onMouseLeave={() => isInteractive && setHovered(false)}
    >
      <span
        style={{
          fontFamily: fonts.montserrat,
          fontSize: fontSizes.xs,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights.sm,
          color: colors.primary,
        }}
      >
        {label}
      </span>
      {hasIndicator && (
        <VerifyAndDeny
          type={verifiedDenied === 'verified' ? 'verify' : 'deny'}
          size="small"
        />
      )}
    </div>
  )
}
