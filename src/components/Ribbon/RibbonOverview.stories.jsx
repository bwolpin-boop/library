import { Ribbon } from './Ribbon'

export default {
  title: '🟢   🎀 Ribbon/Ribbon/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'type=ribbon (compact)',  props: { type: 'ribbon', banner: false } },
  { label: 'type=ribbon (banner)',   props: { type: 'ribbon', banner: true  } },
  { label: 'type=nta',               props: { type: 'nta',    banner: false } },
  { label: 'type=CMI',               props: { type: 'CMI',    banner: false } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '1800px' }}>
      {variants.map(({ label, props }) => (
        <div key={label}>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            {label}
          </div>
          <Ribbon {...props} />
        </div>
      ))}
    </div>
  ),
}
