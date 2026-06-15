import { DiagnosisTableRow } from './DiagnosisTableRow'

export default {
  title: '🟠   📁 sources/Diagnosis Table Row',
  component: DiagnosisTableRow,
  args: {
    diagnosis:        'Hypertension (High Blood Pressure)',
    clinicalCategory: 'Acute',
    mdsMapping:       'I10',
    verifyStatus:     'none',
    rowVariant:       'light',
    upVotes:          0,
    downVotes:        0,
  },
  argTypes: {
    verifyStatus: { control: 'select', options: ['none', 'verified', 'pending', 'denied'] },
    rowVariant:   { control: 'select', options: ['light', 'dark'] },
    upVotes:      { control: 'number' },
    downVotes:    { control: 'number' },
  },
  decorators: [(Story) => (
    <div style={{ padding: '32px', background: '#f5f5f5' }}>
      <div style={{ width: '692px' }}><Story /></div>
    </div>
  )],
}

export const Default      = { args: { verifyStatus: 'none',     rowVariant: 'light' } }
export const Verified     = { args: { verifyStatus: 'verified', rowVariant: 'light' } }
export const Pending      = { args: { verifyStatus: 'pending',  rowVariant: 'light' } }
export const Denied       = { args: { verifyStatus: 'denied',   rowVariant: 'light' } }
export const DarkDefault  = { args: { verifyStatus: 'none',     rowVariant: 'dark'  } }
export const WithVotes    = { args: { verifyStatus: 'none',     rowVariant: 'light', upVotes: 5, downVotes: 2 } }
