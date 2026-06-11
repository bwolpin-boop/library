import { CmiCategoryToggle } from './CmiCategoryToggle'

export default {
  title: '🟢   🎀 Ribbon/CmiCategoryToggle/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            Default (4 categories)
          </div>
          <CmiCategoryToggle />
        </div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            5 categories
          </div>
          <CmiCategoryToggle
            categories={[
              { label: 'All' },
              { label: 'Nursing (H)' },
              { label: 'OT/PT (H)' },
              { label: 'SLP (H)' },
              { label: 'NTA (2)' },
            ]}
          />
        </div>
      </div>
    </div>
  ),
}
