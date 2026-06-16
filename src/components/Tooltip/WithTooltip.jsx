import { useState, useRef } from 'react'
import { Tooltip } from './Tooltip.jsx'

export function WithTooltip({ label, children, position = 'top', align = 'center' }) {
  const [rect, setRect] = useState(null)
  const wrapperRef = useRef(null)

  function handleMouseEnter() {
    if (wrapperRef.current) setRect(wrapperRef.current.getBoundingClientRect())
  }
  function handleMouseLeave() {
    setRect(null)
  }

  const isTop = position === 'top'

  let tooltipStyle = null
  if (rect && label) {
    const centerX = rect.left + rect.width / 2
    tooltipStyle = {
      position:      'fixed',
      zIndex:        9999,
      whiteSpace:    'nowrap',
      pointerEvents: 'none',
      ...(isTop
        ? { bottom: `${window.innerHeight - rect.top + 6}px` }
        : { top:    `${rect.bottom + 6}px` }),
      ...(align === 'left'  ? { left:  `${rect.left}px` } :
          align === 'right' ? { right: `${window.innerWidth - rect.right}px` } :
          { left: `${centerX}px`, transform: 'translateX(-50%)' }),
    }
  }

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {tooltipStyle && (
        <div style={tooltipStyle}>
          <Tooltip mode="dark" arrow={isTop ? 'down' : 'up'}>
            {label}
          </Tooltip>
        </div>
      )}
    </div>
  )
}
