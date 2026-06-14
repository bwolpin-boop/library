import { useState, useEffect } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
      <svg width={arrowSize} height={arrowSize} viewBox="0 0 16 16" fill="none">
        <path d="M10 4L6 8L10 12" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg width={arrowSize} height={arrowSize} viewBox="0 0 16 16" fill="none">
        <path d="M6 4L10 8L6 12" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{
        fontFamily: fonts.montserrat,
        fontSize: '8px',
        fontWeight: fontWeights.regular,
        color: colors.primary,
        whiteSpace: 'nowrap',
      }}>3/12</span>
    </div>
  )
}

const stateStyles = {
  default:        { backgroundColor: colors.white,       border: `1px solid ${colors.dividerSubtle}` },
  hover:          { backgroundColor: colors.surfaceHover, border: `1px solid ${colors.dividerSubtle}` },
  'while pressing': { backgroundColor: colors.surfaceHover, border: `1px solid ${colors.primary}` },
  pressed:        { backgroundColor: colors.white,       border: `1px solid ${colors.primary}` },
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
  const style = stateStyles[activeState] ?? stateStyles.default

  const isBig = size === 'big'
  const height = isBig ? '32px' : '22px'
  const fontSize = isBig ? fontSizes.sm : fontSizes.xs

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        height,
        paddingLeft: '4px',
        paddingRight: '12px',
        paddingTop: '4px',
        paddingBottom: '4px',
        borderRadius: radii.boxSm,
        cursor: isInteractive ? 'pointer' : 'default',
        whiteSpace: 'nowrap',
        transition: 'background-color 0.15s, border-color 0.15s',
        ...style,
      }}
      onMouseEnter={() => isInteractive && setCurrentState('hover')}
      onMouseLeave={() => isInteractive && setCurrentState('default')}
      onMouseDown={() => isInteractive && setCurrentState('while pressing')}
      onMouseUp={() => isInteractive && setCurrentState('pressed')}
    >
      <SourceTypeIcon type={type} size={size === 'big' ? 24 : 16} />
      <span style={{
        fontFamily: fonts.montserrat,
        fontSize,
        fontWeight: fontWeights.regular,
        color: colors.primary,
        lineHeight: '21px',
      }}>
        {type}
      </span>
      {showArrows && <Arrows size={size} />}
    </div>
  )
}
