import { useState } from 'react'
import { NavIcon } from './NavIcon.jsx'
import { WithTooltip } from '../Tooltip/WithTooltip.jsx'

export function Comments({ count, onClick, disabled, className, selected: selectedProp }) {
  const [internalSelected, setInternalSelected] = useState(false)
  const [pressing, setPressing] = useState(false)

  const isControlled = selectedProp !== undefined
  const selected = isControlled ? selectedProp : internalSelected

  const handleClick = () => {
    if (disabled) return
    if (!isControlled) setInternalSelected(s => !s)
    onClick?.()
  }

  const bgClass = disabled
    ? 'dc:bg-transparent'
    : pressing || selected
    ? 'dc:bg-surface-pressed'
    : 'dc:bg-transparent dc:hover:bg-surface-hover'

  return (
    <WithTooltip label="Comments">
      <button
        onClick={handleClick}
        onMouseLeave={() => setPressing(false)}
        onMouseDown={() => { if (!disabled) setPressing(true) }}
        onMouseUp={() => setPressing(false)}
        className={`dc:bg-transparent dc:border-none dc:p-0 ${disabled ? 'dc:cursor-default' : 'dc:cursor-pointer'} dc:flex dc:items-center dc:gap-gap4 dc:rounded-icon dc:shrink-0 dc:[transition:background-color_0.1s] ${bgClass}${className ? ` ${className}` : ''}`}
      >
        <NavIcon name="reaction-comment" />
        {count !== undefined && (
          <span className="dc:font-montserrat dc:text-sm dc:font-medium dc:text-secondary dc:whitespace-nowrap">
            {count}
          </span>
        )}
      </button>
    </WithTooltip>
  )
}
