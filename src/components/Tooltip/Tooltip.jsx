function TooltipArrow({ arrow, mode }) {
  const isDark = mode === 'dark'
  const fill = isDark ? 'var(--color-primary)' : '#ffffff'
  const strokeColor = 'var(--color-divider-subtle)'

  // Rounded tip via quadratic bezier at the point vertex
  const ARROWS = {
    left: {
      fillD:   'M5 0 L1.2 3.1 Q0 4 1.2 4.9 L5 8 Z',
      strokeD: 'M5 0 L1.2 3.1 Q0 4 1.2 4.9 L5 8',
      w: 5, h: 8, viewBox: '0 0 5 8',
      className: 'dc:absolute dc:top-1/2 dc:overflow-visible dc:shrink-0',
      style: { left: '-4px', transform: 'translateY(-50%)' },
    },
    right: {
      fillD:   'M0 0 L3.8 3.1 Q5 4 3.8 4.9 L0 8 Z',
      strokeD: 'M0 0 L3.8 3.1 Q5 4 3.8 4.9 L0 8',
      w: 5, h: 8, viewBox: '0 0 5 8',
      className: 'dc:absolute dc:top-1/2 dc:overflow-visible dc:shrink-0',
      style: { right: '-4px', transform: 'translateY(-50%)' },
    },
    down: {
      fillD:   'M0 0 L3.1 3.8 Q4 5 4.9 3.8 L8 0 Z',
      strokeD: 'M0 0 L3.1 3.8 Q4 5 4.9 3.8 L8 0',
      w: 8, h: 5, viewBox: '0 0 8 5',
      className: 'dc:absolute dc:left-1/2 dc:overflow-visible dc:shrink-0',
      style: { bottom: '-4px', transform: 'translateX(-50%)' },
    },
    up: {
      fillD:   'M0 5 L3.1 1.2 Q4 0 4.9 1.2 L8 5 Z',
      strokeD: 'M0 5 L3.1 1.2 Q4 0 4.9 1.2 L8 5',
      w: 8, h: 5, viewBox: '0 0 8 5',
      className: 'dc:absolute dc:left-1/2 dc:overflow-visible dc:shrink-0',
      style: { top: '-4px', transform: 'translateX(-50%)' },
    },
  }

  const cfg = ARROWS[arrow]
  if (!cfg) return null

  return (
    <svg width={cfg.w} height={cfg.h} viewBox={cfg.viewBox} fill="none"
      className={cfg.className} style={cfg.style}>
      <path d={cfg.fillD} fill={fill} />
      {!isDark && (
        <path d={cfg.strokeD} stroke={strokeColor} strokeWidth="1" strokeLinejoin="round" fill="none" />
      )}
    </svg>
  )
}

export function Tooltip({
  children = 'Tooltip text',
  arrow = 'left',
  mode = 'light',
  size = 'big',
  maxWidth,
}) {
  const isDark = mode === 'dark'
  const isSmall = size === 'small'

  return (
    <div className="dc:relative dc:inline-block" style={{ maxWidth }}>
      <div
        className={`dc:px-gap12 dc:py-gap8 dc:rounded-box-sm dc:box-border ${isDark ? 'dc:bg-primary' : 'dc:bg-white dc:border dc:border-divider-subtle'}`}
      >
        <span
          className={`dc:block dc:font-montserrat dc:font-regular dc:break-words ${isDark ? 'dc:text-white' : 'dc:text-primary'} ${isSmall ? 'dc:text-xxxs' : 'dc:text-xs dc:leading-sm'}`}
          style={isSmall ? { lineHeight: 'normal' } : {}}
        >
          {children}
        </span>
      </div>
      <TooltipArrow arrow={arrow} mode={mode} />
    </div>
  )
}
