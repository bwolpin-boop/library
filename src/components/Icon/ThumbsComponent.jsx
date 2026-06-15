import { useState } from 'react'
import { colors } from '../../tokens.js'
import { Up } from './Up.jsx'
import { Down } from './Down.jsx'

function Divider() {
  return (
    <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ width: '1px', height: '100%', backgroundColor: colors.dividerSubtle }} />
    </div>
  )
}

export function ThumbsComponent({ upCount, downCount, onUpClick, onDownClick, upPressed = false, downPressed = false }) {
  const [selected, setSelected] = useState(() => upPressed ? 'up' : downPressed ? 'down' : null)

  const handleUp = () => {
    setSelected(s => s === 'up' ? null : 'up')
    onUpClick?.()
  }

  const handleDown = () => {
    setSelected(s => s === 'down' ? null : 'down')
    onDownClick?.()
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
      <Up   count={upCount}   selected={selected === 'up'}   onClick={handleUp} />
      <Divider />
      <Down count={downCount} selected={selected === 'down'} onClick={handleDown} />
    </div>
  )
}
