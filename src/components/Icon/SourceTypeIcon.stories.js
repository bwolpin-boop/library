import { SourceTypeIcon, sourceTypeIconNames } from './SourceTypeIcon'

export default {
  title: 'Components/Icon/Source Type Icons/Variants',
  component: SourceTypeIcon,
  args: { size: 24 },
  argTypes: {
    type: { control: 'select', options: sourceTypeIconNames },
    size: { control: 'number' },
  },
}

export const Default = { args: { type: 'Progress Notes' } }
