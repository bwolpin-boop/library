import { TotalArrow } from './TotalArrow'

export default {
  title: '🟢   🔢 Calculator/TotalArrow/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const label = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
    {text}
  </div>
)

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
      <div>{label('Default')}<TotalArrow /></div>
      <div>{label('Hover')}<TotalArrow forceHover /></div>
      <div>{label('Pressed')}<TotalArrow forceExpanded /></div>
    </div>
  ),
}
