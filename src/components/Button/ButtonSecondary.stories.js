import { Button } from './Button'

export default {
  title: '🟢   🆗 Button/Secondary',
  component: Button,
  args: { label: 'Button', type: 'secondary', disabled: false, selected: false, iconLeft: false, iconRight: false },
  argTypes: { disabled: { control: 'boolean' }, selected: { control: 'boolean' }, iconLeft: { control: 'boolean' }, iconRight: { control: 'boolean' } },
}

export const Default  = { args: { size: 'default' } }
export const Small    = { args: { size: 'small' } }
export const Selected = { args: { size: 'default', selected: true } }
