import { CalendarLegend } from './CalendarLegend'

export default {
  title: '🟢   🗓 CalendarLegend/Overview',
  component: CalendarLegend,
}

export const Overview = {
  render: () => (
    <div style={{ padding: 24 }}>
      <CalendarLegend />
    </div>
  )
}
