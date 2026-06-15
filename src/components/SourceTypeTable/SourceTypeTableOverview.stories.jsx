import { useState } from 'react'
import { SourceTypeTable } from './SourceTypeTable'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

export default {
  title: '🟠   📁 sources/Source Type Table/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font   = '"Montserrat", sans-serif'
const common = { uploadedDate: '15/12/2025', docName: 'Diagnosis hospital_records file hypervention .pdf', upCount: 123, commentsCount: 4 }

const IV_ROWS = [
  { name: 'Normal Saline (0.9% NaCl)',                    volume: '50 mL',  dosage: '80 mL/3x a day',   date: '15/04/2025', pageRef: 'pg. 1, 2, 3', hasMorePages: true, upVotes: 5 },
  { name: "Lactated Ringer's (LR) / Hartmann's Solution", volume: '100 mL', dosage: '120 mL/2x a day',  date: '20/04/2025', pageRef: 'pg. 12' },
  { name: 'Plasma-Lyte',                                  volume: '50 mL',  dosage: '80 mL/3x a day',   date: '15/04/2025', pageRef: 'pg. 12',       downVotes: 2 },
  { name: '0.45% Sodium Chloride (Half-Normal Saline)',   volume: '100 mL', dosage: '100 mL/4x a day',  date: '18/04/2025', pageRef: 'pg. 1, 2, 3', hasMorePages: true, upVotes: 12 },
  { name: '5% Dextrose in Water (D5W)',                   volume: '50 mL',  dosage: '60 mL/2x a day',   date: '22/04/2025', pageRef: 'pg. 5' },
  { name: '3% or 5% Sodium Chloride (3% or 5% NaCl)',    volume: '100 mL', dosage: '80 mL/3x a day',   date: '15/04/2025', pageRef: 'pg. 1, 2, 3', hasMorePages: true, downVotes: 3 },
  { name: 'Human Albumin',                                volume: '50 mL',  dosage: '50 mL/once daily', date: '17/04/2025', pageRef: 'pg. 8',        upVotes: 8 },
  { name: 'Dextran',                                      volume: '100 mL', dosage: '100 mL/2x a day',  date: '20/04/2025', pageRef: 'pg. 12' },
]

const TUBE_ROWS = [
  { name: 'Central Venous Catheter (CVC)',                      amount: '240 mL',  frequency: '3x a day',   date: '15/04/2025', pageRef: 'pg. 8' },
  { name: 'Peripherally Inserted Central Catheter (PICC line)', amount: '180 mL',  frequency: '4x a day',   date: '18/04/2025', pageRef: 'pg. 3' },
  { name: 'Implanted Port (Port-a-Cath)',                       amount: '300 mL',  frequency: '2x a day',   date: '20/04/2025', pageRef: 'pg. 5' },
  { name: 'Peripheral IV Line',                                 amount: '120 mL',  frequency: '6x a day',   date: '15/04/2025', pageRef: 'pg. 1, 2' },
  { name: 'TPN (Total Parenteral Nutrition)',                   amount: '1000 mL', frequency: 'continuous',  date: '22/04/2025', pageRef: 'pg. 9' },
  { name: 'PPN (Partial Parenteral Nutrition)',                 amount: '500 mL',  frequency: '2x a day',   date: '17/04/2025', pageRef: 'pg. 11' },
  { name: 'Midline Catheter',                                   amount: '250 mL',  frequency: '3x a day',   date: '19/04/2025', pageRef: 'pg. 6' },
  { name: 'Tunneled Catheter (Hickman)',                        amount: '400 mL',  frequency: 'continuous',  date: '21/04/2025', pageRef: 'pg. 14' },
]

const SURGERY_ROWS = [
  { name: 'Hip Replacement',          volume: 'Elective',   dosage: 'Right Hip Arthroplasty',          date: '12/03/2025', pageRef: 'pg. 4' },
  { name: 'Knee Replacement',         volume: 'Elective',   dosage: 'Left Total Knee Arthroplasty',    date: '15/03/2025', pageRef: 'pg. 7' },
  { name: 'Appendectomy',             volume: 'Emergency',  dosage: 'Laparoscopic',                    date: '20/03/2025', pageRef: 'pg. 2' },
  { name: 'Coronary Artery Bypass',   volume: 'Elective',   dosage: 'Triple Bypass Grafting',          date: '05/03/2025', pageRef: 'pg. 9' },
  { name: 'Cholecystectomy',          volume: 'Elective',   dosage: 'Laparoscopic',                    date: '10/03/2025', pageRef: 'pg. 3' },
  { name: 'Colectomy',                volume: 'Urgent',     dosage: 'Partial Right Hemicolectomy',     date: '18/03/2025', pageRef: 'pg. 11' },
  { name: 'Laminectomy',              volume: 'Elective',   dosage: 'L4-L5 Decompression',             date: '22/03/2025', pageRef: 'pg. 5' },
  { name: 'Cataract Extraction',      volume: 'Elective',   dosage: 'Phacoemulsification Right Eye',   date: '25/03/2025', pageRef: 'pg. 1' },
]

const DIAG_ROWS = [
  { name: 'Hypertension',              volume: 'I10',    dosage: 'Chronic',      date: '10/01/2025', pageRef: 'pg. 1' },
  { name: 'Type 2 Diabetes',           volume: 'E11.9',  dosage: 'Controlled',   date: '10/01/2025', pageRef: 'pg. 2' },
  { name: 'Chronic Kidney Disease',    volume: 'N18.3',  dosage: 'Stage 3',      date: '12/01/2025', pageRef: 'pg. 3' },
  { name: 'Heart Failure',             volume: 'I50.9',  dosage: 'Systolic',     date: '14/01/2025', pageRef: 'pg. 4' },
  { name: 'COPD',                      volume: 'J44.1',  dosage: 'Moderate',     date: '15/01/2025', pageRef: 'pg. 5' },
  { name: 'Atrial Fibrillation',       volume: 'I48.91', dosage: 'Persistent',   date: '16/01/2025', pageRef: 'pg. 6' },
  { name: 'Osteoporosis',              volume: 'M81.0',  dosage: 'Post-menopausal', date: '18/01/2025', pageRef: 'pg. 7' },
  { name: 'Hypothyroidism',            volume: 'E03.9',  dosage: 'Unspecified',  date: '20/01/2025', pageRef: 'pg. 8' },
]

const LOREM = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.'
const QUOTE = 'The patient presented with elevated blood pressure readings consistently above 140/90 mmHg over a period of three weeks.'
const AI    = 'The patient has a Stage 3 pressure wound of the left buttock coccyx, full thickness. The wound has a duration of 39 days, measures 0.36 x 0.62 x 0.1 cm with a surface area of 0.22 cm².'

// ─── Shared toggle component ─────────────────────────────────────────────────

function ToggleTable({ label, tableType, sourceType, rows, text, aiTitle, isQuote }) {
  const [mode, setMode] = useState('source popup')

  const btn = (m) => ({
    fontFamily:   fonts.montserrat,
    fontSize:     fontSizes.xs,
    fontWeight:   mode === m ? fontWeights.semibold : fontWeights.regular,
    padding:      '3px 10px',
    borderRadius: radii.rounded,
    border:       `1px solid ${mode === m ? colors.primary : colors.dividerSubtle}`,
    background:   mode === m ? colors.primary : colors.white,
    color:        mode === m ? colors.white : colors.primary,
    cursor:       'pointer',
    transition:   'all 0.1s',
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label}
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button style={btn('source popup')} onClick={() => setMode('source popup')}>Source Popup</button>
          <button style={btn('prescrub')}     onClick={() => setMode('prescrub')}>Prescrub</button>
        </div>
      </div>
      <SourceTypeTable
        tableType={tableType}
        sourceType={sourceType}
        rows={rows}
        text={text}
        aiTitle={aiTitle}
        isQuote={isQuote}
        sourcePopup={mode === 'source popup'}
        {...common}
      />
    </div>
  )
}

// ─── Overview ─────────────────────────────────────────────────────────────────

export const Overview = {
  render: () => (
    <div style={{ padding: 48, fontFamily: font, width: 740 }}>
      <ToggleTable label="IV Fluids"      tableType="iv-fluids"        sourceType="IV Fluids"      rows={IV_ROWS} />
      <ToggleTable label="Tube Feeding"   tableType="tube-feeding"     sourceType="IV Fluids"      rows={TUBE_ROWS} />
      <ToggleTable label="Surgery"        tableType="surgery"          sourceType="Medications"    rows={SURGERY_ROWS} />
      <ToggleTable label="Diagnosis"      tableType="diagnosis"        sourceType="Diagnosis"      rows={DIAG_ROWS} />
      <ToggleTable label="Progress Notes" tableType="highlighted-text" sourceType="Progress Notes" text={LOREM} />
      <ToggleTable label="Doc Quote"      tableType="doc-quote"        sourceType="Documents"      text={QUOTE} isQuote />
      <ToggleTable label="AI Summary"     tableType="ai-summary"       sourceType="Assessments"    aiTitle="AI-Generated Section M Summary" text={AI} />
    </div>
  ),
}
