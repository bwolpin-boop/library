import { useState } from 'react'
import { colors, fonts, fontWeights, radii, strokeWidths } from '../../tokens.js'
import { TotalArrow } from './TotalArrow.jsx'

// ─── Shared text helpers ─────────────────────────────────────────────────────

const reg12 = { fontFamily: fonts.montserrat, fontSize: '12px', fontWeight: fontWeights.regular, lineHeight: '18px' }
const sb12  = { fontFamily: fonts.montserrat, fontSize: '12px', fontWeight: fontWeights.semibold, lineHeight: '22px' }

// Shared column widths — breakdown rows and main row use the same values so
// columns naturally align when both are children of the same flex container.
const ARROW_W  = 40   // TotalArrow / spacer
const LABEL_W  = 131  // TOTAL / category column
const HIPPS_W  = 150  // HIPPS code column (breakdown code col matches this exactly)

// ─── Sub-components ──────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
        <path d="M1 4H11.5M8.5 1.5L11.5 4L8.5 6.5" stroke={colors.muted} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

function InfoIcon() {
  return (
    <div style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7.5" stroke={colors.muted} />
        <text x="8" y="12" textAnchor="middle" fontSize="10" fontFamily="serif" fill={colors.muted}>i</text>
      </svg>
    </div>
  )
}

function InfoTooltip({ text }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 198,
      zIndex: 10,
    }}>
      <div style={{
        backgroundColor: colors.white,
        border: `1px solid ${colors.dividerSubtle}`,
        borderRadius: radii.boxSm,
        padding: '8px 12px',
        position: 'relative',
      }}>
        <p style={{ ...reg12, color: colors.primary, margin: 0 }}>{text}</p>
        <div style={{
          position: 'absolute',
          bottom: -5,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: `5px solid ${colors.dividerSubtle}`,
        }} />
      </div>
    </div>
  )
}

// ─── Breakdown panel ─────────────────────────────────────────────────────────
// Rendered as a regular flow sibling ABOVE the main row (not absolute), so
// the breakdown's columns naturally share the same width as the main row's.

function BreakdownPanel({ rows, borderColor }) {
  const rowBorder = `1px solid ${colors.dividerSubtle}`
  return (
    <div style={{
      width: LABEL_W + HIPPS_W + strokeWidths.thin,
      backgroundColor: colors.white,
      borderTop:   `1px solid ${colors.dividerSubtle}`,
      borderLeft:  `1px solid ${colors.dividerSubtle}`,
      borderRight: `1px solid ${colors.dividerSubtle}`,
      borderRadius: `${radii.box} ${radii.box} 0 0`,
      // +strokeWidths.thin accounts for the main row's 1px left border
      marginLeft: ARROW_W + strokeWidths.thin,
    }}>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          height: 35,
          borderBottom: i < rows.length - 1 ? rowBorder : 'none',
        }}>
          {/* Category — same width as TOTAL col */}
          <div style={{
            display: 'flex', alignItems: 'center',
            height: '100%', padding: '0 8px',
            width: LABEL_W, flexShrink: 0,
            borderRight: rowBorder,
          }}>
            <span style={{ ...reg12, color: colors.primary, whiteSpace: 'nowrap' }}>{row.category}</span>
          </div>
          {/* Code transition — fixed width matching the HIPPS column in the main row */}
          <div style={{
            display: 'flex', alignItems: 'center',
            height: '100%', padding: '0 8px', gap: 6,
            width: HIPPS_W, flexShrink: 0,
          }}>
            <span style={{ ...reg12, color: colors.primary, whiteSpace: 'nowrap', minWidth: 40 }}>{row.code}</span>
            <ArrowRight />
            {row.newCode ? (
              <span style={{
                ...sb12,
                color: row.newCodeColor === 'red' ? colors.error
                     : row.newCodeColor === 'gray' ? colors.secondary
                     : colors.purple,
                opacity: row.newCodeColor === 'hidden' ? 0 : 1,
                whiteSpace: 'nowrap',
              }}>
                {row.newCode}
              </span>
            ) : (
              <span style={{ ...reg12, color: colors.secondary, whiteSpace: 'nowrap' }}>---</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Default data ────────────────────────────────────────────────────────────

export const DEFAULT_BREAKDOWN_ROWS = {
  positive: [
    { category: 'Nursing', code: 'NT', newCode: 'SP', newCodeColor: 'purple' },
    { category: 'SLP',     code: 'NT', newCode: 'SP', newCodeColor: 'purple' },
    { category: 'OT',      code: 'NP', newCode: 'SP', newCodeColor: 'purple' },
    { category: 'Nursing', code: 'NP', newCode: 'ST', newCodeColor: 'purple' },
  ],
  alert: [
    { category: 'Nursing', code: 'NT', newCode: 'SP', newCodeColor: 'purple' },
    { category: 'SLP',     code: 'NT', newCode: 'SP', newCodeColor: 'purple' },
    { category: 'OT',      code: 'NP', newCode: 'SP', newCodeColor: 'red' },
    { category: 'Nursing', code: 'NP', newCode: 'ST', newCodeColor: 'red' },
  ],
  'no result': [
    { category: 'Nursing', code: 'NT', newCode: null },
    { category: 'SLP',     code: 'NT', newCode: null },
    { category: 'OT',      code: 'NP', newCode: null },
    { category: 'Nursing', code: 'NP', newCode: null },
  ],
  'no result 2': [
    { category: 'Nursing', code: 'NT', newCode: 'SP', newCodeColor: 'hidden' },
    { category: 'SLP',     code: 'NT', newCode: 'SP', newCodeColor: 'hidden' },
    { category: 'OT',      code: 'NP', newCode: 'SP', newCodeColor: 'hidden' },
    { category: 'Nursing', code: 'NP', newCode: 'ST', newCodeColor: 'hidden' },
  ],
  '1 answer': [
    { category: 'Nursing', code: 'NT', newCode: 'SP', newCodeColor: 'hidden' },
    { category: 'SLP',     code: 'NT', newCode: 'SP', newCodeColor: 'hidden' },
    { category: 'OT',      code: 'NP', newCode: 'SP', newCodeColor: 'hidden' },
    { category: 'Nursing', code: 'NP', newCode: 'ST', newCodeColor: 'hidden' },
  ],
}

// ─── Main component ──────────────────────────────────────────────────────────

export function Calculator({
  calculatorType   = 'positive',
  hippsCode        = 'NRYUT',
  newHippsCode     = 'SPGGF',
  reimbursement    = '$64,789',
  newReimbursement = '$64,789',
  breakdownRows,
  infoIcon         = false,
  showTooltip      = false,
  tooltipText      = 'Based on your selections, reimbursement has decreased—opening an IPA may not be worthwhile.',
  onExpandClick,
}) {
  const [expanded, setExpanded] = useState(false)

  function handleExpand() {
    setExpanded(prev => !prev)
    onExpandClick?.()
  }

  const isPositive    = calculatorType === 'positive'
  const isAlert       = calculatorType === 'alert'
  const isNoResult    = calculatorType === 'no result'
  const isNoResult2   = calculatorType === 'no result 2'
  const is1Answer     = calculatorType === '1 answer'
  const isDidntAffect = calculatorType === 'didnt affect hipps'

  const showArrow    = isPositive || isAlert || isNoResult
  const showNewValue = isPositive || isAlert
  const showDashes   = isNoResult
  const showEmpty    = isNoResult2
  const showDidnt    = isDidntAffect

  const newValueColor = isAlert ? colors.error : colors.purple
  const borderColor   = isAlert ? colors.error : colors.dividerSubtle

  const resolvedRows = breakdownRows ?? DEFAULT_BREAKDOWN_ROWS[calculatorType] ?? DEFAULT_BREAKDOWN_ROWS.positive

  const cell = (extra = {}) => ({
    display: 'flex', alignItems: 'center',
    height: '100%', padding: '0 8px', gap: 6,
    flexShrink: 0,
    ...extra,
  })

  return (
    <div style={{ display: 'inline-flex', position: 'relative' }}>
      {showTooltip && <InfoTooltip text={tooltipText} />}

      {expanded && (
        // Absolutely positioned so the breakdown floats above without
        // affecting the parent bar's height or layout.
        <div style={{ position: 'absolute', bottom: '100%', left: 0 }}>
          <BreakdownPanel rows={resolvedRows} borderColor={borderColor} />
        </div>
      )}

      {/* Main row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 35,
        backgroundColor: colors.white,
        border: `${strokeWidths.thin}px solid ${borderColor}`,
        borderRadius: radii.box,
        overflow: 'hidden',
        position: 'relative',
      }}>
        <TotalArrow onClick={handleExpand} expanded={expanded} />

        {/* TOTAL */}
        <div style={cell({ width: LABEL_W, borderRight: `1px solid ${colors.dividerSubtle}` })}>
          <span style={{ ...sb12, color: colors.primary }}>TOTAL</span>
        </div>

        {/* HIPPS code column — fixed width, matches breakdown code col */}
        <div style={cell({ width: HIPPS_W, flexShrink: 0, borderRight: `1px solid ${colors.dividerSubtle}` })}>
          {!showEmpty && !showDidnt && (
            <span style={{ ...reg12, color: colors.primary, whiteSpace: 'nowrap', minWidth: 40 }}>{hippsCode}</span>
          )}
          {showArrow && <ArrowRight />}
          {showNewValue && <span style={{ ...sb12, color: newValueColor, whiteSpace: 'nowrap' }}>{newHippsCode}</span>}
          {showDashes   && <span style={{ ...reg12, color: colors.secondary, whiteSpace: 'nowrap' }}>---</span>}
          {showDidnt    && (
            <>
              <span style={{ ...reg12, color: colors.primary, whiteSpace: 'nowrap' }}>{hippsCode}</span>
              <span style={{ ...reg12, fontStyle: 'italic', color: colors.secondary, whiteSpace: 'nowrap' }}>
                changes did not affect HIPPS
              </span>
            </>
          )}
        </div>

        {/* Reimbursement column */}
        <div style={cell({ flex: 1 })}>
          {!showEmpty && !showDidnt && (
            <span style={{ ...reg12, color: colors.primary, whiteSpace: 'nowrap' }}>{reimbursement}</span>
          )}
          {showArrow && <ArrowRight />}
          {showNewValue && <span style={{ ...sb12, color: newValueColor, whiteSpace: 'nowrap' }}>{newReimbursement}</span>}
          {showDashes   && <span style={{ ...reg12, color: colors.secondary, whiteSpace: 'nowrap' }}>---</span>}
          {showDidnt    && (
            <>
              <span style={{ ...reg12, color: colors.primary, whiteSpace: 'nowrap' }}>{reimbursement}</span>
              <span style={{ ...reg12, fontStyle: 'italic', color: colors.secondary, whiteSpace: 'nowrap' }}>
                changes did not affect HIPPS
              </span>
            </>
          )}
        </div>

        {infoIcon && (
          <div style={{ marginLeft: 'auto', paddingRight: 4 }}>
            <InfoIcon />
          </div>
        )}
      </div>
    </div>
  )
}
