import verifyIcon       from '../../assets/icons/verify.svg'
import error2Icon       from '../../assets/icons/error-2.svg'
import aiIcon           from '../../assets/icons/ai.svg'
import infoPurple       from '../../assets/icons/info-purple.svg'
import closeIcon        from '../../assets/icons/close.svg'
import dolphincareLogoIcon from '../../assets/icons/dolphincare-logo.svg'
import arrowRightIcon   from '../../assets/icons/arrow-right.svg'
import arrowRightH2YIcon from '../../assets/icons/arrow-right-h2y.svg'
import littleQuestionmarkIcon from '../../assets/icons/little-questionmark.svg'
import commentIcon      from '../../assets/icons/comment.svg'
import checkboxEmptyIcon       from '../../assets/icons/checkbox-empty.svg'
import checkboxFilledIcon      from '../../assets/icons/checkbox-filled.svg'
import checkboxSmallIcon       from '../../assets/icons/checkbox-small.svg'
import checkboxFilledSmallIcon from '../../assets/icons/checkbox-filled-small.svg'
import sendActiveIcon   from '../../assets/icons/send-active.svg'
import sendDisabledIcon from '../../assets/icons/send-disabled.svg'
import plusSmallIcon    from '../../assets/icons/plus-small.svg'
import micSmallIcon     from '../../assets/icons/mic-small.svg'

const icons = {
  // General
  verify:                  verifyIcon,
  'error-2':               error2Icon,
  ai:                      aiIcon,
  'info-purple':           infoPurple,
  close:                   closeIcon,
  'dolphincare-logo':      dolphincareLogoIcon,
  'arrow-right':           arrowRightIcon,
  'arrow-right-h2y':       arrowRightH2YIcon,
  'little-questionmark':   littleQuestionmarkIcon,
  comment:                 commentIcon,
  // Checkbox
  'checkbox-empty':        checkboxEmptyIcon,
  'checkbox-filled':       checkboxFilledIcon,
  'checkbox-small':        checkboxSmallIcon,
  'checkbox-filled-small': checkboxFilledSmallIcon,
  // Send
  'send-active':           sendActiveIcon,
  'send-disabled':         sendDisabledIcon,
  // Other small
  'plus-small':            plusSmallIcon,
  'mic-small':             micSmallIcon,
}

export const iconNames = Object.keys(icons)

export const iconNativeSizes = {
  // General
  verify:                  24,
  'error-2':               24,
  ai:                      24,
  'info-purple':           24,
  close:                   24,
  'dolphincare-logo':      24,
  'arrow-right':           24,
  'arrow-right-h2y':       20,
  'little-questionmark':   24,
  comment:                 24,
  // Checkbox
  'checkbox-empty':        24,
  'checkbox-filled':       24,
  'checkbox-small':        16,
  'checkbox-filled-small': 16,
  // Send
  'send-active':           16,
  'send-disabled':         16,
  // Other small
  'plus-small':            16,
  'mic-small':             16,
}

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
