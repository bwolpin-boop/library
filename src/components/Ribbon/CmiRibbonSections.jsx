import { colors, fonts, radii } from '../../tokens.js'
import { Section } from './Section.jsx'

const DEFAULT_CMI_SECTIONS = [
  { letter: 'A', state: 'disabled' },
  { letter: 'B', state: 'disabled' },
  { letter: 'D', type: 'verify' },
  { letter: 'E', state: 'default', badge: 1 },
  { letter: 'H', state: 'default', badge: 1 },
  { letter: 'I', type: 'deny' },
  { letter: 'L', state: 'default', badge: 1 },
  { letter: 'Q', state: 'disabled' },
]

export function CmiRibbonSections({
  label = 'Nursing (H)',
  selected = true,
  sections = DEFAULT_CMI_SECTIONS,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: selected ? '6px' : undefined,
        padding: '8px',
        borderRadius: radii.boxSm,
        backgroundColor: selected ? colors.white : 'transparent',
        border: selected ? `1px solid ${colors.dividerSubtle}` : 'none',
        cursor: onClick ? 'pointer' : 'default',
        flexShrink: 0,
      }}
    >
      <p style={{
        fontFamily: fonts.inter,
        fontSize: '12px',
        fontWeight: 400,
        color: colors.primary,
        whiteSpace: 'nowrap',
        margin: 0,
        lineHeight: 'normal',
        flexShrink: 0,
      }}>
        {label}
      </p>

      {selected && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '15px' }}>
          {sections.map(({ letter, state = 'disabled', type = 'letter', badge }, i) => (
            <Section
              key={`${letter}-${i}`}
              letter={letter}
              type={type}
              state={state}
              size="small"
              badge={badge}
            />
          ))}
        </div>
      )}
    </div>
  )
}
