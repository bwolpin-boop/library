import { NavIcon } from '../Icon/NavIcon.jsx'

// state: 'Default' | 'hover' | 'field' | 'written'
// label: text to show in Default/hover state
// value: text to show in written state
export function DateRangeInput({ label = 'Start date', state = 'Default', value = 'May 19th', className = '' }) {
  const isPlaceholder = state === 'Default' || state === 'hover'
  const isHover       = state === 'hover'
  const isField       = state === 'field'
  const isWritten     = state === 'written'

  return (
    <div className={`dc:flex dc:h-[26px] dc:relative dc:rounded-box-sm dc:items-center dc:px-gap4 ${isHover ? 'dc:bg-surface' : ''} ${className}`}>
      {isPlaceholder && (
        <div className="dc:flex dc:items-center dc:gap-gap4">
          <NavIcon name="plus-small" size={16} />
          <span className="dc:font-montserrat dc:font-normal dc:text-xs dc:text-primary dc:leading-sm dc:whitespace-nowrap">
            {label}
          </span>
        </div>
      )}
      {(isField || isWritten) && (
        <div className={`dc:flex dc:items-center dc:gap-gap8 dc:h-[26px] dc:px-gap8 dc:py-gap4 dc:rounded-icon dc:bg-white dc:w-[92px] ${isField ? 'dc:border dc:border-divider-subtle' : ''}`}>
          <span className={`dc:font-montserrat dc:font-normal dc:text-xs dc:leading-sm dc:whitespace-nowrap ${isWritten ? 'dc:text-primary' : 'dc:text-secondary'}`}>
            {isWritten ? value : label}
          </span>
        </div>
      )}
    </div>
  )
}
