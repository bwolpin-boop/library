import { ToolsWidget } from './ToolsWidget'

const defaultTools = [
  { icon: 'ai', label: 'AI Tool', badge: 7 },
  { icon: 'comment', label: 'Comments', badge: 2 },
  { icon: 'info-small', label: 'Info' },
  { icon: 'checkmark', label: 'Verify', badge: 1 },
]

export const Overview = {
  render: () => (
    <div className="dc:flex dc:flex-col dc:gap-gap24 dc:p-gap24">
      <div>
        <h3 className="dc:text-sm dc:font-semibold dc:text-primary dc:mb-gap16">Vertical Layout</h3>
        <div className="dc:flex dc:gap-gap40">
          <div>
            <p className="dc:text-xxxs dc:text-muted dc:mb-gap8">Open</p>
            <div className="dc:bg-gray-100 dc:p-gap16 dc:rounded-box">
              <ToolsWidget isOpen={true} orientation="vertical" tools={defaultTools} />
            </div>
          </div>
          <div>
            <p className="dc:text-xxxs dc:text-muted dc:mb-gap8">Closed</p>
            <div className="dc:bg-gray-100 dc:p-gap16 dc:rounded-box">
              <ToolsWidget isOpen={false} orientation="vertical" tools={defaultTools} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="dc:text-sm dc:font-semibold dc:text-primary dc:mb-gap16">Horizontal Layout</h3>
        <div className="dc:flex dc:gap-gap40">
          <div>
            <p className="dc:text-xxxs dc:text-muted dc:mb-gap8">Open</p>
            <div className="dc:bg-gray-100 dc:p-gap16 dc:rounded-box">
              <ToolsWidget isOpen={true} orientation="horizontal" tools={defaultTools} />
            </div>
          </div>
          <div>
            <p className="dc:text-xxxs dc:text-muted dc:mb-gap8">Closed</p>
            <div className="dc:bg-gray-100 dc:p-gap16 dc:rounded-box">
              <ToolsWidget isOpen={false} orientation="horizontal" tools={defaultTools} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
