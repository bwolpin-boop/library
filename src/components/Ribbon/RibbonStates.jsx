import { colors, radii } from '../../tokens.js'
import { CmiCategoryToggle, DEFAULT_CATEGORIES } from './CmiCategoryToggle.jsx'
import { H2YLetters } from './H2YLetters.jsx'
import { MedicaidLabel } from './MedicaidLabel.jsx'
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
