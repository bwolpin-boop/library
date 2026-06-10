import { Toast } from './Toast'

export default {
  title: '🟢   🏷 Toast/Variants',
  component: Toast,
  args: {
    title: 'Info submitted successfully',
    message: 'You have submitted your information successfully!',
    hasIcon: true,
  },
  argTypes: {
    variant: { control: 'select', options: ['success', 'error', 'ai', 'info', 'loading'] },
    hasIcon: { control: 'boolean' },
  },
}

export const Success = { args: { variant: 'success' } }
export const Error   = { args: { variant: 'error' } }
export const Ai      = { args: { variant: 'ai', title: 'Source verified!', message: 'Open an IPA for more reimbursement — nice work!' } }
export const Info    = { args: { variant: 'info' } }
export const Loading = { args: { variant: 'loading' } }
