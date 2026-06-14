import { CmiCategoryToggle, DEFAULT_CATEGORIES } from './CmiCategoryToggle'

export default {
  title: '🟢   🎀 Ribbon/CmiCategoryToggle',
  component: CmiCategoryToggle,
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ padding: '48px', background: '#f5f5f5' }}><Story /></div>],
}

export const Default = {
  args: { categories: DEFAULT_CATEGORIES, defaultIndex: 0 },
}

export const SecondTabActive = {
  args: { categories: DEFAULT_CATEGORIES, defaultIndex: 1 },
}

export const FewerSections = {
  args: {
    defaultIndex: 0,
    categories: [
      {
        label: 'All',
        sections: [
          { letter: 'E', state: 'default', badge: 1 },
          { letter: 'H', state: 'default', badge: 1 },
          { letter: 'D', type: 'verify' },
        ],
      },
      {
        label: 'Nursing (H)',
        sections: [
          { letter: 'E', state: 'default', badge: 1 },
          { letter: 'H', state: 'default', badge: 1 },
          { letter: 'D', type: 'verify' },
          { letter: 'I', type: 'deny' },
          { letter: 'A', state: 'default' },
        ],
      },
      { label: 'NTA (2)' },
    ],
  },
}
