import { Tabs } from './Tabs'

export default {
  title: '🟢   📮 Category Tab/Tabs/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const sectionLabel = (t) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', marginTop: '24px' }}>{t}</div>
)

const TABS = [
  { text: 'Pending (1)' },
  { text: 'Approved (1)' },
  { text: 'Completed (1)' },
  { text: 'Dismissed (1)' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font }}>
      {sectionLabel('Big')}
      <Tabs tabs={TABS} size="default" selectedIndex={0} />

      {sectionLabel('Small')}
      <Tabs tabs={TABS} size="small" selectedIndex={0} />

      {sectionLabel('Small — Locked (read-only)')}
      <Tabs tabs={TABS} size="small" selectedIndex={0} lockedLabel />
    </div>
  ),
}
