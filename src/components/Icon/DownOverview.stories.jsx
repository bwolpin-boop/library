import { Down } from './Down'

export default {
  title: '🟢   😂 Icon/Down/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'default',          props: { count: 123, pressed: false } },
  { label: 'pressed',          props: { count: 123, pressed: true } },
  { label: 'no count',         props: { pressed: false } },
  { label: 'pressed, no count', props: { pressed: true } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '180px', flexShrink: 0 }}>
            {label}
          </span>
          <Down {...props} />
        </div>
      ))}
    </div>
  ),
}
