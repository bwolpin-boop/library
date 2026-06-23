import { useState, useRef, useEffect } from 'react'
import { colors } from '../../tokens.js'
import { SourceTypeTab } from './SourceTypeTab.jsx'

function RightChevron({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M6 4L10 8L6 12" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LeftChevron({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M10 4L6 8L10 12" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SourceTypeTabs({
  tabs = ['Progress Notes', 'Assessments', 'Mars', 'Therapy Docs'],
  selectedTab,
  onTabSelect,
  size = 'big',
  tabWithArrows = null,
}) {
  const scrollRef = useRef(null)
  const [canScroll,     setCanScroll]     = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [allHovered, setAllHovered] = useState(false)

  // Internal selection state — syncs when the controlled prop changes
  const [activeTab, setActiveTab] = useState(selectedTab ?? null)
  useEffect(() => { setActiveTab(selectedTab ?? null) }, [selectedTab])

  const handleTabSelect = (type) => {
    setActiveTab(type)
    onTabSelect?.(type)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => {
      setCanScroll(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth)
      setCanScrollLeft(el.scrollLeft > 0)
    }
    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    el.addEventListener('scroll', check)
    return () => { ro.disconnect(); el.removeEventListener('scroll', check) }
  }, [tabs])

  const scrollRight = () => scrollRef.current?.scrollBy({ left: 120, behavior: 'smooth' })
  const scrollLeft  = () => scrollRef.current?.scrollBy({ left: -120, behavior: 'smooth' })

  const isBig = size === 'big'
  const borderWidth = isBig ? '1px' : '0.5px'
  const tabGap = isBig ? '8px' : '4px'
  const allPadX = isBig ? '12px' : '8px'
  const allPadY = isBig ? '4px' : '2px'
  const tabHeight = isBig ? '32px' : '22px'
  const gradientWidth = isBig ? 102 : 47
  const arrowRight = isBig ? 21 : 4
  const arrowTop = isBig ? 8 : 3

  const isAllSelected = !activeTab || activeTab === 'All'
  const allBorderColor = isAllSelected ? colors.primary : colors.dividerSubtle
  const allBgColor = !isAllSelected && allHovered ? colors.surfaceHover : colors.white
  const allFontWeight = isBig ? '500' : '400'

  return (
    <div className="dc:relative dc:overflow-hidden">
      <div
        ref={scrollRef}
        className="dc:flex dc:items-center"
        style={{
          gap: tabGap,
          overflowX: 'auto',
          paddingBottom: '20px',
          marginBottom: '-20px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* All tab */}
        <div
          className="dc:inline-flex dc:items-center dc:justify-center dc:rounded-box-sm dc:cursor-pointer dc:whitespace-nowrap dc:shrink-0 dc:box-border"
          style={{
            height: tabHeight,
            paddingLeft: allPadX,
            paddingRight: allPadX,
            paddingTop: allPadY,
            paddingBottom: allPadY,
            border: `${borderWidth} solid ${allBorderColor}`,
            backgroundColor: allBgColor,
            transition: 'background-color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={() => !isAllSelected && setAllHovered(true)}
          onMouseLeave={() => setAllHovered(false)}
          onClick={() => handleTabSelect('All')}
        >
          <span
            className="dc:font-montserrat dc:text-primary"
            style={{
              fontSize: isBig ? '14px' : '12px',
              fontWeight: allFontWeight,
              lineHeight: isBig ? '21px' : '18px',
            }}
          >
            All
          </span>
        </div>

        {/* Source type tabs — display:flex on wrapper removes inline strut height */}
        {tabs.map((type) => (
          <div key={type} className="dc:shrink-0 dc:flex" onClick={() => handleTabSelect(type)}>
            <SourceTypeTab
              type={type}
              size={size}
              state={activeTab === type ? 'pressed' : 'default'}
              showArrows={tabWithArrows === type}
            />
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <>
          <div
            className="dc:absolute dc:left-0 dc:top-0 dc:bottom-0 dc:pointer-events-none"
            style={{
              width: `${gradientWidth}px`,
              background: 'linear-gradient(to left, rgba(255,255,255,0) 11%, #ffffff 41%)',
            }}
          />
          <button
            onClick={scrollLeft}
            aria-label="Scroll tabs left"
            className="dc:absolute dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-0 dc:flex dc:items-center dc:justify-center"
            style={{
              left: `${arrowRight}px`,
              top: `${arrowTop}px`,
              width: '16px',
              height: '16px',
            }}
          >
            <LeftChevron />
          </button>
        </>
      )}

      {canScroll && (
        <>
          <div
            className="dc:absolute dc:right-0 dc:top-0 dc:bottom-0 dc:pointer-events-none"
            style={{
              width: `${gradientWidth}px`,
              background: 'linear-gradient(to right, rgba(255,255,255,0) 11%, #ffffff 41%)',
            }}
          />
          <button
            onClick={scrollRight}
            aria-label="Scroll tabs right"
            className="dc:absolute dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-0 dc:flex dc:items-center dc:justify-center"
            style={{
              right: `${arrowRight}px`,
              top: `${arrowTop}px`,
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
