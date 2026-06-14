import { Section } from './Section'

export default {
  title: '🟢   🎀 Ribbon/Sections/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const label = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
    {text}
  </div>
)

const ROW = { display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '40px' }}>

      <div>
        {label('size=Default — Letter')}
        <div style={ROW}>
          <Section type="letter" state="disabled"  letter="A" />
          <Section type="letter" state="default"   letter="E" badge={1} />
          <Section type="letter" state="default"   letter="E" badge={1} forceHover />
          <Section type="letter" state="selected"  letter="J" />
          <Section type="letter" state="selected"  letter="J" forceHover />
          <Section type="verify" state="disabled"  letter="D" />
          <Section type="deny"   state="disabled"  letter="I" />
        </div>
      </div>

      <div>
        {label('size=Default — All')}
        <div style={ROW}>
          <Section type="all" state="disabled"  letter="All" />
          <Section type="all" state="default"   letter="All" badge={1} />
          <Section type="all" state="default"   letter="All" badge={1} forceHover />
          <Section type="all" state="selected"  letter="All" />
          <Section type="all" state="selected"  letter="All" forceHover />
        </div>
      </div>

      <div>
        {label('size=Small — Letter')}
        <div style={ROW}>
          <Section type="letter" state="disabled"  size="small" letter="A" />
          <Section type="letter" state="default"   size="small" letter="E" badge={1} />
          <Section type="letter" state="default"   size="small" letter="E" badge={1} forceHover />
          <Section type="letter" state="selected"  size="small" letter="J" />
          <Section type="letter" state="selected"  size="small" letter="J" forceHover />
          <Section type="verify" state="disabled"  size="small" letter="D" />
          <Section type="deny"   state="disabled"  size="small" letter="I" />
        </div>
      </div>

      <div>
        {label('size=Small — All')}
        <div style={ROW}>
          <Section type="all" state="disabled"  size="small" letter="All" />
          <Section type="all" state="default"   size="small" letter="All" badge={1} />
          <Section type="all" state="default"   size="small" letter="All" badge={1} forceHover />
          <Section type="all" state="selected"  size="small" letter="All" />
          <Section type="all" state="selected"  size="small" letter="All" forceHover />
        </div>
      </div>

    </div>
  ),
}
