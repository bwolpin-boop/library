import { useState } from 'react'
import { colors, textStyles, radii, spacing } from '../../tokens.js'
import { NavIcon } from './NavIcon.jsx'

export function Down({ count, onClick, className }) {
  const [selected, setSelected] = useState(false)
  const [hover, setHover]       = useState(false)
  const [pressing, setPressing] = useState(false)

  const handleClick = () => {
    setSelected(s => !s)
    onClick?.()
  }

  const bg = pressing || selected ? colors.surfacePressed
    : hover                        ? colors.surfaceHover
    : 'transparent'

  return (
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
      <NavIcon name={selected ? 'thumbs-down-pressed' : 'thumbs-down'} />
      {count !== undefined && (
        <span style={{ ...textStyles.body14Medium, color: colors.secondary, whiteSpace: 'nowrap' }}>
          {count}
        </span>
      )}
    </button>
  )
}
