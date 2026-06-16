import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, spacing } from '../../tokens.js'
import { QkNumberTabs } from '../QkNumberTabs/QkNumberTabs.jsx'
import { GroupOfVerifyDenyAndPending } from '../VerifyDeny/GroupOfVerifyDenyAndPending.jsx'

function Divider() {
  return (
    <div
      style={{
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div style={{ width: '1px', height: '100%', backgroundColor: colors.dividerSubtle }} />
    </div>
  )
}

function Strength({ label = 'Strong' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: colors.green,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: fonts.montserrat,
          fontSize: fontSizes.xs,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights.md,
          color: colors.primary,
          whiteSpace: 'nowrap',
        }}
      >
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
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: spacing.gap16 }}>
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
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>
        <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              overflow: 'hidden',
              width: '313px',
            }}
          >
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
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '40px',
              background: 'linear-gradient(to left, white 40%, rgba(255,255,255,0))',
              pointerEvents: 'none',
            }}
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
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      {hasText && (
        <span
          style={{
            fontFamily: fonts.montserrat,
            fontSize: fontSizes.xs,
            fontWeight: fontWeights.regular,
            fontStyle: 'italic',
            lineHeight: lineHeights.base,
            color: colors.secondary,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          This source also answers:
        </span>
      )}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>
        {hasTabs && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
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
