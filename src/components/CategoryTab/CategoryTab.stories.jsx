import { CategoryTab } from './CategoryTab'

export default {
  title: '🟢   📮 Category Tab',
  component: CategoryTab,
  args: { text: 'Pending (1)', selected: true, size: 'default', showPlusBadge: false, plusCount: 4 },
  argTypes: {
    selected:     { control: 'boolean' },
    size:         { control: 'select', options: ['default', 'small'] },
    showPlusBadge: { control: 'boolean' },
    plusCount:    { control: 'number' },
    text:         { control: 'text' },
  },
  decorators: [(Story) => <div style={{ padding: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}><Story /></div>],
}

export const SelectedDefault      = { args: { selected: true,  size: 'default' } }
export const UnselectedDefault    = { args: { selected: false, size: 'default', showPlusBadge: true } }
export const SelectedSmall        = { args: { selected: true,  size: 'small' } }
export const UnselectedSmall      = { args: { selected: false, size: 'small', showPlusBadge: true } }
export const UnselectedNoBadge    = { args: { selected: false, size: 'default', showPlusBadge: false } }
export const WithLeftIcon         = { args: { selected: false, size: 'small', navIconLeft: 'reaction-comment', showPlusBadge: true } }
