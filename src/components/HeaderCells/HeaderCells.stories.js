import { HeaderCells } from './HeaderCells'

export default {
  title: '🟢   💊 IPA components/Header Cells',
  component: HeaderCells,
  args: { label: 'Facilities' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'empty'] },
    label:   { control: 'text' },
  },
}

export const Default = { args: { variant: 'default' } }
export const Empty   = { args: { variant: 'empty' } }
