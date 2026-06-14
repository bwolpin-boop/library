import { CmiCategoryToggle, DEFAULT_CATEGORIES } from './CmiCategoryToggle'

export default {
  title: '🟢   🎀 Ribbon/CmiCategoryToggle/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

export const Overview = {
  render: () => (
    <div style={{ padding: '48px', background: '#f5f5f5', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <CmiCategoryToggle categories={DEFAULT_CATEGORIES} defaultIndex={0} />
      <CmiCategoryToggle categories={DEFAULT_CATEGORIES} defaultIndex={1} />
    </div>
  ),
}
