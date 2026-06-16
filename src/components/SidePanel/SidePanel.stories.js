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
  argTypes: {
    docTitle:             { control: 'text' },
    sourceCount:          { control: { type: 'number', min: 0 } },
    sourceSelected:       { control: 'boolean' },
    commentCount:         { control: { type: 'number', min: 0 } },
    showPrimaryDiagnosis: { control: 'boolean' },
    showAiSummary:        { control: 'boolean' },
    aiSummaryText:        { control: 'text' },
    tables:               { control: false },
    style:                { control: false },
    className:            { control: false },
  },
  decorators: [(Story) => (
    <div style={{ width: 636, height: 900, background: '#f5f5f5' }}>
      <Story />
    </div>
  )],
}

export const Default = {
  args: {
    docTitle:             'HOW Bridgeview.pdf',
    sourceCount:          23,
    sourceSelected:       true,
    commentCount:         4,
    showPrimaryDiagnosis: true,
    showAiSummary:        true,
    tables:               TABLES,
  },
}

export const NoExtras = {
  args: {
    docTitle:             'Progress_notes_jan2025.pdf',
    sourceCount:          4,
    sourceSelected:       true,
    commentCount:         2,
    showPrimaryDiagnosis: false,
    showAiSummary:        false,
    tables:               TABLES.slice(0, 1),
  },
}
