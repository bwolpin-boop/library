import { useState } from 'react'
import { NavIcon } from './NavIcon.jsx'
import { WithTooltip } from '../Tooltip/WithTooltip.jsx'

export function Down({ count, selected: selectedProp, onClick, className }) {
  const isControlled               = selectedProp !== undefined
  const [internal, setInternal]    = useState(false)
  const selected                   = isControlled ? selectedProp : internal
  const [pressing, setPressing]    = useState(false)

  const handleClick = () => {
    if (!isControlled) setInternal(s => !s)
    onClick?.()
  }

  const bgClass = pressing || selected
    ? 'dc:bg-surface-pressed'
    : 'dc:bg-transparent dc:hover:bg-surface-hover'

  return (
    <WithTooltip label="Don't Approve">
      <button
        onClick={handleClick}
        onMouseLeave={() => setPressing(false)}
        onMouseDown={() => setPressing(true)}
        onMouseUp={() => setPressing(false)}
        className={`dc:bg-transparent dc:border-none dc:p-0 dc:cursor-pointer dc:flex dc:items-center dc:gap-gap4 dc:rounded-icon dc:shrink-0 dc:[transition:background-color_0.1s] ${bgClass}${className ? ` ${className}` : ''}`}
      >
        <NavIcon name={selected ? 'thumbs-down-pressed' : 'thumbs-down'} />
        {count !== undefined && (
          <span className="dc:font-montserrat dc:text-sm dc:font-medium dc:text-secondary dc:whitespace-nowrap">
            {count}
          </span>
        )}
      </button>
    </WithTooltip>
  )
}
