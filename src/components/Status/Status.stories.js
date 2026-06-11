import { Status } from './Status'

export default {
  title: '🟢   📮 Status/Variants',
  component: Status,
  args: { status: 'pending', size: 'default' },
  argTypes: {
    status: { control: 'select', options: ['pending', 'verified', 'dismissed', 'complete', 'combi-pending', 'combi-verified', 'combi-dismissed'] },
    size:   { control: 'select', options: ['default', 'small'] },
  },
}

export const Pending          = { args: { status: 'pending' } }
export const Verified         = { args: { status: 'verified' } }
export const Dismissed        = { args: { status: 'dismissed' } }
export const Complete         = { args: { status: 'complete' } }
export const CombiPending     = { args: { status: 'combi-pending' } }
export const CombiVerified    = { args: { status: 'combi-verified' } }
export const CombiDismissed   = { args: { status: 'combi-dismissed' } }

export const PendingSmall     = { args: { status: 'pending',       size: 'small' } }
export const VerifiedSmall    = { args: { status: 'verified',      size: 'small' } }
export const DismissedSmall   = { args: { status: 'dismissed',     size: 'small' } }
export const CompleteSmall    = { args: { status: 'complete',      size: 'small' } }
