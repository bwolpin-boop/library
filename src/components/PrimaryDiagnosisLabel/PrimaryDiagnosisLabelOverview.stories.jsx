import { PrimaryDiagnosisLabel } from './PrimaryDiagnosisLabel'

export default {
  title: '🟢   💊 IPA components/Primary Diagnosis Label/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font  = '"Montserrat", sans-serif'
const lbl   = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: 120, flexShrink: 0 }}>
    {text}
  </div>
)

const rows = [
  { label: 'nta blue',       type: 'nta-blue' },
  { label: 'nta yellow',     type: 'nta-yellow' },
  { label: 'primary set',    type: 'primary-set' },
  { label: 'primary unset',  type: 'primary-unset' },
  { label: 'primary active', type: 'primary-active' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: 48, fontFamily: font, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {rows.map(({ label, type }) => (
        <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {lbl(label)}
          <PrimaryDiagnosisLabel type={type} />
        </div>
      ))}
      <div style={{ marginTop: 16, borderTop: '1px solid #EEE', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>icon only / text only</div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <PrimaryDiagnosisLabel type="primary-set"  hasText={false} />
          <PrimaryDiagnosisLabel type="primary-set"  hasIcon={false} />
          <PrimaryDiagnosisLabel type="primary-unset" hasText={false} />
          <PrimaryDiagnosisLabel type="primary-unset" hasIcon={false} />
        </div>
      </div>
    </div>
  ),
}
