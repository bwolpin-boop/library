import { useState } from 'react'
import { SearchField } from './SearchField'

export default {
  title: '🟠   🍃 Search Fields/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'size=dashboard', size: 'dashboard' },
  { label: 'size=middle',    size: 'middle' },
  { label: 'size=small',     size: 'small' },
]

function LiveField({ size }) {
  const [value, setValue] = useState('')
  return (
    <SearchField
      size={size}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  )
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {variants.map(({ label, size }) => (
          <div key={label}>
            <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              {label}
            </div>
            <LiveField size={size} />
          </div>
        ))}
      </div>
    </div>
  ),
}
