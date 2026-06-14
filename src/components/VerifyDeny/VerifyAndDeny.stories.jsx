import { VerifyAndDeny } from './VerifyAndDeny'

export default {
  title: '🟢   😂 Icon/Verify and Deny/Variants',
  component: VerifyAndDeny,
  args: { size: 'big' },
  argTypes: {
    type:       { control: 'select', options: ['verify', 'deny', 'pending', 'empty'] },
    size:       { control: 'select', options: ['big', 'small'] },
    forceState: { control: 'select', options: ['default', 'hover', 'clicked'] },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

// Big — verify
export const VerifyDefault = { args: { type: 'verify', forceState: 'default' } }
export const VerifyHover   = { args: { type: 'verify', forceState: 'hover'   } }
export const VerifyClicked = { args: { type: 'verify', forceState: 'clicked' } }

// Big — deny
export const DenyDefault   = { args: { type: 'deny',    forceState: 'default' } }
export const DenyHover     = { args: { type: 'deny',    forceState: 'hover'   } }
export const DenyClicked   = { args: { type: 'deny',    forceState: 'clicked' } }

// Big — pending
export const PendingDefault = { args: { type: 'pending', forceState: 'default' } }
export const PendingHover   = { args: { type: 'pending', forceState: 'hover'   } }
export const PendingClicked = { args: { type: 'pending', forceState: 'clicked' } }

// Small
export const SmallVerify  = { args: { type: 'verify',  size: 'small' } }
export const SmallDeny    = { args: { type: 'deny',    size: 'small' } }
export const SmallPending = { args: { type: 'pending', size: 'small' } }
export const SmallEmpty   = { args: { type: 'empty',   size: 'small' } }
