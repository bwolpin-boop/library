import { SectionsRow, DEFAULT_SECTIONS } from './SectionsRow'

export default {
  title: '🟢   🎀 Ribbon/SectionsRow/Variants',
  component: SectionsRow,
  args: { sections: DEFAULT_SECTIONS, showAll: false, allState: 'default', location: 'dashboard', size: 'default' },
  argTypes: {
    location: { control: 'select', options: ['dashboard', 'ribbon'] },
    size:     { control: 'select', options: ['default', 'small'] },
    allState: { control: 'select', options: ['disabled', 'default', 'selected'] },
    showAll:  { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const DashboardBig         = { args: { location: 'dashboard', size: 'default', showAll: false } }
export const DashboardBigWithAll  = { args: { location: 'dashboard', size: 'default', showAll: true, allState: 'selected' } }
export const DashboardSmall       = { args: { location: 'dashboard', size: 'small',   showAll: false } }
export const DashboardSmallWithAll = { args: { location: 'dashboard', size: 'small',  showAll: true, allState: 'default' } }
export const RibbonBig            = { args: { location: 'ribbon',    size: 'default', showAll: false } }
