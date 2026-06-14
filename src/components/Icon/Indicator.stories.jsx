import { Indicator } from './Indicator'

export default {
  title: '🟢   😂 Icon/Indicator/Variants',
  component: Indicator,
  args: { count: 15, state: 'todo', tooltip: true, tooltipText: 'Dolphincare Suggestions' },
  argTypes: {
    state:   { control: 'select', options: ['todo', 'completed'] },
    tooltip: { control: 'boolean' },
    count:   { control: 'number' },
    tooltipText: { control: 'text' },
  },
  decorators: [(Story) => <div style={{ padding: '40px' }}><Story /></div>],
}

export const ToDo            = { args: { state: 'todo',      tooltip: true } }
export const Completed       = { args: { state: 'completed', tooltip: true } }
export const ToDoNoTooltip   = { args: { state: 'todo',      tooltip: false } }
export const CompletedNoTooltip = { args: { state: 'completed', tooltip: false } }
