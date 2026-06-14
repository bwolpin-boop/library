import { colors, fonts, fontSizes, fontWeights } from '../../tokens.js'

// Inline SVGs for color control — these icons need different stroke colors per variant

function HexagonIcon({ color, size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M3 16.7116V8.41344C3 8.06667 3.17965 7.74465 3.47473 7.5625L11.4747 2.62423C11.7967 2.42548 12.2033 2.42548 12.5253 2.62423L20.5253 7.5625C20.8204 7.74465 21 8.06667 21 8.41344V16.7116C21 17.0748 20.8031 17.4094 20.4856 17.5857L12.4856 22.0302C12.1836 22.198 11.8164 22.198 11.5144 22.0302L3.51436 17.5857C3.19689 17.4094 3 17.0748 3 16.7116Z"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  )
}

function DiamondIcon({ color, size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M5.12263 18H18.8847C19.4086 18 19.8438 17.5956 19.882 17.073L20.5206 8.35146C20.5754 7.60294 19.8168 7.06306 19.1275 7.36008L16.7668 8.37736C16.3707 8.54807 15.9098 8.44552 15.6233 8.12297L12.6868 4.81587C12.2973 4.37724 11.6156 4.36651 11.2125 4.79267L8.15811 8.0218C7.86886 8.3276 7.41909 8.41953 7.03304 8.25176L4.97863 7.35894C4.29347 7.06117 3.53561 7.59252 3.58198 8.33815L4.12456 17.0621C4.15735 17.5892 4.59445 18 5.12263 18Z"
        stroke={color}
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

const sb8 = { fontFamily: fonts.montserrat, fontSize: fontSizes.xxxs, fontWeight: fontWeights.semibold, lineHeight: 'normal', whiteSpace: 'nowrap' }

const VARIANTS = {
  'nta-blue': {
    bg:         'rgba(125, 217, 232, 0.1)',
    border:     'none',
  },
  'nta-yellow': {
    bg:         '#FFF9E5',
    border:     'none',
  },
  'primary-set': {
    bg:         colors.purpleOverlay,
    border:     'none',
  },
  'primary-unset': {
    bg:         colors.white,
    border:     `0.658px solid ${colors.dividerSubtle}`,
  },
  'primary-active': {
    bg:         colors.purple,
    border:     'none',
  },
}

export function PrimaryDiagnosisLabel({
  type     = 'primary-unset',  // 'nta-blue' | 'nta-yellow' | 'primary-set' | 'primary-unset' | 'primary-active'
  hasIcon  = true,
  hasText  = true,
}) {
  const v = VARIANTS[type] ?? VARIANTS['primary-unset']

  return (
    <div style={{
      display:        'inline-flex',
      alignItems:     'center',
      justifyContent: 'center',
      gap:            3,
      height:         20,
      padding:        '0 5px',
      borderRadius:   6.5,
      backgroundColor: v.bg,
      border:         v.border,
      boxSizing:      'border-box',
    }}>

      {type === 'nta-blue' && hasText && (
        <span style={{ ...sb8, color: '#65B7C5' }}>NTA</span>
      )}

      {type === 'nta-yellow' && (
        <>
          {hasIcon && <DiamondIcon color="#F1B900" size={8} />}
          {hasText  && <span style={{ ...sb8, color: '#F1B900' }}>NTA</span>}
        </>
      )}

      {type === 'primary-set' && (
        <>
          {hasIcon && <HexagonIcon color={colors.purple} size={10} />}
          {hasText  && <span style={{ ...sb8, color: colors.purple }}>Primary</span>}
        </>
      )}

      {type === 'primary-unset' && (
        <>
          {hasIcon && <HexagonIcon color={colors.secondary} size={10} />}
          {hasText  && <span style={{ ...sb8, color: colors.secondary }}>Primary</span>}
        </>
      )}

      {type === 'primary-active' && (
        <>
          {hasIcon && <HexagonIcon color={colors.white} size={10} />}
          {hasText  && <span style={{ ...sb8, color: colors.white }}>Set as Primary Diagnosis</span>}
        </>
      )}
    </div>
  )
}
