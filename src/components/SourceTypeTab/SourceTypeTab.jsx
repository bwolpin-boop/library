import { useState, useEffect } from 'react'
import { colors } from '../../tokens.js'
import { SourceTypeIcon } from '../Icon/SourceTypeIcon.jsx'

export const sourceTypes = [
  'Progress Notes', 'Immunization', 'Documents', 'PCC Docs', 'Therapy Docs',
  'Medications', 'Diagnosis', 'Orders Notes', 'Doctors Orders', 'PCC Connect',
  'Mars', 'POC', 'Assessment Score', 'Assessments', 'Lab Results',
  'Care Plans', 'Interventions', 'Vitals', 'IV Fluids', 'High Risk Alerts',
  'Incidents', 'Immunizations', 'Allergies', 'Previous Target',
]


function Arrows({ size }) {
  const arrowSize = size === 'small' ? 12 : 16
  return (
    <div className="dc:flex dc:items-center dc:gap-gap4 dc:shrink-0">
      <svg width={arrowSize} height={arrowSize} viewBox="0 0 16 16" fill="none">
        <path d="M10 4L6 8L10 12" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg width={arrowSize} height={arrowSize} viewBox="0 0 16 16" fill="none">
        <path d="M6 4L10 8L6 12" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="dc:font-montserrat dc:font-regular dc:text-primary dc:whitespace-nowrap" style={{ fontSize: '8px' }}>3/12</span>
    </div>
  )
}

const stateStyles = {
  default:          { backgroundColor: colors.white,        border: `1px solid ${colors.dividerSubtle}` },
  hover:            { backgroundColor: colors.surfaceHover,  border: `1px solid ${colors.dividerSubtle}` },
  'while pressing': { backgroundColor: colors.surfaceHover,  border: `1px solid ${colors.primary}` },
  pressed:          { backgroundColor: colors.white,         border: `1px solid ${colors.primary}` },
}

export function SourceTypeTab({
  type = 'Progress Notes',
  size = 'big',
  state = 'default',
  showArrows = true,
}) {
  const [currentState, setCurrentState] = useState(state)

  // When the tab is deselected (state flips back to 'default'), clear any
  // stale hover/pressing internal state so it renders as default, not hover.
  useEffect(() => {
    if (state !== 'default') setCurrentState('default')
  }, [state])

  const isInteractive = state === 'default'
  const activeState = isInteractive ? currentState : state
  const stateStyle = stateStyles[activeState] ?? stateStyles.default

  const isBig = size === 'big'
  const height = isBig ? '32px' : '22px'

  return (
    <div
      className={[
        'dc:inline-flex dc:items-center dc:rounded-box-sm dc:whitespace-nowrap',
        isInteractive ? 'dc:cursor-pointer' : 'dc:cursor-default',
      ].join(' ')}
      style={{
        gap: '10px',
        height,
        paddingLeft: '4px',
        paddingRight: '12px',
        paddingTop: '4px',
        paddingBottom: '4px',
        transition: 'background-color 0.15s, border-color 0.15s',
        ...stateStyle,
      }}
      onMouseEnter={() => isInteractive && setCurrentState('hover')}
      onMouseLeave={() => isInteractive && setCurrentState('default')}
      onMouseDown={() => isInteractive && setCurrentState('while pressing')}
      onMouseUp={() => isInteractive && setCurrentState('pressed')}
    >
      <SourceTypeIcon type={type} size={size === 'big' ? 24 : 16} />
      <span
        className="dc:font-montserrat dc:font-regular dc:text-primary"
        style={{ fontSize: isBig ? '14px' : '12px', lineHeight: '21px' }}
      >
        {type}
      </span>
      {showArrows && <Arrows size={size} />}
    </div>
  )
}
