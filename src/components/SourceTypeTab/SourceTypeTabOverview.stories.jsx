import { Fragment } from 'react'
import { SourceTypeTab, sourceTypes } from './SourceTypeTab'

export default {
  title: '🟢   📮 Source Type Tabs/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const states = ['default', 'hover', 'while pressing', 'pressed']

const cardStyle = {
  border: '1.5px solid #E0D0FF',
  borderRadius: '12px',
  overflow: 'hidden',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '160px repeat(4, 1fr)',
}

const colHeaderStyle = {
  fontFamily: font,
  fontSize: '11px',
  fontWeight: 600,
  color: '#A3A3A3',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  textAlign: 'center',
  padding: '12px 8px',
  backgroundColor: '#F8F5FF',
}

const rowLabelStyle = {
  fontFamily: font,
  fontSize: '12px',
  fontWeight: 600,
  color: '#222',
  padding: '12px 16px',
  borderTop: '1px solid #F0F0F0',
  display: 'flex',
  alignItems: 'center',
}

const cellStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 8px',
  borderTop: '1px solid #F0F0F0',
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ fontFamily: font, fontSize: '14px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>All States — Big</div>
        <div style={cardStyle}>
          <div style={gridStyle}>
            <div style={{ ...colHeaderStyle, textAlign: 'left', paddingLeft: '16px' }} />
            {states.map(s => <div key={s} style={colHeaderStyle}>{s}</div>)}
            {sourceTypes.slice(0, 8).map(type => (
              <Fragment key={type}>
                <div style={rowLabelStyle}>{type}</div>
                {states.map(state => (
                  <div key={state} style={cellStyle}>
                    <SourceTypeTab type={type} size="big" state={state} />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontFamily: font, fontSize: '14px', fontWeight: 700, color: '#222', marginBottom: '12px' }}>All States — Small</div>
        <div style={cardStyle}>
          <div style={gridStyle}>
            <div style={{ ...colHeaderStyle, textAlign: 'left', paddingLeft: '16px' }} />
            {states.map(s => <div key={s} style={colHeaderStyle}>{s}</div>)}
            {sourceTypes.slice(0, 8).map(type => (
              <Fragment key={type}>
                <div style={rowLabelStyle}>{type}</div>
                {states.map(state => (
                  <div key={state} style={cellStyle}>
                    <SourceTypeTab type={type} size="small" state={state} />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

    </div>
  ),
}
