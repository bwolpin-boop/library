import { PdfTitle } from './PdfTitle'

export default {
  title: '🟢   💊 IPA components/PDF Title',
  component: PdfTitle,
  args: {
    title: 'Diagnosis hospital_records file hypervention .pdf',
  },
  argTypes: {
    title: { control: 'text' },
  },
  decorators: [(Story) => <div style={{ width: 692 }}><Story /></div>],
}

export const Default   = {}
export const LongTitle = { args: { title: 'Progress Notes patient_history_2024_full_evaluation_report_extended_version.pdf' } }
export const Short     = { args: { title: 'Vitals report.pdf' } }
