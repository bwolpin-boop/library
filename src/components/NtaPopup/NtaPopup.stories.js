import React from 'react'
import { NtaPopup } from './NtaPopup'

export default {
  title: '🟠   📁 sources/NTA Popup',
  component: NtaPopup,
  args: { title: 'Discharge Summary Diagnosis Guide' },
  argTypes: { title: { control: 'text' } },
  decorators: [(Story) => React.createElement('div', { style: { padding: '32px', width: 922 } }, React.createElement(Story))],
}

export const Default = {}

export const SingleSection = {
  args: {
    sections: [
      {
        title: 'Reasons for hospitalization',
        dateRange: '15/12/2025 - 15/12/2025',
        fileName: 'Diagnosis hospital_records file hypervention .pdf',
        rows: [
          { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP', diagnosisLabel: 'nta-blue' },
          { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Medical Management', mdsMapping: 'IGHFP', diagnosisLabel: 'primary-set' },
          { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP' },
        ],
      },
    ],
  },
}
