import { useState } from 'react'
import { colors, fonts, fontWeights, radii } from '../../tokens.js'
import { Calculator } from './Calculator.jsx'

const sb12  = { fontFamily: fonts.montserrat, fontSize: '12px', fontWeight: fontWeights.semibold, lineHeight: '22px' }
const reg12 = { fontFamily: fonts.montserrat, fontSize: '12px', fontWeight: fontWeights.regular,  lineHeight: '18px' }

function MoneyTag({ label }) {
  return (
    <div style={{
      backgroundColor: '#EBF8E9',
      borderRadius: radii.boxSm,
      height: 24,
      padding: '0 11px',
      display: 'flex', alignItems: 'center', flexShrink: 0,
    }}>
      <span style={{ ...sb12, color: colors.green, whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  )
}

function PillButton({ label, variant = 'filled', disabled = false, onClick }) {
  const [hovered, setHovered] = useState(false)

  const base = {
    height: 32,
    borderRadius: radii.rounded,
    padding: '0 12px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: fonts.montserrat,
    fontSize: '12px',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
    border: 'none',
  }

  if (variant === 'text') {
    return (
      <button
        style={{ ...base, background: 'none', ...reg12, color: colors.primary }}
        onClick={!disabled ? onClick : undefined}
        onMouseEnter={() => !disabled && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </button>
    )
  }

  if (variant === 'outlined') {
    return (
      <button
        style={{
          ...base,
          border: `1px solid ${disabled ? colors.dividerDisabled : colors.dividerDisabled}`,
          backgroundColor: disabled ? colors.disabled : hovered ? colors.surface : colors.white,
          ...sb12,
          color: disabled ? colors.muted : colors.purple,
        }}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => !disabled && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </button>
    )
  }

  // filled
  return (
    <button
      style={{
        ...base,
        backgroundColor: disabled ? colors.disabled : hovered ? colors.purpleHover : colors.purple,
        ...sb12,
        color: disabled ? colors.muted : colors.white,
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  )
}

export function CalculatorBar({
  type            = 'IPA',       // 'IPA' | 'dashboard'
  state           = 'default',   // 'default' | 'disabled' | 'didnt affect hipps'
  hasMoneyLabel   = false,       // dashboard only
  moneyLabel      = '+$500',
  // inner Calculator props
  calculatorType  = 'positive',
  hippsCode,
  newHippsCode,
  reimbursement,
  newReimbursement,
  breakdownRows,
  // callbacks
  onDismiss,
  onSave,
  onCalculate,
}) {
  const isDashboard   = type === 'dashboard'
  const isDisabled    = state === 'disabled'
  const calcDisabled  = isDashboard && (isDisabled || state === 'didnt affect hipps')

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      padding: '0 24px',
      backgroundColor: colors.white,
      border: `1px solid ${colors.dividerSubtle}`,
      borderRadius: radii.box,
      boxShadow: '0px 0px 7.5px rgba(0,0,0,0.1)',
      gap: 16,
    }}>

      {/* Left: title + optional money tag + inner calculator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        <span style={{ ...sb12, color: colors.primary, whiteSpace: 'nowrap' }}>
          {isDashboard ? 'Total Reimbursement' : 'Summary of MDS changes'}
        </span>
        {isDashboard && hasMoneyLabel && <MoneyTag label={moneyLabel} />}
        <Calculator
          calculatorType={calculatorType}
          hippsCode={hippsCode}
          newHippsCode={newHippsCode}
          reimbursement={reimbursement}
          newReimbursement={newReimbursement}
          breakdownRows={breakdownRows}
        />
      </div>

      {/* Right: action buttons */}
      {isDashboard ? (
        <PillButton
          label="Calculate"
          variant="filled"
          disabled={calcDisabled}
          onClick={onCalculate}
        />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <PillButton label="Dismiss"          variant="text"     onClick={onDismiss} />
          <div style={{ display: 'flex', gap: 8 }}>
            <PillButton label="Save"             variant="outlined" disabled={isDisabled} onClick={onSave} />
            <PillButton label="Make Calculation" variant="filled"   disabled={isDisabled} onClick={onCalculate} />
          </div>
        </div>
      )}
    </div>
  )
}
