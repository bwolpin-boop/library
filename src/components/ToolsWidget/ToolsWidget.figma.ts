// url=https://www.figma.com/design/PxJWC0CTQkrrQtb39uP08N/Design-System-DolphinCare?node-id=5531-350288
// source=src/components/ToolsWidget/ToolsWidget.jsx
// component=ToolsWidget
import figma from 'figma'

const instance = figma.selectedInstance

const property1 = instance.getEnum('Property 1', {
  'default open': 'default open',
  'default closed': 'default closed',
  'open arrow': 'open arrow',
  'closed arrow': 'closed arrow',
})

const orientation = instance.getEnum('sideways', {
  'horizontal': 'horizontal',
  'vertical': 'vertical',
})

const size = instance.getEnum('size', {
  'big': 'big',
})

const isOpen = ['default open', 'open arrow'].includes(property1)

export default {
  example: figma.code`
    <ToolsWidget
      isOpen={${isOpen}}
      orientation="${orientation}"
      size="${size}"
      tools={[
        { icon: 'ai', label: 'AI Tool', badge: 7 },
        { icon: 'comment', label: 'Comments', badge: 2 },
        { icon: 'info-small', label: 'Info' },
        { icon: 'checkmark', label: 'Verify', badge: 1 },
      ]}
    />
  `,
  imports: ['import { ToolsWidget } from "@/components/ToolsWidget/ToolsWidget"'],
  id: 'tools-widget',
  metadata: {
    nestable: true,
  },
}
