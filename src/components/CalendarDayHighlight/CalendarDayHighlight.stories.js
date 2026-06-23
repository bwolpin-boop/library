import { CalendarDayHighlight } from './CalendarDayHighlight'

export default {
  title: '🟢   🗓 CalendarDayHighlight',
  component: CalendarDayHighlight,
  args: { day: 30, amount: '$646.37', code: 'AGSFG', hasOutline: true },
  argTypes: {
    state: { control: 'select', options: ['Current', 'DC suggests'] },
    type:  { control: 'select', options: ['default', 'between', 'disabled', 'purple fill', 'DC suggestspurple fill'] },
  },
}

export const DefaultDcSuggests   = { args: { state: 'DC suggests',  type: 'default' } }
export const BetweenDcSuggests   = { args: { state: 'DC suggests',  type: 'between' } }
export const PurpleFillCurrent   = { args: { state: 'Current',      type: 'purple fill' } }
export const DcPurpleFill        = { args: { state: 'DC suggests',  type: 'DC suggestspurple fill' } }
export const DefaultCurrent      = { args: { state: 'Current',      type: 'default' } }
export const DisabledDcSuggests  = { args: { state: 'DC suggests',  type: 'disabled' } }
export const NoOutline           = { args: { state: 'Current',      type: 'default', hasOutline: false } }
