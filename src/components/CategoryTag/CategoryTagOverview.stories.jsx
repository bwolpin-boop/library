import { CategoryTag } from './CategoryTag'

export default {
  title: '🟢   📮 Category Tag/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const types = ['nursing', 'OT/PT', 'SLP', 'NTA', 'Functional Scores']

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 160px', fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F8F5FF' }}>
          <div style={{ padding: '12px 16px' }}>Type</div>
          <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>Category Tag</div>
        </div>
        {types.map(type => (
          <div key={type} style={{ display: 'grid', gridTemplateColumns: '160px 160px', borderTop: '1px solid #F0F0F0', alignItems: 'center' }}>
            <div style={{ padding: '12px 16px', fontSize: '12px', color: '#838383', fontFamily: font }}>{type}</div>
            <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>
              <CategoryTag type={type} hasClose />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}
