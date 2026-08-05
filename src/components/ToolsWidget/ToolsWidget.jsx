import { useState } from 'react'
import { NavIcon } from '../Icon/NavIcon'

export function ToolsWidget({
  isOpen = true,
  orientation = 'vertical',
  size = 'big',
  tools = [],
  onToolClick,
  className,
}) {
  const [expanded, setExpanded] = useState(isOpen)

  const isVertical = orientation === 'vertical'
  const isHorizontal = orientation === 'horizontal'

  const containerClasses = `
    dc:inline-flex
    ${isVertical ? 'dc:flex-col' : 'dc:flex-row'}
    dc:gap-gap0
    dc:items-center
    dc:rounded-rounded
    dc:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]
    dc:bg-white dc:bg-opacity-50
    ${expanded
      ? isVertical
        ? 'dc:px-gap0 dc:py-gap8'
        : 'dc:px-gap8 dc:py-gap0'
      : 'dc:p-gap0'
    }
  `

  const headerClasses = `
    dc:flex
    ${isVertical ? 'dc:flex-col' : 'dc:flex-row'}
    dc:gap-gap8
    dc:items-center
    dc:justify-center
    dc:rounded-t-rounded
    dc:shrink-0
    ${isVertical
      ? expanded ? 'dc:pb-gap0 dc:pt-gap8 dc:px-gap8' : 'dc:p-gap0'
      : expanded ? 'dc:pl-gap8 dc:pr-gap0 dc:py-gap8' : 'dc:p-gap8'
    }
  `

  const toolsContainerClasses = `
    dc:flex
    ${isVertical ? 'dc:flex-col' : 'dc:flex-row'}
    dc:gap-gap8
    dc:items-${isVertical ? 'start' : 'center'}
    dc:overflow-clip
    ${isVertical
      ? 'dc:pb-gap4 dc:pt-gap12 dc:px-gap8'
      : 'dc:gap-gap8 dc:items-center dc:justify-center dc:px-gap8 dc:py-gap4'
    }
  `

  return (
    <div className={`${containerClasses} ${className || ''}`}>
      {/* Header with primary tool and expand button */}
      <div className={headerClasses}>
        {tools.length > 0 && (
          <button
            className="dc:flex dc:items-center dc:justify-center dc:size-gap32 dc:rounded-box dc:bg-white dc:cursor-pointer dc:transition-colors dc:hover:bg-gray-100"
            onClick={() => tools[0]?.onClick?.()}
            aria-label={tools[0]?.label}
          >
            <NavIcon name={tools[0]?.icon} size={24} />
          </button>
        )}
        {expanded && (
          <div
            className={`dc:relative dc:shrink-0 ${
              isVertical
                ? 'dc:w-gap12 dc:h-0'
                : 'dc:flex dc:h-gap12 dc:w-0 dc:items-center dc:justify-center'
            }`}
          >
            {isVertical && (
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                className="dc:absolute dc:inset-0"
              >
                <path
                  d="M6 1V11M1 6H11"
                  stroke="#222222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {isHorizontal && (
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                className="dc:rotate-90"
              >
                <path
                  d="M1 6H11M6 1V11"
                  stroke="#222222"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        )}
      </div>

      {/* Expanded tools area */}
      {expanded && tools.length > 1 && (
        <div className={toolsContainerClasses}>
          {tools.slice(1).map((tool, idx) => (
            <button
              key={idx}
              className={`
                dc:inline-flex
                dc:items-center
                dc:justify-center
                dc:gap-gap8
                dc:h-gap40
                dc:px-gap8
                dc:py-gap8
                dc:rounded-rounded
                dc:bg-purple
                dc:text-white
                dc:cursor-pointer
                dc:transition-colors
                dc:hover:bg-purple-hover
                dc:disabled:bg-disabled
                dc:disabled:cursor-not-allowed
              `}
              onClick={() => tool.onClick?.()}
              disabled={tool.disabled}
              aria-label={tool.label}
            >
              <NavIcon name={tool.icon} size={22} />
              {tool.badge !== undefined && (
                <span className="dc:text-xxxs dc:font-semibold dc:bg-white dc:text-purple dc:px-gap4 dc:py-gap0 dc:rounded-icon">
                  {tool.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Collapse button (when expanded) */}
      {expanded && (
        <button
          className={`
            dc:border-divider-subtle dc:border-solid dc:border-t
            dc:content-stretch
            dc:flex
            dc:items-center
            dc:justify-center
            dc:pb-gap3
            dc:pt-gap8
            dc:px-gap12
            dc:rounded-bl-rounded
            dc:rounded-br-rounded
            dc:w-gap56
            dc:cursor-pointer
            dc:transition-colors
            dc:hover:bg-gray-50
            ${isHorizontal ? 'dc:-rotate-90' : ''}
          `}
          onClick={() => setExpanded(false)}
          aria-label="Collapse tools"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            className={isHorizontal ? 'dc:rotate-90' : ''}
          >
            <path
              d="M1 6H11"
              stroke="#D9D9D9"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
