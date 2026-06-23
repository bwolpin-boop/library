import { NavIcon } from '../Icon/NavIcon.jsx'

function MdsAnswer({ answer = '1. Yes' }) {
  return (
    <div className="dc:flex dc:items-start dc:gap-gap4 dc:shrink-0">
      <span className="dc:font-montserrat dc:font-regular dc:italic dc:text-xs dc:leading-base dc:text-secondary" style={{ whiteSpace: 'pre' }}>
        {'Previous MDS Answer:  '}
      </span>
      <span className="dc:font-montserrat dc:font-semibold dc:italic dc:text-xs dc:leading-base dc:text-secondary dc:whitespace-nowrap">
        {answer}
      </span>
    </div>
  )
}

function InfoRow({ icon, text }) {
  return (
    <div className="dc:flex dc:items-center dc:gap-gap4 dc:shrink-0">
      <NavIcon name={icon} size={24} />
      <span className="dc:font-montserrat dc:font-regular dc:text-xs dc:leading-sm dc:text-primary dc:whitespace-nowrap">
        {text}
      </span>
    </div>
  )
}

export function SourceTitle({
  id            = '#K0520A2',
  sourceName    = 'IV Fluids in hospital',
  longTitle     = true,
  whichProduct  = 'dashboard',   // 'dashboard' | 'browser extension'
  mdsAnswer     = '1. Yes',
  patientName   = 'Garcian, Kola A., 4567',
  facilityName  = 'Beachgarden hostile facility New Jersey',
}) {
  const isBrowserExtension = whichProduct === 'browser extension'

  return (
    <div
      className="dc:flex dc:flex-col dc:gap-gap4 dc:items-start"
      style={{ wordBreak: isBrowserExtension ? 'break-word' : undefined }}
    >
      {/* Title row: ID + source name */}
      <div
        className="dc:flex dc:items-end dc:gap-gap8 dc:text-primary"
        style={{
          minWidth:  0,
          wordBreak: isBrowserExtension ? 'break-word' : undefined,
        }}
      >
        <span className="dc:font-montserrat dc:font-semibold dc:text-xl2 dc:shrink-0 dc:whitespace-nowrap" style={{ lineHeight: 'normal' }}>
          {id}
        </span>
        <span
          className="dc:font-montserrat dc:font-regular dc:text-base dc:whitespace-nowrap dc:overflow-hidden dc:[text-overflow:ellipsis] dc:shrink"
          style={{ lineHeight: '1.428', minWidth: 0 }}
        >
          {sourceName}
        </span>
      </div>

      {/* Subtitle row */}
      <div
        className={[
          'dc:flex dc:items-start dc:shrink-0',
          isBrowserExtension ? 'dc:flex-col dc:gap-0' : 'dc:flex-row dc:gap-gap4',
        ].join(' ')}
      >
        {whichProduct === 'dashboard' && (
          <MdsAnswer answer={mdsAnswer} />
        )}
        {isBrowserExtension && (
          <>
            <InfoRow icon="profile"   text={patientName} />
            <InfoRow icon="facility"  text={facilityName} />
          </>
        )}
      </div>

      {/* MDS answer row — browser extension only */}
      {isBrowserExtension && (
        <MdsAnswer answer={mdsAnswer} />
      )}
    </div>
  )
}
