import verifyIcon    from '../../assets/icons/verify.svg'
import error2Icon    from '../../assets/icons/error-2.svg'
import aiIcon        from '../../assets/icons/ai.svg'
import infoPurple    from '../../assets/icons/info-purple.svg'

const icons = {
  verify:       verifyIcon,
  'error-2':    error2Icon,
  ai:           aiIcon,
  'info-purple': infoPurple,
}

export const iconNames = Object.keys(icons)

export function NavIcon({ name, size = 24, className }) {
  const src = icons[name]
  if (!src) return null

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={className}
      style={{ flexShrink: 0, display: 'block' }}
    />
  )
}
