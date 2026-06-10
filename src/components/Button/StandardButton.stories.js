import { StandardButton } from './StandardButton'

export default {
  title: 'Components/Button/Standard',
  component: StandardButton,
  args: { label: 'View All Diagnoses', disabled: false },
  argTypes: { disabled: { control: 'boolean' } },
}

export const Default = { args: { size: 'default' } }
export const Small   = { args: { size: 'small' } }
