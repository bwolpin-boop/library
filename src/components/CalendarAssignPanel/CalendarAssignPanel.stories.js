import { CalendarAssignPanel } from './CalendarAssignPanel'

export default {
  title: '🟢   🗓 CalendarAssignPanel',
  component: CalendarAssignPanel,
}

export const Default = {}
export const Custom  = {
  args: {
    assignees: [
      { profilePicture: 1, initials: 'AB', name: 'Alice Brown' },
      { profilePicture: 2, initials: 'CD', name: 'Charlie Davis' },
    ]
  }
}
