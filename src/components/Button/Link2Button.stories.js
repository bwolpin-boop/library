import { Link2Button } from './Link2Button'

export default {
  title: '🟢   🆗 Button/Link 2',
  component: Link2Button,
  args: { label: 'Link 2', disabled: false },
  argTypes: { disabled: { control: 'boolean' } },
}

export const Default = { args: { size: 'default' } }
export const Small   = { args: { size: 'small' } }
