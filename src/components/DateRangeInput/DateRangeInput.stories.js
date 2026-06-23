import { DateRangeInput } from './DateRangeInput'

export default {
  title: '🟢   🗓 DateRangeInput',
  component: DateRangeInput,
  args: { label: 'Start date', state: 'Default', value: 'May 19th' },
  argTypes: {
    state: { control: 'select', options: ['Default', 'hover', 'field', 'written'] },
  },
}

export const Default  = { args: { state: 'Default', label: 'Start date' } }
export const Hover    = { args: { state: 'hover',   label: 'Start date' } }
export const Field    = { args: { state: 'field',   label: 'Start Date' } }
export const Written  = { args: { state: 'written', value: 'May 19th' } }
export const DueDate  = { args: { state: 'Default', label: 'Due date' } }
export const EndDate  = { args: { state: 'Default', label: 'End date' } }
