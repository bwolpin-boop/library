import { RibbonStates } from './RibbonStates'

export default {
  title: '🟢   🎀 Ribbon/RibbonStates/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'type=all',       type: 'all' },
  { label: 'type=nursing',   type: 'nursing' },
  { label: 'type=NTA',       type: 'NTA' },
  { label: 'type=Cognitive', type: 'Cognitive' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {variants.map(({ label, type }) => (
        <div key={label}>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            {label}
          </div>
          <RibbonStates type={type} />
        </div>
      ))}
    </div>
  ),
}
