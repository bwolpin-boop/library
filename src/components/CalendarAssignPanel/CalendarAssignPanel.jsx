import { ProfilePicture } from '../ProfilePicture/ProfilePicture.jsx'
import { NavIcon }         from '../Icon/NavIcon.jsx'

const DEFAULT_ASSIGNEES = [
  { profilePicture: 3, initials: 'BW', name: 'Batsheva Wolpin' },
  { profilePicture: 2, initials: 'SL', name: 'Sarah Leah Septimus' },
  { profilePicture: 1, initials: 'SL', name: 'Sarah Leah Septimus' },
  { profilePicture: 3, initials: 'RU', name: 'Rikki Unger' },
]

export function CalendarAssignPanel({ assignees = DEFAULT_ASSIGNEES, className = '' }) {
  return (
    <div className={`dc:bg-white dc:flex dc:flex-col dc:gap-gap16 dc:items-start dc:p-gap16 dc:rounded-box ${className}`}
      style={{ boxShadow: '0px 0px 7.5px rgba(0,0,0,0.25)' }}>

      {/* Search field */}
      <div className="dc:flex dc:items-center dc:gap-gap8 dc:h-[28px] dc:px-gap8 dc:py-gap4 dc:rounded-lg dc:border dc:border-divider-subtle dc:bg-white dc:w-full" style={{ borderRadius: 8 }}>
        <NavIcon name="search2" size={20} />
        <span className="dc:font-montserrat dc:font-normal dc:text-xs dc:text-secondary dc:leading-sm dc:whitespace-nowrap">
          Search
        </span>
      </div>

      {/* Assignee list */}
      {assignees.map((person, i) => (
        <div key={i} className="dc:flex dc:items-center dc:gap-gap8 dc:w-full">
          <ProfilePicture profilePicture={person.profilePicture} initials={person.initials} />
          <span className="dc:font-montserrat dc:font-normal dc:text-sm dc:text-primary dc:whitespace-nowrap" style={{ lineHeight: '21px' }}>
            {person.name}
          </span>
        </div>
      ))}
    </div>
  )
}
