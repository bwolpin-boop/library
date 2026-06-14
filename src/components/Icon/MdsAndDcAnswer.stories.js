import { MdsAndDcAnswer } from './MdsAndDcAnswer'

export default {
  title: '🟢   😂 Icon/MDS and DC Answer/Variants',
  component: MdsAndDcAnswer,
  argTypes: {
    type: { control: 'select', options: ['mds', 'yes-dc', 'not-dc', 'empty', 'no-answer'] },
  },
}

export const Mds      = { args: { type: 'mds' } }
export const YesDc    = { args: { type: 'yes-dc' } }
export const NotDc    = { args: { type: 'not-dc' } }
export const Empty    = { args: { type: 'empty' } }
export const NoAnswer = { args: { type: 'no-answer' } }
