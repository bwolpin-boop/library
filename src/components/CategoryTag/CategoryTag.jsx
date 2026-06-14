import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

const typeConfig = {
  'nursing':           { color: colors.purple,   rgb: '168,82,255'  },
  'OT/PT':             { color: colors.darkBlue, rgb: '47,53,232'   },
  'SLP':               { color: colors.green,    rgb: '17,190,104'  },
  'NTA':               { color: colors.error,    rgb: '253,108,108' },
  'Functional Scores': { color: '#0088FF',        rgb: '0,136,255'   },
}

const stateOpacity = {
  'Functional Scores': { Default: 0.08, hover: 0.12, pressed: 0.16 },
  default:             { Default: 0.1,  hover: 0.16, pressed: 0.2  },
}

function CloseIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, display: 'block' }}>
      <path d="M7 16.5L16.5 7M7 7L16.5 16.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function CategoryTag({ type = 'nursing', state: stateProp = 'Default', hasClose = false, onClose }) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const isForced = stateProp === 'hover' || stateProp === 'pressed'
  const state = isForced ? stateProp : pressed ? 'pressed' : hovered ? 'hover' : 'Default'

  const config = typeConfig[type] ?? typeConfig['nursing']
  const opacities = stateOpacity[type] ?? stateOpacity.default
  const opacity = opacities[state] ?? opacities.Default

  return (
    <div
      onMouseEnter={() => { if (!isForced) setHovered(true) }}
      onMouseLeave={() => { if (!isForced) { setHovered(false); setPressed(false) } }}
      onMouseDown={() => { if (!isForced) setPressed(true) }}
      onMouseUp={() => { if (!isForced) setPressed(false) }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        padding: '2px 4px',
        borderRadius: radii.boxSm,
        backgroundColor: `rgba(${config.rgb},${opacity})`,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background-color 0.1s ease',
      }}>
      <p style={{
        fontFamily: fonts.montserrat,
        fontSize: fontSizes.sm,
        fontWeight: fontWeights.regular,
        color: config.color,
        whiteSpace: 'nowrap',
        margin: 0,
        textTransform: 'capitalize',
        lineHeight: 'normal',
        flexShrink: 0,
      }}>
        {type}
      </p>
      {hasClose && (
        <div onClick={onClose} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <CloseIcon color={config.color} />
        </div>
      )}
    </div>
  )
}
