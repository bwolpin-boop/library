import { useState } from 'react'
import { QkNumberTabs } from '../QkNumberTabs/QkNumberTabs.jsx'
import { GroupOfVerifyDenyAndPending } from '../VerifyDeny/GroupOfVerifyDenyAndPending.jsx'

function Divider() {
  return (
    <div className="dc:w-gap24 dc:h-gap24 dc:flex dc:items-center dc:justify-center dc:shrink-0">
      <div className="dc:w-px dc:h-full dc:bg-divider-subtle" />
    </div>
  )
}

function Strength({ label = 'Strong' }) {
  return (
    <div className="dc:inline-flex dc:items-center dc:gap-gap4 dc:shrink-0">
      <div className="dc:w-1.5 dc:h-1.5 dc:rounded-full dc:bg-green dc:shrink-0" />
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-md dc:text-primary dc:whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export function SourceAlsoAnswers({
  type = 'Source popup',       // 'Source popup' | 'IPA'
  hasText = true,
  hasVerifyAndDeny = true,
  hasTabs = true,              // set false to hide tabs (keep VD only)
  qkScroll = false,
  tabs = ['M1200B', 'M1200B', 'M1200B'],
  activeTabIndex = 0,
  strengthLabel = 'Strong',
  forcedStatus,
  onTabClick,
  onDeny,
  onVerify,
}) {
  const [selectedIndex, setSelectedIndex] = useState(activeTabIndex)

  function handleTabClick(i) {
    setSelectedIndex(i)
    onTabClick?.(i)
  }

  const isIPA = type === 'IPA'

  if (isIPA) {
    return (
      <div className="dc:inline-flex dc:items-center dc:gap-gap16">
        <Strength label={strengthLabel} />
        {hasVerifyAndDeny && (
          <GroupOfVerifyDenyAndPending hasPending={false} forcedStatus={forcedStatus} onDeny={onDeny} onVerify={onVerify} />
        )}
      </div>
    )
  }

  // Source popup — scrollable variant
  if (qkScroll) {
    return (
      <div className="dc:inline-flex dc:items-center dc:gap-0">
        <div className="dc:relative dc:inline-flex dc:items-center">
          <div className="dc:inline-flex dc:items-center dc:gap-1.5 dc:overflow-hidden" style={{ width: '313px' }}>
            {tabs.map((tab, i) => (
              <QkNumberTabs
                key={i}
                label={tab}
                size="small"
                state={i === selectedIndex ? 'clicked' : 'default'}
                onClick={() => handleTabClick(i)}
              />
            ))}
          </div>
          <div
            className="dc:absolute dc:right-0 dc:top-0 dc:bottom-0 dc:pointer-events-none"
            style={{ width: '40px', background: 'linear-gradient(to left, white 40%, rgba(255,255,255,0))' }}
          />
        </div>
        {hasVerifyAndDeny && <Divider />}
        {hasVerifyAndDeny && (
          <GroupOfVerifyDenyAndPending hasPending={false} forcedStatus={forcedStatus} onDeny={onDeny} onVerify={onVerify} />
        )}
      </div>
    )
  }

  // Source popup — standard variant
  return (
    <div className="dc:inline-flex dc:items-center dc:gap-1.5">
      {hasText && (
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:italic dc:leading-base dc:text-secondary dc:whitespace-nowrap dc:shrink-0">
          This source also answers:
        </span>
      )}
      <div className="dc:inline-flex dc:items-center dc:gap-0">
        {hasTabs && (
          <div className="dc:inline-flex dc:items-center dc:gap-1.5">
            {tabs.map((tab, i) => (
              <QkNumberTabs
                key={i}
                label={tab}
                size="small"
                state={i === selectedIndex ? 'clicked' : 'default'}
                onClick={() => handleTabClick(i)}
              />
            ))}
          </div>
        )}
        {hasVerifyAndDeny && <Divider />}
        {hasVerifyAndDeny && (
          <GroupOfVerifyDenyAndPending hasPending={false} forcedStatus={forcedStatus} onDeny={onDeny} onVerify={onVerify} />
        )}
      </div>
    </div>
  )
}
