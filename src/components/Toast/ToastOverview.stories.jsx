import { Toast } from './Toast'

export default {
  title: '🟢   🏷 Toast/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { variant: 'success', title: 'Info submitted successfully', message: 'You have submitted your information successfully!' },
  { variant: 'error',   title: 'Something went wrong',       message: 'Please try again or contact support.' },
  { variant: 'ai',      title: 'Source verified!',           message: 'Open an IPA for more reimbursement — nice work!' },
  { variant: 'info',    title: 'Info submitted successfully', message: 'You have submitted your information successfully!' },
  { variant: 'loading', title: 'Info submitted successfully', message: 'You have submitted your information successfully!' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 16px', backgroundColor: '#F8F5FF' }}>
          Variant
        </div>
        {variants.map(({ variant, title, message }) => (
          <div key={variant} style={{ padding: '20px 24px', borderTop: '1px solid #F0F0F0' }}>
            <Toast variant={variant} title={title} message={message} />
          </div>
        ))}
      </div>
    </div>
  ),
}
