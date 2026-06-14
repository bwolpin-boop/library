import { colors, textStyles, radii } from '../../tokens.js'

const GREEN_BG = '#EBF8E9'

export function MoneyLabel({ value = 500 }) {
  const isNegative = value < 0
  const display = isNegative
    ? `-$${Math.abs(value).toLocaleString()}`
    : `+$${value.toLocaleString()}`

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '24px',
        padding: '0 8px',
        borderRadius: radii.boxSm,
        backgroundColor: isNegative ? colors.error200 : GREEN_BG,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          ...textStyles.heading12SB,
          color: isNegative ? colors.error : colors.green,
          whiteSpace: 'nowrap',
        }}
      >
        {display}
      </span>
    </div>
  )
}
