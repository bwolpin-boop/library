import { CategoryTag } from './CategoryTag'

export default {
  title: '🟢   📮 Category Tag/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const types = ['nursing', 'OT/PT', 'SLP', 'NTA', 'Functional Scores']
const states = ['Default', 'hover', 'pressed']

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(3, 120px) repeat(3, 120px)', fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F8F5FF' }}>
          <div style={{ padding: '12px 16px' }}>Type</div>
          {states.map(s => (
            <div key={s} style={{ padding: '12px 8px', borderLeft: '1px solid #F0F0F0' }}>{s}</div>
          ))}
          {states.map(s => (
            <div key={s + '-close'} style={{ padding: '12px 8px', borderLeft: s === 'Default' ? '2px solid #E0D0FF' : '1px solid #F0F0F0' }}>{s} + close</div>
          ))}
        </div>
        {types.map(type => (
          <div key={type} style={{ display: 'grid', gridTemplateColumns: '160px repeat(3, 120px) repeat(3, 120px)', borderTop: '1px solid #F0F0F0', alignItems: 'center' }}>
            <div style={{ padding: '12px 16px', fontSize: '12px', color: '#838383', fontFamily: font }}>{type}</div>
            {states.map(s => (
              <div key={s} style={{ padding: '12px 8px', borderLeft: '1px solid #F0F0F0' }}>
                <CategoryTag type={type} state={s} />
              </div>
            ))}
            {states.map(s => (
              <div key={s + '-close'} style={{ padding: '12px 8px', borderLeft: s === 'Default' ? '2px solid #E0D0FF' : '1px solid #F0F0F0' }}>
                <CategoryTag type={type} state={s} hasClose />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ),
}
