import { NavIcon, iconNames } from './NavIcon'

export default {
  title: 'Components/Icon/Nav Icons/Variants',
  component: NavIcon,
  args: { size: 24 },
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: 'number' },
  },
}

export const Verify     = { args: { name: 'verify' } }
export const Error2     = { args: { name: 'error-2' } }
export const Ai         = { args: { name: 'ai' } }
export const InfoPurple = { args: { name: 'info-purple' } }
