import { IconButton } from './IconButton'

export default {
  title: '🟢   😂 Icon/Icon Button/Variants',
  component: IconButton,
  args: { size: 24 },
  argTypes: {
    name: { control: 'text' },
    size: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const Close   = { args: { name: 'close',      size: 24 } }
export const Send    = { args: { name: 'send-small-active', size: 16 } }
export const Mic     = { args: { name: 'mic-small',  size: 16 } }
export const Plus    = { args: { name: 'plus-small', size: 16 } }
