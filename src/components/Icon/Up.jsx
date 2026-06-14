import { useState } from 'react'
import { colors, textStyles, radii, spacing } from '../../tokens.js'
import thumbsUpIcon        from '../../assets/icons/thumbs-up.svg'
import thumbsUpPressedIcon from '../../assets/icons/thumbs-up-pressed.svg'

export function Up({ count, pressed = false, onClick, className }) {
  const [hover, setHover]       = useState(false)
  const [pressing, setPressing] = useState(false)

  const bg = pressing ? colors.surfacePressed
    : hover            ? colors.surfaceHover
    : 'transparent'

  return (
    <button
      onClick={onClick}
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
      <img
        src={pressed ? thumbsUpPressedIcon : thumbsUpIcon}
        alt="thumbs up"
        width={24}
        height={24}
        style={{ display: 'block', flexShrink: 0 }}
      />
      {count !== undefined && (
        <span style={{ ...textStyles.body14Medium, color: colors.secondary, whiteSpace: 'nowrap' }}>
          {count}
        </span>
      )}
    </button>
  )
}
