import { SourcesHeaders } from './SourcesHeaders'

export default {
  title: '🟢   🏓 Table/Sources Headers',
  component: SourcesHeaders,
  args: { variant: 'medication', hasDescription: true },
  argTypes: {
    variant:        { control: 'select', options: ['medication', 'diagnosis'] },
    hasDescription: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px', background: '#f5f5f5' }}><Story /></div>],
}

export const Medication                   = { args: { variant: 'medication' } }
export const Diagnosis                    = { args: { variant: 'diagnosis', hasDescription: true } }
export const DiagnosisWithoutDescription  = { args: { variant: 'diagnosis', hasDescription: false } }
