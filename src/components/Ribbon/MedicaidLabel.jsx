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
    <div className="dc:inline-flex dc:items-center dc:gap-gap4">
      <NavIcon name="medicaid-icon" size={12} />
      <span className="dc:font-inter dc:text-divider-disabled dc:whitespace-nowrap" style={{ fontWeight: 400, fontSize: '7.762px', lineHeight: 'normal' }}>
        {label}
      </span>
    </div>
  )
}
