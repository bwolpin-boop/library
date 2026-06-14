import { fonts, fontSizes, fontWeights, lineHeights, radii } from '../../tokens.js'

export function TypeTag({ label = 'Acute' }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 9px',
        borderRadius: radii.boxSm,
        backgroundColor: 'rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.09)',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: fonts.montserrat,
          fontSize: fontSizes.xs,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights.md,
          color: '#000000',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  )
}
