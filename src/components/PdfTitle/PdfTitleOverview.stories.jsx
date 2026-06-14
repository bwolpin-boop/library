import { PdfTitle } from './PdfTitle'

export default {
  title: '🟢   💊 IPA components/PDF Title/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'default',    props: { title: 'Diagnosis hospital_records file hypervention .pdf' } },
  { label: 'long title', props: { title: 'Progress Notes patient_history_2024_full_evaluation_report_extended_version.pdf' } },
  { label: 'short',      props: { title: 'Vitals report.pdf' } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '100px', flexShrink: 0 }}>
            {label}
          </span>
          <div style={{ width: 500 }}>
            <PdfTitle {...props} />
          </div>
        </div>
      ))}
    </div>
  ),
}
