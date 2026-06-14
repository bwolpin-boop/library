import { NavIcon, iconNames } from './NavIcon'

export default {
  title: '🟢   😂 Icon/Nav Icons/Variants',
  component: NavIcon,
  args: { size: 24 },
  argTypes: {
    name: { control: 'select', options: iconNames },
    size: { control: 'number' },
  },
}

export const Verify              = { args: { name: 'verify' } }
export const Error2              = { args: { name: 'error-2' } }
export const Ai                  = { args: { name: 'ai' } }
export const InfoPurple          = { args: { name: 'info-purple' } }
export const Close               = { args: { name: 'close' } }
export const DolphincareLogo     = { args: { name: 'dolphincare-logo' } }
export const ArrowRight          = { args: { name: 'arrow-right',           size: 24 } }
export const ArrowRightH2Y       = { args: { name: 'arrow-right-h2y',       size: 20 } }
export const LittleQuestionmark  = { args: { name: 'little-questionmark' } }
export const Comment             = { args: { name: 'comment' } }
export const CheckboxEmpty       = { args: { name: 'checkbox-empty' } }
export const CheckboxFilled      = { args: { name: 'checkbox-filled' } }
export const CheckboxSmall       = { args: { name: 'checkbox-small',        size: 16 } }
export const CheckboxFilledSmall = { args: { name: 'checkbox-filled-small', size: 16 } }
export const SendActive          = { args: { name: 'send-active',           size: 16 } }
export const SendDisabled        = { args: { name: 'send-disabled',         size: 16 } }
export const PlusSmall           = { args: { name: 'plus-small',            size: 16 } }
export const MicSmall            = { args: { name: 'mic-small',             size: 16 } }
export const MedicaidIcon        = { args: { name: 'medicaid-icon' } }
// Verify & Deny — big
export const VdVerifyDefault     = { args: { name: 'vd-verify-default' } }
export const VdVerifyHover       = { args: { name: 'vd-verify-hover' } }
export const VdVerifyClicked     = { args: { name: 'vd-verify-clicked' } }
export const VdDenyDefault       = { args: { name: 'vd-deny-default' } }
export const VdDenyHover         = { args: { name: 'vd-deny-hover' } }
export const VdDenyClicked       = { args: { name: 'vd-deny-clicked' } }
export const VdPendingDefault    = { args: { name: 'vd-pending-default' } }
export const VdPendingHover      = { args: { name: 'vd-pending-hover' } }
export const VdPendingClicked    = { args: { name: 'vd-pending-clicked' } }
// Verify & Deny — small
export const VdVerifySmall       = { args: { name: 'vd-verify-small',   size: 12 } }
export const VdDenySmall         = { args: { name: 'vd-deny-small',     size: 12 } }
export const VdPendingSmall      = { args: { name: 'vd-pending-small',  size: 12 } }
export const VdEmptySmall        = { args: { name: 'vd-empty-small',    size: 12 } }
