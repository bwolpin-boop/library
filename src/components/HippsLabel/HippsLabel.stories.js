import { HippsLabel } from './HippsLabel'

export default {
  title: '🟢   🗓 HippsLabel',
  component: HippsLabel,
  args: { amount: '$646.37', code: 'AGSFG' },
}

export const Default = {}
export const Custom  = { args: { amount: '$1,200.00', code: 'HIPPS1' } }
