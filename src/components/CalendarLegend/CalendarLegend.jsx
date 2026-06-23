import currentDot   from '../../assets/calendar/current-dot.png'
import suggestedDot from '../../assets/calendar/suggested-dot.png'

export function CalendarLegend({ className = '' }) {
  return (
    <div className={`dc:flex dc:flex-col dc:items-start dc:gap-gap4 ${className}`}>
      <div className="dc:flex dc:items-center dc:gap-gap4">
        <img src={currentDot}   alt="" style={{ width: '7.857px', height: '7.857px' }} />
        <span className="dc:font-montserrat dc:font-normal dc:text-xxxs dc:text-primary dc:whitespace-nowrap">Current</span>
      </div>
      <div className="dc:flex dc:items-center dc:gap-gap4">
        <img src={suggestedDot} alt="" style={{ width: '7.857px', height: '7.857px' }} />
        <span className="dc:font-montserrat dc:font-normal dc:text-xxxs dc:text-primary dc:whitespace-nowrap">Suggested by DolphinCare</span>
      </div>
    </div>
  )
}
