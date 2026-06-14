import { DiagnosisTableRow } from './DiagnosisTableRow'

export default {
  title: '🟠   📁 sources/Diagnosis Table Row/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const shared = {
  diagnosis:        'Hypertension (High Blood Pressure)',
  description:      'The patient presented with a closed dislocation of the right hip, which was initially encountered on 07/22/2025. This condition was resolved during the...',
  clinicalCategory: 'Acute',
  mdsMapping:       'HGHGD',
  sourceType:       'Documents',
  commentsCount:    4,
}

const variants = [
  { label: 'Default — light',   props: { verifyStatus: 'none',    rowVariant: 'light' } },
  { label: 'Verified — light',  props: { verifyStatus: 'verify',  rowVariant: 'light' } },
  { label: 'Pending — light',   props: { verifyStatus: 'pending', rowVariant: 'light' } },
  { label: 'Denied — light',    props: { verifyStatus: 'deny',    rowVariant: 'light' } },
  { label: 'Default — dark',    props: { verifyStatus: 'none',    rowVariant: 'dark'  } },
  { label: 'Verified — dark',   props: { verifyStatus: 'verify',  rowVariant: 'dark'  } },
  { label: 'No description',    props: { verifyStatus: 'none',    rowVariant: 'light', hasDescription: false } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px', background: '#f5f5f5' }}>
      <div style={{ width: '1040px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {variants.map(({ label, props }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {label}
            </span>
            <DiagnosisTableRow {...shared} {...props} />
          </div>
        ))}
      </div>
    </div>
  ),
}
