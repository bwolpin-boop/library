import { Button } from './Button'

export default {
  title: '🟢   🆗 Button/Tertiary',
  component: Button,
  args: { label: 'Button', type: 'tertiary', disabled: false, iconLeft: false, iconRight: false },
  argTypes: { disabled: { control: 'boolean' }, iconLeft: { control: 'boolean' }, iconRight: { control: 'boolean' } },
}

export const Default = { args: { size: 'default' } }
export const Small   = { args: { size: 'small' } }
