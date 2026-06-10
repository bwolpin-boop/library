import verifyIcon      from '../../assets/icons/verify.svg'
import error2Icon      from '../../assets/icons/error-2.svg'
import aiIcon          from '../../assets/icons/ai.svg'
import infoPurple      from '../../assets/icons/info-purple.svg'
import closeIcon       from '../../assets/icons/close.svg'
import sendActiveIcon  from '../../assets/icons/send-active.svg'
import sendDisabledIcon from '../../assets/icons/send-disabled.svg'
import dcIconHover     from '../../assets/icons/dc-icon-hover.svg'

const icons = {
  verify:          verifyIcon,
  'error-2':       error2Icon,
  ai:              aiIcon,
  'info-purple':   infoPurple,
  close:           closeIcon,
  'send-active':   sendActiveIcon,
  'send-disabled': sendDisabledIcon,
  'dc-icon-hover': dcIconHover,
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
