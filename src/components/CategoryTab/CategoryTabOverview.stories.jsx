import { CategoryTab } from './CategoryTab'

export default {
  title: '🟢   📮 Category Tab/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const label = (t) => ({
  fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3',
  textTransform: 'uppercase', letterSpacing: '0.05em', width: '220px', flexShrink: 0,
})

const variants = [
  { label: 'Selected — default',           props: { selected: true,  size: 'default' } },
  { label: 'Unselected — default',          props: { selected: false, size: 'default', showPlusBadge: true, plusCount: 4 } },
  { label: 'Unselected no badge — default', props: { selected: false, size: 'default', showPlusBadge: false } },
  { label: 'Selected — small',             props: { selected: true,  size: 'small' } },
  { label: 'Unselected — small',           props: { selected: false, size: 'small', showPlusBadge: true, plusCount: 4 } },
  { label: 'Unselected left icon — small', props: { selected: false, size: 'small', showPlusBadge: true, plusCount: 4, navIconLeft: 'reaction-comment' } },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {variants.map(({ label: lbl, props }) => (
        <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={label(lbl)}>{lbl}</span>
          <CategoryTab text="Pending (1)" {...props} />
        </div>
      ))}
    </div>
  ),
}
