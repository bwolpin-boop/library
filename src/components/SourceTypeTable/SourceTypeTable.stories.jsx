import { useState } from 'react'
import { SourceTypeTable } from './SourceTypeTable'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

export default {
  title: '🟠   📁 sources/Source Type Table',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

// ─── Shared sample data ───────────────────────────────────────────────────────

const BASE_ROW = { name: 'Sodium Chloride', volume: '50 mL', dosage: '80 mL/3x a day', date: '15/04/2025', pageRef: 'pg. 12' }
const ROWS     = Array.from({ length: 8 }, (_, i) => ({
  ...BASE_ROW,
  pageRef:      i % 3 === 0 ? 'pg. 1, 2, 3' : 'pg. 12',
  hasMorePages: i % 3 === 0,
}))

const LOREM  = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.'
const QUOTE  = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.'
const AI_TXT = 'The patient has a Stage 3 pressure wound of the left buttock coccyx, full thickness. The wound has a duration of 39 days, measures 0.36 x 0.62 x 0.1 cm with a surface area of 0.22 cm².'

// ─── Toggle wrapper ───────────────────────────────────────────────────────────

function ToggleTable({ tableType, title, sourceType, rows, text, aiTitle, isQuote }) {
  const [mode, setMode] = useState('source popup')  // default: source popup

  const btn = (label) => ({
    fontFamily:      fonts.montserrat,
    fontSize:        fontSizes.xs,
    fontWeight:      mode === label ? fontWeights.semibold : fontWeights.regular,
    padding:         '4px 12px',
    borderRadius:    radii.rounded,
    border:          `1px solid ${mode === label ? colors.primary : colors.dividerSubtle}`,
    background:      mode === label ? colors.primary : colors.white,
    color:           mode === label ? colors.white : colors.primary,
    cursor:          'pointer',
    transition:      'all 0.1s',
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 692 }}>
      {/* Toggle */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={btn('source popup')} onClick={() => setMode('source popup')}>Source Popup</button>
        <button style={btn('prescrub')}     onClick={() => setMode('prescrub')}>Prescrub</button>
      </div>
      {/* Table */}
      <SourceTypeTable
        tableType={tableType}
        title={title}
        sourceType={sourceType ?? 'IV Fluids'}
        uploadedDate="15/12/2025"
        docName="Diagnosis hospital_records file hypervention .pdf"
        rows={rows}
        text={text}
        aiTitle={aiTitle}
        isQuote={isQuote}
        sourcePopup={mode === 'source popup'}
        upCount={123}
        downCount={0}
        commentsCount={4}
      />
    </div>
  )
}

// ─── One story per table type ─────────────────────────────────────────────────

export const IvFluids = {
  name: 'IV Fluids',
  render: () => <ToggleTable tableType="iv-fluids" title="IV Fluids" sourceType="IV Fluids" rows={ROWS} />,
}

export const TubeFeeding = {
  name: 'Tube Feeding',
  render: () => <ToggleTable tableType="tube-feeding" title="Tube Feeding" sourceType="IV Fluids" rows={ROWS} />,
}

export const Surgery = {
  name: 'Surgery',
  render: () => <ToggleTable tableType="surgery" title="Surgery" sourceType="Medications" rows={ROWS} />,
}

export const Diagnosis = {
  name: 'Diagnosis',
  render: () => <ToggleTable tableType="diagnosis" title="Diagnosis" sourceType="Diagnosis" rows={ROWS} />,
}

export const ProgressNotes = {
  name: 'Progress Notes',
  render: () => <ToggleTable tableType="highlighted-text" title="Progress Notes" sourceType="Progress Notes" text={LOREM} />,
}

export const DocQuote = {
  name: 'Doc Quote',
  render: () => <ToggleTable tableType="doc-quote" title="Doc Quote" sourceType="Documents" text={QUOTE} isQuote />,
}

export const MoreDocQuotes = {
  name: 'More Doc Quotes',
  render: () => <ToggleTable tableType="more-doc-quotes" title="More Doc Quotes" sourceType="Documents" text={QUOTE} isQuote />,
}

export const AiSummary = {
  name: 'AI Summary',
  render: () => (
    <ToggleTable
      tableType="ai-summary"
      title="AI Summary"
      sourceType="Assessments"
      aiTitle="AI-Generated Section M Summary"
      text={AI_TXT}
    />
  ),
}
