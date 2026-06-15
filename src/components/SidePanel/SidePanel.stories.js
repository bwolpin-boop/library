import { SidePanel } from './SidePanel'

const TABLES = [
  {
    sourceType:   'Progress Notes',
    tableType:    'highlighted-text',
    uploadedDate: '15/12/2025',
    docName:      'progress_notes_dec_2025.pdf',
    text:         'The patient presented with elevated blood pressure readings of 145/92 mmHg on three consecutive visits. Family history positive for hypertension.',
  },
  {
    sourceType:   'Assessments',
    tableType:    'doc-quote',
    uploadedDate: '14/12/2025',
    docName:      'mds_assessment_q4_2025.pdf',
    text:         'Patient scored 3/15 on the MDS cognitive performance scale. Short-term memory deficits noted.',
    isQuote:      true,
  },
]

export default {
  title: '🟠   📁 sources/Side Panel',
  component: SidePanel,
  parameters: { controls: { disable: true }, actions: { disable: true } },
  decorators: [(Story) => (
    <div style={{ width: 636, height: 900, background: '#f5f5f5' }}>
      <Story />
    </div>
  )],
}

export const Default = {
  render: () => (
    <SidePanel
      docTitle="HOW Bridgeview.pdf"
      sourceCount={23}
      commentCount={4}
      showPrimaryDiagnosis
      showAiSummary
      tables={TABLES}
    />
  ),
}

export const NoExtras = {
  render: () => (
    <SidePanel
      docTitle="Progress_notes_jan2025.pdf"
      sourceCount={4}
      commentCount={2}
      showPrimaryDiagnosis={false}
      showAiSummary={false}
      tables={TABLES.slice(0, 1)}
    />
  ),
}
