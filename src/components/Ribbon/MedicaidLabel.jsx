import { colors, fonts, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'

const LABELS = {
  medicaid: 'Medicaid',
  medicare: 'Medicare',
}

export function MedicaidLabel({
  type = 'medicaid', // 'medicaid' | 'medicare'
  state = 'TX',      // state abbreviation
}) {
  const label = `${LABELS[type]} - ${state}`

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: spacing.gap4,
    }}>
      <NavIcon name="medicaid-icon" size={12} />
      <span style={{
        fontFamily: fonts.inter,
        fontWeight: 400,
        fontSize: '7.762px',
        lineHeight: 'normal',
        color: colors.dividerDisabled,
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </div>
  )
}
