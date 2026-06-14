import { QkNumberTabs } from './QkNumberTabs'

export default {
  title: '🟢   💊 IPA components/QK Number Tabs/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const sectionLabel = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
    {text}
  </div>
)
const rowLabel = (text) => (
  <div style={{ width: '80px', fontFamily: font, fontSize: '11px', fontWeight: 500, color: '#A3A3A3', flexShrink: 0 }}>{text}</div>
)
const stateHeader = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 500, color: '#A3A3A3', textAlign: 'center', minWidth: '80px' }}>{text}</div>
)

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px' }}>

      {/* Big */}
      <div>
        {sectionLabel('Big')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4px' }}>
            <div style={{ width: '80px' }} />
            {stateHeader('Default')}
            {stateHeader('Hover')}
            {stateHeader('Clicked')}
          </div>
          {['Default', 'verified', 'denied'].map(vd => (
            <div key={vd} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {rowLabel(vd)}
              <div style={{ minWidth: '80px', display: 'flex', justifyContent: 'center' }}>
                <QkNumberTabs label="M1200B" size="big" state="default" verifiedDenied={vd} />
              </div>
              <div style={{ minWidth: '80px', display: 'flex', justifyContent: 'center' }}>
                <QkNumberTabs label="M1200B" size="big" state="hover" verifiedDenied={vd} />
              </div>
              <div style={{ minWidth: '80px', display: 'flex', justifyContent: 'center' }}>
                <QkNumberTabs label="M1200B" size="big" state="clicked" verifiedDenied={vd} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small */}
      <div>
        {sectionLabel('Small')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4px' }}>
            <div style={{ width: '80px' }} />
            {stateHeader('Default')}
            {stateHeader('Clicked')}
          </div>
          {['Default', 'verified', 'denied'].map(vd => (
            <div key={vd} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {rowLabel(vd)}
              <div style={{ minWidth: '80px', display: 'flex', justifyContent: 'center' }}>
                <QkNumberTabs label="M1200B" size="small" state="default" verifiedDenied={vd} />
              </div>
              <div style={{ minWidth: '80px', display: 'flex', justifyContent: 'center' }}>
                <QkNumberTabs label="M1200B" size="small" state="clicked" verifiedDenied={vd} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
}
