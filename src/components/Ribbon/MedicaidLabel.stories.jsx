import { MedicaidLabel } from './MedicaidLabel'

export default {
  title: '🟢   🎀 Ribbon/MedicaidLabel',
  component: MedicaidLabel,
  args: { type: 'medicaid', state: 'TX' },
  argTypes: {
    type:  { control: 'select', options: ['medicaid', 'medicare'] },
    state: { control: 'text' },
  },
  decorators: [(Story) => <div style={{ padding: '24px' }}><Story /></div>],
}

export const Medicaid = { args: { type: 'medicaid', state: 'TX' } }
export const Medicare = { args: { type: 'medicare', state: 'TX' } }
