import { DateRangeInput } from './DateRangeInput'

export default {
  title: '🟢   🗓 DateRangeInput/Overview',
  component: DateRangeInput,
}

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24 }}>
      {[
        { state: 'Default', label: 'Start date' },
        { state: 'hover',   label: 'Start date' },
        { state: 'field',   label: 'Start Date' },
        { state: 'written', label: 'Start date', value: 'May 19th' },
      ].map(p => (
        <div key={p.state} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <DateRangeInput {...p} />
          <span style={{ fontSize: 11, color: '#999' }}>{p.state}</span>
        </div>
      ))}
    </div>
  )
}
