import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { CategoryTab } from './CategoryTab.jsx'

function LockedLabel() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: spacing.gap4,
        height: '24px',
        padding: `0 ${spacing.gap8}`,
        borderRadius: '34px',
        backgroundColor: colors.surface,
        flexShrink: 0,
      }}
    >
      <NavIcon name="lock" size={16} />
      <span
        style={{
          fontFamily: fonts.montserrat,
          fontSize: fontSizes.xs,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights.sm,
          color: colors.secondary,
          whiteSpace: 'nowrap',
        }}
      >
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
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? spacing.gap4 : spacing.gap8,
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
