import { useState } from 'react'
import { colors, textStyles, radii, spacing } from '../../tokens.js'
import reactionCommentIcon from '../../assets/icons/reaction-comment.svg'

export function Comments({ count, onClick, disabled, className }) {
  const [hover, setHover]     = useState(false)
  const [pressed, setPressed] = useState(false)

  const bg = disabled ? 'transparent'
    : pressed ? 'rgba(34,34,34,0.06)'
    : hover    ? 'rgba(34,34,34,0.04)'
    : 'transparent'

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => { if (!disabled) setHover(true) }}
      onMouseLeave={() => { setHover(false); setPressed(false) }}
      onMouseDown={() => { if (!disabled) setPressed(true) }}
      onMouseUp={() => setPressed(false)}
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
      <img
        src={reactionCommentIcon}
        alt="comments"
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
