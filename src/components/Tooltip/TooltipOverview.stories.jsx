import { Fragment } from 'react'
import { Tooltip } from './Tooltip'

export default {
  title: '🟢   🏷 Tooltip/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const cols = ['left', 'right', 'down', 'up']

const rows = [
  { key: 'light-long',  modeLabel: 'Light', textLabel: 'Long',  mode: 'light', text: 'This tooltip wraps across multiple lines to show longer content', maxWidth: '220px' },
  { key: 'light-short', modeLabel: 'Light', textLabel: 'Short', mode: 'light', text: 'word' },
  { key: 'dark-long',   modeLabel: 'Dark',  textLabel: 'Long',  mode: 'dark',  text: 'This tooltip wraps across multiple lines to show longer content', maxWidth: '220px' },
  { key: 'dark-short',  modeLabel: 'Dark',  textLabel: 'Short', mode: 'dark',  text: 'word' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font }}>
      <div style={{
        display: 'inline-grid',
        gridTemplateColumns: '90px repeat(4, 280px)',
        border: '1.5px solid #E0D0FF',
        borderRadius: '12px',
        overflow: 'visible',
        background: 'white',
        boxShadow: '0 0 0 1.5px #E0D0FF',
      }}>
        {/* Column headers */}
        {['', ...cols.map(c => c.charAt(0).toUpperCase() + c.slice(1))].map((label, i) => (
          <div key={i} style={{
            background: '#F8F5FF',
            borderBottom: '1px solid #F0F0F0',
            borderLeft: i > 0 ? '1px solid #F0F0F0' : 'none',
            borderRadius: i === 0 ? '10px 0 0 0' : i === 4 ? '0 10px 0 0' : '0',
            padding: '10px 12px',
            textAlign: 'center',
            fontFamily: font,
            fontSize: '11px',
            fontWeight: 700,
            color: '#A3A3A3',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            {label}
          </div>
        ))}

        {/* Data rows */}
        {rows.map(row => (
          <Fragment key={row.key}>
            {/* Row label */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '16px 14px',
              borderTop: '1px solid #F0F0F0',
            }}>
              <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 700, color: '#555' }}>{row.modeLabel}</span>
              <span style={{ fontFamily: font, fontSize: '11px', color: '#A3A3A3', marginTop: '2px' }}>{row.textLabel}</span>
            </div>

            {/* One cell per direction */}
            {cols.map(arrow => (
              <div key={arrow} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTop: '1px solid #F0F0F0',
                borderLeft: '1px solid #F0F0F0',
                paddingLeft:   arrow === 'left'  ? '32px' : '24px',
                paddingRight:  arrow === 'right' ? '32px' : '24px',
                paddingTop:    arrow === 'up'    ? '28px' : '20px',
                paddingBottom: arrow === 'down'  ? '28px' : '20px',
              }}>
                <Tooltip mode={row.mode} arrow={arrow} size="big" maxWidth={row.maxWidth}>
                  {row.text}
                </Tooltip>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  ),
}
