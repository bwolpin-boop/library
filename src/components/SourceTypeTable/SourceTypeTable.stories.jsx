import { useState } from 'react'
import { SourceTypeTable } from './SourceTypeTable'
import { SidePanel } from '../SidePanel/SidePanel'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

export default {
  title: '🟠   📁 sources/Source Type Table',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

// ─── Shared sample data ───────────────────────────────────────────────────────

const FLUID_NAMES = [
  'Normal Saline (0.9% NaCl)',
  "Lactated Ringer's (LR) / Hartmann's Solution",
  'Plasma-Lyte',
  '0.45% Sodium Chloride (Half-Normal Saline)',
  '5% Dextrose in Water (D5W)',
  '3% or 5% Sodium Chloride (3% or 5% NaCl)',
  'Human Albumin',
  'Dextran',
]

// upVotes / downVotes = votes from OTHER people (not the current user)
const OTHER_VOTES = [
  { upVotes: 5 },             // Normal Saline
  {},                         // Lactated Ringer's
  { downVotes: 2 },           // Plasma-Lyte
  { upVotes: 12 },            // 0.45% NaCl
  { downVotes: 1 },           // D5W
  { upVotes: 3, downVotes: 4 }, // 3%/5% NaCl — both
  { upVotes: 8 },             // Human Albumin
  { downVotes: 6 },           // Dextran
]

const ROWS = FLUID_NAMES.map((name, i) => ({
  name,
  volume:    i % 2 === 0 ? '50 mL' : '100 mL',
  dosage:    i % 3 === 0 ? '80 mL/3x a day' : '120 mL/2x a day',
  date:      i % 2 === 0 ? '15/04/2025' : '20/04/2025',
  pages:     i % 5 === 0 ? [12, 24, 35, 47] : i % 3 === 0 ? [5, 13, 52] : i % 2 === 0 ? [12, 24] : [12],
  indicator: i === 1 || i === 4,   // rows 2 and 5 show the source indicator icon
  ...OTHER_VOTES[i],
}))

const TUBE_NAMES = [
  'Ensure Plus (1.5 kcal/mL)',
  'Osmolite 1.5',
  'Jevity 1.5 Cal',
  'Nutren 2.0',
  'TwoCal HN',
  'Glucerna 1.5 Cal',
]

const TUBE_ROWS = TUBE_NAMES.map((name, i) => ({
  name,
  volume:    i % 2 === 0 ? '240 mL' : '500 mL',
  date:      i % 2 === 0 ? '15/04/2025' : '18/04/2025',
  pages:     [i + 1],
}))

const LOREM  = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.'
const QUOTE  = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.'
const AI_TXT = 'The patient has a Stage 3 pressure wound of the left buttock coccyx, full thickness. The wound has a duration of 39 days, measures 0.36 x 0.62 x 0.1 cm with a surface area of 0.22 cm².'

// ─── Toggle wrapper ───────────────────────────────────────────────────────────

function ToggleTable({ tableType, title, sourceType, rows, text, aiTitle, isQuote }) {
  const [mode,      setMode]      = useState('source popup')
  const [panelOpen, setPanelOpen] = useState(false)

  const isSourcePopup = mode === 'source popup'

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

  function handleModeChange(newMode) {
    setMode(newMode)
    setPanelOpen(false)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Toggle */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={btn('source popup')} onClick={() => handleModeChange('source popup')}>Source Popup</button>
        <button style={btn('prescrub')}     onClick={() => handleModeChange('prescrub')}>Prescrub</button>
      </div>

      {/* Table + optional side panel */}
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ width: 692, flexShrink: 0 }}>
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
            sourcePopup={isSourcePopup}
            active={isSourcePopup && panelOpen}
            onRowClick={isSourcePopup ? () => setPanelOpen(true) : undefined}
            upCount={123}
            downCount={0}
            commentsCount={4}
          />
        </div>

        {isSourcePopup && panelOpen && (
          <div style={{ width: 400, height: 600, border: `1px solid ${colors.dividerSubtle}`, borderRadius: radii.box, overflow: 'hidden', flexShrink: 0 }}>
            <SidePanel
              docTitle="iv_fluids_chart_dec2025.pdf"
              onClose={() => setPanelOpen(false)}
              style={{ height: '100%', border: 'none' }}
            />
          </div>
        )}
      </div>
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
  render: () => <ToggleTable tableType="tube-feeding" title="Tube Feeding" sourceType="IV Fluids" rows={TUBE_ROWS} />,
}

const SURGERY_ROWS = [
  { name: 'Hip Replacement',          date: 'Orthopedics',   pages: [4] },
  { name: 'Knee Replacement',         date: 'Orthopedics',   pages: [7, 8] },
  { name: 'Appendectomy',             date: 'General',       pages: [2] },
  { name: 'Coronary Artery Bypass',   date: 'Cardiac',       pages: [9, 10, 11] },
  { name: 'Cholecystectomy',          date: 'General',       pages: [3] },
  { name: 'Colectomy',                date: 'General',       pages: [11] },
]

const DIAG_ROWS = [
  { name: 'Hypertension (High Blood Pressure)', dosage: 'Acute',              volume: 'IGHFP' },
  { name: 'Type 2 Diabetes Mellitus',           dosage: 'Chronic',            volume: 'IGHFP' },
  { name: 'Chronic Kidney Disease Stage 3',     dosage: 'Chronic',            volume: 'IGHFP' },
  { name: 'Heart Failure — Systolic',           dosage: 'Medical Management', volume: 'IGHFP' },
  { name: 'COPD — Moderate',                    dosage: 'Chronic',            volume: 'IGHFP' },
  { name: 'Atrial Fibrillation — Persistent',   dosage: 'Medical Management', volume: 'IGHFP' },
]

export const Surgery = {
  name: 'Surgery',
  render: () => <ToggleTable tableType="surgery" title="Surgery" sourceType="Medications" rows={SURGERY_ROWS} />,
}

export const Diagnosis = {
  name: 'Diagnosis',
  render: () => <ToggleTable tableType="diagnosis" title="Diagnosis" sourceType="Diagnosis" rows={DIAG_ROWS} />,
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
