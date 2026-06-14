import { Comments } from './Comments'

export default {
  title: '🟢   😂 Icon/Comments',
  component: Comments,
  args: { count: 4 },
  argTypes: {
    count:    { control: 'number' },
    disabled: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const Default  = { args: { count: 4 } }
export const NoCount  = { args: { count: undefined } }
export const Disabled = { args: { count: 4, disabled: true } }
