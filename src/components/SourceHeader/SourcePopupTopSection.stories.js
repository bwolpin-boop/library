import React from 'react'
import { SourcePopupTopSection } from './SourcePopupTopSection'

const TABS = [
  { label: 'All' },
  { label: 'Progress Notes', sourceType: 'Progress Notes' },
  { label: 'Assessments',    sourceType: 'Assessments', selected: true },
  { label: 'Mars',           sourceType: 'Mars' },
  { label: 'Therapy Docs',   sourceType: 'Therapy Docs' },
  { label: 'Progress Notes', sourceType: 'Progress Notes' },
]

export default {
  title: '🟠   📁 sources/Source Popup Top Section',
  component: SourcePopupTopSection,
  args: {
    size:             'Default',
    qCode:            '#K0520A2',
    questionTitle:    'IV Fluids in hospital',
    previousAnswer:   '1. Yes',
    hasLittleMan:     true,
    assignAndCalendar: false,
    sourceTabs:       TABS,
    answerType:       'yes-dc',
  },
  argTypes: {
    size:        { control: 'select', options: ['Default', 'small'] },
    answerType:  { control: 'select', options: ['yes-dc', 'not-dc', 'mds', 'no-answer'] },
    hasLittleMan:      { control: 'boolean' },
    assignAndCalendar: { control: 'boolean' },
  },
  decorators: [(Story) => React.createElement('div', { style: { padding: '32px', width: 874 } }, React.createElement(Story))],
}

export const Default      = { args: { size: 'Default' } }
export const Small        = { args: { size: 'small' } }
export const WithAssign   = { args: { size: 'Default', assignAndCalendar: true } }
export const NoSuggests   = { args: { hasLittleMan: false } }
