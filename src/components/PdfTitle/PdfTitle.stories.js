import React from 'react'
import { PdfTitle } from './PdfTitle'

export default {
  title: '🟠   📁 sources/PDF Title',
  component: PdfTitle,
  args: {
    title: 'Diagnosis hospital_records file hypervention .pdf',
  },
  argTypes: {
    title: { control: 'text' },
  },
  decorators: [(Story) => React.createElement('div', { style: { width: 692 } }, React.createElement(Story))],
}

export const Default   = {}
export const LongTitle = { args: { title: 'Progress Notes patient_history_2024_full_evaluation_report_extended_version.pdf' } }
export const Short     = { args: { title: 'Vitals report.pdf' } }
