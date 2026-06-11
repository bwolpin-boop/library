import { useState } from 'react'
import { SearchField } from './SearchField'

export default {
  title: '🟠   🍃 Search Fields/Variants',
  component: SearchField,
  args: { size: 'dashboard', value: '', disabled: false, error: '', iconLeft: true, iconRight: true },
  argTypes: {
    size:      { control: 'select', options: ['dashboard', 'middle', 'small'] },
    iconLeft:  { control: 'boolean' },
    iconRight: { control: 'boolean' },
    disabled:  { control: 'boolean' },
    error:     { control: 'text' },
    value:     { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px' }}>
        <Story />
      </div>
    ),
  ],
}

function Controlled(args) {
  const [value, setValue] = useState(args.value || '')
  return (
    <SearchField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  )
}

export const DashboardDefault  = { render: (args) => <Controlled {...args} />, args: { size: 'dashboard' } }
export const DashboardWithText = { render: (args) => <Controlled {...args} />, args: { size: 'dashboard', value: 'Patient name' } }
export const DashboardError    = { render: (args) => <Controlled {...args} />, args: { size: 'dashboard', value: 'Typing', error: 'Error Message' } }
export const DashboardFrozen   = { render: (args) => <Controlled {...args} />, args: { size: 'dashboard', disabled: true } }
export const MiddleDefault     = { render: (args) => <Controlled {...args} />, args: { size: 'middle' } }
export const MiddleWithText    = { render: (args) => <Controlled {...args} />, args: { size: 'middle', value: 'Text here' } }
export const MiddleError       = { render: (args) => <Controlled {...args} />, args: { size: 'middle', value: 'Typing', error: 'Error Message' } }
export const SmallDefault      = { render: (args) => <Controlled {...args} />, args: { size: 'small' } }
export const SmallWithText     = { render: (args) => <Controlled {...args} />, args: { size: 'small', value: 'Text here' } }
export const SmallError        = { render: (args) => <Controlled {...args} />, args: { size: 'small', value: 'Typing', error: 'Error' } }
