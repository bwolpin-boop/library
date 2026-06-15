import { useState } from 'react'
import { colors, textStyles, radii, spacing } from '../../tokens.js'
import { NavIcon } from './NavIcon.jsx'
import { WithTooltip } from '../Tooltip/WithTooltip.jsx'

export function Comments({ count, onClick, disabled, className }) {
  const [selected, setSelected] = useState(false)
  const [hover, setHover]       = useState(false)
  const [pressing, setPressing] = useState(false)

  const handleClick = () => {
    if (disabled) return
    setSelected(s => !s)
    onClick?.()
  }

  const bg = disabled ? 'transparent'
    : pressing || selected ? colors.surfacePressed
    : hover                ? colors.surfaceHover
    : 'transparent'

  return (
    <WithTooltip label="Comments">
      <button
        onClick={handleClick}
        onMouseEnter={() => { if (!disabled) setHover(true) }}
        onMouseLeave={() => { setHover(false); setPressing(false) }}
        onMouseDown={() => { if (!disabled) setPressing(true) }}
        onMouseUp={() => setPressing(false)}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: disabled ? 'default' : 'pointer',
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
        <NavIcon name="reaction-comment" />
        {count !== undefined && (
          <span style={{ ...textStyles.body14Medium, color: colors.secondary, whiteSpace: 'nowrap' }}>
            {count}
          </span>
        )}
      </button>
    </WithTooltip>
  )
}
