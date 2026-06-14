import verifyIcon       from '../../assets/icons/verify.svg'
import error2Icon       from '../../assets/icons/error-2.svg'
import aiIcon           from '../../assets/icons/ai.svg'
import infoPurple       from '../../assets/icons/info-purple.svg'
import closeIcon        from '../../assets/icons/close.svg'
import dolphincareLogoIcon from '../../assets/icons/dolphincare-logo.svg'
import arrowRightIcon   from '../../assets/icons/arrow-right.svg'
import arrowLeftIcon    from '../../assets/icons/arrow-left.svg'
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
import medicaidIconSvg  from '../../assets/icons/medicaid-icon.svg'
import vdVerifyDefault   from '../../assets/icons/vd-verify-default.svg'
import vdVerifyHover     from '../../assets/icons/vd-verify-hover.svg'
import vdVerifyClicked   from '../../assets/icons/vd-verify-clicked.svg'
import vdDenyDefault     from '../../assets/icons/vd-deny-default.svg'
import vdDenyHover       from '../../assets/icons/vd-deny-hover.svg'
import vdDenyClicked     from '../../assets/icons/vd-deny-clicked.svg'
import vdPendingDefault  from '../../assets/icons/vd-pending-default.svg'
import vdPendingHover    from '../../assets/icons/vd-pending-hover.svg'
import vdPendingClicked  from '../../assets/icons/vd-pending-clicked.svg'
import vdVerifySmall     from '../../assets/icons/vd-verify-small.svg'
import vdDenySmall       from '../../assets/icons/vd-deny-small.svg'
import vdPendingSmall    from '../../assets/icons/vd-pending-small.svg'
import vdEmptySmall      from '../../assets/icons/vd-empty-small.svg'
import pocIcon           from '../../assets/icons/poc.svg'
import reactionCommentIcon from '../../assets/icons/reaction-comment.svg'
import thumbsUpIcon      from '../../assets/icons/thumbs-up.svg'
import thumbsUpPressedIcon from '../../assets/icons/thumbs-up-pressed.svg'
import thumbsDownIcon    from '../../assets/icons/thumbs-down.svg'
import thumbsDownPressedIcon from '../../assets/icons/thumbs-down-pressed.svg'
import sortArrowsIcon      from '../../assets/icons/sort-arrows.svg'
import profileIcon         from '../../assets/icons/profile.svg'
import infoSmallIcon       from '../../assets/icons/info-small.svg'
import warningSmallIcon    from '../../assets/icons/warning-small.svg'
import moreIcon            from '../../assets/icons/more.svg'
import lessIcon            from '../../assets/icons/less.svg'

const icons = {
  // General
  verify:                  verifyIcon,
  'error-2':               error2Icon,
  ai:                      aiIcon,
  'info-purple':           infoPurple,
  close:                   closeIcon,
  'dolphincare-logo':      dolphincareLogoIcon,
  'arrow-right':           arrowRightIcon,
  'arrow-left':            arrowLeftIcon,
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
  'medicaid-icon':         medicaidIconSvg,
  // Verify & Deny — big (24px)
  'vd-verify-default':     vdVerifyDefault,
  'vd-verify-hover':       vdVerifyHover,
  'vd-verify-clicked':     vdVerifyClicked,
  'vd-deny-default':       vdDenyDefault,
  'vd-deny-hover':         vdDenyHover,
  'vd-deny-clicked':       vdDenyClicked,
  'vd-pending-default':    vdPendingDefault,
  'vd-pending-hover':      vdPendingHover,
  'vd-pending-clicked':    vdPendingClicked,
  // Verify & Deny — small (12px)
  'vd-verify-small':       vdVerifySmall,
  'vd-deny-small':         vdDenySmall,
  'vd-pending-small':      vdPendingSmall,
  'vd-empty-small':        vdEmptySmall,
  // Reactions & comments
  poc:                     pocIcon,
  'reaction-comment':      reactionCommentIcon,
  'thumbs-up':             thumbsUpIcon,
  'thumbs-up-pressed':     thumbsUpPressedIcon,
  'thumbs-down':           thumbsDownIcon,
  'thumbs-down-pressed':   thumbsDownPressedIcon,
  'sort-arrows':           sortArrowsIcon,
  // Row Cells icons
  profile:                 profileIcon,
  'info-small':            infoSmallIcon,
  'warning-small':         warningSmallIcon,
  more:                    moreIcon,
  less:                    lessIcon,
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
  'arrow-left':            24,
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
  'medicaid-icon':         12,
  // Verify & Deny — big (24px)
  'vd-verify-default':     24,
  'vd-verify-hover':       24,
  'vd-verify-clicked':     24,
  'vd-deny-default':       24,
  'vd-deny-hover':         24,
  'vd-deny-clicked':       24,
  'vd-pending-default':    24,
  'vd-pending-hover':      24,
  'vd-pending-clicked':    24,
  // Verify & Deny — small (12px)
  'vd-verify-small':       12,
  'vd-deny-small':         12,
  'vd-pending-small':      12,
  'vd-empty-small':        12,
  // Reactions & comments
  poc:                     24,
  'reaction-comment':      24,
  'thumbs-up':             24,
  'thumbs-up-pressed':     24,
  'thumbs-down':           24,
  'thumbs-down-pressed':   24,
  'sort-arrows':           12,
  // Row Cells icons
  profile:                 24,
  'info-small':            16,
  'warning-small':         16,
  more:                    16,
  less:                    16,
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
