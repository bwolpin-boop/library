import { SideBarTitle } from './SideBarTitle'

export default {
  title: '🟠   📁 sources/Side Bar Title/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const row = (label, content) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
    <span style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: 100, flexShrink: 0 }}>{label}</span>
    {content}
  </div>
)

export const Overview = {
  render: () => (
    <div style={{ padding: 40, fontFamily: font, display: 'flex', flexDirection: 'column', gap: 32 }}>
      {row('PDF title', <SideBarTitle label="HOW Bridgeview.pdf" />)}
      {row('QK code', <SideBarTitle label="573.001A Unspecified subluxation of unspecified hip" />)}
      {row('Truncated', (
        <div style={{ width: 280 }}>
          <SideBarTitle label="573.001A Unspecified subluxation of unspecified hip, initial encounter" />
        </div>
      ))}
    </div>
  ),
}
