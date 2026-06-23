const labels = { H: 'H', '2': '2', Y: 'Y', pending: '—' }

const leftOffsets = { H: -5, '2': -3, Y: -4, pending: -6 }

export function H2YLetters({ type = 'H', before = 'before' }) {
  const isAfter = before === 'after'

  return (
    <div className="dc:overflow-hidden dc:relative dc:shrink-0" style={{ width: '24px', height: '24px' }}>
      <p
        className={`dc:absolute dc:whitespace-nowrap ${isAfter ? 'dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:text-purple' : 'dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary'}`}
        style={{
          margin: 0,
          left: `calc(50% + ${leftOffsets[type] ?? -5}px)`,
          top: `calc(50% + ${isAfter ? -11 : -9}px)`,
        }}
      >
        {labels[type] ?? type}
      </p>
    </div>
  )
}
