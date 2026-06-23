export function HippsLabel({ amount = '$646.37', code = 'AGSFG', className = '' }) {
  return (
    <div className={`dc:relative dc:w-8 ${className}`} style={{ height: '23px' }}>
      <div className="dc:absolute dc:inset-0 dc:flex dc:flex-col dc:items-center dc:justify-center dc:font-montserrat dc:font-medium dc:text-xxxs dc:text-center dc:whitespace-nowrap dc:text-muted" style={{ gap: '3px' }}>
        <span>{amount}</span>
        <span>{code}</span>
      </div>
    </div>
  )
}
