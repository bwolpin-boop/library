import { ThumbsComponent } from './ThumbsComponent'

export default {
  title: '🟢   😂 Icon/Thumbs Component/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'no counts',    props: {} },
  { label: 'with counts',  props: { upCount: 12, downCount: 3 } },
  { label: 'up pressed',   props: { upCount: 12, downCount: 3, upPressed: true } },
  { label: 'down pressed', props: { upCount: 12, downCount: 3, downPressed: true } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '160px', flexShrink: 0 }}>
            {label}
          </span>
          <ThumbsComponent {...props} />
        </div>
      ))}
    </div>
  ),
}
