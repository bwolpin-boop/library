import { colors, fonts, fontSizes, fontWeights, lineHeights, spacing } from '../../tokens.js'

export function PdfTitle({ title = 'Diagnosis hospital_records file hypervention .pdf' }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.gap8,
        height: '34px',
        padding: `0 ${spacing.gap24}`,
        borderBottom: `1px solid ${colors.dividerSubtle}`,
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          fontFamily: fonts.montserrat,
          fontSize: fontSizes.xs,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights.sm,
          color: colors.secondary,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {title}
      </span>
    </div>
  )
}
