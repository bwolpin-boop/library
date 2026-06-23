import { Calendar } from './Calendar'

export default {
  title: '🟢   🗓 Calendar',
  component: Calendar,
  args: { month: 'February 2026', variant: 'default' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'ard'] },
  },
}

export const Default    = { args: { variant: 'default' } }
export const ArdCalendar = { args: { variant: 'ard' } }
