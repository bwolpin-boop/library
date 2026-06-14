import { SourceTypeTabs } from './SourceTypeTabs'

export default {
  title: '🟢   📮 Source Type Tabs/SourceTypeTabs/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const sampleTabs = ['Progress Notes', 'Assessments', 'Mars', 'Therapy Docs', 'Medications', 'Documents', 'Lab Results']

const sectionLabel = (text) => ({
  fontFamily: font,
  fontSize: '14px',
  fontWeight: 700,
  color: '#222',
  marginBottom: '12px',
})

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: 640 }}>

      <div>
        <div style={sectionLabel()}>Big — No selection</div>
        <SourceTypeTabs tabs={sampleTabs} size="big" />
      </div>

      <div>
        <div style={sectionLabel()}>Big — Tab selected (with page arrows)</div>
        <SourceTypeTabs tabs={sampleTabs} size="big" selectedTab="Assessments" tabWithArrows="Assessments" />
      </div>

      <div>
        <div style={sectionLabel()}>Big — All selected</div>
        <SourceTypeTabs tabs={sampleTabs} size="big" selectedTab="All" />
      </div>

      <div>
        <div style={sectionLabel()}>Small — No selection</div>
        <SourceTypeTabs tabs={sampleTabs} size="small" />
      </div>

      <div>
        <div style={sectionLabel()}>Small — Tab selected (with page arrows)</div>
        <SourceTypeTabs tabs={sampleTabs} size="small" selectedTab="Assessments" tabWithArrows="Assessments" />
      </div>

      <div>
        <div style={sectionLabel()}>Small — All selected</div>
        <SourceTypeTabs tabs={sampleTabs} size="small" selectedTab="All" />
      </div>

    </div>
  ),
}
