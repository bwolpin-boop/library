import { useState } from 'react'
import { spacing } from '../../tokens.js'
import { Up } from './Up.jsx'
import { Down } from './Down.jsx'

export function Thumbs({ upCount, downCount, className }) {
  const [selected, setSelected] = useState(null) // null | 'up' | 'down'

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8 }}
      className={className}
    >
      <Up
        count={upCount}
        selected={selected === 'up'}
        onClick={() => setSelected(s => s === 'up' ? null : 'up')}
      />
      <Down
        count={downCount}
        selected={selected === 'down'}
        onClick={() => setSelected(s => s === 'down' ? null : 'down')}
      />
    </div>
  )
}
