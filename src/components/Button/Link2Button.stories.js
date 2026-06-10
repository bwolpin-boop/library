import { Link2Button } from './Link2Button'

export default {
  title: 'Components/Button/Link 2',
  component: Link2Button,
  args: { label: 'Give us feedback', disabled: false },
  argTypes: { disabled: { control: 'boolean' } },
}

export const Default = { args: { size: 'default' } }
export const Small   = { args: { size: 'small' } }
