import { IndicatorDolphin } from './IndicatorDolphin'

export default {
  title: '🟢   😂 Icon/Indicator Dolphin/Variants',
  component: IndicatorDolphin,
  args: { size: 'small' },
  argTypes: {
    type: { control: 'select', options: ['source found', 'missed', 'accepted', 'dismissed', 'non aplicable', 'same as previous MDS', 'indicator source', 'assessment needed'] },
    size: { control: 'select', options: ['small', 'big'] },
  },
}

export const SourceFound        = { args: { type: 'source found' } }
export const Missed             = { args: { type: 'missed' } }
export const Accepted           = { args: { type: 'accepted' } }
export const Dismissed          = { args: { type: 'dismissed' } }
export const NonApplicable      = { args: { type: 'non aplicable' } }
export const SameAsPreviousMDS  = { args: { type: 'same as previous MDS' } }
export const IndicatorSource    = { args: { type: 'indicator source' } }
export const AssessmentNeeded   = { args: { type: 'assessment needed' } }
