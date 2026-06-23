import { NavIcon }            from '../Icon/NavIcon.jsx'
import { CalendarDay }        from '../CalendarDay/CalendarDay.jsx'
import { ArdCalendarDay }     from '../ArdCalendarDay/ArdCalendarDay.jsx'
import { HippsLabel }         from '../HippsLabel/HippsLabel.jsx'
import { CalendarLegend }     from '../CalendarLegend/CalendarLegend.jsx'
import { DateRangeInput }     from '../DateRangeInput/DateRangeInput.jsx'

const DAY_LETTERS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

// variant: 'default' | 'ard'
// month: string label e.g. "February 2026"
// weeks: array of 7-element arrays, each element: { day, state, amount?, code? } | null
// onClear, onPrevMonth, onNextMonth: callbacks
export function Calendar({
  variant = 'default',
  month = 'February 2026',
  weeks,
  startDateLabel = 'Start date',
  endDateLabel = 'End date',
  onClear,
  onPrevMonth,
  onNextMonth,
  className = '',
}) {
  const isArd = variant === 'ard'
  const defaultWeeks = buildDefaultWeeks()
  const resolvedWeeks = weeks ?? defaultWeeks

  return (
    <div className={`dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box dc:flex dc:flex-col dc:gap-gap12 dc:items-start ${isArd ? 'dc:w-[364px]' : 'dc:w-[250px]'} ${className}`}
      style={{ boxShadow: '0px 0px 7.5px rgba(0,0,0,0.25)' }}>

      {/* Header row — date inputs */}
      <div className="dc:border-b dc:border-divider-subtle dc:flex dc:items-center dc:justify-between dc:px-gap16 dc:rounded-tl-box dc:rounded-tr-box dc:w-full" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <DateRangeInput label={startDateLabel} state="Default" />
        <DateRangeInput label={endDateLabel}   state="Default" />
      </div>

      {/* Month navigation + grid */}
      <div className="dc:flex dc:flex-col dc:gap-gap16 dc:items-start dc:px-gap16 dc:w-full">
        {/* Month nav */}
        <div className="dc:flex dc:items-center dc:justify-between dc:w-full">
          <button onClick={onPrevMonth} className="dc:flex dc:items-center dc:justify-center dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-0">
            <NavIcon name="chevron-left" size={16} />
          </button>
          <span className="dc:font-montserrat dc:font-semibold dc:text-xs dc:text-primary dc:leading-md dc:whitespace-nowrap">
            {month}
          </span>
          <button onClick={onNextMonth} className="dc:flex dc:items-center dc:justify-center dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-0">
            <NavIcon name="chevron-right" size={16} />
          </button>
        </div>

        {/* Day grid */}
        <div className="dc:flex dc:flex-col dc:gap-gap8 dc:w-full">
          {/* Day letter headers */}
          <div className={`dc:flex dc:items-center ${isArd ? 'dc:w-full' : ''}`}>
            {DAY_LETTERS.map((l, i) => (
              isArd
                ? <div key={i} className="dc:flex-1 dc:flex dc:items-center dc:justify-center dc:p-gap4">
                    <ArdCalendarDay type="letter" day={l} />
                  </div>
                : <CalendarDay key={i} type="letter" day={l} />
            ))}
          </div>

          {/* Day rows */}
          <div className="dc:flex dc:flex-col dc:gap-gap8 dc:items-end dc:w-full">
            {resolvedWeeks.map((week, wi) => (
              <div key={wi} className={`dc:flex dc:items-center ${isArd ? 'dc:justify-end dc:w-full' : ''}`}>
                {week.map((cell, di) => cell === null
                  ? (isArd
                      ? <div key={di} className="dc:flex-1 dc:min-w-0" />
                      : <CalendarDay key={di} state="disabled" type="empty" />)
                  : isArd
                    ? <div key={di} className="dc:flex-1 dc:flex dc:flex-col dc:items-center dc:min-w-0" style={{ gap: 6, paddingTop: 5, paddingBottom: 5 }}>
                        <ArdCalendarDay state={cell.state ?? 'default'} day={cell.day} />
                        <HippsLabel amount={cell.amount} code={cell.code} />
                      </div>
                    : <CalendarDay key={di} state={cell.state ?? 'default'} day={cell.day} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`dc:border-t dc:border-divider-subtle dc:flex dc:items-center dc:px-gap16 dc:rounded-bl-box dc:rounded-br-box dc:w-full ${isArd ? 'dc:justify-between' : 'dc:justify-end'}`}
        style={{ paddingTop: 10, paddingBottom: 10 }}>
        {isArd && <CalendarLegend />}
        <button onClick={onClear} className="dc:font-montserrat dc:font-normal dc:text-xs dc:text-primary dc:leading-sm dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-0">
          Clear
        </button>
      </div>
    </div>
  )
}

function buildDefaultWeeks() {
  // February 2026: starts Thursday (Mon=0 index), 28 days
  // Week 1: null, null, null, 29(Jan), 30(Jan), 1, 2
  return [
    [null, null, null, { day: 29, state: 'disabled' }, { day: 30, state: 'disabled' }, { day: 1, state: 'start' }, { day: 2, state: 'between' }],
    [{ day: 3, state: 'between' }, { day: 4, state: 'between' }, { day: 5, state: 'between' }, { day: 6, state: 'between' }, { day: 7, state: 'between' }, { day: 8, state: 'between' }, { day: 9, state: 'between' }],
    [{ day: 10, state: 'between' }, { day: 11, state: 'between' }, { day: 12, state: 'between' }, { day: 13, state: 'between' }, { day: 14, state: 'between' }, { day: 15, state: 'between' }, { day: 16, state: 'between' }],
    [{ day: 17, state: 'between' }, { day: 18, state: 'between' }, { day: 19, state: 'end' }, { day: 20, state: 'default' }, { day: 21, state: 'default' }, { day: 22, state: 'default' }, { day: 23, state: 'default' }],
    [{ day: 24, state: 'default' }, { day: 25, state: 'default' }, { day: 26, state: 'default' }, { day: 27, state: 'default' }, { day: 28, state: 'default' }, { day: 29, state: 'default' }, { day: 30, state: 'default' }],
  ]
}
