import { useState } from 'react'
import { Calculator } from './Calculator.jsx'

function MoneyTag({ label }) {
  return (
    <div
      className="dc:rounded-box-sm dc:flex dc:items-center dc:shrink-0"
      style={{
        backgroundColor: '#EBF8E9',
        height: 24,
        padding: '0 11px',
      }}
    >
      <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:text-green dc:whitespace-nowrap">{label}</span>
    </div>
  )
}

function PillButton({ label, variant = 'filled', disabled = false, onClick }) {
  const [hovered, setHovered] = useState(false)

  const baseClass = 'dc:flex dc:items-center dc:justify-center dc:whitespace-nowrap dc:border-none dc:cursor-pointer dc:font-montserrat dc:text-xs dc:rounded-rounded dc:shrink-0'

  const baseStyle = {
    height: 32,
    padding: '0 12px',
    transition: 'background-color 0.15s',
  }

  if (variant === 'text') {
    return (
      <button
        className={`${baseClass} dc:font-regular dc:text-primary`}
        style={{ ...baseStyle, background: 'none' }}
        onClick={!disabled ? onClick : undefined}
      >
        {label}
      </button>
    )
  }

  if (variant === 'outlined') {
    return (
      <button
        className={[
          baseClass,
          'dc:font-semibold',
          'dc:border dc:border-thin',
          disabled ? 'dc:border-divider-disabled dc:bg-disabled dc:text-muted' : 'dc:border-divider-disabled dc:text-purple',
        ].join(' ')}
        style={{
          ...baseStyle,
          backgroundColor: disabled ? undefined : hovered ? 'var(--dc-color-surface)' : 'var(--dc-color-white)',
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
      className={[
        baseClass,
        'dc:font-semibold',
        disabled ? 'dc:bg-disabled dc:text-muted' : 'dc:text-white',
      ].join(' ')}
      style={{
        ...baseStyle,
        backgroundColor: disabled ? undefined : hovered ? 'var(--dc-color-purple-hover)' : 'var(--dc-color-purple)',
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
    <div
      className="dc:flex dc:items-center dc:justify-between dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box dc:[box-shadow:0px_0px_7.5px_rgba(0,0,0,0.1)]"
      style={{
        height: 50,
        padding: '0 24px',
        gap: 16,
      }}
    >

      {/* Left: title + optional money tag + inner calculator */}
      <div className="dc:flex dc:items-center dc:shrink-0" style={{ gap: 16 }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:text-primary dc:whitespace-nowrap">
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
        <div className="dc:flex dc:items-center dc:shrink-0" style={{ gap: 12 }}>
          <PillButton label="Dismiss"          variant="text"     onClick={onDismiss} />
          <div className="dc:flex" style={{ gap: 8 }}>
            <PillButton label="Save"             variant="outlined" disabled={isDisabled} onClick={onSave} />
            <PillButton label="Make Calculation" variant="filled"   disabled={isDisabled} onClick={onCalculate} />
          </div>
        </div>
      )}
    </div>
  )
}
