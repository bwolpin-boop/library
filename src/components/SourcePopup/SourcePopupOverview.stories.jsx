import { SourcePopup } from './SourcePopup'

export default {
  title: '🟠   📁 sources/Source Popup/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const cards = [
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

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, background: '#f5f5f5' }}>
      <SourcePopup
        qCode="#K0520A2"
        questionTitle="IV Fluids in hospital"
        previousAnswer="1. Yes"
        hasLittleMan={true}
        cards={cards}
      />
    </div>
  ),
}
