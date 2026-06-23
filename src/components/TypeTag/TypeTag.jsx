export function TypeTag({ label = 'Acute' }) {
  return (
    <div
      className="dc:inline-flex dc:items-center dc:justify-center dc:px-[9px] dc:rounded-box-sm dc:shrink-0"
      style={{ backgroundColor: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.09)' }}
    >
      <span
        className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-md dc:whitespace-nowrap"
        style={{ color: '#000000' }}
      >
        {label}
      </span>
    </div>
  )
}
