import { useState } from 'react'
import { QkNumberTabs } from './QkNumberTabs'

export default {
  title: '🟢   📮 Tabs & Tags/QK Number Tabs/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const sectionLabel = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
    {text}
  </div>
)
const rowLabel = (text) => (
  <div style={{ width: '80px', fontFamily: font, fontSize: '11px', fontWeight: 500, color: '#A3A3A3', flexShrink: 0 }}>{text}</div>
)

const LABELS = ['M1200B', 'M1201A', 'M1202C']

function InteractiveTabRow({ labels, size, verifiedDenied }) {
  const [selected, setSelected] = useState(0)
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      {labels.map((label, i) => (
        <QkNumberTabs
          key={i}
          label={label}
          size={size}
          state={i === selected ? 'clicked' : 'default'}
          verifiedDenied={verifiedDenied}
          onClick={() => setSelected(i)}
        />
      ))}
    </div>
  )
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px' }}>

      <div>
        {sectionLabel('Big — click to select, hover to preview')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['Default', 'verified', 'denied'].map(vd => (
            <div key={vd} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {rowLabel(vd)}
              <InteractiveTabRow labels={LABELS} size="big" verifiedDenied={vd} />
            </div>
          ))}
        </div>
      </div>

      <div>
        {sectionLabel('Small — click to select, hover to preview')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['Default', 'verified', 'denied'].map(vd => (
            <div key={vd} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {rowLabel(vd)}
              <InteractiveTabRow labels={LABELS} size="small" verifiedDenied={vd} />
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
}
