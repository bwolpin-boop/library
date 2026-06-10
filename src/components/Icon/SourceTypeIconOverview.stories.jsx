import { Fragment } from 'react'
import { SourceTypeIcon, sourceTypeIconNames } from './SourceTypeIcon'

export default {
  title: '🟢   😂 Icon/Source Type Icons/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 80px 60px' }}>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 16px', backgroundColor: '#F8F5FF' }}>Type</div>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', padding: '12px 8px', backgroundColor: '#F8F5FF' }}>24px</div>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', padding: '12px 8px', backgroundColor: '#F8F5FF' }}>16px</div>
          {sourceTypeIconNames.map(type => (
            <Fragment key={type}>
              <div style={{ fontFamily: font, fontSize: '12px', fontWeight: 600, color: '#222', padding: '12px 16px', borderTop: '1px solid #F0F0F0', display: 'flex', alignItems: 'center' }}>{type}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 8px', borderTop: '1px solid #F0F0F0' }}><SourceTypeIcon type={type} size={24} /></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 8px', borderTop: '1px solid #F0F0F0' }}><SourceTypeIcon type={type} size={16} /></div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  ),
}
