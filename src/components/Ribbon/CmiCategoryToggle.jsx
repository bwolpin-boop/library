import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { Section } from './Section.jsx'

export const DEFAULT_CATEGORIES = [
  {
    label: 'All',
    sections: [
      { letter: 'A', state: 'disabled' },
      { letter: 'B', state: 'disabled' },
      { letter: 'D', type: 'verify' },
      { letter: 'E', state: 'default', badge: 1 },
      { letter: 'H', state: 'default', badge: 1 },
      { letter: 'I', type: 'deny' },
      { letter: 'A', state: 'default', badge: 1 },
      { letter: 'Q', state: 'disabled' },
    ],
  },
  {
    label: 'Nursing (H)',
    sections: [
      { letter: 'H', state: 'default', badge: 2 },
      { letter: 'I', type: 'deny' },
      { letter: 'J', state: 'disabled' },
      { letter: 'K', state: 'default' },
    ],
  },
  {
    label: 'NTA (2)',
    sections: [
      { letter: 'N', state: 'default', badge: 1 },
      { letter: 'T', type: 'verify' },
    ],
  },
  {
    label: 'Cognitive (Y)',
    sections: [
      { letter: 'Y', state: 'default' },
      { letter: 'C', type: 'verify' },
      { letter: 'M', state: 'disabled' },
    ],
  },
]

export function CmiCategoryToggle({
  categories = DEFAULT_CATEGORIES,
  defaultIndex = 0,
  onChange,
}) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const [selectedSection, setSelectedSection] = useState(null)
  const tabRefs      = useRef([])
  const containerRef = useRef(null)
  const [pill, setPill] = useState({ left: 0, width: 0 })

  const sectionZoneWidth = (sections) =>
    sections.length > 0 ? sections.length * 16 + (sections.length - 1) * 6 : 0

  const maxSectionsWidth   = Math.max(...categories.map(c => sectionZoneWidth(c.sections ?? [])))
  const activeSectionsWidth = sectionZoneWidth(categories[activeIndex]?.sections ?? [])
  const trailingPad        = Math.max(0, maxSectionsWidth - activeSectionsWidth)

  useEffect(() => { setSelectedSection(null) }, [activeIndex])

  useLayoutEffect(() => {
    const tabEl    = tabRefs.current[activeIndex]
    const container = containerRef.current
    if (!tabEl || !container) return
    const cRect = container.getBoundingClientRect()
    const tRect = tabEl.getBoundingClientRect()
    setPill({
      left:  tRect.left - cRect.left,
      width: tabEl.offsetWidth,   // layout width — unaffected by child transforms
    })
  }, [activeIndex])

  function handleSelect(i) {
    setActiveIndex(i)
    onChange?.(i)
  }

  return (
    <div
      ref={containerRef}
      className="dc:relative dc:inline-flex dc:items-center dc:gap-gap4 dc:pt-gap4 dc:pb-gap4 dc:pl-gap4 dc:pr-gap4 dc:bg-surface-pressed"
      style={{ borderRadius: '4px 0 0 4px' }}
    >
      <div
        className="dc:absolute dc:top-gap4 dc:bottom-gap4 dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box-sm dc:pointer-events-none dc:z-0"
        style={{
          left: pill.left,
          width: pill.width,
          transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {categories.map((cat, i) => {
        const isActive = i === activeIndex
        const sections = cat.sections ?? []
        return (
          <button
            key={i}
            ref={el => { tabRefs.current[i] = el }}
            onClick={() => handleSelect(i)}
            className="dc:relative dc:z-10 dc:inline-flex dc:items-center dc:p-gap8 dc:bg-transparent dc:border-0 dc:rounded-box-sm dc:cursor-pointer dc:shrink-0"
            style={{ gap: '6px' }}
          >
              <span className="dc:font-inter dc:font-regular dc:text-primary dc:whitespace-nowrap dc:shrink-0" style={{ fontSize: '12px', lineHeight: 'normal' }}>
                {cat.label}
              </span>

              {sections.length > 0 && (
                <div
                  className="dc:overflow-hidden dc:shrink-0"
                  style={{
                    maxWidth:   isActive ? `${sectionZoneWidth(sections)}px` : '0px',
                    paddingTop: '3px',
                    marginTop:  '-3px',
                  }}
                >
                  <div className="dc:flex dc:items-center" style={{ gap: '6px', height: '15px' }}>
                    {sections.map((sec, j) => {
                      const type = sec.type ?? 'letter'
                      const baseState = sec.state ?? 'disabled'
                      const isClickable = type !== 'verify' && type !== 'deny' && baseState !== 'disabled'
                      const resolvedState = isClickable && selectedSection === j ? 'selected' : baseState
                      return (
                        <div
                          key={j}
                          style={{
                            opacity:   isActive ? 1 : 0,
                            transform: isActive ? 'scale(1)' : 'scale(0.7)',
                            transition: isActive
                              ? `opacity 0.22s ease ${j * 0.055}s, transform 0.22s ease ${j * 0.055}s`
                              : 'none',
                          }}
                          onClick={e => e.stopPropagation()}
                        >
                          <Section
                            letter={sec.letter}
                            type={type}
                            state={resolvedState}
                            size="small"
                            badge={sec.badge}
                            onClick={isClickable ? () => setSelectedSection(j) : undefined}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
          </button>
        )
      })}

    </div>
  )
}
