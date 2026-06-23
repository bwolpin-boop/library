import { NavIcon } from '../Icon/NavIcon.jsx'

export function HeaderCells({
  label   = 'Facilities',
  variant = 'default',    // 'default' | 'empty'
}) {
  const isEmpty = variant === 'empty'

  return (
    <div
      className="dc:flex dc:items-center"
      style={{
        gap:     isEmpty ? 0 : 4,
        padding: isEmpty ? '12px 24px' : '8px 0',
      }}
    >
      <span
        className={[
          'dc:font-montserrat dc:font-medium dc:text-secondary dc:whitespace-nowrap dc:shrink-0',
          isEmpty ? 'dc:text-xs dc:font-semibold dc:opacity-0' : 'dc:text-xxxs dc:font-medium dc:opacity-100',
        ].join(' ')}
        style={{
          lineHeight:    'normal',
          textTransform: isEmpty ? 'capitalize' : 'none',
        }}
      >
        {label}
      </span>
      {!isEmpty && <NavIcon name="sort-arrows" size={12} />}
    </div>
  )
}
