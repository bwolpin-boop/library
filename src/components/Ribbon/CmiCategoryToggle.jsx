import { useState } from 'react'
import { colors } from '../../tokens.js'
import { CmiRibbonSections } from './CmiRibbonSections.jsx'

const DEFAULT_CATEGORIES = [
  { label: 'All' },
  { label: 'Nursing (H)' },
  { label: 'NTA (2)' },
  { label: 'Cognitive (Y)' },
]

export function CmiCategoryToggle({
  categories = DEFAULT_CATEGORIES,
  defaultSelected = 0,
  selectedIndex: controlledIndex,
  onSelect,
}) {
  const isControlled = controlledIndex !== undefined
  const [internalIndex, setInternalIndex] = useState(defaultSelected)
  const selectedIndex = isControlled ? controlledIndex : internalIndex

  function handleSelect(i) {
    if (!isControlled) setInternalIndex(i)
    onSelect?.(i)
  }

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px',
      backgroundColor: colors.surfacePressed,
      borderRadius: '4px 0 0 4px',
      flexShrink: 0,
    }}>
      {categories.map((cat, i) => (
        <CmiRibbonSections
          key={cat.label}
          label={cat.label}
          selected={selectedIndex === i}
          sections={cat.sections}
          onClick={() => handleSelect(i)}
        />
      ))}
    </div>
  )
}
