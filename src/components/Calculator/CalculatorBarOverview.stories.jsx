import { CalculatorBar } from './CalculatorBar'

export default {
  title: '🟢   🔢 Calculator/CalculatorBar/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const label = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
    {text}
  </div>
)

const calc = { hippsCode: 'NRYUT', newHippsCode: 'SPGGF', reimbursement: '$64,789', newReimbursement: '$64,789' }

export const Overview = {
  render: () => (
    <div style={{ padding: '48px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px' }}>

      {label('IPA — default')}
      <CalculatorBar type="IPA" state="default" calculatorType="positive" {...calc} />

      {label('IPA — disabled')}
      <CalculatorBar type="IPA" state="disabled" calculatorType="1 answer" {...calc} />

      {label('IPA — didnt affect hipps')}
      <CalculatorBar type="IPA" state="didnt affect hipps" calculatorType="didnt affect hipps" {...calc} />

      {label('dashboard — default')}
      <CalculatorBar type="dashboard" state="default" calculatorType="positive" hasMoneyLabel moneyLabel="+$500" {...calc} />

      {label('dashboard — disabled')}
      <CalculatorBar type="dashboard" state="disabled" calculatorType="1 answer" hasMoneyLabel moneyLabel="+$500" {...calc} />

      {label('dashboard — didnt affect hipps')}
      <CalculatorBar type="dashboard" state="didnt affect hipps" calculatorType="didnt affect hipps" hasMoneyLabel moneyLabel="+$500" {...calc} />

    </div>
  ),
}
