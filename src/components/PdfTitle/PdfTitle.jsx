import { useState } from 'react'
import { colors, textStyles, spacing } from '../../tokens.js'

export function PdfTitle({ title = 'Diagnosis hospital_records file hypervention .pdf', onClick }) {
  const [hovered,  setHovered]  = useState(false)
  const [pressed,  setPressed]  = useState(false)

  const bg = onClick
    ? pressed ? colors.surfaceActive : hovered ? colors.surface : 'transparent'
    : 'transparent'

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => onClick && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => onClick && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.gap8,
        height: '34px',
        padding: `0 ${spacing.gap24}`,
        borderBottom: `1px solid ${colors.dividerSubtle}`,
        boxSizing: 'border-box',
        backgroundColor: bg,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background-color 0.1s',
      }}
    >
      <span
        style={{
          ...textStyles.body12Regular,
          color: colors.secondary,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {title}
      </span>
    </div>
  )
}
