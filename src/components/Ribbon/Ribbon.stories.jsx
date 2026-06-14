import { Ribbon } from './Ribbon'
import { DEFAULT_CATEGORIES } from './CmiCategoryToggle'

export default {
  title: '🟢   🎀 Ribbon/Ribbon',
  component: Ribbon,
  args: { type: 'ribbon', banner: false, title: 'Dolphincare Findings', ardDate: '04/23/24', categories: DEFAULT_CATEGORIES },
  argTypes: {
    type:       { control: 'select', options: ['ribbon', 'nta', 'CMI'] },
    banner:     { control: 'boolean' },
    categories: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px', maxWidth: '1800px' }}>
        <Story />
      </div>
    ),
  ],
}

export const RibbonDefault  = { args: { type: 'ribbon', banner: false } }
export const RibbonBanner   = { args: { type: 'ribbon', banner: true } }
export const NTA            = { args: { type: 'nta',    banner: false } }
export const CMI            = { args: { type: 'CMI',    banner: false, categories: DEFAULT_CATEGORIES } }
