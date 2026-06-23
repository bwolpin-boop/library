import { useState, useEffect } from 'react'
import { Up } from './Up.jsx'
import { Down } from './Down.jsx'

function Divider() {
  return (
    <div className="dc:w-[24px] dc:h-[24px] dc:flex dc:items-center dc:justify-center dc:shrink-0">
      <div className="dc:w-[1px] dc:h-full dc:bg-divider-subtle" />
    </div>
  )
}

export function ThumbsComponent({ upCount, downCount, onUpClick, onDownClick, upPressed = false, downPressed = false }) {
  const [selected, setSelected] = useState(() => upPressed ? 'up' : downPressed ? 'down' : null)

  // Keep in sync when the external vote state changes or the overlay remounts
  useEffect(() => {
    setSelected(upPressed ? 'up' : downPressed ? 'down' : null)
  }, [upPressed, downPressed])

  const handleUp = () => {
    setSelected(s => s === 'up' ? null : 'up')
    onUpClick?.()
  }

  const handleDown = () => {
    setSelected(s => s === 'down' ? null : 'down')
    onDownClick?.()
  }

  return (
    <div className="dc:inline-flex dc:items-center dc:shrink-0">
      <Up   count={upCount}   selected={selected === 'up'}   onClick={handleUp} />
      <Divider />
      <Down count={downCount} selected={selected === 'down'} onClick={handleDown} />
    </div>
  )
}
