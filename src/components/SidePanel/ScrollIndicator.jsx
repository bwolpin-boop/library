export function ScrollIndicator({
  count       = 12,    // total number of items
  activeIndex = 11,   // 0-based index of the active/current item (default: last)
  onSelect,           // optional click handler (index) => void
}) {
  return (
    <div className="dc:flex dc:flex-col dc:gap-gap8 dc:items-start dc:shrink-0">
      {Array.from({ length: count }, (_, i) => {
        const isActive = i === activeIndex
        return (
          <div
            key={i}
            onClick={onSelect ? () => onSelect(i) : undefined}
            className={`dc:w-[8px] dc:h-[2px] dc:rounded-[30px] dc:shrink-0 dc:transition-[background-color] dc:duration-150 ${isActive ? 'dc:bg-primary' : 'dc:bg-muted'}`}
            style={{ cursor: onSelect ? 'pointer' : 'default' }}
          />
        )
      })}
    </div>
  )
}
