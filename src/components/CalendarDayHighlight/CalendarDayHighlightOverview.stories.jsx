import { CalendarDayHighlight } from './CalendarDayHighlight'

export default {
  title: '🟢   🗓 CalendarDayHighlight/Overview',
  component: CalendarDayHighlight,
}

const types = ['default', 'between', 'disabled', 'purple fill', 'DC suggestspurple fill']

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24 }}>
      {['DC suggests', 'Current'].map(state => (
        <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>state={state}</span>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            {types.map(type => (
              <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <CalendarDayHighlight state={state} type={type} day={30} amount="$646.37" code="AGSFG" />
                <span style={{ fontSize: 9, color: '#999', textAlign: 'center', maxWidth: 60 }}>{type}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
