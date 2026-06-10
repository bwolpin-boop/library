import { NavIcon, iconNames } from './NavIcon'

export default {
  title: '🟢   😂 Icon/Nav Icons/Variants',
  component: NavIcon,
  args: { size: 24 },
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: 'number' },
  },
}

export const Verify       = { args: { name: 'verify' } }
export const Error2       = { args: { name: 'error-2' } }
export const Ai           = { args: { name: 'ai' } }
export const InfoPurple   = { args: { name: 'info-purple' } }
export const SendActive   = { args: { name: 'send-active' } }
export const SendDisabled = { args: { name: 'send-disabled' } }
export const DcIconHover  = { args: { name: 'dc-icon-hover' } }
