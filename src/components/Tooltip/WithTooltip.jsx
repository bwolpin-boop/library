import { useState } from 'react'
import { Tooltip } from './Tooltip.jsx'

export function WithTooltip({ label, children, position = 'top' }) {
  const [visible, setVisible] = useState(false)

  const isTop    = position === 'top'
  const isBottom = position === 'bottom'

  const bubbleStyle = {
    position:  'absolute',
    left:      '50%',
    transform: 'translateX(-50%)',
    zIndex:    1000,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    ...(isTop    ? { bottom: '100%', marginBottom: '6px' } : {}),
    ...(isBottom ? { top:    '100%', marginTop:    '6px' } : {}),
  }

  return (
    <div
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && label && (
        <div style={bubbleStyle}>
          <Tooltip mode="dark" arrow={isTop ? 'down' : 'up'}>
            {label}
          </Tooltip>
        </div>
      )}
    </div>
  )
}
