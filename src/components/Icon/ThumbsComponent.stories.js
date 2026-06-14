import { ThumbsComponent } from './ThumbsComponent'

export default {
  title: '🟢   😂 Icon/Thumbs Component',
  component: ThumbsComponent,
  args: {
    upCount: undefined,
    downCount: undefined,
    upPressed: false,
    downPressed: false,
  },
  argTypes: {
    upPressed: { control: 'boolean' },
    downPressed: { control: 'boolean' },
    upCount: { control: 'number' },
    downCount: { control: 'number' },
  },
}

export const Default     = { args: {} }
export const WithCounts  = { args: { upCount: 12, downCount: 3 } }
export const UpPressed   = { args: { upCount: 12, downCount: 3, upPressed: true } }
export const DownPressed = { args: { upCount: 12, downCount: 3, downPressed: true } }
