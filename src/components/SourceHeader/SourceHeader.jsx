import { useState } from 'react'
import { colors } from '../../tokens.js'
import { SourceTypeIcon }              from '../Icon/SourceTypeIcon.jsx'
import { QkNumberTabs }               from '../QkNumberTabs/QkNumberTabs.jsx'
import { GroupOfVerifyDenyAndPending } from '../VerifyDeny/GroupOfVerifyDenyAndPending.jsx'

function Strength({ label = 'Strong' }) {
  return (
    <div className="dc:inline-flex dc:items-center dc:gap-gap4 dc:shrink-0">
      <div className="dc:w-1.5 dc:h-1.5 dc:rounded-full dc:bg-green dc:shrink-0" />
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{label}</span>
    </div>
  )
}

function Divider() {
  return (
    <div className="dc:w-gap24 dc:h-gap24 dc:flex dc:items-center dc:justify-center dc:shrink-0">
      <div className="dc:w-px dc:h-full dc:bg-divider-subtle" />
    </div>
  )
}

export function SourceHeader({
  type          = 'sources',  // 'sources' | 'ipa' | 'prescrub'
  sourceType    = 'IV Fluids',
  uploadedDate  = '15/12/2025',
  docName,
  tabs          = ['M1200B', 'M1201A', 'M1202C'],
  activeTabIndex = 0,
  strengthLabel = 'Strong',
  forcedStatus,
  active = false,
  onTabClick,
  onDeny,
  onVerify,
  onClick,
}) {
  const [hovered,       setHovered]       = useState(false)
  const [pressed,       setPressed]       = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(activeTabIndex)

  const isSources = type === 'sources'
  const isIpa     = type === 'ipa'
  const hasRight  = isSources || isIpa

  function handleTabClick(i) {
    setSelectedIndex(i)
    onTabClick?.(i)
  }

  return (
    <div
      onClick={onClick}
      className="dc:flex dc:items-center dc:border-b dc:border-divider-subtle dc:box-border dc:overflow-hidden dc:gap-gap8"
      style={{
        padding:         isIpa ? '4px 24px' : '6.5px 24px',
        height:          isIpa ? 32 : 34,
        backgroundColor: onClick && pressed ? colors.surfaceActive : 'transparent',
        cursor:          onClick ? 'pointer' : 'default',
        transition:      'background-color 0.1s',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      {/* Left: always visible — icon + date + optional doc name */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        onMouseDown={() => onClick && setPressed(true)}
        onMouseUp={() => setPressed(false)}
        className="dc:flex dc:items-center dc:gap-gap8 dc:shrink-0"
      >
        <SourceTypeIcon type={sourceType} size={16} />
        <span
          className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap"
          style={{ textDecoration: (onClick && hovered) ? 'underline' : 'none' }}
        >
          Uploaded date: {uploadedDate}
        </span>
        {isSources && docName && (
          <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">
            {docName}
          </span>
        )}
      </div>

      {/* Right: tabs clip from the left, icons always visible at the edge */}
      {hasRight && (
        <div
          className="dc:flex dc:items-center dc:flex-1 dc:overflow-hidden"
          style={{ minWidth: 0 }}
          onClick={e => e.stopPropagation()}
          onMouseDown={e => e.stopPropagation()}
        >
          {/* IPA: strength label + icons */}
          {isIpa && (
            <>
              <Strength label={strengthLabel} />
              <Divider />
              <GroupOfVerifyDenyAndPending hasPending={false} forcedStatus={forcedStatus} onDeny={onDeny} onVerify={onVerify} />
            </>
          )}

          {/* Sources: label + tabs clip from left, icons pinned right */}
          {isSources && (
            <>
              {/* Tabs + label section — justify-end makes leftmost items clip first */}
              <div className="dc:flex dc:flex-1 dc:items-center dc:justify-end dc:gap-1.5 dc:relative dc:overflow-hidden" style={{ minWidth: 0 }}>
                <div
                  className="dc:absolute dc:left-0 dc:top-0 dc:bottom-0 dc:pointer-events-none dc:z-10"
                  style={{ width: '48px', background: 'linear-gradient(to right, white, rgba(255,255,255,0))' }}
                />
                <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:italic dc:text-secondary dc:whitespace-nowrap dc:shrink-0">
                  This source also answers:
                </span>
                {tabs.map((tab, i) => (
                  <div key={i} className="dc:shrink-0">
                    <QkNumberTabs
                      label={tab}
                      size="small"
                      state={i === selectedIndex ? 'clicked' : 'default'}
                      onClick={() => handleTabClick(i)}
                    />
                  </div>
                ))}
              </div>

              {/* Icons — always visible, never clipped */}
              <div className="dc:flex dc:items-center dc:shrink-0">
                <Divider />
                <GroupOfVerifyDenyAndPending hasPending={false} forcedStatus={forcedStatus} onDeny={onDeny} onVerify={onVerify} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
