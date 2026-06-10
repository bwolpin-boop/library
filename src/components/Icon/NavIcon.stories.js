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

export const Checkmark    = { args: { name: 'checkmark' } }
export const Verify       = { args: { name: 'verify' } }
export const Error2       = { args: { name: 'error-2' } }
export const Ai           = { args: { name: 'ai' } }
export const InfoPurple   = { args: { name: 'info-purple' } }
export const SendActive   = { args: { name: 'send-active' } }
export const SendDisabled = { args: { name: 'send-disabled' } }
export const DcIconHover      = { args: { name: 'dc-icon-hover' } }
export const SendSmallActive  = { args: { name: 'send-small-active' } }
export const SendSmallHover   = { args: { name: 'send-small-hover' } }
export const SendSmallPressed = { args: { name: 'send-small-pressed' } }
export const SendSmall        = { args: { name: 'send-small' } }
export const CheckboxSmall    = { args: { name: 'checkbox-small' } }
export const PlusSmall        = { args: { name: 'plus-small' } }
export const MicSmall         = { args: { name: 'mic-small' } }
