import { Fragment } from 'react'
import { Status } from './Status'

export default {
  title: '🟢   📮 Status/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const statuses = ['pending', 'verified', 'dismissed', 'complete', 'combi-pending', 'combi-verified', 'combi-dismissed']

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px 140px 140px', overflow: 'hidden' }}>

          {['Status', 'Default', 'Small'].map((label, i) => (
            <div key={label} style={{
              fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3',
              textTransform: 'uppercase', letterSpacing: '0.05em',
              padding: '12px 16px', backgroundColor: '#F8F5FF',
              borderLeft: i > 0 ? '1px solid #F0F0F0' : 'none',
            }}>
              {label}
            </div>
          ))}

          {statuses.map(status => (
            <Fragment key={status}>
              <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 500, color: '#A3A3A3', padding: '16px', borderTop: '1px solid #F0F0F0', display: 'flex', alignItems: 'center' }}>
                {status}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', borderTop: '1px solid #F0F0F0', borderLeft: '1px solid #F0F0F0' }}>
                <Status status={status} size="default" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', borderTop: '1px solid #F0F0F0', borderLeft: '1px solid #F0F0F0' }}>
                <Status status={status} size="small" />
              </div>
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  ),
}
