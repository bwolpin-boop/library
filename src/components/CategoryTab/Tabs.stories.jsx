import { Tabs } from './Tabs'

const DEFAULT_TABS = [
  { text: 'Pending (1)' },
  { text: 'Approved (1)' },
  { text: 'Completed (1)' },
  { text: 'Dismissed (1)' },
]

export default {
  title: '🟢   📮 Category Tab/Tabs',
  component: Tabs,
  args: { tabs: DEFAULT_TABS, selectedIndex: 0, lockedLabel: false },
  argTypes: {
    size:        { control: 'select', options: ['default', 'small'] },
    lockedLabel: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const Big          = { args: { size: 'default' } }
export const Small        = { args: { size: 'small' } }
export const SmallLocked  = { args: { size: 'small', lockedLabel: true } }
