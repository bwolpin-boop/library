export function NewBadge({ label = 'New' }) {
  return (
    <div className="dc:inline-flex dc:items-center dc:justify-center dc:h-[24px] dc:px-gap8 dc:bg-purple-100 dc:rounded-rounded dc:shrink-0">
      <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:text-purple dc:leading-md">
        {label}
      </span>
    </div>
  )
}
