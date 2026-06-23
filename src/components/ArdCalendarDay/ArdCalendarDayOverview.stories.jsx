import { ArdCalendarDay } from './ArdCalendarDay'

export default {
  title: '🟢   🗓 ArdCalendarDay/Overview',
  component: ArdCalendarDay,
}

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {['default', 'hover', 'start', 'between', 'disabled'].map(s => (
          <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <ArdCalendarDay state={s} day={30} />
            <span style={{ fontSize: 10, color: '#999' }}>{s}</span>
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <ArdCalendarDay state="default" type="letter" day="S" />
          <span style={{ fontSize: 10, color: '#999' }}>letter</span>
        </div>
      </div>
    </div>
  )
}
