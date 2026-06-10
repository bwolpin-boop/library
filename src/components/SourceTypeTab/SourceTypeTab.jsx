import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

export const sourceTypes = [
  'Progress Notes', 'Immunization', 'Documents', 'PCC Docs', 'Therapy Docs',
  'Medications', 'Diagnosis', 'Orders Notes', 'Doctors Orders', 'PCC Connect',
  'Mars', 'POC', 'Assessment Score', 'Assessments', 'Lab Results',
  'Care Plans', 'Interventions', 'Vitals', 'IV Fluids', 'High Risk Alerts',
  'Incidents', 'Immunizations', 'Allergies', 'Previous Target',
]

function SourceIcon() {
  return (
    <div style={{
      backgroundColor: 'rgba(37, 202, 220, 0.1)',
      borderRadius: '2.25px',
      padding: '3px',
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      width: '24px',
      height: '24px',
      position: 'relative',
    }}>
      <div style={{ position: 'relative', width: '18px', height: '18px', flexShrink: 0 }}>
        {/* Back page */}
        <div style={{
          position: 'absolute',
          left: '2.73px',
          top: '1.44px',
          width: '15.275px',
          height: '15.275px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '11.998px',
            height: '11.998px',
            backgroundColor: '#E9FAFB',
            border: '0.9px solid #25CADC',
            borderRadius: '2.25px',
            transform: 'rotate(19.19deg)',
          }} />
        </div>
        {/* Front page */}
        <div style={{
          position: 'absolute',
          left: '0.61px',
          top: '3.82px',
          width: '11.998px',
          height: '11.998px',
          backgroundColor: '#E9FAFB',
          border: '0.9px solid #25CADC',
          borderRadius: '2.25px',
        }} />
      </div>
    </div>
  )
}

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
      <SourceIcon />
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
