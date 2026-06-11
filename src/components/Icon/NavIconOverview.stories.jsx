import { Fragment } from 'react'
import { NavIcon, iconNames, iconNativeSizes } from './NavIcon'

export default {
  title: '🟢   😂 Icon/Nav Icons/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const smallVariant = {
  'checkbox-empty':  'checkbox-small',
  'checkbox-filled': 'checkbox-filled-small',
}

function buildRows() {
  const rows = []
  const used = new Set()

  for (const name of iconNames) {
    if (used.has(name)) continue
    const native = iconNativeSizes[name]

    if (native === 24) {
      const pair = smallVariant[name] ?? null
      if (pair) used.add(pair)
      rows.push({ label: name.replace(/-/g, ' '), icon24: name, icon16: pair })
    } else if (native === 16) {
      rows.push({ label: name.replace(/-/g, ' '), icon24: null, icon16: name })
    }
  }

  return rows
}

const rows = buildRows()

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '150px 80px 220px', overflow: 'hidden' }}>

          {/* Name header */}
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 16px', backgroundColor: '#F8F5FF' }}>
            Name
          </div>

          {/* 24px header */}
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 8px', backgroundColor: '#F8F5FF', textAlign: 'center', borderLeft: '1px solid #F0F0F0' }}>
            24px
          </div>

          {/* 16px column header — split to match cell layout */}
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F8F5FF', borderLeft: '1px solid #F0F0F0' }}>
            <div style={{ width: '48px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 0' }}>
              16px
            </div>
            <div style={{ width: '1px', alignSelf: 'stretch', backgroundColor: '#F0F0F0', flexShrink: 0 }} />
            <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 10px' }}>
              Names
            </div>
          </div>

          {rows.map(({ label, icon24, icon16 }) => (
            <Fragment key={label}>
              <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 500, color: '#A3A3A3', padding: '16px', borderTop: '1px solid #F0F0F0', display: 'flex', alignItems: 'center' }}>
                {label}
              </div>

              {/* 24px cell */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 8px', borderTop: '1px solid #F0F0F0', borderLeft: '1px solid #F0F0F0' }}>
                {icon24 && <NavIcon name={icon24} size={24} />}
              </div>

              {/* 16px cell: icon + divider + name */}
              <div style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #F0F0F0', borderLeft: '1px solid #F0F0F0', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', flexShrink: 0 }}>
                  {icon16 && <NavIcon name={icon16} size={16} />}
                </div>
                <div style={{ width: '1px', alignSelf: 'stretch', backgroundColor: '#F0F0F0', flexShrink: 0 }} />
                {icon16 && (
                  <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 500, color: '#A3A3A3', padding: '0 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {icon16.replace(/-/g, ' ')}
                  </span>
                )}
              </div>

            </Fragment>
          ))}

        </div>
      </div>
    </div>
  ),
}
