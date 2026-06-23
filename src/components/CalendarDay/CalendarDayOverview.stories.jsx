import { CalendarDay } from './CalendarDay'

export default {
  title: '🟢   🗓 CalendarDay/Overview',
  component: CalendarDay,
}

const states = ['default', 'hover', 'start', 'end', 'between', 'disabled']

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>type=number</span>
        <div style={{ display: 'flex', gap: 0 }}>
          {states.map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <CalendarDay state={s} type="number" day={30} />
              <span style={{ fontSize: 10, color: '#999' }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>type=letter</span>
        <div style={{ display: 'flex', gap: 0 }}>
          {['M','T','W','T','F','S','S'].map((l, i) => (
            <CalendarDay key={i} state="default" type="letter" day={l} />
          ))}
        </div>
      </div>
    </div>
  )
}
