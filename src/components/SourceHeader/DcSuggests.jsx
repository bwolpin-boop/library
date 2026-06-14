import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { MdsAndDcAnswer } from '../Icon/MdsAndDcAnswer.jsx'

export function DcSuggests({
  size        = 'big',    // 'big' | 'small'
  answerType  = 'yes-dc', // passed through to MdsAndDcAnswer
}) {
  const isBig = size === 'big'

  return (
    <div
      style={{
        position:        'relative',
        display:         'inline-flex',
        alignItems:      'center',
        gap:             spacing.gap0,
        padding:         `${spacing.gap8} ${spacing.gap16}`,
        borderRadius:    radii.box,
        backgroundColor: colors.white,
        boxShadow:       '0px 0px 7.5px rgba(0,0,0,0.25)',
        width:           isBig ? '283px' : '169px',
        boxSizing:       'border-box',
        overflow:        'hidden',
      }}
    >
      <div
        style={{
          display:        'flex',
          flexDirection:  'column',
          gap:            spacing.gap8,
          alignItems:     'flex-start',
          justifyContent: 'center',
          flexShrink:     0,
        }}
      >
        <span
          style={{
            fontFamily:  fonts.montserrat,
            fontSize:    fontSizes.xs,
            fontWeight:  fontWeights.regular,
            lineHeight:  lineHeights.sm,
            color:       colors.primary,
            whiteSpace:  'nowrap',
          }}
        >
          DolphinCare Suggests:
        </span>
        <MdsAndDcAnswer type={answerType} />
      </div>
    </div>
  )
}
