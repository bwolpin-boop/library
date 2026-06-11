import { useState } from 'react'
import { spacing } from '../../tokens.js'
import { Section } from './Section.jsx'

export const DEFAULT_SECTIONS = [
  { letter: 'A', state: 'disabled' },
  { letter: 'B', state: 'disabled' },
  { letter: 'C', state: 'disabled' },
  { letter: 'D', type: 'verify' },
  { letter: 'E', state: 'default', badge: 1 },
  { letter: 'F', state: 'default', badge: 1 },
  { letter: 'G', state: 'disabled' },
  { letter: 'H', state: 'default', badge: 1 },
  { letter: 'I', type: 'deny' },
  { letter: 'J', state: 'selected' },
  { letter: 'K', state: 'disabled' },
  { letter: 'L', state: 'default', badge: 1 },
  { letter: 'M', state: 'disabled' },
  { letter: 'N', state: 'disabled' },
  { letter: 'O', state: 'disabled' },
  { letter: 'P', state: 'disabled' },
  { letter: 'Q', state: 'disabled' },
  { letter: 'R', state: 'disabled' },
]

function getInitialSelected(sections, showAll, allState) {
  if (showAll && allState === 'selected') return '__all__'
  const found = sections.find(s => s.state === 'selected' && s.type !== 'verify' && s.type !== 'deny')
  return found?.letter ?? null
}

export function SectionsRow({
  sections = DEFAULT_SECTIONS,
  showAll = false,
  allState = 'default',
  allBadge,
  location = 'dashboard', // 'dashboard' | 'ribbon'
  size = 'default',       // 'default' | 'small'
  selectedLetter: controlledSelected,
  onSelect,
}) {
  const isControlled = controlledSelected !== undefined
  const [internalSelected, setInternalSelected] = useState(
    () => getInitialSelected(sections, showAll, allState)
  )

  const selectedKey = isControlled ? controlledSelected : internalSelected

  function handleSelect(key) {
    if (!isControlled) setInternalSelected(key)
    onSelect?.(key)
  }

  const isSmall     = size === 'small'
  const isDashboard = location === 'dashboard'
  const height      = (isDashboard && !isSmall) ? '50px' : (!isSmall ? '24px' : undefined)
  const gap         = isSmall ? spacing.gap4 : spacing.gap8
  const padH        = isSmall ? spacing.gap0 : spacing.gap12

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap, paddingLeft: padH, paddingRight: padH, height, flexShrink: 0 }}>
      {showAll && (
        <Section
          letter="All"
          type="all"
          state={selectedKey === '__all__' ? 'selected' : 'default'}
          size={size}
          badge={allBadge}
          onClick={() => handleSelect('__all__')}
        />
      )}
      {sections.map(({ letter, state = 'disabled', type = 'letter', badge }, i) => {
        const isFixed = type === 'verify' || type === 'deny' || state === 'disabled'
        const resolvedState = isFixed
          ? (type === 'verify' || type === 'deny' ? 'disabled' : 'disabled')
          : (selectedKey === letter ? 'selected' : 'default')
        return (
          <Section
            key={`${letter}-${i}`}
            letter={letter}
            type={type}
            state={resolvedState}
            size={size}
            badge={badge}
            onClick={isFixed ? undefined : () => handleSelect(letter)}
          />
        )
      })}
    </div>
  )
}
