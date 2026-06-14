import { SourceTypeTabs } from './SourceTypeTabs'
import { sourceTypes } from './SourceTypeTab'

const sampleTabs = [
  'Progress Notes', 'Assessments', 'Mars', 'Therapy Docs',
  'Medications', 'Documents', 'Immunization', 'Lab Results',
]

export default {
  title: '🟢   📮 Source Type Tabs/SourceTypeTabs',
  component: SourceTypeTabs,
  decorators: [(Story) => <div style={{ maxWidth: 600, padding: 24 }}><Story /></div>],
  args: {
    tabs: sampleTabs,
    selectedTab: null,
    size: 'big',
    tabWithArrows: null,
  },
  argTypes: {
    tabs: { control: 'object' },
    selectedTab: { control: 'select', options: [null, 'All', ...sampleTabs] },
    size: { control: 'select', options: ['big', 'small'] },
    tabWithArrows: { control: 'select', options: [null, ...sampleTabs] },
  },
}

export const Default = {}
export const AllSelected = { args: { selectedTab: 'All' } }
export const TabSelected = { args: { selectedTab: 'Assessments', tabWithArrows: 'Assessments' } }
export const Small = { args: { size: 'small' } }
export const SmallTabSelected = { args: { size: 'small', selectedTab: 'Mars' } }
export const FewTabs = { args: { tabs: ['Progress Notes', 'Mars'] } }
export const AllTypes = { args: { tabs: sourceTypes } }
