import { Ribbon } from './Ribbon'

export default {
  title: '🟢   🎀 Ribbon/Ribbon',
  component: Ribbon,
  args: { type: 'ribbon', banner: false, title: 'Dolphincare Findings', ardDate: '04/23/24', cmiType: 'all' },
  argTypes: {
    type:    { control: 'select', options: ['ribbon', 'nta', 'CMI'] },
    banner:  { control: 'boolean' },
    cmiType: { control: 'select', options: ['all', 'nursing', 'NTA', 'Cognitive'] },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px', maxWidth: '1800px' }}>
        <Story />
      </div>
    ),
  ],
}

export const RibbonDefault = { args: { type: 'ribbon', banner: false } }
export const RibbonBanner  = { args: { type: 'ribbon', banner: true } }
export const NTA           = { args: { type: 'nta',    banner: false } }
export const CMI           = { args: { type: 'CMI',    banner: false, cmiType: 'all' } }
export const CMINursing    = { args: { type: 'CMI',    banner: false, cmiType: 'nursing' } }
export const CMINTA        = { args: { type: 'CMI',    banner: false, cmiType: 'NTA' } }
export const CMICognitive  = { args: { type: 'CMI',    banner: false, cmiType: 'Cognitive' } }
