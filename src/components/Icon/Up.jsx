import { useState } from 'react'
import { colors, textStyles, radii, spacing } from '../../tokens.js'
import { NavIcon } from './NavIcon.jsx'
import { WithTooltip } from '../Tooltip/WithTooltip.jsx'

export function Up({ count, selected: selectedProp, onClick, className }) {
  const isControlled               = selectedProp !== undefined
  const [internal, setInternal]    = useState(false)
  const selected                   = isControlled ? selectedProp : internal
  const [hover, setHover]          = useState(false)
  const [pressing, setPressing]    = useState(false)

  const handleClick = () => {
    if (!isControlled) setInternal(s => !s)
    onClick?.()
  }

  const bg = pressing || selected ? colors.surfacePressed
    : hover                        ? colors.surfaceHover
    : 'transparent'

  return (
    <WithTooltip label="Approve">
      <button
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => { setHover(false); setPressing(false) }}
        onMouseDown={() => setPressing(true)}
        onMouseUp={() => setPressing(false)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: spacing.gap4,
          borderRadius: radii.icon,
          backgroundColor: bg,
          flexShrink: 0,
          transition: 'background-color 0.1s',
        }}
        className={className}
      >
        <NavIcon name={selected ? 'thumbs-up-pressed' : 'thumbs-up'} />
        {count !== undefined && (
          <span style={{ ...textStyles.body14Medium, color: colors.secondary, whiteSpace: 'nowrap' }}>
            {count}
          </span>
        )}
      </button>
    </WithTooltip>
  )
}
