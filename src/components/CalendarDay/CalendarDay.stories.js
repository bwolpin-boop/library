import { CalendarDay } from './CalendarDay'

export default {
  title: '🟢   🗓 CalendarDay',
  component: CalendarDay,
  args: { day: 30, state: 'default', type: 'number' },
  argTypes: {
    state: { control: 'select', options: ['default', 'hover', 'start', 'end', 'between', 'disabled'] },
    type:  { control: 'select', options: ['number', 'letter', 'empty'] },
  },
}

export const Default         = { args: { state: 'default',  type: 'number' } }
export const Hover           = { args: { state: 'hover',    type: 'number' } }
export const Start           = { args: { state: 'start',    type: 'number' } }
export const End             = { args: { state: 'end',      type: 'number' } }
export const Between         = { args: { state: 'between',  type: 'number' } }
export const Disabled        = { args: { state: 'disabled', type: 'number' } }
export const Letter          = { args: { state: 'default',  type: 'letter', day: 'S' } }
export const DisabledEmpty   = { args: { state: 'disabled', type: 'empty' } }
