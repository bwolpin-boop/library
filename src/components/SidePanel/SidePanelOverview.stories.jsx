// SidePanel/Overview redirects to PccSidePanel — the actual Figma component.
// SidePanel.jsx is a low-level shell; PccSidePanel is the full implementation.
import { PccSidePanel } from '../PccSidePanel/PccSidePanel'

export default {
  title: '🟠   📁 sources/Side Panel/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const TABLES = [
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
    text:         'Patient scored 3/15 on the MDS cognitive performance scale. Short-term memory deficits noted.',
    isQuote:      true,
  },
]

export const Overview = {
  render: () => (
    <div style={{ fontFamily: font, display: 'flex', gap: 48, padding: 40, background: '#f5f5f5', alignItems: 'flex-start' }}>
      <div style={{ width: 636, height: 900 }}>
        <PccSidePanel
          docTitle="HOW Bridgeview.pdf"
          sourceCount={23}
          commentCount={4}
          showPrimaryDiagnosis
          showAiSummary
          tables={TABLES}
        />
      </div>
      <div style={{ width: 636, height: 900 }}>
        <PccSidePanel
          docTitle="Progress_notes_jan2025.pdf"
          sourceCount={4}
          commentCount={2}
          showPrimaryDiagnosis={false}
          showAiSummary={false}
          tables={TABLES.slice(0, 2)}
        />
      </div>
    </div>
  ),
}
