import { colors, textStyles } from '../../tokens.js'

const labels = { H: 'H', '2': '2', Y: 'Y', pending: '—' }

const leftOffsets = { H: -5, '2': -3, Y: -4, pending: -6 }

export function H2YLetters({ type = 'H', before = 'before' }) {
  const isAfter = before === 'after'

  return (
    <div style={{
      width: '24px',
      height: '24px',
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
    }}>
      <p style={{
        ...(isAfter ? textStyles.heading12SB : textStyles.body12Regular),
        color: isAfter ? colors.purple : colors.primary,
        position: 'absolute',
        whiteSpace: 'nowrap',
        margin: 0,
        left: `calc(50% + ${leftOffsets[type] ?? -5}px)`,
        top: `calc(50% + ${isAfter ? -11 : -9}px)`,
      }}>
        {labels[type] ?? type}
      </p>
    </div>
  )
}
