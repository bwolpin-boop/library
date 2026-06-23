import { useState } from 'react'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { CategoryTab } from './CategoryTab.jsx'

function LockedLabel() {
  return (
    <div
      className="dc:inline-flex dc:items-center dc:bg-surface dc:shrink-0"
      style={{
        gap: 'var(--dc-spacing-gap4)',
        height: '24px',
        padding: '0 var(--dc-spacing-gap8)',
        borderRadius: '34px',
      }}
    >
      <NavIcon name="lock" size={16} />
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">
        This is in read-only view
      </span>
    </div>
  )
}

export function Tabs({
  tabs = [
    { text: 'Pending (1)',   showPlusBadge: false },
    { text: 'Approved (1)',  showPlusBadge: false },
    { text: 'Completed (1)', showPlusBadge: false },
    { text: 'Dismissed (1)', showPlusBadge: false },
  ],
  selectedIndex = 0,
  size          = 'default',  // 'default' | 'small'
  lockedLabel   = false,       // small only — shows read-only label
  onTabClick,
}) {
  const [active, setActive] = useState(selectedIndex)
  const isSmall = size === 'small'

  function handleClick(i) {
    setActive(i)
    onTabClick?.(i)
  }

  return (
    <div
      className="dc:inline-flex dc:items-center"
      style={{
        gap:     isSmall ? 'var(--dc-spacing-gap4)' : 'var(--dc-spacing-gap8)',
        padding: isSmall ? '0' : '6px 0',
      }}
    >
      {tabs.map((tab, i) => (
        <CategoryTab
          key={i}
          text={tab.text}
          selected={i === active}
          size={size}
          showPlusBadge={tab.showPlusBadge ?? false}
          plusCount={tab.plusCount ?? 4}
          navIconLeft={tab.navIconLeft}
          onClick={() => handleClick(i)}
        />
      ))}
      {isSmall && lockedLabel && <LockedLabel />}
    </div>
  )
}
