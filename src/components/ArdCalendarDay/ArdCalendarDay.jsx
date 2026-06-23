export function ArdCalendarDay({ state = 'default', type = 'number', day = 30, className = '' }) {
  const isStart    = state === 'start'
  const isBetween  = state === 'between'
  const isHover    = state === 'hover'
  const isDisabled = state === 'disabled'
  const isEmpty    = type === 'empty'
  const isLetter   = type === 'letter'

  const bgClass = isStart   ? 'dc:bg-purple'
                : isBetween ? 'dc:bg-purple-tint'
                : ''

  const borderClass = isHover ? 'dc:border dc:border-purple' : ''

  const textClass = isStart    ? 'dc:text-white dc:font-semibold dc:leading-md'
                  : isDisabled ? 'dc:text-secondary dc:font-normal dc:leading-sm'
                  : isLetter   ? 'dc:text-secondary dc:font-medium dc:leading-none'
                  : isEmpty    ? 'dc:text-secondary dc:font-normal dc:leading-sm dc:opacity-0'
                  :              'dc:text-primary dc:font-normal dc:leading-sm'

  const textSize = isLetter ? 'dc:text-xxxs' : 'dc:text-xs'

  return (
    <div className={`dc:flex dc:flex-col dc:items-center dc:justify-center dc:rounded-rounded dc:size-6 ${bgClass} ${borderClass} ${className}`}>
      <span className={`dc:font-montserrat dc:text-center dc:whitespace-nowrap dc:shrink-0 ${textSize} ${textClass}`}>
        {day}
      </span>
    </div>
  )
}
