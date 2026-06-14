import { SourcePopup, SourceCard } from './SourcePopup'

export default {
  title: '🟠   📁 sources/Source Popup',
  component: SourcePopup,
  args: {
    qCode: '#K0520A2',
    questionTitle: 'IV Fluids in hospital',
    previousAnswer: '1. Yes',
    hasLittleMan: true,
  },
  argTypes: {
    hasLittleMan: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px', background: '#f5f5f5' }}><Story /></div>],
}

const SAMPLE_CARDS = [
  {
    sourceType:   'Documents',
    uploadDate:   '15/12/2025',
    pdfTitle:     'Diagnosis hospital_records file hypervention .pdf',
    commentCount: 4,
  },
  {
    sourceType:   'Documents',
    uploadDate:   '15/12/2025',
    pdfTitle:     'Progress notes patient_history_2024_full.pdf',
    commentCount: 2,
  },
  {
    sourceType:   'Documents',
    uploadDate:   '10/11/2025',
    pdfTitle:     'Vitals report.pdf',
    commentCount: 0,
  },
]

export const Default    = { args: { cards: SAMPLE_CARDS } }
export const NoLittleMan = { args: { cards: SAMPLE_CARDS, hasLittleMan: false } }

export const SingleCard = {
  render: () => (
    <div style={{ padding: '32px', background: '#f5f5f5' }}>
      <SourceCard
        sourceType="Documents"
        uploadDate="15/12/2025"
        pdfTitle="Diagnosis hospital_records file hypervention .pdf"
        commentCount={4}
      />
    </div>
  ),
}
