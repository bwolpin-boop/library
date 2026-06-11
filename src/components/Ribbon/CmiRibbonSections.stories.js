import { CmiRibbonSections } from './CmiRibbonSections'

export default {
  title: '🟢   🎀 Ribbon/CmiRibbonSections',
  component: CmiRibbonSections,
  argTypes: {
    selected: { control: 'boolean' },
    label:    { control: 'text' },
  },
}

export const Selected    = { args: { selected: true  } }
export const NotSelected = { args: { selected: false } }
