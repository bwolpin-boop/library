import { Tooltip } from './Tooltip'

export default {
  title: '🟢   🏷 Tooltip/Variants',
  component: Tooltip,
  args: {
    children: 'Tooltip text goes here',
    arrow: 'left',
    mode: 'light',
    size: 'big',
  },
  argTypes: {
    arrow: { control: 'select', options: ['left', 'right', 'down', 'up'] },
    mode: { control: 'select', options: ['light', 'dark'] },
    size: { control: 'select', options: ['big', 'small'] },
    maxWidth: { control: 'text' },
  },
  parameters: { layout: 'centered' },
}

export const LightLeft  = { args: { mode: 'light', arrow: 'left' } }
export const LightRight = { args: { mode: 'light', arrow: 'right' } }
export const LightDown  = { args: { mode: 'light', arrow: 'down' } }
export const LightUp    = { args: { mode: 'light', arrow: 'up' } }
export const DarkLeft   = { args: { mode: 'dark',  arrow: 'left' } }
export const DarkRight  = { args: { mode: 'dark',  arrow: 'right' } }
export const DarkDown   = { args: { mode: 'dark',  arrow: 'down' } }
export const DarkUp     = { args: { mode: 'dark',  arrow: 'up' } }
export const Small      = { args: { size: 'small', children: 'Short tip' } }
export const Multiline  = { args: { maxWidth: '198px', children: 'A longer tooltip that wraps across multiple lines when width is constrained' } }
