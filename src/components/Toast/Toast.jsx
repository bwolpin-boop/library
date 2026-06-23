import { NavIcon } from '../Icon/NavIcon.jsx'
import { IconButton } from '../Icon/IconButton.jsx'

const variantIcon = {
  success: 'verify',
  error:   'error-2',
  ai:      'ai',
  info:    'info-purple',
}

function ToastIcon({ variant }) {
  const name = variantIcon[variant]
  if (!name) return null
  return <NavIcon name={name} size={24} />
}

function LoadingSpinner() {
  return (
    <div className="dc:w-[52px] dc:h-[52px] dc:shrink-0 dc:relative dc:flex dc:items-center dc:justify-center">
      <style>{`
        @keyframes toast-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        className="dc:absolute dc:inset-0 dc:rounded-full"
        style={{
          border: '2px solid #e9d5ff',
          borderTopColor: '#a852ff',
          animation: 'toast-spin 1s linear infinite',
        }}
      />
      <NavIcon name="dolphincare-logo" size={28} />
    </div>
  )
}

export function Toast({
  variant = 'success',
  title = 'Info submitted successfully',
  message = 'You have submitted your information successfully!',
  hasIcon = true,
  onClose,
}) {
  const isLoading = variant === 'loading'

  return (
    <div className="dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box dc:p-gap24 dc:inline-flex dc:items-center dc:gap-gap16 dc:w-[377px]">
      <div className={`dc:flex dc:gap-gap16 dc:flex-1 ${isLoading ? 'dc:items-start' : 'dc:items-center'}`}>
        {hasIcon && (
          isLoading
            ? <LoadingSpinner />
            : <ToastIcon variant={variant} />
        )}
        <div className="dc:flex dc:flex-col dc:gap-gap4 dc:flex-1">
          <span className="dc:font-montserrat dc:text-base dc:font-semibold dc:text-primary dc:whitespace-nowrap" style={{ lineHeight: 'normal' }}>
            {title}
          </span>
          <span className="dc:font-montserrat dc:text-sm dc:font-medium dc:text-secondary" style={{ lineHeight: 'normal' }}>
            {message}
          </span>
        </div>
      </div>
      <IconButton name="close" size={24} onClick={onClose} />
    </div>
  )
}
