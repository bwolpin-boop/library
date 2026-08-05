import { ToolsWidget } from './ToolsWidget'

const defaultTools = [
  { icon: 'ai', label: 'AI Tool', badge: 7 },
  { icon: 'comment', label: 'Comments', badge: 2 },
  { icon: 'info-small', label: 'Info' },
  { icon: 'checkmark', label: 'Verify', badge: 1 },
]

export default {
  title: '🟢   🎯 ToolsWidget',
  component: ToolsWidget,
  args: {
    isOpen: true,
    orientation: 'vertical',
    tools: defaultTools,
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the widget starts in expanded state',
    },
    orientation: {
      control: { type: 'select', options: ['vertical', 'horizontal'] },
      description: 'Layout direction',
    },
    size: {
      control: { type: 'select', options: ['big'] },
      description: 'Widget size',
    },
    tools: {
      description: 'Array of tool objects with icon, label, badge, onClick, disabled',
    },
  },
}

export const VerticalOpen = {
  args: {
    isOpen: true,
    orientation: 'vertical',
  },
}

export const VerticalClosed = {
  args: {
    isOpen: false,
    orientation: 'vertical',
  },
}

export const HorizontalOpen = {
  args: {
    isOpen: true,
    orientation: 'horizontal',
  },
}

export const HorizontalClosed = {
  args: {
    isOpen: false,
    orientation: 'horizontal',
  },
}
