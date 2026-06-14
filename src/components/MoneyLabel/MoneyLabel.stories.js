import { MoneyLabel } from './MoneyLabel'

export default {
  title: '🟢   💊 IPA components/Money Label',
  component: MoneyLabel,
  args: { value: 500 },
  argTypes: { value: { control: 'number' } },
}

export const Positive = { args: { value: 500 } }
export const Negative = { args: { value: -500 } }
export const LargePositive = { args: { value: 12500 } }
export const LargeNegative = { args: { value: -12500 } }
