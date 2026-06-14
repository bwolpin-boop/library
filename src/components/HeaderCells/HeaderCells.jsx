import { colors, fonts, fontSizes, fontWeights } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'

export function HeaderCells({
  label   = 'Facilities',
  variant = 'default',    // 'default' | 'empty'
}) {
  const isEmpty = variant === 'empty'

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: isEmpty ? 0 : 4,
      padding: isEmpty ? '12px 24px' : '8px 0',
    }}>
      <span style={{
        fontFamily: fonts.montserrat,
        fontSize: isEmpty ? fontSizes.xs : fontSizes.xxxs,
        fontWeight: isEmpty ? fontWeights.semibold : fontWeights.medium,
        lineHeight: 'normal',
        color: colors.secondary,
        whiteSpace: 'nowrap',
        opacity: isEmpty ? 0 : 1,
        textTransform: isEmpty ? 'capitalize' : 'none',
        flexShrink: 0,
      }}>
        {label}
      </span>
      {!isEmpty && <NavIcon name="sort-arrows" size={12} />}
    </div>
  )
}
