import { SectionsRow, DEFAULT_SECTIONS } from './SectionsRow'

export default {
  title: '🟢   🎀 Ribbon/SectionsRow/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'Dashboard / Big / With All (selected)', props: { location: 'dashboard', size: 'default', showAll: true, allState: 'selected' } },
  { label: 'Dashboard / Big',                       props: { location: 'dashboard', size: 'default', showAll: false } },
  { label: 'Dashboard / Small / With All',          props: { location: 'dashboard', size: 'small',   showAll: true, allState: 'default' } },
  { label: 'Dashboard / Small',                     props: { location: 'dashboard', size: 'small',   showAll: false } },
  { label: 'Ribbon / Big',                          props: { location: 'ribbon',    size: 'default', showAll: false } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {variants.map(({ label, props }) => (
        <div key={label}>
          <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
            {label}
          </div>
          <SectionsRow sections={DEFAULT_SECTIONS} {...props} />
        </div>
      ))}
    </div>
  ),
}
