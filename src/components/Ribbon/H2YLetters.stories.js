import { H2YLetters } from './H2YLetters'

export default {
  title: '🟢   🎀 Ribbon/H2YLetters',
  component: H2YLetters,
  argTypes: {
    type: { control: 'select', options: ['H', '2', 'Y', 'pending'] },
    before: { control: 'select', options: ['before', 'after'] },
  },
}

export const BeforeH       = { args: { type: 'H',       before: 'before' } }
export const Before2       = { args: { type: '2',       before: 'before' } }
export const BeforeY       = { args: { type: 'Y',       before: 'before' } }
export const BeforePending = { args: { type: 'pending', before: 'before' } }
export const AfterH        = { args: { type: 'H',       before: 'after'  } }
export const After2        = { args: { type: '2',       before: 'after'  } }
export const AfterY        = { args: { type: 'Y',       before: 'after'  } }
export const AfterPending  = { args: { type: 'pending', before: 'after'  } }
