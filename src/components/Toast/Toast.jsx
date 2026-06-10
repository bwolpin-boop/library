import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'
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
    <div style={{
      width: '52px',
      height: '52px',
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style>{`
        @keyframes toast-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: `3px solid ${colors.purple100}`,
        borderTopColor: colors.purple,
        animation: 'toast-spin 1s linear infinite',
      }} />
      <NavIcon name="dc-icon-hover" size={28} />
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
  const isAi = variant === 'ai'

  return (
    <div style={{
      backgroundColor: colors.white,
      border: `1px solid ${colors.dividerSubtle}`,
      borderRadius: radii.box,
      padding: '24px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      width: '377px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: isLoading ? 'flex-start' : 'center',
        gap: '16px',
        flex: 1,
      }}>
        {hasIcon && (
          isLoading
            ? <LoadingSpinner />
            : <ToastIcon variant={variant} />
        )}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          flex: 1,
        }}>
          <span style={{
            fontFamily: fonts.montserrat,
            fontSize: fontSizes.base,
            fontWeight: fontWeights.semibold,
            color: colors.primary,
            lineHeight: 'normal',
            whiteSpace: 'nowrap',
          }}>
            {title}
          </span>
          <span style={{
            fontFamily: fonts.montserrat,
            fontSize: fontSizes.sm,
            fontWeight: fontWeights.medium,
            color: colors.secondary,
            lineHeight: 'normal',
          }}>
            {message}
          </span>
        </div>
      </div>
      <IconButton name="close" size={24} onClick={onClose} />
    </div>
  )
}
