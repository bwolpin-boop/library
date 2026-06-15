import { SidePanel } from './SidePanel'

export default {
  title: '🟠   📁 sources/Side Panel',
  component: SidePanel,
  args: {
    sourceType:  'IV Fluids',
    uploadedDate: '15/12/2025',
    docName:     'iv_fluids_chart_dec2025.pdf',
  },
  argTypes: {
    sourceType: { control: 'select', options: ['IV Fluids', 'Progress Notes', 'Assessments', 'Mars', 'Medications'] },
  },
  decorators: [(Story) => (
    <div style={{ position: 'relative', width: 400, height: 500, border: '1px solid #E7E7E7', borderRadius: 10, overflow: 'hidden' }}>
      <Story />
    </div>
  )],
}

export const Default = {}
export const ProgressNotes = { args: { sourceType: 'Progress Notes', docName: 'progress_notes_dec_2025.pdf' } }
