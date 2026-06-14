import { SourceTitle } from './SourceTitle'

export default {
  title: '🟠   📁 sources/Source Title/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const shared = {
  id:           '#K0520A2',
  sourceName:   'IV Fluids in hospital',
  mdsAnswer:    '1. Yes',
  patientName:  'Garcian, Kola A., 4567',
  facilityName: 'Beachgarden hostile facility New Jersey',
}

const variants = [
  { label: 'Dashboard — long title',           props: { whichProduct: 'dashboard',         longTitle: true  } },
  { label: 'Dashboard — short title',          props: { whichProduct: 'dashboard',         longTitle: false } },
  { label: 'Browser extension — long title',   props: { whichProduct: 'browser extension', longTitle: true  } },
  { label: 'Browser extension — short title',  props: { whichProduct: 'browser extension', longTitle: false } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '40px' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {label}
          </span>
          <SourceTitle {...shared} {...props} />
        </div>
      ))}
    </div>
  ),
}
