import { colors, fonts, fontWeights, fontSizes } from '../../tokens.js'
import logoIcon from '../../assets/logo-icon.svg'

export function Logo({ className }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    }} className={className}>
      <img
        src={logoIcon}
        alt="Dolphincare logo icon"
        style={{ width: '34px', height: '34px', flexShrink: 0 }}
      />
      <span style={{
        fontFamily: fonts.montserrat,
        fontWeight: fontWeights.bold,
        fontSize: fontSizes.base,
        color: colors.primary,
        letterSpacing: '0.8px',
        whiteSpace: 'nowrap',
      }}>
        Dolphincare
      </span>
    </div>
  )
}
