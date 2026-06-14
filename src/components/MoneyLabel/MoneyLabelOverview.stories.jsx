import { MoneyLabel } from './MoneyLabel'

export default {
  title: '🟢   💊 IPA components/Money Label/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'positive',       props: { value: 500 } },
  { label: 'negative',       props: { value: -500 } },
  { label: 'large positive', props: { value: 12500 } },
  { label: 'large negative', props: { value: -12500 } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '140px', flexShrink: 0 }}>
            {label}
          </span>
          <MoneyLabel {...props} />
        </div>
      ))}
    </div>
  ),
}
