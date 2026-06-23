import { useState } from 'react'

const DOT_COLOR = {
  pending:  'dc:bg-muted',
  verified: 'dc:bg-green',
  dismissed: 'dc:bg-error',
  complete: 'dc:bg-purple',
}

const LABEL = {
  pending:         'Pending',
  verified:        'Verified',
  dismissed:       'Dismissed',
  complete:        'Complete',
  'combi-pending':  'Pending',
  'combi-verified': 'Verified',
  'combi-dismissed': 'Dismissed',
}

const COMBI_COLORS = {
  'combi-pending':   ['dc:bg-muted',  'dc:bg-muted'],
  'combi-verified':  ['dc:bg-green',  'dc:bg-green'],
  'combi-dismissed': ['dc:bg-muted',  'dc:bg-error'],
}

function SingleDot({ colorClass, size }) {
  return (
    <div
      className={`dc:rounded-full dc:shrink-0 ${colorClass}`}
      style={{ width: size, height: size }}
    />
  )
}

function CombiDot({ colorClasses: [c1, c2], size }) {
  const gap = size <= 8 ? 1 : 2
  return (
    <div className="dc:flex dc:items-center dc:shrink-0" style={{ gap: `${gap}px` }}>
      <div className={`dc:rounded-full dc:shrink-0 ${c1}`} style={{ width: size, height: size }} />
      <div className={`dc:rounded-full dc:shrink-0 ${c2}`} style={{ width: size, height: size }} />
    </div>
  )
}

export function Status({
  status = 'pending',
  size = 'default',
  onClick,
}) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)

  const isSmall = size === 'small'
  const isCombi = status.startsWith('combi')

  const dotSize  = isSmall ? 8 : 12

  const bgClass = pressed ? 'dc:bg-surface-active'
    : hover   ? 'dc:bg-surface-hover'
    : 'dc:bg-transparent'

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={`dc:inline-flex dc:items-center dc:justify-center dc:rounded-box-sm dc:border-none dc:transition-[background-color] dc:duration-100 ${bgClass} ${isSmall ? 'dc:py-0 dc:px-gap8' : 'dc:py-gap4 dc:px-gap8'}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className={`dc:flex dc:items-center ${isSmall ? 'dc:gap-gap4' : 'dc:gap-gap8'}`}>
        {isCombi
          ? <CombiDot colorClasses={COMBI_COLORS[status]} size={dotSize} />
          : <SingleDot colorClass={DOT_COLOR[status]} size={dotSize} />
        }
        <span className={`dc:font-montserrat dc:font-regular dc:text-primary dc:whitespace-nowrap ${isSmall ? 'dc:text-xs dc:leading-sm' : 'dc:text-sm dc:leading-base'}`}>
          {LABEL[status]}
        </span>
      </div>
    </button>
  )
}
