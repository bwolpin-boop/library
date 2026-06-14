import { SourceAlsoAnswers } from './SourceAlsoAnswers'

export default {
  title: '🟢   💊 IPA components/Source Also Answers',
  component: SourceAlsoAnswers,
  args: {
    type: 'Source popup',
    hasText: true,
    hasVerifyAndDeny: true,
    qkScroll: false,
    tabs: ['M1200B', 'M1201A', 'M1202C'],
    activeTabIndex: 0,
    strengthLabel: 'Strong',
  },
  argTypes: {
    type: { control: 'select', options: ['Source popup', 'IPA'] },
    hasText: { control: 'boolean' },
    hasVerifyAndDeny: { control: 'boolean' },
    qkScroll: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px' }}>
        <Story />
      </div>
    ),
  ],
}

export const SourcePopup = {
  args: { type: 'Source popup', hasText: true, hasVerifyAndDeny: true, qkScroll: false },
}

export const SourcePopupNoText = {
  args: { type: 'Source popup', hasText: false, hasVerifyAndDeny: true, qkScroll: false },
}

export const SourcePopupNoVerify = {
  args: { type: 'Source popup', hasText: true, hasVerifyAndDeny: false, qkScroll: false },
}

export const SourcePopupScrollable = {
  args: {
    type: 'Source popup',
    hasVerifyAndDeny: true,
    qkScroll: true,
    tabs: ['M1200B', 'M1201A', 'M1202C', 'M1203D', 'M1204E'],
  },
}

export const IPA = {
  args: { type: 'IPA', hasVerifyAndDeny: true, strengthLabel: 'Strong' },
}

export const IPANoVerify = {
  args: { type: 'IPA', hasVerifyAndDeny: false, strengthLabel: 'Strong' },
}
