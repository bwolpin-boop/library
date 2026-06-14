import { DcSuggests } from './DcSuggests'

export default {
  title: '🟠   📁 sources/Dc Suggests/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'Big',   props: { size: 'big' } },
  { label: 'Small', props: { size: 'small' } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '60px', flexShrink: 0 }}>
            {label}
          </span>
          <DcSuggests {...props} />
        </div>
      ))}
    </div>
  ),
}
