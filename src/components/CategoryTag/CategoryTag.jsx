import { useState } from 'react'

const typeConfig = {
  'nursing':           { color: 'var(--dc-color-purple)',    rgb: '168,82,255'  },
  'OT/PT':             { color: 'var(--dc-color-dark-blue)', rgb: '47,53,232'   },
  'SLP':               { color: 'var(--dc-color-green)',     rgb: '17,190,104'  },
  'NTA':               { color: 'var(--dc-color-error)',     rgb: '253,108,108' },
  'Functional Scores': { color: '#0088FF',                   rgb: '0,136,255'   },
}

const stateOpacity = {
  'Functional Scores': { Default: 0.08, hover: 0.12, pressed: 0.16 },
  default:             { Default: 0.1,  hover: 0.16, pressed: 0.2  },
}

function CloseIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dc:shrink-0 dc:block">
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
      className="dc:inline-flex dc:items-center dc:justify-center dc:rounded-box-sm dc:cursor-pointer dc:select-none"
      style={{
        gap: '4px',
        padding: '2px 4px',
        backgroundColor: `rgba(${config.rgb},${opacity})`,
        transition: 'background-color 0.1s ease',
      }}
    >
      <p
        className="dc:font-montserrat dc:text-sm dc:font-regular dc:whitespace-nowrap dc:shrink-0"
        style={{
          color: config.color,
          margin: 0,
          textTransform: 'capitalize',
          lineHeight: 'normal',
        }}
      >
        {type}
      </p>
      {hasClose && (
        <div onClick={onClose} className="dc:cursor-pointer dc:flex dc:items-center">
          <CloseIcon color={config.color} />
        </div>
      )}
    </div>
  )
}
