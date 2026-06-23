import { ArdCalendarDay } from './ArdCalendarDay'

export default {
  title: '🟢   🗓 ArdCalendarDay',
  component: ArdCalendarDay,
  args: { day: 30, state: 'default', type: 'number' },
  argTypes: {
    state: { control: 'select', options: ['default', 'hover', 'start', 'between', 'disabled'] },
    type:  { control: 'select', options: ['number', 'letter', 'empty'] },
  },
}

export const Default  = { args: { state: 'default' } }
export const Hover    = { args: { state: 'hover' } }
export const Start    = { args: { state: 'start' } }
export const Between  = { args: { state: 'between' } }
export const Disabled = { args: { state: 'disabled' } }
export const Letter   = { args: { state: 'default', type: 'letter', day: 'S' } }
