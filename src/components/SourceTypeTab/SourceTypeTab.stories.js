import { SourceTypeTab, sourceTypes } from './SourceTypeTab'

export default {
  title: 'Components/SourceTypeTab/Variants',
  component: SourceTypeTab,
  args: { type: 'Progress Notes', size: 'big', state: 'default', showArrows: true },
  argTypes: {
    type:  { control: 'select', options: sourceTypes },
    size:  { control: 'select', options: ['big', 'small'] },
    state: { control: 'select', options: ['default', 'hover', 'while pressing', 'pressed'] },
    showArrows: { control: 'boolean' },
  },
}

export const Default       = { args: { state: 'default' } }
export const Hover         = { args: { state: 'hover' } }
export const WhilePressing = { args: { state: 'while pressing' } }
export const Pressed       = { args: { state: 'pressed' } }
