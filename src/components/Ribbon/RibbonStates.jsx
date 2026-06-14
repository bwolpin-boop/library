import { colors, fonts, radii } from '../../tokens.js'
import { CmiCategoryToggle, DEFAULT_CATEGORIES } from './CmiCategoryToggle.jsx'
import { H2YLetters } from './H2YLetters.jsx'
import { NavIcon } from '../Icon/NavIcon.jsx'

const TYPE_INDEX = { all: 0, nursing: 1, NTA: 2, Cognitive: 3 }

function H2YChange() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <H2YLetters type="H" before="before" />
      <H2YLetters type="2" before="before" />
      <H2YLetters type="Y" before="before" />
      <NavIcon name="arrow-right-h2y" size={20} />
      <H2YLetters type="H" before="after" />
      <H2YLetters type="2" before="after" />
      <H2YLetters type="Y" before="after" />
    </div>
  )
}

function MedicaidLabel() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <path d="M2 2.5C2 1.67 2.67 1 3.5 1H8.5C9.33 1 10 1.67 10 2.5V9.5C10 10.33 9.33 11 8.5 11H3.5C2.67 11 2 10.33 2 9.5V2.5Z" stroke="#C0C0C0" strokeWidth="0.8" fill="none"/>
        <rect x="4.15" y="4.15" width="2.55" height="2.55" transform="rotate(45 6 4.15)" fill="#C0C0C0"/>
      </svg>
      <span style={{
        fontFamily: fonts.inter,
        fontSize: '7.762px',
        fontWeight: 400,
        color: '#C0C0C0',
        whiteSpace: 'nowrap',
        lineHeight: 'normal',
      }}>
        Medicaid - TX
      </span>
    </div>
  )
}

export function RibbonStates({
  type = 'all',  // 'all' | 'nursing' | 'NTA' | 'Cognitive'
}) {
  const defaultIndex = TYPE_INDEX[type] ?? 0

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>

      {/* Single bordered container: tabs + H2Y */}
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        border: `1px solid ${colors.dividerSubtle}`,
        borderRadius: radii.boxSm,
        overflow: 'hidden',
      }}>
        {/* CMI category toggle — embedded (no own border, left-rounded) */}
        <CmiCategoryToggle
          categories={DEFAULT_CATEGORIES}
          defaultIndex={defaultIndex}
        />

        {/* H2Y change indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '0 4px',
          borderLeft: `1px solid ${colors.dividerSubtle}`,
          minHeight: '34px',
          flexShrink: 0,
        }}>
          <H2YChange />
        </div>
      </div>

      {/* Medicaid label */}
      <MedicaidLabel />
    </div>
  )
}
