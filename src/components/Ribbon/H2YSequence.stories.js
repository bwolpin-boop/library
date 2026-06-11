import { H2YSequence } from './H2YSequence'

export default {
  title: '🟢   🎀 Ribbon/H2YSequence',
  component: H2YSequence,
  argTypes: {
    property1: { control: 'select', options: ['Default', 'pending'] },
  },
}

export const Default = { args: { property1: 'Default' } }
export const Pending = { args: { property1: 'pending' } }
