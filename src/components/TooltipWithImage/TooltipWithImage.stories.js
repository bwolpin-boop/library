import { TooltipWithImage } from './TooltipWithImage'

export default {
  title: '🟢   🏷 TooltipWithImage',
  component: TooltipWithImage,
  args: {
    variant: 'image-below',
    badge: 'New',
    title: 'New update for DolphinCare: Get excited for this!',
    body: 'Before you can save you have to make sure to correct all the error messages.',
    primaryLabel: 'Confirm',
    secondaryLabel: 'Dismiss',
  },
  argTypes: {
    variant: { control: 'select', options: ['image-below', 'image-above'] },
    badge: { control: 'text' },
    title: { control: 'text' },
    body: { control: 'text' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
}

export const ImageBelow = { args: { variant: 'image-below' } }
export const ImageAbove = { args: { variant: 'image-above' } }
export const NoBadge    = { args: { variant: 'image-below', badge: '' } }
