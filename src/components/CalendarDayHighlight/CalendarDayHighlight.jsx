import { ArdCalendarDay } from '../ArdCalendarDay/ArdCalendarDay.jsx'
import { HippsLabel }     from '../HippsLabel/HippsLabel.jsx'
import currentOutline     from '../../assets/calendar/current-outline.png'
import suggestedOutline   from '../../assets/calendar/suggested-outline.png'
import dcSuggestsOutline  from '../../assets/calendar/dc-suggests-outline.png'

// state:  'Current' | 'DC suggests'
// type:   'default' | 'between' | 'disabled' | 'purple fill' | 'DC suggestspurple fill'
export function CalendarDayHighlight({ state = 'DC suggests', type = 'default', hasOutline = true, day = 30, amount, code, className = '' }) {
  const isPurpleFill   = type === 'purple fill'
  const isDcPurpleFill = type === 'DC suggestspurple fill'
  const isBetween      = type === 'between'
  const isDisabled     = type === 'disabled'

  const ardState = isDcPurpleFill ? 'start'
                 : isBetween      ? 'between'
                 : isDisabled     ? 'disabled'
                 : isPurpleFill   ? 'start'
                 :                  'default'

  const outlineSrc = state === 'Current'     ? currentOutline
                   : isDcPurpleFill          ? dcSuggestsOutline
                   :                           suggestedOutline

  return (
    <div className={`dc:relative dc:flex dc:flex-col dc:items-center dc:w-9 dc:gap-gap4 dc:py-gap4 ${className}`} style={{ gap: '6px', paddingTop: '5px', paddingBottom: '5px' }}>
      {hasOutline && (
        <img
          src={outlineSrc}
          alt=""
          className="dc:absolute dc:left-1/2 dc:-translate-x-1/2 dc:-translate-y-1/2 dc:size-8 dc:pointer-events-none"
          style={{ top: 'calc(50% - 14.51px)' }}
        />
      )}
      <ArdCalendarDay state={ardState} type="number" day={day} />
      <HippsLabel amount={amount} code={code} />
    </div>
  )
}
