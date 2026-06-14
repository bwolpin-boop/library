import { useState, useRef, useEffect } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'
import { SourceTypeTab } from './SourceTypeTab.jsx'

function RightChevron({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M6 4L10 8L6 12" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SourceTypeTabs({
  tabs = ['Progress Notes', 'Assessments', 'Mars', 'Therapy Docs'],
  selectedTab = null,
  onTabSelect,
  size = 'big',
  tabWithArrows = null,
}) {
  const scrollRef = useRef(null)
  const [canScroll, setCanScroll] = useState(false)
  const [allHovered, setAllHovered] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => setCanScroll(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth)
    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    el.addEventListener('scroll', check)
    return () => { ro.disconnect(); el.removeEventListener('scroll', check) }
  }, [tabs])

  const scrollRight = () => scrollRef.current?.scrollBy({ left: 120, behavior: 'smooth' })

  const isBig = size === 'big'
  const fontSize = isBig ? fontSizes.sm : fontSizes.xs
  const borderWidth = isBig ? '1px' : '0.5px'
  const tabGap = isBig ? '8px' : '4px'
  const allPadX = isBig ? '12px' : '8px'
  const allPadY = isBig ? '4px' : '2px'
  const tabHeight = isBig ? '32px' : '22px'
  const gradientWidth = isBig ? 102 : 47
  const arrowRight = isBig ? 21 : 4
  const arrowTop = isBig ? 8 : 3

  const isAllSelected = !selectedTab || selectedTab === 'All'
  const allBorderColor = isAllSelected ? colors.primary : colors.dividerSubtle
  const allBgColor = !isAllSelected && allHovered ? colors.surfaceHover : colors.white
  const allFontWeight = isBig ? fontWeights.medium : fontWeights.regular

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: tabGap,
          overflowX: 'auto',
          paddingBottom: '20px',
          marginBottom: '-20px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: tabHeight,
            paddingLeft: allPadX,
            paddingRight: allPadX,
            paddingTop: allPadY,
            paddingBottom: allPadY,
            borderRadius: radii.boxSm,
            border: `${borderWidth} solid ${allBorderColor}`,
            backgroundColor: allBgColor,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            boxSizing: 'border-box',
            transition: 'background-color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={() => !isAllSelected && setAllHovered(true)}
          onMouseLeave={() => setAllHovered(false)}
          onClick={() => onTabSelect?.('All')}
        >
          <span style={{
            fontFamily: fonts.montserrat,
            fontSize,
            fontWeight: allFontWeight,
            color: colors.primary,
            lineHeight: isBig ? '21px' : '18px',
          }}>
            All
          </span>
        </div>

        {tabs.map((type) => (
          <div key={type} style={{ flexShrink: 0 }} onClick={() => onTabSelect?.(type)}>
            <SourceTypeTab
              type={type}
              size={size}
              state={selectedTab === type ? 'pressed' : 'default'}
              showArrows={tabWithArrows === type}
            />
          </div>
        ))}
      </div>

      {canScroll && (
        <>
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: `${gradientWidth}px`,
              background: 'linear-gradient(to right, rgba(255,255,255,0) 11%, #ffffff 41%)',
              pointerEvents: 'none',
            }}
          />
          <button
            onClick={scrollRight}
            aria-label="Scroll tabs right"
            style={{
              position: 'absolute',
              right: `${arrowRight}px`,
              top: `${arrowTop}px`,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '16px',
              height: '16px',
            }}
          >
            <RightChevron />
          </button>
        </>
      )}
    </div>
  )
}
