import { colors, fonts, fontSizes, fontWeights, radii, strokeWidths } from '../../tokens.js'

const typeConfig = {
  mds: {
    background: colors.disabled,
    borderColor: colors.mdsBlue,
    textColor:   colors.mdsBlue,
  },
  'yes-dc': {
    background: colors.purpleTint,
    borderColor: colors.purple,
    textColor:   colors.purple,
  },
  'not-dc': {
    background: colors.purpleTint,
    borderColor: colors.purple,
    textColor:   colors.purple,
  },
  empty: {
    background: colors.purpleTint,
    borderColor: colors.purple,
    textColor:   colors.purple,
    opacity:     0,
  },
}

const baseTextStyle = {
  fontFamily:  fonts.inter,
  fontSize:    fontSizes.xs,
  fontWeight:  fontWeights.medium,
  whiteSpace:  'nowrap',
  lineHeight:  'normal',
  margin:      0,
}

export function MdsAndDcAnswer({ type = 'mds' }) {
  if (type === 'no-answer') {
    return (
      <div style={{
        display:        'inline-flex',
        alignItems:     'center',
        justifyContent: 'center',
        height:         '24px',
        paddingLeft:    '4px',
        paddingRight:   '8px',
      }}>
        <p style={{ ...baseTextStyle, color: colors.muted }}>No chosen answer yet</p>
      </div>
    )
  }

  const config = typeConfig[type] ?? typeConfig.mds

  return (
    <div style={{
      display:         'inline-flex',
      alignItems:      'center',
      justifyContent:  'center',
      height:          '24px',
      padding:         '5px 8px',
      borderRadius:    radii.boxSm,
      backgroundColor: config.background,
      border:          `${strokeWidths.icon}px solid ${config.borderColor}`,
      opacity:         config.opacity ?? 1,
    }}>
      <ol style={{
        ...baseTextStyle,
        listStyleType: 'decimal',
        padding:       0,
        color:         config.textColor,
      }}>
        <li style={{ marginLeft: '18px' }}>Yes</li>
      </ol>
    </div>
  )
}
