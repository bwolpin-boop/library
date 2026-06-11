import { CategoryTag } from './CategoryTag'

export default {
  title: '🟢   📮 Category Tag',
  component: CategoryTag,
  args: { hasClose: false },
  argTypes: {
    type:  { control: 'select', options: ['nursing', 'OT/PT', 'SLP', 'NTA', 'Functional Scores'] },
    state: { control: 'select', options: ['Default', 'hover', 'pressed'] },
    hasClose: { control: 'boolean' },
  },
}

export const Nursing          = { args: { type: 'nursing' } }
export const OtPt             = { args: { type: 'OT/PT' } }
export const Slp              = { args: { type: 'SLP' } }
export const Nta              = { args: { type: 'NTA' } }
export const FunctionalScores = { args: { type: 'Functional Scores' } }
export const WithClose        = { args: { type: 'nursing', hasClose: true } }
export const Hover            = { args: { type: 'nursing', state: 'hover' } }
export const Pressed          = { args: { type: 'nursing', state: 'pressed' } }
