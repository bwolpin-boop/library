import { RibbonStates } from './RibbonStates'

export default {
  title: '🟢   🎀 Ribbon/RibbonStates/Variants',
  component: RibbonStates,
  args: { type: 'all' },
  argTypes: {
    type: { control: 'select', options: ['all', 'nursing', 'NTA', 'Cognitive'] },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const All       = { args: { type: 'all' } }
export const Nursing   = { args: { type: 'nursing' } }
export const NTA       = { args: { type: 'NTA' } }
export const Cognitive = { args: { type: 'Cognitive' } }
