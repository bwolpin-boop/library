import { MdsAndDcAnswer } from './MdsAndDcAnswer'

export default {
  title: '🟢   😂 Icon/MDS and DC Answer/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const rows = [
  { type: 'mds',       label: 'MDS' },
  { type: 'yes-dc',    label: 'Yes DC' },
  { type: 'not-dc',    label: 'Not DC' },
  { type: 'empty',     label: 'empty (invisible)' },
  { type: 'no-answer', label: 'No answer yet' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 200px', fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F8F5FF' }}>
          <div style={{ padding: '12px 16px' }}>Type</div>
          <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>MDS and DC Answer</div>
        </div>
        {rows.map(({ type, label }) => (
          <div key={type} style={{ display: 'grid', gridTemplateColumns: '160px 200px', borderTop: '1px solid #F0F0F0', alignItems: 'center' }}>
            <div style={{ padding: '12px 16px', fontSize: '12px', color: '#838383', fontFamily: font }}>{label}</div>
            <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>
              <MdsAndDcAnswer type={type} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}
