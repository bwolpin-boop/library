import { IvFluidsRow } from './IvFluidsRow'

export default {
  title: '🟢   💊 IPA components/IV Fluids Row',
  component: IvFluidsRow,
  args: {
    purpose: 'prescrub',
    type: 'Default',
    name: 'Sodium Chloride',
    volume: '50 mL',
    dosage: '80 mL/3x a day',
    date: '15/04/2025',
    pageRef: 'pg. 12',
  },
  argTypes: {
    purpose: { control: 'select', options: ['prescrub', 'source popup', 'view more', 'view less'] },
    type:    { control: 'select', options: ['Default', 'verified', 'pending', 'denied'] },
    count:   { control: 'number' },
  },
  decorators: [(Story) => <div style={{ width: 705 }}><Story /></div>],
}

export const Default     = { args: { purpose: 'prescrub', type: 'Default' } }
export const Verified    = { args: { purpose: 'prescrub', type: 'verified' } }
export const Pending     = { args: { purpose: 'prescrub', type: 'pending' } }
export const Denied      = { args: { purpose: 'prescrub', type: 'denied' } }
export const SourcePopup = { args: { purpose: 'source popup', lineNumber: '23' } }
export const ViewMore    = { args: { purpose: 'view more', count: 234 } }
export const ViewLess    = { args: { purpose: 'view less' } }
