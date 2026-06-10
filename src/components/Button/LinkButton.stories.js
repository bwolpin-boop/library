import { LinkButton } from './LinkButton'

export default {
  title: 'Components/Button/Link',
  component: LinkButton,
  args: { label: 'Link', disabled: false, iconLeft: false, iconRight: false },
  argTypes: { disabled: { control: 'boolean' }, iconLeft: { control: 'boolean' }, iconRight: { control: 'boolean' } },
}

export const Default = { args: { size: 'default' } }
export const Small   = { args: { size: 'small' } }
