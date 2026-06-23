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
    <div className="dc:flex dc:items-center dc:gap-[4px] dc:shrink-0">
      <div className={`dc:w-[6px] dc:h-[6px] dc:rounded-full dc:shrink-0 ${isStrong ? 'dc:bg-green' : 'dc:bg-secondary'}`} />
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">
        {isStrong ? 'Strong' : 'Moderate'}
      </span>
    </div>
  )
}

function AcuteBadge({ label = 'Acute' }) {
  return (
    <div className="dc:inline-flex dc:items-center dc:justify-center dc:px-[9px] dc:rounded-box-sm dc:shrink-0" style={{ backgroundColor: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.09)' }}>
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:text-primary dc:whitespace-nowrap" style={{ lineHeight: '22px' }}>
        {label}
      </span>
    </div>
  )
}

function PrimaryDiagLabel({ type = 'primary' }) {
  const isNta = type === 'nta'
  return (
    <div
      className="dc:inline-flex dc:items-center dc:justify-center dc:h-[20px] dc:shrink-0"
      style={{
        padding: '2px 5px',
        borderRadius: '6.5px',
        backgroundColor: isNta ? 'rgba(125,217,232,0.1)' : 'rgba(168,82,255,0.1)',
      }}
    >
      <span
        className="dc:font-montserrat dc:font-semibold dc:text-xxxs dc:whitespace-nowrap"
        style={{
          lineHeight: 'normal',
          color: isNta ? '#65b7c5' : '#a852ff',
        }}
      >
        {isNta ? 'NTA' : 'Primary'}
      </span>
    </div>
  )
}

function NewBadge() {
  return (
    <div className="dc:inline-flex dc:items-center dc:justify-center dc:h-[21px] dc:p-[4px] dc:rounded-rounded dc:bg-purple dc:w-[40px] dc:shrink-0">
      <span className="dc:font-montserrat dc:font-semibold dc:text-white dc:whitespace-nowrap" style={{ fontSize: '7px', lineHeight: 'normal' }}>
        NEW
      </span>
    </div>
  )
}

function DateBadge({ date = '12/04/26' }) {
  return (
    <div className="dc:inline-flex dc:items-center dc:gap-gap4 dc:px-gap8 dc:rounded-[34px] dc:bg-disabled dc:shrink-0">
      <NavIcon name="info-small" size={16} />
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">
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

  const baseClass = 'dc:inline-flex dc:items-center dc:relative dc:shrink-0'

  // ── Dashboard / Default ──────────────────────────────────────────────────

  if (isDashboardDefault) {
    if (type === 'Icon') {
      return (
        <div className={`${baseClass} dc:py-[10px]`} style={{ height: cellH }}>
          <NavIcon name={navIconLeft || 'profile'} size={24} />
        </div>
      )
    }

    if (type === 'verify') {
      return (
        <div className={`${baseClass} dc:gap-gap8 dc:py-[10px]`} style={{ height: cellH }}>
          {deny    && <VerifyAndDeny type="deny"   size="small" />}
          {verify  && <VerifyAndDeny type="verify" size="small" />}
          <span className="dc:font-montserrat dc:text-sm dc:font-regular dc:leading-base dc:text-primary dc:whitespace-nowrap">{text}</span>
        </div>
      )
    }

    // Primary Text (default)
    return (
      <div className={`${baseClass} dc:gap-gap8 dc:py-[10px]`} style={{ height: cellH }}>
        {navIconLeft  && <NavIcon name={navIconLeft}  size={24} />}
        <span className="dc:font-montserrat dc:text-sm dc:font-regular dc:leading-base dc:text-primary dc:whitespace-nowrap">{text}</span>
        {navIconRight && <NavIcon name={navIconRight} size={24} />}
      </div>
    )
  }

  // ── PCC / Small ──────────────────────────────────────────────────────────

  if (type === 'verify and deny and pending') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <GroupOfVerifyDenyAndPending hasPending={hasPending} />
      </div>
    )
  }

  if (type === 'verify') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        {deny   && <VerifyAndDeny type="deny"   size="small" />}
        {verify && <VerifyAndDeny type="verify" size="small" />}
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{text}</span>
      </div>
    )
  }

  if (type === 'source') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <div className="dc:inline-flex dc:items-center dc:shrink-0" style={{ padding: '3px', borderRadius: '2.25px', backgroundColor: 'rgba(160,40,255,0.1)' }}>
          <SourceTypeIcon type={sourceType} size={18} />
        </div>
      </div>
    )
  }

  if (type === 'indicator') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <Indicator count={indicatorCount} state={indicatorState} tooltip={false} />
      </div>
    )
  }

  if (type === 'status') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <Status status={status} size="small" />
      </div>
    )
  }

  if (type === 'ipa state') {
    return (
      <div className={baseClass} style={{ height: cellH, gap: 0 }}>
        <Status status={ipaStatus} size="small" />
        <NavIcon name="info-small" size={16} />
      </div>
    )
  }

  if (type === 'MDS answer') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <MdsAndDcAnswer type={mdsType} />
      </div>
    )
  }

  if (type === 'MDS answer to answer') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        <MdsAndDcAnswer type={mdsFromType} />
        <NavIcon name="arrow-right" size={12} />
        <MdsAndDcAnswer type={mdsType} />
      </div>
    )
  }

  if (type === 'categories') {
    return (
      <div className={`${baseClass} dc:gap-gap4 dc:cursor-pointer`} style={{ height: cellH }}>
        {categories.map((cat, i) => (
          <CategoryTag key={i} type={cat} />
        ))}
      </div>
    )
  }

  if (type === 'strength') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <StrengthDot type={strengthType} />
      </div>
    )
  }

  if (type === 'strength 2') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        <StrengthDot type={strengthType} />
        {navIconRight && <NavIcon name={navIconRight} size={16} />}
      </div>
    )
  }

  if (type === 'medical label') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <AcuteBadge label={medicalLabel} />
      </div>
    )
  }

  if (type === 'NTA') {
    return (
      <div className={`${baseClass} dc:gap-gap4`} style={{ height: cellH }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">#{diagText}</span>
        <PrimaryDiagLabel type="nta" />
      </div>
    )
  }

  if (type === 'Primary diag') {
    return (
      <div className={`${baseClass} dc:gap-gap4`} style={{ height: cellH }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{diagText}</span>
        <PrimaryDiagLabel type="primary" />
      </div>
    )
  }

  if (type === 'number and text') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{number}</span>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{text}</span>
      </div>
    )
  }

  if (type === 'patient name') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{text}</span>
        {hasNewTag && <NewBadge />}
      </div>
    )
  }

  if (type === '2 lines paragraph') {
    return (
      <div className={baseClass} style={{ height: cellH, width: '71px' }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:flex-wrap">{text}</span>
      </div>
    )
  }

  if (type === '1 lines $') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-secondary dc:whitespace-nowrap">{fromAmount}</span>
        <NavIcon name="arrow-right" size={12} />
        <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-sm dc:text-primary dc:whitespace-nowrap">{toAmount}</span>
      </div>
    )
  }

  if (type === 'date filter') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <DateBadge date={date} />
      </div>
    )
  }

  if (type === 'checkbox') {
    return (
      <div className={baseClass} style={{ height: cellH }}>
        <NavIcon name="checkbox-filled-small" size={16} />
      </div>
    )
  }

  if (type === 'IV fluids +') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{ivText}</span>
        <NavIcon name="more" size={16} />
      </div>
    )
  }

  if (type === 'IV fluids -') {
    return (
      <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{ivText}</span>
        <NavIcon name="less" size={16} />
      </div>
    )
  }

  if (type === '2 icons') {
    return (
      <div className={`${baseClass} dc:flex-col dc:h-[32px]`}>
        <div className="dc:flex dc:items-center dc:w-full dc:px-gap8" style={{ flex: '1 0 0' }}>
          {iconTop    && <NavIcon name={iconTop}    size={24} />}
          {iconBottom && <NavIcon name={iconBottom} size={16} />}
        </div>
      </div>
    )
  }

  // Primary Text (PCC small, default)
  return (
    <div className={`${baseClass} dc:gap-gap8`} style={{ height: cellH }}>
      {navIconLeft  && <NavIcon name={navIconLeft}  size={20} />}
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{text}</span>
      {navIconRight && <NavIcon name={navIconRight} size={20} />}
    </div>
  )
}
