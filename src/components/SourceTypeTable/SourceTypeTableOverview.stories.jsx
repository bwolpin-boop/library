import { SourceTypeTable } from './SourceTypeTable'

export default {
  title: '🟠   📁 sources/Source Type Table/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const lbl  = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '40px 0 8px' }}>
    {text}
  </div>
)

const common = {
  uploadedDate: '15/12/2025',
  docName: 'Diagnosis hospital_records file hypervention .pdf',
  upCount: 123, commentsCount: 4,
}

const IV_ROWS = [
  { name: 'Normal Saline (0.9% NaCl)',                    volume: '50 mL',  dosage: '80 mL/3x a day',   date: '15/04/2025', pageRef: 'pg. 1, 2, 3' },
  { name: "Lactated Ringer's (LR) / Hartmann's Solution", volume: '100 mL', dosage: '120 mL/2x a day',  date: '20/04/2025', pageRef: 'pg. 12' },
  { name: 'Plasma-Lyte',                                  volume: '50 mL',  dosage: '80 mL/3x a day',   date: '15/04/2025', pageRef: 'pg. 12' },
  { name: '0.45% Sodium Chloride (Half-Normal Saline)',   volume: '100 mL', dosage: '100 mL/4x a day',  date: '18/04/2025', pageRef: 'pg. 1, 2, 3' },
  { name: '5% Dextrose in Water (D5W)',                   volume: '50 mL',  dosage: '60 mL/2x a day',   date: '22/04/2025', pageRef: 'pg. 5' },
  { name: '3% or 5% Sodium Chloride (3% or 5% NaCl)',    volume: '100 mL', dosage: '80 mL/3x a day',   date: '15/04/2025', pageRef: 'pg. 1, 2, 3' },
  { name: 'Human Albumin',                                volume: '50 mL',  dosage: '50 mL/once daily', date: '17/04/2025', pageRef: 'pg. 8' },
  { name: 'Dextran',                                      volume: '100 mL', dosage: '100 mL/2x a day',  date: '20/04/2025', pageRef: 'pg. 12' },
]

const TUBE_ROWS = [
  { name: 'Central Venous Catheter (CVC)',                        amount: '240 mL', frequency: '3x a day',   date: '15/04/2025', pageRef: 'pg. 8' },
  { name: 'Peripherally Inserted Central Catheter (PICC line)',   amount: '180 mL', frequency: '4x a day',   date: '18/04/2025', pageRef: 'pg. 3' },
  { name: 'Implanted Port (Port-a-Cath)',                         amount: '300 mL', frequency: '2x a day',   date: '20/04/2025', pageRef: 'pg. 5' },
  { name: 'Peripheral IV Line',                                   amount: '120 mL', frequency: '6x a day',   date: '15/04/2025', pageRef: 'pg. 1, 2' },
  { name: 'TPN (Total Parenteral Nutrition)',                      amount: '1000 mL', frequency: 'continuous', date: '22/04/2025', pageRef: 'pg. 9' },
  { name: 'PPN (Partial Parenteral Nutrition)',                    amount: '500 mL', frequency: '2x a day',   date: '17/04/2025', pageRef: 'pg. 11' },
]

const SURGERY_ROWS = Array.from({ length: 5 }, (_, i) => ({
  name: 'Hip Replacement', volume: 'Elective', dosage: 'Right Hip Arthroplasty', date: '12/03/2025', pageRef: 'pg. 4',
}))

const LOREM = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas...'
const QUOTE = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.'
const AI    = 'The patient has a Stage 3 pressure wound of the left buttock coccyx, full thickness. The wound has a duration of 39 days, measures 0.36 x 0.62 x 0.1 cm.'

export const Overview = {
  render: () => (
    <div style={{ padding: 48, fontFamily: font, width: 692 }}>

      {lbl('IV Fluids — prescrub')}
      <SourceTypeTable tableType="iv-fluids" sourceType="IV Fluids" sourcePopup={false} rows={IV_ROWS} {...common} />

      {lbl('IV Fluids — source popup (auto-numbered)')}
      <SourceTypeTable tableType="iv-fluids" sourceType="IV Fluids" sourcePopup rows={IV_ROWS} {...common} />

      {lbl('Tube Feeding — prescrub')}
      <SourceTypeTable tableType="tube-feeding" sourceType="IV Fluids" sourcePopup={false} rows={TUBE_ROWS} {...common} />

      {lbl('Tube Feeding — source popup (auto-numbered)')}
      <SourceTypeTable tableType="tube-feeding" sourceType="IV Fluids" sourcePopup rows={TUBE_ROWS} {...common} />

      {lbl('Surgery — prescrub')}
      <SourceTypeTable tableType="surgery" sourceType="Documents" sourcePopup={false} rows={SURGERY_ROWS} {...common} />

      {lbl('Surgery — source popup (auto-numbered)')}
      <SourceTypeTable tableType="surgery" sourceType="Documents" sourcePopup rows={SURGERY_ROWS} {...common} />

      {lbl('Highlighted Text')}
      <SourceTypeTable tableType="highlighted-text" sourceType="Progress Notes" text={LOREM} {...common} />

      {lbl('Doc Quote')}
      <SourceTypeTable tableType="doc-quote" sourceType="Documents" text={QUOTE} {...common} />

      {lbl('AI Summary')}
      <SourceTypeTable tableType="ai-summary" sourceType="Assessments" aiTitle="AI-Generated Section M Summary" text={AI} {...common} />

    </div>
  ),
}
