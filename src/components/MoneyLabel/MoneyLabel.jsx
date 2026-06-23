export function MoneyLabel({ value = 500 }) {
  const isNegative = value < 0
  const display = isNegative
    ? `-$${Math.abs(value).toLocaleString()}`
    : `+$${value.toLocaleString()}`

  return (
    <div
      className={`dc:inline-flex dc:items-center dc:justify-center dc:h-[24px] dc:px-gap8 dc:rounded-box-sm dc:shrink-0 ${isNegative ? 'dc:bg-error-200' : 'dc:bg-green-100'}`}
    >
      <span className={`dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:whitespace-nowrap ${isNegative ? 'dc:text-error' : 'dc:text-green'}`}>
        {display}
      </span>
    </div>
  )
}
