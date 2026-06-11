import { Section } from './Section'

export default {
  title: '🟢   🎀 Ribbon/Sections/Variants',
  component: Section,
  args: { letter: 'A', type: 'letter', state: 'default', size: 'default' },
  argTypes: {
    type:  { control: 'select', options: ['letter', 'all', 'verify', 'deny'] },
    state: { control: 'select', options: ['default', 'selected', 'disabled'] },
    size:  { control: 'select', options: ['default', 'small'] },
    badge: { control: 'number' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const LetterDisabled  = { args: { type: 'letter', state: 'disabled' } }
export const LetterDefault   = { args: { type: 'letter', state: 'default',  badge: 1 } }
export const LetterSelected  = { args: { type: 'letter', state: 'selected' } }
export const AllDisabled     = { args: { type: 'all',    state: 'disabled', letter: 'All' } }
export const AllDefault      = { args: { type: 'all',    state: 'default',  letter: 'All', badge: 1 } }
export const AllSelected     = { args: { type: 'all',    state: 'selected', letter: 'All' } }
export const Verify          = { args: { type: 'verify', state: 'disabled', letter: 'D' } }
export const Deny            = { args: { type: 'deny',   state: 'disabled', letter: 'I' } }
export const SmallLetterDisabled = { args: { type: 'letter', state: 'disabled', size: 'small' } }
export const SmallLetterDefault  = { args: { type: 'letter', state: 'default',  size: 'small', badge: 1 } }
export const SmallLetterSelected = { args: { type: 'letter', state: 'selected', size: 'small' } }
export const SmallVerify         = { args: { type: 'verify', state: 'disabled', size: 'small', letter: 'D' } }
export const SmallDeny           = { args: { type: 'deny',   state: 'disabled', size: 'small', letter: 'I' } }
