import { useState } from 'react'
import { SidePanel } from './SidePanel'

export default {
  title: '🟠   📁 sources/Side Panel/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

// ─── Shared table data ────────────────────────────────────────────────────────

const PROGRESS_NOTE = {
  sourceType:   'Progress Notes',
  tableType:    'highlighted-text',
  uploadedDate: '15/12/2025',
  docName:      'progress_notes_dec_2025.pdf',
  text:         'The patient presented with elevated blood pressure readings of 145/92 mmHg on three consecutive visits. Family history positive for hypertension. Patient reports occasional headaches and fatigue.',
}

const DOC = {
  sourceType:   'Progress Notes',
  tableType:    'doc-quote',
  uploadedDate: '10/12/2025',
  docName:      'progress_notes_dec_2025_b.pdf',
  text:         'Patient continues to require 50 mL/hr continuous IV fluid replacement. Sodium levels trending toward normal range.',
  isQuote:      true,
}

const IV_FLUIDS = {
  sourceType:   'IV Fluids',
  tableType:    'iv-fluids',
  uploadedDate: '15/12/2025',
  docName:      'iv_fluids_chart_dec2025.pdf',
  rows: [
    { name: 'Normal Saline (0.9% NaCl)',   volume: '50 mL',  dosage: '80 mL/3x a day',  date: '15/04/2025', pages: [12] },
    { name: 'Lactated Ringer\'s Solution', volume: '100 mL', dosage: '120 mL/2x a day', date: '20/04/2025', pages: [13, 14] },
    { name: 'Plasma-Lyte',                 volume: '50 mL',  dosage: '80 mL/3x a day',  date: '15/04/2025', pages: [15] },
  ],
}

const ASSESSMENTS = {
  sourceType:   'Assessments',
  tableType:    'doc-quote',
  uploadedDate: '14/12/2025',
  docName:      'mds_assessment_q4_2025.pdf',
  text:         'Patient scored 3/15 on the MDS cognitive performance scale. Short-term memory deficits noted. Requires verbal cueing for daily activities.',
  isQuote:      true,
}

const MARS = {
  sourceType:   'Mars',
  tableType:    'iv-fluids',
  uploadedDate: '13/12/2025',
  docName:      'medication_administration_dec2025.pdf',
  rows: [
    { name: 'Lisinopril 10mg',   volume: '1 tab', dosage: 'Once daily',    date: '15/12/2025', pages: [1] },
    { name: 'Metformin 500mg',   volume: '1 tab', dosage: 'Twice daily',   date: '15/12/2025', pages: [2] },
  ],
}

// ─── Variant definitions ──────────────────────────────────────────────────────

const VARIANTS = [
  {
    id: 'prescrub',
    label: 'Prescrub',
    props: {
      docTitle:             'iv_fluids_chart_dec2025.pdf',
      sourceCount:          8,
      commentCount:         0,
      showPrimaryDiagnosis: false,
      showAiSummary:        false,
      tables:               [IV_FLUIDS],
    },
  },
  {
    id: 'source-popup',
    label: 'Source Popup',
    props: {
      docTitle:             'HOW Bridgeview.pdf',
      sourceCount:          23,
      commentCount:         4,
      showPrimaryDiagnosis: true,
      showAiSummary:        true,
      tables:               [PROGRESS_NOTE, IV_FLUIDS, ASSESSMENTS],
    },
  },
  {
    id: 'empty',
    label: 'Empty State',
    props: {
      docTitle:             'HOW Bridgeview.pdf',
      sourceCount:          0,
      commentCount:         0,
      showPrimaryDiagnosis: false,
      showAiSummary:        false,
      tables:               [],
    },
  },
  {
    id: 'comments',
    label: 'Comments',
    props: {
      docTitle:             'HOW Bridgeview.pdf',
      sourceCount:          23,
      commentCount:         4,
      initialActiveTab:     'comments',
      showPrimaryDiagnosis: false,
      showAiSummary:        false,
      tables:               [PROGRESS_NOTE, DOC],
    },
  },
  {
    id: 'thread',
    label: 'Thread',
    props: {
      docTitle:             'progress_notes_dec_2025.pdf',
      sourceCount:          5,
      commentCount:         12,
      initialActiveTab:     'comments',
      showPrimaryDiagnosis: false,
      showAiSummary:        false,
      tables:               [PROGRESS_NOTE],
    },
  },
  {
    id: 'one-source',
    label: '1 Source Type',
    props: {
      docTitle:             'mds_assessment_q4_2025.pdf',
      sourceCount:          3,
      commentCount:         1,
      showPrimaryDiagnosis: false,
      showAiSummary:        false,
      tables:               [ASSESSMENTS],
    },
  },
  {
    id: 'many-sources',
    label: 'Many Source Types',
    props: {
      docTitle:             'HOW Bridgeview.pdf',
      sourceCount:          42,
      commentCount:         7,
      showPrimaryDiagnosis: true,
      showAiSummary:        true,
      tables:               [PROGRESS_NOTE, DOC, IV_FLUIDS, ASSESSMENTS, MARS],
    },
  },
  {
    id: 'only-doc',
    label: 'Only a Doc',
    props: {
      docTitle:             'progress_notes_dec_2025_b.pdf',
      sourceCount:          1,
      commentCount:         2,
      showPrimaryDiagnosis: false,
      showAiSummary:        false,
      tables:               [DOC],
    },
  },
  {
    id: 'only-progress',
    label: 'Only a Progress Note',
    props: {
      docTitle:             'progress_notes_dec_2025.pdf',
      sourceCount:          1,
      commentCount:         0,
      showPrimaryDiagnosis: false,
      showAiSummary:        false,
      tables:               [PROGRESS_NOTE],
    },
  },
]

// ─── Toggle pill button ───────────────────────────────────────────────────────

function Pill({ label, active, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding:      '4px 12px',
        borderRadius: '100px',
        border:       `1px solid ${active ? '#222' : '#d9d9d9'}`,
        background:   active ? '#222' : (hov ? '#f5f5f5' : '#fff'),
        color:        active ? '#fff' : '#222',
        cursor:       'pointer',
        fontSize:     '12px',
        fontFamily:   '"Montserrat", sans-serif',
        fontWeight:   active ? 600 : 400,
        whiteSpace:   'nowrap',
        transition:   'all 0.1s',
      }}
    >
      {label}
    </button>
  )
}

// ─── Overview story ───────────────────────────────────────────────────────────

export const Overview = {
  render: () => {
    const [selected, setSelected] = useState('prescrub')
    const variant = VARIANTS.find(v => v.id === selected)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 24, background: '#f5f5f5', minHeight: '100vh' }}>

        {/* Toggle pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {VARIANTS.map(v => (
            <Pill
              key={v.id}
              label={v.label}
              active={selected === v.id}
              onClick={() => setSelected(v.id)}
            />
          ))}
        </div>

        {/* SidePanel — key resets internal state when variant changes */}
        <div style={{ width: 636, height: 820, borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
          <SidePanel key={selected} {...variant.props} />
        </div>

      </div>
    )
  },
}
