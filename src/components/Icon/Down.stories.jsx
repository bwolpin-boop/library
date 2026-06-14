import { Down } from './Down'

export default {
  title: '🟢   😂 Icon/Down',
  component: Down,
  args: { count: 123, pressed: false },
  argTypes: {
    count:   { control: 'number' },
    pressed: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const Default        = { args: { count: 123, pressed: false } }
export const Pressed        = { args: { count: 123, pressed: true } }
export const NoCount        = { args: { pressed: false } }
export const PressedNoCount = { args: { pressed: true } }
