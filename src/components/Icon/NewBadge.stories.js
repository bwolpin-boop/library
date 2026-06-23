import { NewBadge } from './NewBadge'

export default {
  title: '🟢   😂 Icon/New Badge',
  component: NewBadge,
  args: { label: 'New' },
  argTypes: {
    label: { control: 'text' },
  },
}

export const Default = { args: { label: 'New' } }
export const Custom  = { args: { label: 'Beta' } }
