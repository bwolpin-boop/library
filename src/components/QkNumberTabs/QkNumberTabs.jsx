import { useState } from 'react'
import { VerifyAndDeny } from '../VerifyDeny/VerifyAndDeny.jsx'

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

  const hasIndicator = verifiedDenied === 'verified' || verifiedDenied === 'denied'
  const isBig = size === 'big'

  let stateClassName = ''
  if (effectiveState === 'hover') {
    stateClassName = 'dc:bg-surface dc:border dc:border-divider-subtle'
  } else if (effectiveState === 'clicked') {
    stateClassName = 'dc:bg-transparent dc:border dc:border-primary'
  } else {
    stateClassName = 'dc:bg-transparent dc:border dc:border-divider-subtle'
  }

  return (
    <div
      className={`dc:inline-flex dc:items-center dc:rounded-[6px] dc:cursor-pointer dc:whitespace-nowrap dc:shrink-0 ${stateClassName} ${isBig ? 'dc:py-[4px] dc:px-gap8' : 'dc:h-[20px] dc:px-[6px]'} ${hasIndicator ? 'dc:gap-[4px]' : ''}`}
      onClick={onClick}
      onMouseEnter={() => isInteractive && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary">
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
