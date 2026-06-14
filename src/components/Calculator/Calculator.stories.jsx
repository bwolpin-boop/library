import { Calculator } from './Calculator'

export default {
  title: '🟢   💊 Calculator/Calculator',
  component: Calculator,
  args: {
    hippsCode: 'NRYUT',
    newHippsCode: 'SPGGF',
    reimbursement: '$64,789',
    newReimbursement: '$64,789',
    infoIcon: false,
    showTooltip: false,
  },
  argTypes: {
    calculatorType: {
      control: 'select',
      options: ['positive', 'alert', 'no result', 'no result 2', '1 answer', 'didnt affect hipps'],
    },
    infoIcon:    { control: 'boolean' },
    showTooltip: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '80px 48px 48px' }}><Story /></div>],
}

export const Positive       = { args: { calculatorType: 'positive' } }
export const Alert          = { args: { calculatorType: 'alert' } }
export const NoResult       = { args: { calculatorType: 'no result' } }
export const NoResult2      = { args: { calculatorType: 'no result 2' } }
export const OneAnswer      = { args: { calculatorType: '1 answer' } }
export const DidntAffect    = { args: { calculatorType: 'didnt affect hipps' } }

export const WithInfoIcon   = { args: { calculatorType: 'positive', infoIcon: true } }
export const WithTooltip    = { args: { calculatorType: 'positive', showTooltip: true } }
