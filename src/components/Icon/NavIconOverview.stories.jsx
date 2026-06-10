import { Fragment } from 'react'
import { NavIcon, iconNames } from './NavIcon'

export default {
  title: '🟢   😂 Icon/Nav Icons/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '140px 80px 80px', overflow: 'hidden' }}>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 16px', backgroundColor: '#F8F5FF' }}>Name</div>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', padding: '12px 8px', backgroundColor: '#F8F5FF' }}>24px</div>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center', padding: '12px 8px', backgroundColor: '#F8F5FF' }}>16px</div>
          {iconNames.map(name => (
            <Fragment key={name}>
              <div style={{ fontFamily: font, fontSize: '12px', fontWeight: 600, color: '#222', padding: '16px', borderTop: '1px solid #F0F0F0', display: 'flex', alignItems: 'center' }}>{name}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 8px', borderTop: '1px solid #F0F0F0' }}><NavIcon name={name} size={24} /></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 8px', borderTop: '1px solid #F0F0F0' }}><NavIcon name={name} size={16} /></div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  ),
}
