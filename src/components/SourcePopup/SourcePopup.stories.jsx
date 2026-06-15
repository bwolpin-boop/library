import { SourcePopup, SourceCard } from './SourcePopup'

export default {
  title: '🟠   📁 sources/Source Popup',
  component: SourcePopup,
  args: {
    qCode:         '#K0520A2',
    questionTitle: 'IV Fluids in hospital',
    previousAnswer: '1. Yes',
    hasLittleMan:  true,
  },
  argTypes: {
    hasLittleMan: { control: 'boolean' },
  },
  decorators: [(Story) => React.createElement('div', { style: { padding: '32px', background: '#f5f5f5' } }, React.createElement(Story))],
}

import React from 'react'

export const Default = {}

export const SingleCard = {
  render: () => (
    <div style={{ padding: '32px', background: '#f5f5f5' }}>
      <SourceCard
        sourceType="Documents"
        uploadDate="15/12/2025"
        pdfTitle="Diagnosis hospital_records file hypervention .pdf"
        commentCount={4}
      />
    </div>
  ),
}
