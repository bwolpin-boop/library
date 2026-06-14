import { colors, fonts, fontSizes, fontWeights } from '../../tokens.js'

// Stub — pending full design implementation
export function SourceCellHeader({ title }) {
  return (
    <span style={{
      fontFamily: fonts.montserrat,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.semibold,
      color: colors.primary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}>
      {title}
    </span>
  )
}
