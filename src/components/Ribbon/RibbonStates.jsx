import { useState, useEffect } from 'react'
import { colors, radii } from '../../tokens.js'
import { CmiCategoryToggle, DEFAULT_CATEGORIES } from './CmiCategoryToggle.jsx'
import { H2YLetters } from './H2YLetters.jsx'
import { MedicaidLabel } from './MedicaidLabel.jsx'
import { NavIcon } from '../Icon/NavIcon.jsx'

const TYPE_INDEX = { all: 0, nursing: 1, NTA: 2, Cognitive: 3 }

const ANIM_STYLES = `
@keyframes h2y-dot-bounce {
  0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
  50%       { transform: translateY(-5px) scale(1.15); opacity: 0.8; }
}
@keyframes h2y-letter-pop-in {
  0%   { opacity: 0; transform: scale(0.5) translateY(4px); }
  70%  {             transform: scale(1.15) translateY(-2px); }
  100% { opacity: 1; transform: scale(1)   translateY(0); }
}
`

const DOT_COLORS = [colors.purple, '#c07fff', '#dbb3ff']

// ─── After-H2Y area: dots during calc, letters on done ───────────────────────

function H2YAfter({ phase, animKey }) {
  const isCalculating = phase === 'calculating'
  const isDone        = phase === 'done'

  return (
    // Fixed width = 3 × 24 px H2YLetters so the layout never shifts
    <div style={{ position: 'relative', width: '72px', height: '24px', flexShrink: 0 }}>

      {/* Bouncing dots */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
        opacity: isCalculating ? 1 : 0,
        transition: 'opacity 0.2s',
        pointerEvents: 'none',
      }}>
        {DOT_COLORS.map((bg, i) => (
          <div key={i} style={{
            width: '6px', height: '6px', borderRadius: '50%', backgroundColor: bg,
            animation: isCalculating
              ? `h2y-dot-bounce 0.7s ease-in-out ${i * 0.12}s infinite`
              : 'none',
          }} />
        ))}
      </div>

      {/* H2Y letters — hidden while dots show, pop in when done */}
      <div
        key={animKey}
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center',
          opacity: isCalculating ? 0 : 1,
          transition: isCalculating ? 'opacity 0.2s' : 'none',
        }}
      >
        {['H', '2', 'Y'].map((letter, i) => (
          <div key={letter} style={{
            animation: isDone
              ? `h2y-letter-pop-in 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s both`
              : 'none',
          }}>
            <H2YLetters type={letter} before="after" />
          </div>
        ))}
      </div>
    </div>
  )
}

function H2YChange({ phase, animKey }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <H2YLetters type="H" before="before" />
      <H2YLetters type="2" before="before" />
      <H2YLetters type="Y" before="before" />
      <NavIcon name="arrow-right-h2y" size={20} />
      <H2YAfter phase={phase} animKey={animKey} />
    </div>
  )
}

// ─── RibbonStates ─────────────────────────────────────────────────────────────

// calcTrigger: increment this from outside to kick off one calculation cycle.
export function RibbonStates({ type = 'all', calcTrigger = 0 }) {
  const defaultIndex = TYPE_INDEX[type] ?? 0
  const [phase, setPhase]     = useState('idle')  // 'idle' | 'calculating' | 'done'
  const [animKey, setAnimKey] = useState(0)
  // Single effect driven by calcTrigger. The cleanup cancels any in-flight
  // timers, so clicking Calculate mid-animation immediately restarts it.
  useEffect(() => {
    if (calcTrigger === 0) return   // skip initial mount
    setPhase('calculating')
    const t1 = setTimeout(() => {
      setPhase('done')
      setAnimKey(k => k + 1)   // forces pop-in replay via key change
    }, 1800)
    const t2 = setTimeout(() => setPhase('idle'), 1800 + 700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [calcTrigger])

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      <style>{ANIM_STYLES}</style>

      <div style={{
        display: 'flex', alignItems: 'stretch',
        border: `1px solid ${colors.dividerSubtle}`,
        borderRadius: radii.boxSm,
        overflow: 'hidden',
      }}>
        <CmiCategoryToggle
          categories={DEFAULT_CATEGORIES}
          defaultIndex={defaultIndex}
        />
        {/* Glow is inset so it's visible even inside overflow:hidden */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: '4px', padding: '0 4px',
          borderLeft: `1px solid ${colors.dividerSubtle}`,
          minHeight: '34px', flexShrink: 0,
        }}>
          <H2YChange phase={phase} animKey={animKey} />
        </div>
      </div>

      <MedicaidLabel />
    </div>
  )
}
