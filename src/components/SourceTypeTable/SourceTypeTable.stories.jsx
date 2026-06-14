import { SourceTypeTable } from './SourceTypeTable'

export default {
  title: '🟠   📁 sources/Source Type Table',
  component: SourceTypeTable,
  args: {
    uploadedDate:  '15/12/2025',
    docName:       'Diagnosis hospital_records file hypervention .pdf',
    sourceType:    'IV Fluids',
    upCount:       123,
    downCount:     0,
    commentsCount: 4,
  },
  argTypes: {
    tableType:   { control: 'select', options: ['iv-fluids', 'tube-feeding', 'surgery', 'diagnosis', 'highlighted-text', 'doc-quote', 'more-doc-quotes', 'ai-summary'] },
    sourcePopup: { control: 'boolean' },
    hasTitle:    { control: 'boolean' },
    hasArrow:    { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ width: 692, padding: 24 }}><Story /></div>],
}

const BASE_ROW = { name: 'Sodium Chloride', volume: '50 mL', dosage: '80 mL/3x a day', date: '15/04/2025', pageRef: 'pg. 12' }
const ROWS = Array.from({ length: 35 }, (_, i) => ({ ...BASE_ROW, lineNumber: String(i + 1) }))

const ROWS_SHORT = [
  { name: 'Sodium Chloride', volume: '50 mL', dosage: '80 mL/3x a day', date: '15/04/2025', pageRef: 'pg. 1, 2, 3' },
  { name: 'Sodium Chloride', volume: '50 mL', dosage: '80 mL/3x a day', date: '15/04/2025', pageRef: 'pg. 12' },
  { name: 'Sodium Chloride', volume: '50 mL', dosage: '80 mL/3x a day', date: '15/04/2025', pageRef: 'pg. 1, 2, 3' },
]

const LOREM = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas...'
const QUOTE = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.'
const AI_TEXT = 'The patient has a Stage 3 pressure wound of the left buttock coccyx, full thickness. The wound has a duration of 39 days, measures 0.36 x 0.62 x 0.1 cm with a surface area of 0.22 cm².'

export const IvFluids = {
  name: 'IV Fluids',
  args: { tableType: 'iv-fluids', title: 'IV Fluids', rows: ROWS },
}

export const IvFluidsSourcePopup = {
  name: 'IV Fluids — Source Popup',
  args: { tableType: 'iv-fluids', title: 'IV Fluids', sourcePopup: true, rows: ROWS },
}

export const TubeFeeding = {
  name: 'Tube Feeding',
  args: { tableType: 'tube-feeding', title: 'Tube Feeding', sourceType: 'IV Fluids', rows: ROWS },
}

export const Surgery = {
  args: { tableType: 'surgery', title: 'Surgery', sourceType: 'Medications', rows: ROWS },
}

export const Diagnosis = {
  args: { tableType: 'diagnosis', title: 'Diagnosis', sourceType: 'Diagnosis', rows: ROWS },
}

export const HighlightedText = {
  name: 'Highlighted Text',
  args: { tableType: 'highlighted-text', title: 'Progress Notes', sourceType: 'Progress Notes', text: LOREM },
}

export const DocQuote = {
  name: 'Doc Quote',
  args: { tableType: 'doc-quote', title: 'Doc Quote', sourceType: 'Documents', text: QUOTE },
}

export const AiSummary = {
  name: 'AI Summary',
  args: {
    tableType: 'ai-summary', title: 'AI Summary', sourceType: 'Assessments',
    aiTitle: 'AI-Generated Section M Summary', text: AI_TEXT,
  },
}
