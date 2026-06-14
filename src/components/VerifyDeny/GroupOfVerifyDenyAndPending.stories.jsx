import { GroupOfVerifyDenyAndPending } from './GroupOfVerifyDenyAndPending'

export default {
  title: '🟢   😂 Icon/Verify and Deny/Group',
  component: GroupOfVerifyDenyAndPending,
  argTypes: {
    hasPending:    { control: 'boolean' },
    denyState:     { control: 'select', options: ['default', 'hover', 'clicked'] },
    verifyState:   { control: 'select', options: ['default', 'hover', 'clicked'] },
    pendingState:  { control: 'select', options: ['default', 'hover', 'clicked'] },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const AllDefault     = { args: {} }
export const DenyHover      = { args: { denyState:    'hover'   } }
export const DenyClicked    = { args: { denyState:    'clicked' } }
export const VerifyHover    = { args: { verifyState:  'hover'   } }
export const VerifyClicked  = { args: { verifyState:  'clicked' } }
export const PendingHover   = { args: { pendingState: 'hover'   } }
export const PendingClicked = { args: { pendingState: 'clicked' } }
export const NoPending      = { args: { hasPending: false } }
