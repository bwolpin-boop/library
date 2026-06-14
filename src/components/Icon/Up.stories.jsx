import { Up } from './Up'

export default {
  title: '🟢   😂 Icon/Up',
  component: Up,
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
