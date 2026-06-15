import { PccSidePanel } from './PccSidePanel'

export default {
  title: '🟠   📁 sources/PCC Side Panel',
  component: PccSidePanel,
  parameters: { controls: { disable: true }, actions: { disable: true } },
  decorators: [(Story) => (
    <div style={{ width: 636, height: 900, background: '#f5f5f5' }}>
      <Story />
    </div>
  )],
}

const MULTI_TABLES = [
  {
    sourceType:   'Progress Notes',
    tableType:    'highlighted-text',
    uploadedDate: '15/12/2025',
    docName:      'progress_notes_dec_2025.pdf',
    text:         'The patient presented with elevated blood pressure readings of 145/92 mmHg on three consecutive visits. Family history positive for hypertension. Patient reports occasional headaches and fatigue.',
  },
  {
    sourceType:   'Progress Notes',
    tableType:    'doc-quote',
    uploadedDate: '10/12/2025',
    docName:      'progress_notes_b.pdf',
    text:         'Patient continues to require 50 mL/hr continuous IV fluid replacement. Sodium levels trending toward normal range.',
    isQuote:      true,
  },
  {
    sourceType:   'Assessments',
    tableType:    'doc-quote',
    uploadedDate: '14/12/2025',
    docName:      'mds_assessment_q4_2025.pdf',
    text:         'Patient scored 3/15 on the MDS cognitive performance scale. Short-term memory deficits noted. Requires verbal cueing for daily activities.',
    isQuote:      true,
  },
  {
    sourceType:   'Mars',
    tableType:    'iv-fluids',
    uploadedDate: '13/12/2025',
    docName:      'medication_administration_dec2025.pdf',
    rows: [
      { name: 'Lisinopril 10mg',   volume: '1 tab', dosage: 'Once daily',    date: '15/12/2025', pages: [1] },
      { name: 'Metformin 500mg',   volume: '1 tab', dosage: 'Twice daily',   date: '15/12/2025', pages: [2] },
      { name: 'Atorvastatin 20mg', volume: '1 tab', dosage: 'Once at night', date: '15/12/2025', pages: [3] },
    ],
  },
]

export const Default = {
  render: () => <PccSidePanel />,
}

export const WithTabs = {
  render: () => (
    <PccSidePanel
      tables={MULTI_TABLES}
      showAiSummary={true}
      showPrimaryDiagnosis={true}
    />
  ),
}

export const NoExtras = {
  render: () => (
    <PccSidePanel
      docTitle="HOW Bridgeview.pdf"
      showPrimaryDiagnosis={false}
      showAiSummary={false}
      tables={MULTI_TABLES}
    />
  ),
}
