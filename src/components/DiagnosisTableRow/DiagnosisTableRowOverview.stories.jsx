import { DiagnosisTableRow } from './DiagnosisTableRow'

export default {
  title: '🟠   📁 sources/Diagnosis Table Row/Overview',
  parameters: { controls: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const lbl = (text) => (
  <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
    {text}
  </span>
)

const ROWS = [
  { diagnosis: 'Hypertension (High Blood Pressure)',  clinicalCategory: 'Acute',    mdsMapping: 'I10',    upVotes: 5 },
  { diagnosis: 'Type 2 Diabetes Mellitus',            clinicalCategory: 'Chronic',  mdsMapping: 'E11.9',  downVotes: 2 },
  { diagnosis: 'Chronic Kidney Disease Stage 3',      clinicalCategory: 'Chronic',  mdsMapping: 'N18.3',  upVotes: 3, downVotes: 1 },
  { diagnosis: 'Heart Failure — Systolic',            clinicalCategory: 'Acute',    mdsMapping: 'I50.9', verifyStatus: 'verified' },
  { diagnosis: 'COPD — Moderate',                     clinicalCategory: 'Chronic',  mdsMapping: 'J44.1',  upVotes: 8 },
  { diagnosis: 'Atrial Fibrillation — Persistent',    clinicalCategory: 'Chronic',  mdsMapping: 'I48.91', verifyStatus: 'pending', downVotes: 4 },
  { diagnosis: 'Osteoporosis',                        clinicalCategory: 'Chronic',  mdsMapping: 'M81.0' },
  { diagnosis: 'Hypothyroidism — Unspecified',        clinicalCategory: 'Chronic',  mdsMapping: 'E03.9',  verifyStatus: 'denied' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px', background: '#f5f5f5' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {lbl('Hover to see actions · click verify/deny/thumbs · alternating shading')}
        <div style={{ marginTop: 8, border: '1px solid #d9d9d9', borderRadius: 10, overflow: 'visible' }}>
          {ROWS.map((row, i) => (
            <DiagnosisTableRow
              key={i}
              {...row}
              rowVariant={i % 2 === 0 ? 'light' : 'dark'}
              commentsCount={i % 3 === 0 ? 4 : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  ),
}
