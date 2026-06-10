import { Fragment } from 'react'
import { IndicatorDolphin } from './IndicatorDolphin'

export default {
  title: 'Components/Icon/Indicator Dolphin/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const types = [
  'source found',
  'missed',
  'accepted',
  'dismissed',
  'non aplicable',
  'same as previous MDS',
  'indicator source',
  'assessment needed',
]

const cardStyle = {
  border: '1.5px solid #E0D0FF',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'inline-block',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '180px 100px 100px',
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
  color: '#222222',
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  borderTop: '1px solid #F0F0F0',
}

const cellStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 8px',
  borderTop: '1px solid #F0F0F0',
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={cardStyle}>
        <div style={gridStyle}>
          <div style={{ ...colHeaderStyle, textAlign: 'left', paddingLeft: '16px' }} />
          <div style={colHeaderStyle}>Small</div>
          <div style={colHeaderStyle}>Big</div>
          {types.map(type => (
            <Fragment key={type}>
              <div style={rowLabelStyle}>{type}</div>
              <div style={cellStyle}><IndicatorDolphin type={type} size="small" /></div>
              <div style={cellStyle}><IndicatorDolphin type={type} size="big" /></div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  ),
}
