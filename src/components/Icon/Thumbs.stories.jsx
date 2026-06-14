import { Thumbs } from './Thumbs'

export default {
  title: '🟢   😂 Icon/Thumbs',
  component: Thumbs,
  args: { upCount: 12, downCount: 3 },
  argTypes: {
    upCount:   { control: 'number' },
    downCount: { control: 'number' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const Default  = { args: { upCount: 12, downCount: 3 } }
export const NoCount  = { args: {} }
