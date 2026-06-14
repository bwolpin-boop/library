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

export function ThumbsComponent({
  upCount,
  downCount,
  upPressed = false,
  downPressed = false,
  onUpClick,
  onDownClick,
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
      <Up count={upCount} pressed={upPressed} onClick={onUpClick} />
      <Divider />
      <Down count={downCount} pressed={downPressed} onClick={onDownClick} />
    </div>
  )
}
