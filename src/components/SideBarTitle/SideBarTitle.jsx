import { useState } from 'react'
import { NavIcon } from '../Icon/NavIcon.jsx'

export function SideBarTitle({
  label   = 'HOW Bridgeview.pdf',
  onClick,
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="dc:flex dc:items-center dc:gap-[4px] dc:w-full dc:min-w-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="dc:font-montserrat dc:text-lg dc:font-semibold dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis dc:shrink"
        style={{
          lineHeight: 'normal',
          minWidth: 0,
          flexShrink: 1,
          boxShadow: hovered ? `inset 0 -1px 0 0 #323338` : 'none',
        }}
      >
        {label}
      </span>

      <button
        onClick={onClick}
        className={`dc:inline-flex dc:items-center dc:justify-center dc:w-[24px] dc:h-[24px] dc:shrink-0 dc:border-none dc:rounded-box-sm dc:p-0 dc:overflow-hidden dc:transition-[background-color] dc:duration-100 ${hovered ? 'dc:bg-surface' : 'dc:bg-transparent'}`}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        <NavIcon name="export" size={24} />
      </button>
    </div>
  )
}
