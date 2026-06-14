import { CalculatorBar } from './CalculatorBar'

export default {
  title: '🟢   💊 Calculator/CalculatorBar',
  component: CalculatorBar,
  args: {
    hippsCode:        'NRYUT',
    newHippsCode:     'SPGGF',
    reimbursement:    '$64,789',
    newReimbursement: '$64,789',
    moneyLabel:       '+$500',
  },
  argTypes: {
    type:          { control: 'select', options: ['IPA', 'dashboard'] },
    state:         { control: 'select', options: ['default', 'disabled', 'didnt affect hipps'] },
    calculatorType: {
      control: 'select',
      options: ['positive', 'alert', 'no result', 'no result 2', '1 answer', 'didnt affect hipps'],
    },
    hasMoneyLabel: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '80px 48px 48px' }}><Story /></div>],
}

// ─── IPA ─────────────────────────────────────────────────────────────────────

export const IpaDefault = {
  name: 'IPA — Default',
  args: { type: 'IPA', state: 'default', calculatorType: 'positive' },
}

export const IpaDisabled = {
  name: 'IPA — Disabled',
  args: { type: 'IPA', state: 'disabled', calculatorType: '1 answer' },
}

export const IpaDidntAffectHipps = {
  name: 'IPA — Didnt Affect HIPPS',
  args: { type: 'IPA', state: 'didnt affect hipps', calculatorType: 'didnt affect hipps' },
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export const DashboardDefault = {
  name: 'Dashboard — Default',
  args: { type: 'dashboard', state: 'default', calculatorType: 'positive', hasMoneyLabel: true },
}

export const DashboardDisabled = {
  name: 'Dashboard — Disabled',
  args: { type: 'dashboard', state: 'disabled', calculatorType: '1 answer', hasMoneyLabel: true },
}

export const DashboardDidntAffectHipps = {
  name: 'Dashboard — Didnt Affect HIPPS',
  args: { type: 'dashboard', state: 'didnt affect hipps', calculatorType: 'didnt affect hipps', hasMoneyLabel: true },
}
