import { useState } from 'react'

import sourceFound      from '../../assets/indicators/source-found.svg'
import accepted         from '../../assets/indicators/accepted.svg'
import dismissed        from '../../assets/indicators/dismissed.svg'
import nonApplicable    from '../../assets/indicators/non-applicable.svg'
import indicatorSource  from '../../assets/indicators/indicator-source.svg'
import sameAsPrevious   from '../../assets/indicators/same-as-previous-mds.svg'
import assessmentNeeded from '../../assets/indicators/assessment-needed.svg'
import missed           from '../../assets/indicators/missed.svg'

const icons = {
  'source found':         sourceFound,
  'accepted':             accepted,
  'dismissed':            dismissed,
  'non aplicable':        nonApplicable,
  'indicator source':     indicatorSource,
  'same as previous MDS': sameAsPrevious,
  'assessment needed':    assessmentNeeded,
  'missed':               missed,
}

const sizes = {
  small: 24,
  big:   32,
}

export function IndicatorDolphin({
  type = 'source found',
  size = 'small',
}) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const dim = sizes[size] ?? sizes.small
  const src = icons[type] ?? icons['source found']

  const scale = pressed ? 1 : hovered ? 1.1 : 1

  return (
    <img
      src={src}
      alt={type}
      style={{
        width: dim,
        height: dim,
        flexShrink: 0,
        cursor: 'pointer',
        transform: `scale(${scale})`,
        transition: 'transform 0.15s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    />
  )
}
