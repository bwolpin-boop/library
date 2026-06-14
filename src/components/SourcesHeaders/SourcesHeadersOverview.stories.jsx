import { SourcesHeaders } from './SourcesHeaders'

export default {
  title: '🟢   🏓 Table/Sources Headers/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'Medication',                    props: { variant: 'medication' } },
  { label: 'Diagnosis (with description)',  props: { variant: 'diagnosis', hasDescription: true } },
  { label: 'Diagnosis (no description)',    props: { variant: 'diagnosis', hasDescription: false } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '32px', background: '#f5f5f5' }}>
      {variants.map(({ label, props }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {label}
          </span>
          <SourcesHeaders {...props} />
        </div>
      ))}
    </div>
  ),
}
