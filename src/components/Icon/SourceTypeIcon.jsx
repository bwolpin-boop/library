import progressNotes   from '../../assets/source-type-icons/progress-notes.svg'
import immunization    from '../../assets/source-type-icons/immunization.svg'
import documents       from '../../assets/source-type-icons/documents.svg'
import pccDocs         from '../../assets/source-type-icons/pcc-docs.svg'
import therapyDocs     from '../../assets/source-type-icons/therapy-docs.svg'
import medications     from '../../assets/source-type-icons/medications.svg'
import diagnosis       from '../../assets/source-type-icons/diagnosis.svg'
import ordersNotes     from '../../assets/source-type-icons/orders-notes.svg'
import doctorsOrders   from '../../assets/source-type-icons/doctors-orders.svg'
import pccConnect      from '../../assets/source-type-icons/pcc-connect.svg'
import mars            from '../../assets/source-type-icons/mars.svg'
import poc             from '../../assets/source-type-icons/poc.svg'
import assessments     from '../../assets/source-type-icons/assessments.svg'
import labResults      from '../../assets/source-type-icons/lab-results.svg'
import interventions   from '../../assets/source-type-icons/interventions.svg'
import vitals          from '../../assets/source-type-icons/vitals.svg'
import ivFluids        from '../../assets/source-type-icons/iv-fluids.svg'
import highRiskAlerts  from '../../assets/source-type-icons/high-risk-alerts.svg'
import incidents       from '../../assets/source-type-icons/incidents.svg'
import previousTarget  from '../../assets/source-type-icons/previous-target.svg'

const iconMap = {
  'Progress Notes':     progressNotes,
  'Immunization':       immunization,
  'Immunizations':      immunization,
  'Documents':          documents,
  'PCC Docs':           pccDocs,
  'Therapy Docs':       therapyDocs,
  'Medications':        medications,
  'Diagnosis':          diagnosis,
  'Orders Notes':       ordersNotes,
  'Doctors Orders':     doctorsOrders,
  'PCC Connect':        pccConnect,
  'Mars':               mars,
  'POC':                poc,
  'Assessment Score':   assessments,
  'Assessments':        assessments,
  'Lab Results':        labResults,
  'Care Plans':         progressNotes,  // no matching icon in Figma — using Progress Notes as fallback
  'Interventions':      interventions,
  'Vitals':             vitals,
  'IV Fluids':          ivFluids,
  'High Risk Alerts':   highRiskAlerts,
  'Incidents':          incidents,
  'Allergies':          progressNotes,  // no matching icon in Figma — using Progress Notes as fallback
  'Previous Target':    previousTarget,
}

export const sourceTypeIconNames = Object.keys(iconMap)

export function SourceTypeIcon({ type, size = 24 }) {
  const src = iconMap[type] ?? progressNotes

  return (
    <img
      src={src}
      alt={type}
      width={size}
      height={size}
      style={{ flexShrink: 0, display: 'block' }}
    />
  )
}
