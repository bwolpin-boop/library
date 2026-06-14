import { RowCells } from './RowCells'

export default {
  title: '🟢   🏓 Table/Row Cells/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const label = (text) => ({
  fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3',
  textTransform: 'uppercase', letterSpacing: '0.05em', width: '200px', flexShrink: 0,
})

const dashboardVariants = [
  { label: 'Primary Text',        props: { type: 'Primary Text', location: 'dashboard', size: 'Default', navIconLeft: 'dolphincare-logo', navIconRight: 'dolphincare-logo' } },
  { label: 'Verify',              props: { type: 'verify',       location: 'dashboard', size: 'Default' } },
  { label: 'Icon',                props: { type: 'Icon',         location: 'dashboard', size: 'Default' } },
]

const pccVariants = [
  { label: 'Primary Text',        props: { type: 'Primary Text',          location: 'PCC', size: 'small', navIconLeft: 'dolphincare-logo' } },
  { label: 'Verify',              props: { type: 'verify',                location: 'PCC', size: 'small' } },
  { label: 'Source',              props: { type: 'source',                location: 'PCC', size: 'small', sourceType: 'IV Fluids' } },
  { label: 'Status',              props: { type: 'status',                location: 'PCC', size: 'small', status: 'dismissed' } },
  { label: 'MDS Answer',          props: { type: 'MDS answer',            location: 'PCC', size: 'small' } },
  { label: 'MDS → Answer',        props: { type: 'MDS answer to answer',  location: 'PCC', size: 'small' } },
  { label: 'Indicator',           props: { type: 'indicator',             location: 'PCC', size: 'small' } },
  { label: 'Categories',          props: { type: 'categories',            location: 'PCC', size: 'small', categories: ['nursing', 'OT/PT', 'SLP', 'NTA'] } },
  { label: 'Strength (strong)',   props: { type: 'strength',              location: 'PCC', size: 'small', strengthType: 'strong' } },
  { label: 'Strength (moderate)', props: { type: 'strength 2',            location: 'PCC', size: 'small', strengthType: 'moderate', navIconRight: 'warning-small' } },
  { label: 'Medical Label',       props: { type: 'medical label',         location: 'PCC', size: 'small' } },
  { label: 'NTA',                 props: { type: 'NTA',                   location: 'PCC', size: 'small' } },
  { label: 'Primary Diag',        props: { type: 'Primary diag',          location: 'PCC', size: 'small' } },
  { label: 'Number + Text',       props: { type: 'number and text',       location: 'PCC', size: 'small' } },
  { label: 'Patient Name',        props: { type: 'patient name',          location: 'PCC', size: 'small', text: 'Patient name', hasNewTag: true } },
  { label: '2 Lines',             props: { type: '2 lines paragraph',     location: 'PCC', size: 'small', text: 'Sodium Chloride' } },
  { label: '1 Line $',            props: { type: '1 lines $',             location: 'PCC', size: 'small' } },
  { label: 'IPA State',           props: { type: 'ipa state',             location: 'PCC', size: 'small' } },
  { label: 'Checkbox',            props: { type: 'checkbox',              location: 'PCC', size: 'small' } },
  { label: 'Verify & Deny Group', props: { type: 'verify and deny and pending', location: 'PCC', size: 'small' } },
  { label: 'Date Filter',         props: { type: 'date filter',           location: 'PCC', size: 'small' } },
  { label: 'IV Fluids +',         props: { type: 'IV fluids +',           location: 'PCC', size: 'small', ivText: 'pg. 1, 2, 3' } },
  { label: 'IV Fluids −',         props: { type: 'IV fluids -',           location: 'PCC', size: 'small', ivText: 'pg. 1, 2, 3, 4, 5, 6, 7' } },
]

function Section({ title, variants }) {
  return (
    <div>
      <p style={{ fontFamily: font, fontSize: '13px', fontWeight: 700, color: '#222', marginBottom: '16px' }}>{title}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {variants.map(({ label: lbl, props }) => (
          <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '24px', minHeight: '32px' }}>
            <span style={label(lbl)}>{lbl}</span>
            <RowCells {...props} />
          </div>
        ))}
      </div>
    </div>
  )
}

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '40px' }}>
      <Section title="Dashboard / Default (50px)" variants={dashboardVariants} />
      <Section title="PCC / Small (32px)" variants={pccVariants} />
    </div>
  ),
}
