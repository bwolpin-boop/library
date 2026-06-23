import { useState } from 'react'
import { NewBadge } from '../Icon/NewBadge'
import { IconButton } from '../Icon/IconButton'

function SecondaryBtn({ label, onClick }) {
  const [pressed, setPressed] = useState(false)
  const [hovered, setHovered] = useState(false)

  const bg = pressed
    ? 'dc:bg-surface-pressed'
    : hovered
    ? 'dc:bg-surface'
    : 'dc:bg-white'

  return (
    <button
      className={`dc:flex-1 dc:h-[32px] dc:flex dc:items-center dc:justify-center dc:px-gap12 dc:border dc:border-divider-disabled dc:rounded-rounded dc:font-montserrat dc:text-xs dc:font-semibold dc:text-purple dc:cursor-pointer dc:[transition:background-color_0.15s] ${bg}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {label}
    </button>
  )
}

function PrimaryBtn({ label, onClick }) {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      className={`dc:flex-1 dc:h-[32px] dc:flex dc:items-center dc:justify-center dc:px-gap12 dc:border-0 dc:rounded-rounded dc:font-montserrat dc:text-xs dc:font-semibold dc:text-white dc:cursor-pointer dc:[transition:background-color_0.15s] ${pressed ? 'dc:bg-purple-pressed' : 'dc:bg-purple dc:hover:bg-purple-hover'}`}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      {label}
    </button>
  )
}

export function TooltipWithImage({
  variant = 'image-below',
  badge = 'New',
  title = '',
  body = '',
  image = null,
  primaryLabel = 'Button',
  secondaryLabel = 'Button',
  onPrimary,
  onSecondary,
  onClose,
}) {
  const textBlock = (
    <div className="dc:flex dc:flex-col dc:gap-gap16 dc:items-start dc:w-full dc:shrink-0">
      {badge && <NewBadge label={badge} />}
      <div className="dc:flex dc:flex-col dc:gap-gap16 dc:items-start dc:w-full">
        <p className="dc:font-montserrat dc:text-xl2 dc:font-semibold dc:text-primary dc:w-full">{title}</p>
        <p className="dc:font-montserrat dc:text-sm dc:font-regular dc:text-primary dc:leading-base dc:w-full">{body}</p>
      </div>
    </div>
  )

  const imageBlock = (
    <div className="dc:w-full dc:h-[355px] dc:bg-surface dc:border dc:border-divider-subtle dc:rounded-box dc:shrink-0 dc:overflow-hidden">
      {image && (
        typeof image === 'string'
          ? <img src={image} alt="" className="dc:w-full dc:h-full dc:object-cover" />
          : image
      )}
    </div>
  )

  return (
    <div className="dc:relative dc:flex dc:flex-col dc:gap-gap32 dc:items-center dc:p-gap24 dc:bg-white dc:border dc:border-divider-subtle dc:rounded-box dc:w-[594px] dc:[box-shadow:0px_0px_7.5px_rgba(0,0,0,0.25)]">
      {variant === 'image-below' ? textBlock : imageBlock}
      {variant === 'image-below' ? imageBlock : textBlock}
      <div className="dc:flex dc:gap-gap8 dc:items-center dc:w-full dc:shrink-0">
        <SecondaryBtn label={secondaryLabel} onClick={onSecondary} />
        <PrimaryBtn label={primaryLabel} onClick={onPrimary} />
      </div>
      <div className="dc:absolute dc:top-[8px] dc:right-[5px]">
        <IconButton name="close" size={24} onClick={onClose} />
      </div>
    </div>
  )
}
