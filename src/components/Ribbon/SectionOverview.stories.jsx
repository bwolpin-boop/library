import { Section } from './Section'

export default {
  title: '🟢   🎀 Ribbon/Sections/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const label = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
    {text}
  </div>
)

const ROW_GAP = { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px' }}>

      <div>
        {label('size=default — letter')}
        <div style={ROW_GAP}>
          <Section type="letter" state="disabled" letter="A" />
          <Section type="letter" state="default"  letter="E" badge={1} />
          <Section type="letter" state="selected" letter="J" />
          <Section type="verify" state="disabled" letter="D" />
          <Section type="deny"   state="disabled" letter="I" />
        </div>
      </div>

      <div>
        {label('size=default — all')}
        <div style={ROW_GAP}>
          <Section type="all" state="disabled" letter="All" />
          <Section type="all" state="default"  letter="All" badge={1} />
          <Section type="all" state="selected" letter="All" />
        </div>
      </div>

      <div>
        {label('size=small — letter')}
        <div style={ROW_GAP}>
          <Section type="letter" state="disabled" size="small" letter="A" />
          <Section type="letter" state="default"  size="small" letter="E" badge={1} />
          <Section type="letter" state="selected" size="small" letter="J" />
          <Section type="verify" state="disabled" size="small" letter="D" />
          <Section type="deny"   state="disabled" size="small" letter="I" />
        </div>
      </div>

      <div>
        {label('size=small — all')}
        <div style={ROW_GAP}>
          <Section type="all" state="disabled" size="small" letter="All" />
          <Section type="all" state="default"  size="small" letter="All" badge={1} />
          <Section type="all" state="selected" size="small" letter="All" />
        </div>
      </div>

    </div>
  ),
}
