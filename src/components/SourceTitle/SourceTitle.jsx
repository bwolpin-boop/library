import { colors, fonts, fontSizes, fontWeights, lineHeights, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'

function MdsAnswer({ answer = '1. Yes' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.gap4, flexShrink: 0 }}>
      <span style={{
        fontFamily: fonts.montserrat,
        fontWeight: fontWeights.regular,
        fontStyle: 'italic',
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.base,
        color: colors.secondary,
        whiteSpace: 'pre',
      }}>
        {'Previous MDS Answer:  '}
      </span>
      <span style={{
        fontFamily: fonts.montserrat,
        fontWeight: fontWeights.semibold,
        fontStyle: 'italic',
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.base,
        color: colors.secondary,
        whiteSpace: 'nowrap',
      }}>
        {answer}
      </span>
    </div>
  )
}

function InfoRow({ icon, text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap4, flexShrink: 0 }}>
      <NavIcon name={icon} size={24} />
      <span style={{
        fontFamily: fonts.montserrat,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.sm,
        color: colors.primary,
        whiteSpace: 'nowrap',
      }}>
        {text}
      </span>
    </div>
  )
}

export function SourceTitle({
  id            = '#K0520A2',
  sourceName    = 'IV Fluids in hospital',
  longTitle     = true,
  whichProduct  = 'dashboard',   // 'dashboard' | 'browser extension'
  mdsAnswer     = '1. Yes',
  patientName   = 'Garcian, Kola A., 4567',
  facilityName  = 'Beachgarden hostile facility New Jersey',
}) {
  const isBrowserExtension = whichProduct === 'browser extension'

  return (
    <div style={{
      display:        'flex',
      flexDirection:  'column',
      gap:            spacing.gap4,
      alignItems:     'flex-start',
      wordBreak:      isBrowserExtension ? 'break-word' : undefined,
    }}>
      {/* Title row: ID + source name */}
      <div style={{
        display:    'flex',
        alignItems: 'flex-end',
        gap:        spacing.gap8,
        minWidth:   0,
        color:      colors.primary,
        wordBreak:  isBrowserExtension ? 'break-word' : undefined,
      }}>
        <span style={{
          fontFamily:  fonts.montserrat,
          fontWeight:  fontWeights.semibold,
          fontSize:    fontSizes.xl2,
          lineHeight:  'normal',
          flexShrink:  0,
          whiteSpace:  'nowrap',
        }}>
          {id}
        </span>
        <span style={{
          fontFamily:   fonts.montserrat,
          fontWeight:   fontWeights.regular,
          fontSize:     fontSizes.base,
          lineHeight:   '1.428',
          whiteSpace:   'nowrap',
          overflow:     'hidden',
          textOverflow: 'ellipsis',
          minWidth:     0,
          flexShrink:   1,
        }}>
          {sourceName}
        </span>
      </div>

      {/* Subtitle row */}
      <div style={{
        display:       'flex',
        alignItems:    'flex-start',
        flexDirection: isBrowserExtension ? 'column' : 'row',
        gap:           isBrowserExtension ? 0 : spacing.gap4,
        flexShrink:    0,
      }}>
        {whichProduct === 'dashboard' && (
          <MdsAnswer answer={mdsAnswer} />
        )}
        {isBrowserExtension && (
          <>
            <InfoRow icon="profile"   text={patientName} />
            <InfoRow icon="facility"  text={facilityName} />
          </>
        )}
      </div>

      {/* MDS answer row — browser extension only */}
      {isBrowserExtension && (
        <MdsAnswer answer={mdsAnswer} />
      )}
    </div>
  )
}
