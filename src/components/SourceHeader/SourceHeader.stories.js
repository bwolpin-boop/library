import { SourceHeader } from './SourceHeader'

export default {
  title: '🟠   📁 sources/Source Header',
  component: SourceHeader,
  args: {
    sourceType:   'IV Fluids',
    uploadedDate: '15/12/2025',
    docName:      'IV blabla .pdf',
    tabs:         ['M1200B', 'M1201A', 'M1202C'],
    activeTabIndex: 0,
    strengthLabel:  'Strong',
  },
  argTypes: {
    type:       { control: 'select', options: ['sources', 'ipa', 'prescrub'] },
    sourceType: { control: 'select', options: ['IV Fluids', 'Progress Notes', 'Documents', 'Medications', 'Vitals', 'Lab Results', 'Diagnosis', 'Assessments'] },
  },
  decorators: [(Story) => <div style={{ width: 712 }}><Story /></div>],
}

export const Sources  = { args: { type: 'sources' } }
export const Ipa      = { args: { type: 'ipa',     docName: undefined } }
export const Prescrub = { args: { type: 'prescrub', docName: undefined } }
export const SourcesNoDocName = { name: 'Sources — no doc name', args: { type: 'sources', docName: undefined } }
