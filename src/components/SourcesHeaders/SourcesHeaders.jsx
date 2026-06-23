import { NavIcon } from '../Icon/NavIcon.jsx'

function HeaderCell({ label, style }) {
  return (
    <div
      className="dc:flex dc:items-center dc:gap-gap4 dc:py-gap8"
      style={style}
    >
      <span className="dc:font-montserrat dc:font-medium dc:text-xxxs dc:text-primary dc:whitespace-nowrap dc:shrink-0" style={{ lineHeight: 'normal' }}>{label}</span>
      <NavIcon name="sort-arrows" size={12} />
    </div>
  )
}

export function SourcesHeaders({ variant = 'medication', hasDescription = true, className, style }) {
  const isDiagnosis = variant === 'diagnosis'

  return (
    <div
      className={[
        'dc:flex dc:items-center dc:gap-gap24 dc:px-gap24 dc:bg-white dc:border-b dc:border-divider-subtle',
        className,
      ].filter(Boolean).join(' ')}
      style={{
        height: '32px',
        borderRadius: '8px 8px 0 0',
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
