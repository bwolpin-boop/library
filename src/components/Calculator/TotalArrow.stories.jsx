import { TotalArrow } from './TotalArrow'

export default {
  title: '🟢   💊 Calculator/TotalArrow',
  component: TotalArrow,
  decorators: [(Story) => <div style={{ padding: '48px' }}><Story /></div>],
}

export const Default  = { args: {} }
export const Hover    = { args: { forceHover: true } }
export const Pressed  = { args: { forceExpanded: true } }
