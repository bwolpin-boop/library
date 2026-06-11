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

export const Verify         = { args: { name: 'verify' } }
export const Error2         = { args: { name: 'error-2' } }
export const Ai             = { args: { name: 'ai' } }
export const InfoPurple     = { args: { name: 'info-purple' } }
export const Close          = { args: { name: 'close' } }
export const DcIconHover    = { args: { name: 'dc-icon-hover' } }
export const CheckboxEmpty  = { args: { name: 'checkbox-empty' } }
export const CheckboxFilled = { args: { name: 'checkbox-filled' } }
export const CheckboxSmall       = { args: { name: 'checkbox-small' } }
export const CheckboxFilledSmall = { args: { name: 'checkbox-filled-small' } }
export const SendActive     = { args: { name: 'send-active' } }
export const SendDisabled   = { args: { name: 'send-disabled' } }
export const PlusSmall      = { args: { name: 'plus-small' } }
export const MicSmall       = { args: { name: 'mic-small' } }
