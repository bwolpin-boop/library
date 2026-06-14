import React from 'react'
import { RowHoverActions } from './RowHoverActions'

export default {
  title: '🟢   😂 Icon/Row Hover Actions',
  component: RowHoverActions,
  args: {
    hasVerifyAndDeny: true,
    hasPending: true,
    commentsCount: 4,
    upPressed: false,
    downPressed: false,
  },
  argTypes: {
    hasVerifyAndDeny: { control: 'boolean' },
    hasPending:       { control: 'boolean' },
    upPressed:        { control: 'boolean' },
    downPressed:      { control: 'boolean' },
    commentsCount:    { control: 'number' },
    upCount:          { control: 'number' },
    downCount:        { control: 'number' },
  },
  decorators: [(Story) => React.createElement('div', { style: { padding: '32px' } }, React.createElement(Story))],
}

export const Default         = { args: { commentsCount: 4 } }
export const WithCounts      = { args: { commentsCount: 4, upCount: 12, downCount: 3 } }
export const NoVerifyDeny    = { args: { commentsCount: 4, hasVerifyAndDeny: false } }
export const NoPending       = { args: { commentsCount: 4, hasPending: false } }
export const NoCommentsCount = { args: {} }
