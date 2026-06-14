import { colors, textStyles, spacing } from '../../tokens.js'
import thumbsUpIcon        from '../../assets/icons/thumbs-up.svg'
import thumbsUpPressedIcon from '../../assets/icons/thumbs-up-pressed.svg'

export function Up({ count, pressed = false, onClick, className }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: spacing.gap4,
        flexShrink: 0,
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
