import React from 'react'
import { SideBarTitle } from './SideBarTitle'

export default {
  title: '🟠   📁 sources/Side Bar Title',
  component: SideBarTitle,
  args: { label: 'HOW Bridgeview.pdf' },
  argTypes: { label: { control: 'text' } },
}

export const PDF = { args: { label: 'HOW Bridgeview.pdf' } }
export const QK  = { args: { label: '573.001A Unspecified subluxation of unspecified hip' } }
export const Truncated = {
  decorators: [(Story) => React.createElement('div', { style: { width: 280 } }, React.createElement(Story))],
  args: { label: '573.001A Unspecified subluxation of unspecified hip, initial encounter' },
}
