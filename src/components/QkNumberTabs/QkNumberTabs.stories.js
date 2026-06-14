import { QkNumberTabs } from './QkNumberTabs'

export default {
  title: '🟢   📮 Tabs & Tags/QK Number Tabs',
  component: QkNumberTabs,
  args: {
    label: 'M1200B',
    size: 'big',
    state: 'default',
    verifiedDenied: 'Default',
  },
  argTypes: {
    size: { control: 'select', options: ['big', 'small'] },
    state: { control: 'select', options: ['default', 'hover', 'clicked'] },
    verifiedDenied: { control: 'select', options: ['Default', 'verified', 'denied'] },
    label: { control: 'text' },
  },
}

export const Default = { args: { size: 'big', state: 'default' } }
export const Hover = { args: { size: 'big', state: 'hover' } }
export const Clicked = { args: { size: 'big', state: 'clicked' } }
export const Small = { args: { size: 'small', state: 'default' } }
export const Verified = { args: { verifiedDenied: 'verified' } }
export const Denied = { args: { verifiedDenied: 'denied' } }
