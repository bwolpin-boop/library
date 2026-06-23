import { useState } from 'react'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { WithTooltip } from '../Tooltip/WithTooltip.jsx'

// Map type + state → NavIcon name
const iconName = {
  verify:  { default: 'vd-verify-default',  hover: 'vd-verify-hover',  clicked: 'vd-verify-clicked'  },
  deny:    { default: 'vd-deny-default',    hover: 'vd-deny-hover',    clicked: 'vd-deny-clicked'    },
  pending: { default: 'vd-pending-default', hover: 'vd-pending-hover', clicked: 'vd-pending-clicked' },
  empty:   { default: 'vd-empty-small' },
}

const smallIconName = {
  verify:  'vd-verify-small',
  deny:    'vd-deny-small',
  pending: 'vd-pending-small',
  empty:   'vd-empty-small',
}

export function VerifyAndDeny({
  type = 'deny',      // 'verify' | 'deny' | 'pending' | 'empty'
  size = 'big',       // 'big' | 'small'
  forceState,         // 'default' | 'hover' | 'clicked' — overrides mouse state (for stories)
  tooltipLabel,       // if provided, shows a dark tooltip on hover
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const isInteractive = type !== 'empty'

  const effectiveState = forceState ?? (hovered ? 'hover' : 'default')

  const name = size === 'small'
    ? smallIconName[type] ?? smallIconName.empty
    : (iconName[type]?.[effectiveState] ?? iconName[type]?.default ?? 'vd-deny-default')

  const px = size === 'small' ? 12 : 24

  const icon = (
    <div
      onClick={isInteractive ? onClick : undefined}
      onMouseEnter={isInteractive ? () => setHovered(true)  : undefined}
      onMouseLeave={isInteractive ? () => { setHovered(false); setPressed(false) } : undefined}
      onMouseDown={isInteractive ? () => setPressed(true)  : undefined}
      onMouseUp={isInteractive ? () => setPressed(false) : undefined}
      style={{
        display: 'inline-flex',
        cursor: isInteractive ? 'pointer' : 'default',
        flexShrink: 0,
        transform: pressed ? 'scale(0.9)' : 'scale(1)',
        transition: 'transform 0.1s ease',
      }}
    >
      <NavIcon name={name} size={px} />
    </div>
  )

  if (!tooltipLabel) return icon

  return (
    <WithTooltip label={tooltipLabel}>
      {icon}
    </WithTooltip>
  )
}
