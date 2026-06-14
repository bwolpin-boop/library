import { SourceTypeTable } from './SourceTypeTable'

export default {
  title: '🟠   📁 sources/Source Type Table/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font  = '"Montserrat", sans-serif'
const lbl   = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '32px 0 8px' }}>
    {text}
  </div>
)

const common = {
  uploadedDate: '15/12/2025',
  docName: 'Diagnosis hospital_records file hypervention .pdf',
  upCount: 123, commentsCount: 4,
}

const BASE = { name: 'Sodium Chloride', volume: '50 mL', dosage: '80 mL/3x a day', date: '15/04/2025', pageRef: 'pg. 12' }
const ROWS = Array.from({ length: 35 }, (_, i) => ({ ...BASE, lineNumber: String(i + 1) }))

const LOREM = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas...'
const QUOTE = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.'
const AI    = 'The patient has a Stage 3 pressure wound of the left buttock coccyx, full thickness. The wound has a duration of 39 days, measures 0.36 x 0.62 x 0.1 cm.'

export const Overview = {
  render: () => (
    <div style={{ padding: 48, fontFamily: font, width: 692 }}>
      {lbl('IV Fluids — prescrub')}
      <SourceTypeTable tableType="iv-fluids" title="IV Fluids" sourceType="IV Fluids" rows={ROWS} viewMoreCount={234} {...common} />

      {lbl('IV Fluids — source popup')}
      <SourceTypeTable
        tableType="iv-fluids" title="IV Fluids" sourceType="IV Fluids" sourcePopup
        rows={ROWS.map((r, i) => ({ ...r, lineNumber: String(23 + i) }))}
        {...common}
      />

      {lbl('Highlighted Text')}
      <SourceTypeTable tableType="highlighted-text" title="Progress Notes" sourceType="Progress Notes" text={LOREM} {...common} />

      {lbl('Doc Quote')}
      <SourceTypeTable tableType="doc-quote" title="Doc Quote" sourceType="Documents" text={QUOTE} {...common} />

      {lbl('AI Summary')}
      <SourceTypeTable tableType="ai-summary" title="AI Summary" sourceType="Assessments" aiTitle="AI-Generated Section M Summary" text={AI} {...common} />

      {lbl('Tube Feeding')}
      <SourceTypeTable tableType="tube-feeding" title="Tube Feeding" sourceType="IV Fluids" rows={ROWS} {...common} />

      {lbl('Collapsed (click arrow to toggle)')}
      <SourceTypeTable tableType="iv-fluids" title="IV Fluids" sourceType="IV Fluids" rows={ROWS} {...common} />
    </div>
  ),
}
