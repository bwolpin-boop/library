import { DcSuggests } from './DcSuggests'

export default {
  title: '🟠   📁 sources/Dc Suggests',
  component: DcSuggests,
  args: { size: 'big', answerType: 'yes-dc' },
  argTypes: {
    size:       { control: 'select', options: ['big', 'small'] },
    answerType: { control: 'select', options: ['yes-dc', 'not-dc', 'mds', 'no-answer', 'empty'] },
  },
  decorators: [(Story) => <div style={{ padding: '40px' }}><Story /></div>],
}

export const Big   = { args: { size: 'big' } }
export const Small = { args: { size: 'small' } }
