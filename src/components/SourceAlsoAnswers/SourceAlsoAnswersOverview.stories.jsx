import { SourceAlsoAnswers } from './SourceAlsoAnswers'

export default {
  title: '🟠   📁 sources/Source Also Answers/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const sectionLabel = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
    {text}
  </div>
)
const rowLabel = (text) => (
  <div style={{ width: '100px', fontFamily: font, fontSize: '11px', fontWeight: 500, color: '#A3A3A3', flexShrink: 0 }}>{text}</div>
)

const TABS = ['M1200B', 'M1201A', 'M1202C']
const TABS_MANY = ['M1200B', 'M1201A', 'M1202C', 'M1203D', 'M1204E']

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px' }}>

      {/* Source popup */}
      <div>
        {sectionLabel('Source Popup')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {rowLabel('With text')}
            <SourceAlsoAnswers type="Source popup" hasText hasVerifyAndDeny tabs={TABS} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {rowLabel('No text')}
            <SourceAlsoAnswers type="Source popup" hasText={false} hasVerifyAndDeny tabs={TABS} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {rowLabel('No verify')}
            <SourceAlsoAnswers type="Source popup" hasText hasVerifyAndDeny={false} tabs={TABS} />
          </div>
        </div>
      </div>

      {/* Source popup scrollable */}
      <div>
        {sectionLabel('Source Popup — Scrollable')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {rowLabel('With verify')}
            <SourceAlsoAnswers type="Source popup" hasVerifyAndDeny qkScroll tabs={TABS_MANY} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {rowLabel('No verify')}
            <SourceAlsoAnswers type="Source popup" hasVerifyAndDeny={false} qkScroll tabs={TABS_MANY} />
          </div>
        </div>
      </div>

      {/* IPA */}
      <div>
        {sectionLabel('IPA')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {rowLabel('With verify')}
            <SourceAlsoAnswers type="IPA" hasVerifyAndDeny strengthLabel="Strong" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {rowLabel('No verify')}
            <SourceAlsoAnswers type="IPA" hasVerifyAndDeny={false} strengthLabel="Strong" />
          </div>
        </div>
      </div>

    </div>
  ),
}
