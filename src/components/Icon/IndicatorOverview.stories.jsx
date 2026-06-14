import { Indicator } from './Indicator'

export default {
  title: '🟢   😂 Icon/Indicator/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'state=todo, tooltip=true',       props: { state: 'todo',      tooltip: true } },
  { label: 'state=completed, tooltip=true',  props: { state: 'completed', tooltip: true } },
  { label: 'state=todo, tooltip=false',      props: { state: 'todo',      tooltip: false } },
  { label: 'state=completed, tooltip=false', props: { state: 'completed', tooltip: false } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '260px', flexShrink: 0 }}>
            {label}
          </span>
          <Indicator count={15} {...props} />
        </div>
      ))}
    </div>
  ),
}
