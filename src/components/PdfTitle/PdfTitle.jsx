import { useState } from 'react'

export function PdfTitle({ title = 'Diagnosis hospital_records file hypervention .pdf', onClick }) {
  const [pressed, setPressed] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseDown={() => onClick && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={`dc:flex dc:items-center dc:gap-gap8 dc:h-[34px] dc:px-gap24 dc:border-b dc:border-divider-subtle dc:box-border dc:transition-[background-color] dc:duration-100 ${onClick ? (pressed ? 'dc:bg-surface-active' : 'dc:hover:bg-surface dc:bg-transparent') : 'dc:bg-transparent'}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis">
        {title}
      </span>
    </div>
  )
}
