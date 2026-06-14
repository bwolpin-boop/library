import { DiagnosisTableRow } from './DiagnosisTableRow'

export default {
  title: '🟢   🏓 Table/Diagnosis Table Row',
  component: DiagnosisTableRow,
  args: {
    diagnosis:       'Hypertension (High Blood Pressure)',
    description:     'The patient presented with a closed dislocation of the right hip, which was initially encountered on 07/22/2025...',
    clinicalCategory: 'Acute',
    mdsMapping:      'HGHGD',
    sourceType:      'Documents',
    hasDescription:   true,
    verifyStatus:    'none',
    rowVariant:      'light',
  },
  argTypes: {
    verifyStatus: { control: 'select', options: ['none', 'verify', 'pending', 'deny'] },
    rowVariant:   { control: 'select', options: ['light', 'dark'] },
    hasDescription: { control: 'boolean' },
  },
  decorators: [(Story) => (
    <div style={{ padding: '32px', background: '#f5f5f5' }}>
      <div style={{ width: '1040px' }}><Story /></div>
    </div>
  )],
}

export const Default          = { args: { verifyStatus: 'none',    rowVariant: 'light' } }
export const Verified         = { args: { verifyStatus: 'verify',  rowVariant: 'light' } }
export const Pending          = { args: { verifyStatus: 'pending', rowVariant: 'light' } }
export const Denied           = { args: { verifyStatus: 'deny',    rowVariant: 'light' } }
export const DarkDefault      = { args: { verifyStatus: 'none',    rowVariant: 'dark'  } }
export const DarkVerified     = { args: { verifyStatus: 'verify',  rowVariant: 'dark'  } }
export const NoDescription    = { args: { verifyStatus: 'none',    rowVariant: 'light', hasDescription: false } }
