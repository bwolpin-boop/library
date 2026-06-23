import { useState } from 'react'
import { TotalArrow } from './TotalArrow.jsx'

// Shared column widths — breakdown rows and main row use the same values so
// columns naturally align when both are children of the same flex container.
const ARROW_W  = 40   // TotalArrow / spacer
const LABEL_W  = 131  // TOTAL / category column
const HIPPS_W  = 150  // HIPPS code column (breakdown code col matches this exactly)

// ─── Sub-components ──────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <div className="dc:w-gap24 dc:h-gap24 dc:flex dc:items-center dc:justify-center dc:shrink-0">
      <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
        <path d="M1 4H11.5M8.5 1.5L11.5 4L8.5 6.5" stroke="var(--dc-color-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

function InfoIcon() {
  return (
    <div className="dc:w-gap24 dc:h-gap24 dc:flex dc:items-center dc:justify-center dc:shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7.5" stroke="var(--dc-color-muted)" />
        <text x="8" y="12" textAnchor="middle" fontSize="10" fontFamily="serif" fill="var(--dc-color-muted)">i</text>
      </svg>
    </div>
  )
}

function InfoTooltip({ text }) {
  return (
    <div
      className="dc:absolute dc:z-10"
      style={{
        bottom: 'calc(100% + 8px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 198,
      }}
    >
      <div className="dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box-sm dc:relative" style={{ padding: '8px 12px' }}>
        <p className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary" style={{ margin: 0 }}>{text}</p>
        <div
          className="dc:absolute"
          style={{
            bottom: -5,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid var(--dc-color-divider-subtle)',
          }}
        />
      </div>
    </div>
  )
}

// ─── Breakdown panel ─────────────────────────────────────────────────────────
// Rendered as a regular flow sibling ABOVE the main row (not absolute), so
// the breakdown's columns naturally share the same width as the main row's.

function BreakdownPanel({ rows, borderColor }) {
  return (
    <div
      className="dc:bg-white dc:border dc:border-divider-subtle"
      style={{
        width: LABEL_W + HIPPS_W + 1,
        borderTop:   '1px solid var(--dc-color-divider-subtle)',
        borderLeft:  '1px solid var(--dc-color-divider-subtle)',
        borderRight: '1px solid var(--dc-color-divider-subtle)',
        borderRadius: 'var(--dc-radius-box) var(--dc-radius-box) 0 0',
        // +1 accounts for the main row's 1px left border
        marginLeft: ARROW_W + 1,
      }}
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className="dc:flex dc:items-center"
          style={{
            height: 35,
            borderBottom: i < rows.length - 1 ? '1px solid var(--dc-color-divider-subtle)' : 'none',
          }}
        >
          {/* Category — same width as TOTAL col */}
          <div
            className="dc:flex dc:items-center dc:h-full dc:shrink-0"
            style={{
              padding: '0 8px',
              width: LABEL_W,
              borderRight: '1px solid var(--dc-color-divider-subtle)',
            }}
          >
            <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{row.category}</span>
          </div>
          {/* Code transition — fixed width matching the HIPPS column in the main row */}
          <div
            className="dc:flex dc:items-center dc:h-full dc:shrink-0"
            style={{
              padding: '0 8px',
              gap: 6,
              width: HIPPS_W,
            }}
          >
            <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap" style={{ minWidth: 40 }}>{row.code}</span>
            <ArrowRight />
            {row.newCode ? (
              <span
                className={[
                  'dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:whitespace-nowrap',
                  row.newCodeColor === 'red'    ? 'dc:text-error'
                  : row.newCodeColor === 'gray' ? 'dc:text-secondary'
                  :                               'dc:text-purple',
                  row.newCodeColor === 'hidden' ? 'dc:opacity-0' : 'dc:opacity-100',
                ].join(' ')}
              >
                {row.newCode}
              </span>
            ) : (
              <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">---</span>
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

  const newValueColorClass = isAlert ? 'dc:text-error' : 'dc:text-purple'
  const borderColor        = isAlert ? 'var(--dc-color-error)' : 'var(--dc-color-divider-subtle)'

  const resolvedRows = breakdownRows ?? DEFAULT_BREAKDOWN_ROWS[calculatorType] ?? DEFAULT_BREAKDOWN_ROWS.positive

  return (
    <div className="dc:inline-flex dc:relative">
      {showTooltip && <InfoTooltip text={tooltipText} />}

      {expanded && (
        // Absolutely positioned so the breakdown floats above without
        // affecting the parent bar's height or layout.
        <div className="dc:absolute dc:left-0" style={{ bottom: '100%' }}>
          <BreakdownPanel rows={resolvedRows} borderColor={borderColor} />
        </div>
      )}

      {/* Main row */}
      <div
        className="dc:flex dc:items-center dc:bg-white dc:overflow-hidden dc:relative"
        style={{
          height: 35,
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--dc-radius-box)',
        }}
      >
        <TotalArrow onClick={handleExpand} expanded={expanded} />

        {/* TOTAL */}
        <div
          className="dc:flex dc:items-center dc:h-full dc:shrink-0"
          style={{ width: LABEL_W, padding: '0 8px', gap: 6, borderRight: '1px solid var(--dc-color-divider-subtle)' }}
        >
          <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:text-primary">TOTAL</span>
        </div>

        {/* HIPPS code column — fixed width, matches breakdown code col */}
        <div
          className="dc:flex dc:items-center dc:h-full dc:shrink-0"
          style={{ width: HIPPS_W, padding: '0 8px', gap: 6, borderRight: '1px solid var(--dc-color-divider-subtle)' }}
        >
          {!showEmpty && !showDidnt && (
            <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap" style={{ minWidth: 40 }}>{hippsCode}</span>
          )}
          {showArrow && <ArrowRight />}
          {showNewValue && <span className={`dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:whitespace-nowrap ${newValueColorClass}`}>{newHippsCode}</span>}
          {showDashes   && <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">---</span>}
          {showDidnt    && (
            <>
              <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{hippsCode}</span>
              <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:italic dc:text-secondary dc:whitespace-nowrap">
                changes did not affect HIPPS
              </span>
            </>
          )}
        </div>

        {/* Reimbursement column */}
        <div
          className="dc:flex dc:items-center dc:h-full dc:flex-1"
          style={{ padding: '0 8px', gap: 6 }}
        >
          {!showEmpty && !showDidnt && (
            <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{reimbursement}</span>
          )}
          {showArrow && <ArrowRight />}
          {showNewValue && <span className={`dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:whitespace-nowrap ${newValueColorClass}`}>{newReimbursement}</span>}
          {showDashes   && <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">---</span>}
          {showDidnt    && (
            <>
              <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{reimbursement}</span>
              <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:italic dc:text-secondary dc:whitespace-nowrap">
                changes did not affect HIPPS
              </span>
            </>
          )}
        </div>

        {infoIcon && (
          <div className="dc:ml-auto" style={{ paddingRight: 4 }}>
            <InfoIcon />
          </div>
        )}
      </div>
    </div>
  )
}
