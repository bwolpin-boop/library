import { VerifyAndDeny } from './VerifyAndDeny'

export default {
  title: '🟢   😂 Icon/Verify and Deny/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const ROW = { display: 'flex', alignItems: 'center', gap: '8px' }
const label = (t) => <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', width: '100px' }}>{t}</div>

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '24px' }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Big (24px)</div>

        {['verify', 'deny', 'pending'].map(type => (
          <div key={type} style={ROW}>
            {label(type)}
            <VerifyAndDeny type={type} />
            <VerifyAndDeny type={type} forceState="hover"   />
            <VerifyAndDeny type={type} forceState="clicked" />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Small (12px)</div>
        <div style={ROW}>
          {['verify', 'deny', 'pending', 'empty'].map(type => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <VerifyAndDeny type={type} size="small" />
              <span style={{ fontFamily: font, fontSize: '10px', color: '#A3A3A3' }}>{type}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
}
