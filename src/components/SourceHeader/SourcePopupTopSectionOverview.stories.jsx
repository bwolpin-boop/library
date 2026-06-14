import { SourcePopupTopSection } from './SourcePopupTopSection'

export default {
  title: '🟠   📁 sources/Source Popup Top Section/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const TABS = [
  { label: 'All' },
  { label: 'Progress Notes', sourceType: 'Progress Notes' },
  { label: 'Assessments',    sourceType: 'Assessments', selected: true },
  { label: 'Mars',           sourceType: 'Mars' },
  { label: 'Therapy Docs',   sourceType: 'Therapy Docs' },
  { label: 'Progress Notes', sourceType: 'Progress Notes' },
]
const baseProps = { qCode: '#K0520A2', questionTitle: 'IV Fluids in hospital', previousAnswer: '1. Yes', sourceTabs: TABS }

const sectionLabel = (t) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', marginTop: '32px' }}>{t}</div>
)

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      {sectionLabel('Default (full)')}
      <div style={{ width: 874, border: '1px dashed #E7E7E7', borderRadius: 8, padding: '24px' }}>
        <SourcePopupTopSection {...baseProps} size="Default" hasLittleMan />
      </div>

      {sectionLabel('Small')}
      <div style={{ width: 874, border: '1px dashed #E7E7E7', borderRadius: 8, padding: '24px' }}>
        <SourcePopupTopSection {...baseProps} size="small" hasLittleMan />
      </div>

      {sectionLabel('No DC Suggests')}
      <div style={{ width: 874, border: '1px dashed #E7E7E7', borderRadius: 8, padding: '24px' }}>
        <SourcePopupTopSection {...baseProps} size="Default" hasLittleMan={false} />
      </div>

      {sectionLabel('With Assign & Calendar')}
      <div style={{ width: 874, border: '1px dashed #E7E7E7', borderRadius: 8, padding: '24px' }}>
        <SourcePopupTopSection {...baseProps} size="Default" hasLittleMan assignAndCalendar />
      </div>
    </div>
  ),
}
