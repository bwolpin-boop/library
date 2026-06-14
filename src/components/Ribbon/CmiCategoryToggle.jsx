import { useState, useRef, useLayoutEffect } from 'react'
import { colors, fonts, fontWeights, radii, spacing, strokeWidths } from '../../tokens.js'
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
  const tabRefs      = useRef([])
  const containerRef = useRef(null)
  const [pill, setPill] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const el        = tabRefs.current[activeIndex]
    const container = containerRef.current
    if (!el || !container) return
    const cRect = container.getBoundingClientRect()
    const tRect = el.getBoundingClientRect()
    setPill({ left: tRect.left - cRect.left, width: tRect.width })
  }, [activeIndex])

  function handleSelect(i) {
    setActiveIndex(i)
    onChange?.(i)
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: spacing.gap4,
        padding: spacing.gap4,
        backgroundColor: colors.surfacePressed,
        borderRadius: `${radii.boxSm} 0 0 ${radii.boxSm}`,
      }}
    >
      <style>{`
        @keyframes cmi-fade-in {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div style={{
        position: 'absolute',
        top: spacing.gap4,
        bottom: spacing.gap4,
        left: pill.left,
        width: pill.width,
        backgroundColor: colors.white,
        border: `${strokeWidths.thin}px solid ${colors.dividerSubtle}`,
        borderRadius: radii.boxSm,
        transition: 'left 0.22s ease-in-out, width 0.22s ease-in-out',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {categories.map((cat, i) => {
        const isActive = i === activeIndex
        const sections = cat.sections ?? []
        return (
          <button
            key={i}
            ref={el => { tabRefs.current[i] = el }}
            onClick={() => handleSelect(i)}
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: spacing.gap8,
              background: 'none',
              border: 'none',
              borderRadius: radii.boxSm,
              cursor: 'pointer',
            }}
          >
            <span style={{
              fontFamily: fonts.inter,
              fontWeight: fontWeights.regular,
              fontSize: '12px',
              lineHeight: 'normal',
              color: colors.primary,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              {cat.label}
            </span>

            {isActive && sections.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '15px', overflow: 'visible', flexShrink: 0 }}>
                {sections.map((sec, j) => (
                  <div key={j} style={{ opacity: 0, animation: `cmi-fade-in 0.18s ease-in-out ${j * 0.035}s forwards` }}>
                    <Section
                      letter={sec.letter}
                      type={sec.type ?? 'letter'}
                      state={sec.state ?? 'disabled'}
                      size="small"
                      badge={sec.badge}
                    />
                  </div>
                ))}
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}
