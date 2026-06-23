import { Calendar } from './Calendar'

export default {
  title: '🟢   🗓 Calendar/Overview',
  component: Calendar,
}

export const Overview = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>variant=default</span>
        <Calendar variant="default" month="February 2026" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, color: '#999', fontFamily: 'monospace' }}>variant=ard</span>
        <Calendar variant="ard" month="February 2026" />
      </div>
    </div>
  )
}
