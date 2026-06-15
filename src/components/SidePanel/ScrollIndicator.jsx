import { colors, radii } from '../../tokens.js'

export function ScrollIndicator({
  count       = 12,    // total number of items
  activeIndex = 11,   // 0-based index of the active/current item (default: last)
  onSelect,           // optional click handler (index) => void
}) {
  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      gap:           '8px',
      alignItems:    'flex-start',
      flexShrink:    0,
    }}>
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === activeIndex
        return (
          <div
            key={i}
            onClick={onSelect ? () => onSelect(i) : undefined}
            style={{
              width:           '8px',
              height:          '2px',
              borderRadius:    '30px',
              backgroundColor: isActive ? colors.primary : colors.muted,
              flexShrink:      0,
              cursor:          onSelect ? 'pointer' : 'default',
              transition:      'background-color 0.15s',
            }}
          />
        )
      })}
    </div>
  )
}
