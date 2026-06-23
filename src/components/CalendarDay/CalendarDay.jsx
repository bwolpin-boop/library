export function CalendarDay({ state = 'default', type = 'number', day = 30, className = '' }) {
  const isLetter  = type === 'letter'
  const isNumber  = type === 'number'
  const isEmpty   = type === 'empty'
  const isStart   = state === 'start'
  const isEnd     = state === 'end'
  const isBetween = state === 'between'
  const isHover   = state === 'hover'
  const isDefault = state === 'default'
  const isDisabled = state === 'disabled'

  const containerBase = 'dc:flex dc:flex-col dc:items-center dc:justify-center dc:w-8'

  const containerVariant = (() => {
    if (isLetter)              return 'dc:p-gap4 dc:gap-gap4'
    if (isStart)               return 'dc:h-6 dc:bg-purple dc:rounded-tl-box dc:rounded-bl-box'
    if (isEnd)                 return 'dc:h-6 dc:bg-purple dc:rounded-tr-box dc:rounded-br-box'
    if (isBetween)             return 'dc:h-6 dc:bg-purple-tint'
    if (isHover)               return 'dc:h-6 dc:border dc:border-purple dc:rounded-rounded'
    return                            'dc:h-6'
  })()

  const textBase = 'dc:font-montserrat dc:text-center dc:whitespace-nowrap dc:shrink-0'

  const textVariant = (() => {
    if (isLetter)                  return 'dc:text-xxxs dc:font-medium dc:text-secondary dc:leading-none'
    if (isStart || isEnd)          return 'dc:text-xs dc:font-semibold dc:text-white dc:leading-md'
    if (isDisabled)                return 'dc:text-xs dc:font-normal dc:text-secondary dc:leading-sm'
    if (isEmpty)                   return 'dc:text-xs dc:font-normal dc:text-secondary dc:leading-sm dc:opacity-0'
    return                                'dc:text-xs dc:font-normal dc:text-primary dc:leading-sm'
  })()

  return (
    <div className={`${containerBase} ${containerVariant} ${className}`}>
      <span className={textBase + ' ' + textVariant}>
        {day}
      </span>
    </div>
  )
}
