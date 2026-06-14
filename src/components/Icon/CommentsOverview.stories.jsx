import { Comments } from './Comments'

export default {
  title: '🟢   😂 Icon/Comments/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'default',           props: { count: 4 } },
  { label: 'no count',          props: {} },
  { label: 'disabled',          props: { count: 4, disabled: true } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '160px', flexShrink: 0 }}>
            {label}
          </span>
          <Comments {...props} />
        </div>
      ))}
    </div>
  ),
}
