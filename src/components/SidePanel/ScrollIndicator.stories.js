import React from 'react'
import { ScrollIndicator } from './ScrollIndicator'

export default {
  title: '🟠   📁 sources/Side Panel/Scroll Indicator',
  component: ScrollIndicator,
  args: { count: 12, activeIndex: 11 },
  argTypes: {
    count:       { control: { type: 'number', min: 1, max: 30 } },
    activeIndex: { control: { type: 'number', min: 0, max: 29 } },
  },
  decorators: [(Story) => React.createElement('div', { style: { padding: 32 } }, React.createElement(Story))],
}

export const Default      = {}
export const FirstActive  = { args: { count: 12, activeIndex: 0 } }
export const MiddleActive = { args: { count: 12, activeIndex: 5 } }
export const FewItems     = { args: { count: 4,  activeIndex: 2 } }
