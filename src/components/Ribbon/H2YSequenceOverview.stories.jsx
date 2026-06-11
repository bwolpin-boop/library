import { H2YSequence } from './H2YSequence'

export default {
  title: '🟢   🎀 Ribbon/H2YSequence/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '100px auto', fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F8F5FF' }}>
          <div style={{ padding: '12px 16px' }}>Variant</div>
          <div style={{ padding: '12px 16px' }}>Preview</div>
        </div>
        {['Default', 'pending'].map((v) => (
          <div key={v} style={{ display: 'grid', gridTemplateColumns: '100px auto', borderTop: '1px solid #F0F0F0', alignItems: 'center' }}>
            <div style={{ padding: '12px 16px', fontSize: '12px', color: '#838383', fontFamily: font }}>{v}</div>
            <div style={{ padding: '12px 16px' }}><H2YSequence property1={v} /></div>
          </div>
        ))}
      </div>
    </div>
  ),
}
