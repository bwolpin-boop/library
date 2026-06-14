import { colors, fonts, fontSizes, fontWeights, radii, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'

const labelStyle = {
  fontFamily: fonts.montserrat,
  fontWeight: fontWeights.medium,
  fontSize: fontSizes.xxxs,
  lineHeight: 'normal',
  color: colors.primary,
  whiteSpace: 'nowrap',
  flexShrink: 0,
}

function HeaderCell({ label, style }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: spacing.gap4,
      padding: `${spacing.gap8} 0`,
      ...style,
    }}>
      <span style={labelStyle}>{label}</span>
      <NavIcon name="sort-arrows" size={12} />
    </div>
  )
}

export function SourcesHeaders({ variant = 'medication', hasDescription = true, className, style }) {
  const isDiagnosis = variant === 'diagnosis'

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.gap24,
        height: '32px',
        padding: `0 ${spacing.gap24}`,
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.dividerSubtle}`,
        borderRadius: `${radii.box} ${radii.box} 0 0`,
        ...style,
      }}
    >
      {/* Column 1: Diagnosis or Medication */}
      <HeaderCell
        label={isDiagnosis ? 'Diagnosis' : 'Medication'}
        style={isDiagnosis
          ? { width: '234px', flexShrink: 0 }
          : { flex: '1 0 0', minWidth: 0 }
        }
      />

      {/* Column 2: Description — diagnosis only, optional */}
      {isDiagnosis && hasDescription && (
        <HeaderCell label="Description" style={{ flex: '1 0 0', minWidth: 0 }} />
      )}

      {/* Column 3: Clinical Category or Dose */}
      <HeaderCell
        label={isDiagnosis ? 'Clinical Category' : 'Dose'}
        style={{ width: isDiagnosis ? '154px' : '55px', flexShrink: 0 }}
      />

      {/* Column 4: MDS Mapping or Rate */}
      <HeaderCell
        label={isDiagnosis ? 'MDS Mapping' : 'Rate'}
        style={{ width: isDiagnosis ? '130px' : '120px', flexShrink: 0 }}
      />

      {/* Column 5: Given on — both variants */}
      <HeaderCell label="Given on" style={{ width: '80px', flexShrink: 0 }} />

      {/* Column 6: Page — both variants */}
      <HeaderCell label="Page" style={{ width: '128px', flexShrink: 0 }} />
    </div>
  )
}
