import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing, strokeWidths, textStyles } from '../../tokens.js'
import { NavIcon }                    from '../Icon/NavIcon.jsx'
import { CategoryTag }                from '../CategoryTag/CategoryTag.jsx'
import { VerifyAndDeny }              from '../VerifyDeny/VerifyAndDeny.jsx'
import { GroupOfVerifyDenyAndPending } from '../VerifyDeny/GroupOfVerifyDenyAndPending.jsx'
import { MdsAndDcAnswer }             from '../Icon/MdsAndDcAnswer.jsx'
import { Status }                     from '../Status/Status.jsx'
import { SourceTypeIcon }             from '../Icon/SourceTypeIcon.jsx'
import { Indicator }                  from '../Icon/Indicator.jsx'

// ─── Internal helpers ────────────────────────────────────────────────────────

function StrengthDot({ type = 'strong' }) {
  const isStrong = type === 'strong'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
      <div style={{
        width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
        backgroundColor: isStrong ? colors.green : colors.secondary,
      }} />
      <span style={{ ...textStyles.body12Regular, color: colors.primary, whiteSpace: 'nowrap' }}>
        {isStrong ? 'Strong' : 'Moderate'}
      </span>
    </div>
  )
}

function AcuteBadge({ label = 'Acute' }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 9px', borderRadius: radii.boxSm,
      backgroundColor: 'rgba(0,0,0,0.04)',
      border: '1px solid rgba(0,0,0,0.09)',
      flexShrink: 0,
    }}>
      <span style={{ ...textStyles.body12Regular, color: colors.primary, whiteSpace: 'nowrap', lineHeight: '22px' }}>
        {label}
      </span>
    </div>
  )
}

function PrimaryDiagLabel({ type = 'primary' }) {
  const isNta = type === 'nta'
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: '2px 5px', borderRadius: '6.5px', height: '20px', flexShrink: 0,
      backgroundColor: isNta ? 'rgba(125,217,232,0.1)' : 'rgba(168,82,255,0.1)',
    }}>
      <span style={{
        fontFamily: fonts.montserrat, fontWeight: fontWeights.semibold,
        fontSize: fontSizes.xxxs, lineHeight: 'normal',
        color: isNta ? '#65b7c5' : colors.purple, whiteSpace: 'nowrap',
      }}>
        {isNta ? 'NTA' : 'Primary'}
      </span>
    </div>
  )
}

function NewBadge() {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      height: '21px', padding: '4px', borderRadius: radii.rounded,
      backgroundColor: colors.purple, width: '40px', flexShrink: 0,
    }}>
      <span style={{
        fontFamily: fonts.montserrat, fontWeight: fontWeights.semibold,
        fontSize: '7px', color: colors.white, whiteSpace: 'nowrap', lineHeight: 'normal',
      }}>
        NEW
      </span>
    </div>
  )
}

function DateBadge({ date = '12/04/26' }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: spacing.gap4,
      padding: '0 8px', borderRadius: '34px',
      backgroundColor: colors.disabled, flexShrink: 0,
    }}>
      <NavIcon name="little-questionmark" size={24} />
      <span style={{ ...textStyles.body12Regular, color: colors.primary, whiteSpace: 'nowrap' }}>
        {date}
      </span>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function RowCells({
  type = 'Primary Text',
  location = 'dashboard',    // 'dashboard' | 'PCC'
  size = 'Default',          // 'Default' | 'small'
  // Primary Text
  text = 'Sodium Chloride',
  navIconLeft,               // NavIcon name
  navIconRight,              // NavIcon name
  // Verify
  deny = true,
  verify = true,
  // Categories
  categories = ['nursing', 'nursing', 'nursing', 'nursing'],
  // Status
  status = 'dismissed',
  // MDS
  mdsType = 'yes-dc',
  mdsFromType = 'yes-dc',
  // Source
  sourceType = 'IV Fluids',
  // Indicator
  indicatorCount = 15,
  indicatorState = 'todo',
  // Strength
  strengthType = 'strong',
  // Medical label
  medicalLabel = 'Acute',
  // Patient name
  hasNewTag = false,
  // Number + text
  number = 23,
  // 1 lines $
  fromAmount = '$100',
  toAmount = '$567',
  // Date
  date = '12/04/26',
  // Diagnosis
  diagText = 'HDSGH',
  // Verify and deny
  hasPending = true,
  // IV fluids
  ivText = 'pg. 1, 2, 3',
  // 2 icons
  iconTop,
  iconBottom,
  // IPA state
  ipaStatus = 'dismissed',
}) {
  const isDashboardDefault = location === 'dashboard' && size === 'Default'
  const isPccSmall         = location === 'PCC' && size === 'small'

  const cellH    = isDashboardDefault ? '50px' : '32px'
  const textSm   = { ...textStyles.body12Regular, color: colors.primary, whiteSpace: 'nowrap' }
  const textBase = { ...textStyles.body14Regular, color: colors.primary, whiteSpace: 'nowrap' }

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    height: cellH,
    position: 'relative',
    flexShrink: 0,
  }

  // ── Dashboard / Default ──────────────────────────────────────────────────

  if (isDashboardDefault) {
    if (type === 'Icon') {
      return (
        <div style={{ ...base, padding: '10px 0' }}>
          <NavIcon name={navIconLeft || 'dolphincare-logo'} size={24} />
        </div>
      )
    }

    if (type === 'verify') {
      return (
        <div style={{ ...base, gap: spacing.gap8, padding: '10px 0' }}>
          {deny    && <VerifyAndDeny type="deny"   size="small" />}
          {verify  && <VerifyAndDeny type="verify" size="small" />}
          <span style={textBase}>{text}</span>
        </div>
      )
    }

    // Primary Text (default)
    return (
      <div style={{ ...base, gap: spacing.gap8, padding: '10px 0' }}>
        {navIconLeft  && <NavIcon name={navIconLeft}  size={24} />}
        <span style={textBase}>{text}</span>
        {navIconRight && <NavIcon name={navIconRight} size={24} />}
      </div>
    )
  }

  // ── PCC / Small ──────────────────────────────────────────────────────────

  if (type === 'verify and deny and pending') {
    return (
      <div style={{ ...base }}>
        <GroupOfVerifyDenyAndPending hasPending={hasPending} />
      </div>
    )
  }

  if (type === 'verify') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        {deny   && <VerifyAndDeny type="deny"   size="small" />}
        {verify && <VerifyAndDeny type="verify" size="small" />}
        <span style={textSm}>{text}</span>
      </div>
    )
  }

  if (type === 'source') {
    return (
      <div style={{ ...base }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', padding: '3px',
          borderRadius: '2.25px', backgroundColor: 'rgba(160,40,255,0.1)', flexShrink: 0,
        }}>
          <SourceTypeIcon type={sourceType} size={18} />
        </div>
      </div>
    )
  }

  if (type === 'indicator') {
    return (
      <div style={{ ...base }}>
        <Indicator count={indicatorCount} state={indicatorState} tooltip={false} />
      </div>
    )
  }

  if (type === 'status') {
    return (
      <div style={{ ...base }}>
        <Status status={status} size="small" />
      </div>
    )
  }

  if (type === 'ipa state') {
    return (
      <div style={{ ...base, gap: spacing.gap0 }}>
        <Status status={ipaStatus} size="small" />
        <NavIcon name="little-questionmark" size={16} />
      </div>
    )
  }

  if (type === 'MDS answer') {
    return (
      <div style={{ ...base }}>
        <MdsAndDcAnswer type={mdsType} />
      </div>
    )
  }

  if (type === 'MDS answer to answer') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        <MdsAndDcAnswer type={mdsFromType} />
        <NavIcon name="arrow-right" size={12} />
        <MdsAndDcAnswer type={mdsType} />
      </div>
    )
  }

  if (type === 'categories') {
    return (
      <div style={{ ...base, gap: spacing.gap4, cursor: 'pointer' }}>
        {categories.map((cat, i) => (
          <CategoryTag key={i} type={cat} />
        ))}
      </div>
    )
  }

  if (type === 'strength') {
    return (
      <div style={{ ...base }}>
        <StrengthDot type={strengthType} />
      </div>
    )
  }

  if (type === 'strength 2') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        <StrengthDot type={strengthType} />
        {navIconRight && <NavIcon name={navIconRight} size={16} />}
      </div>
    )
  }

  if (type === 'medical label') {
    return (
      <div style={{ ...base }}>
        <AcuteBadge label={medicalLabel} />
      </div>
    )
  }

  if (type === 'NTA') {
    return (
      <div style={{ ...base, gap: spacing.gap4 }}>
        <span style={textSm}>#{diagText}</span>
        <PrimaryDiagLabel type="nta" />
      </div>
    )
  }

  if (type === 'Primary diag') {
    return (
      <div style={{ ...base, gap: spacing.gap4 }}>
        <span style={textSm}>{diagText}</span>
        <PrimaryDiagLabel type="primary" />
      </div>
    )
  }

  if (type === 'number and text') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        <span style={textSm}>{number}</span>
        <span style={textSm}>{text}</span>
      </div>
    )
  }

  if (type === 'patient name') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        <span style={textSm}>{text}</span>
        {hasNewTag && <NewBadge />}
      </div>
    )
  }

  if (type === '2 lines paragraph') {
    return (
      <div style={{ ...base, width: '71px' }}>
        <span style={{ ...textSm, whiteSpace: 'normal' }}>{text}</span>
      </div>
    )
  }

  if (type === '1 lines $') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        <span style={{ ...textSm, color: colors.secondary }}>{fromAmount}</span>
        <NavIcon name="arrow-right" size={12} />
        <span style={{ ...textSm, fontWeight: fontWeights.semibold }}>{toAmount}</span>
      </div>
    )
  }

  if (type === 'date filter') {
    return (
      <div style={{ ...base }}>
        <DateBadge date={date} />
      </div>
    )
  }

  if (type === 'checkbox') {
    return (
      <div style={{ ...base }}>
        <NavIcon name="checkbox-filled-small" size={16} />
      </div>
    )
  }

  if (type === 'IV fluids +') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        <span style={textSm}>{ivText}</span>
        <NavIcon name="plus-small" size={16} />
      </div>
    )
  }

  if (type === 'IV fluids -') {
    return (
      <div style={{ ...base, gap: spacing.gap8 }}>
        <span style={textSm}>{ivText}</span>
        <NavIcon name="close" size={16} />
      </div>
    )
  }

  if (type === '2 icons') {
    return (
      <div style={{ ...base, flexDirection: 'column', height: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: '1 0 0', width: '100%', padding: '0 8px' }}>
          {iconTop    && <NavIcon name={iconTop}    size={24} />}
          {iconBottom && <NavIcon name={iconBottom} size={16} />}
        </div>
      </div>
    )
  }

  // Primary Text (PCC small, default)
  return (
    <div style={{ ...base, gap: spacing.gap8 }}>
      {navIconLeft  && <NavIcon name={navIconLeft}  size={20} />}
      <span style={textSm}>{text}</span>
      {navIconRight && <NavIcon name={navIconRight} size={20} />}
    </div>
  )
}
