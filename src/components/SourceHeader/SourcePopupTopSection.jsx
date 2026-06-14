import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { SourceTypeIcon } from '../Icon/SourceTypeIcon.jsx'
import { DcSuggests } from './DcSuggests.jsx'

// ── Internal sub-components ─────────────────────────────────────────────────

function QuestionTitle({ qCode, title, previousAnswer, truncate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap4 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: spacing.gap8, color: colors.primary }}>
        <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xl2, fontWeight: fontWeights.semibold, lineHeight: 'normal', whiteSpace: 'nowrap' }}>
          {qCode}
        </span>
        <span style={{
          fontFamily: fonts.montserrat, fontSize: fontSizes.base, fontWeight: fontWeights.regular, lineHeight: '1.428',
          whiteSpace: truncate ? 'nowrap' : undefined,
          overflow: truncate ? 'hidden' : undefined,
          textOverflow: truncate ? 'ellipsis' : undefined,
          maxWidth: truncate ? '120px' : undefined,
        }}>
          {title}
        </span>
      </div>
      <div style={{ display: 'flex', gap: spacing.gap4, alignItems: 'flex-start', color: colors.secondary, fontSize: fontSizes.xs, lineHeight: lineHeights.base }}>
        <span style={{ fontFamily: fonts.montserrat, fontWeight: fontWeights.regular, fontStyle: 'italic', whiteSpace: 'pre' }}>{'Previous MDS Answer:  '}</span>
        <span style={{ fontFamily: fonts.montserrat, fontWeight: fontWeights.semibold, fontStyle: 'italic', whiteSpace: 'nowrap' }}>{previousAnswer}</span>
      </div>
    </div>
  )
}

function SourceFilterTab({ label, sourceType, selected = false, onClick }) {
  const hasIcon = Boolean(sourceType)
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: hasIcon ? spacing.gap4 : undefined,
        paddingLeft: hasIcon ? spacing.gap4 : spacing.gap8,
        paddingRight: spacing.gap8,
        paddingTop: '2px',
        paddingBottom: '2px',
        height: '22px',
        borderRadius: radii.boxSm,
        backgroundColor: colors.white,
        border: `0.5px solid ${selected ? colors.primary : colors.dividerSubtle}`,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        outline: 'none',
      }}
    >
      {hasIcon && <SourceTypeIcon type={sourceType} size={14} />}
      <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.primary }}>
        {label}
      </span>
    </button>
  )
}

function Divider() {
  return (
    <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{ width: '1px', height: '100%', backgroundColor: colors.dividerSubtle }} />
    </div>
  )
}

function IconBtn({ name, size = 24, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: spacing.gap4, borderRadius: radii.box, border: 'none', background: 'none', cursor: 'pointer', flexShrink: 0 }}
    >
      <NavIcon name={name} size={size} />
    </button>
  )
}

// ── Defaults ────────────────────────────────────────────────────────────────

const DEFAULT_TABS = [
  { label: 'All' },
  { label: 'Progress Notes', sourceType: 'Progress Notes' },
  { label: 'Assessments',    sourceType: 'Assessments', selected: true },
  { label: 'Mars',           sourceType: 'Mars' },
  { label: 'Therapy Docs',   sourceType: 'Therapy Docs' },
  { label: 'Progress Notes', sourceType: 'Progress Notes' },
]

// ── Main export ─────────────────────────────────────────────────────────────

export function SourcePopupTopSection({
  size              = 'Default',   // 'Default' | 'small'
  qCode             = '#K0520A2',
  questionTitle     = 'IV Fluids in hospital',
  previousAnswer    = '1. Yes',
  hasLittleMan      = true,
  assignAndCalendar = false,
  assignee          = 'No Assignee',
  dueDate           = 'Mar 23, 2025',
  sourceTabs        = DEFAULT_TABS,
  answerType        = 'yes-dc',
  onClose,
  onTabClick,
  onVerifyAll,
  onComments,
}) {
  const isSmall = size === 'small'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap32, width: '100%' }}>

      {/* ── Top row: title left, DcSuggests + close right ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: spacing.gap16, width: '100%' }}>

        {/* Left: question info + optional assign section */}
        <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', gap: spacing.gap16, minWidth: '1px', overflow: 'hidden' }}>
          <QuestionTitle
            qCode={qCode}
            title={questionTitle}
            previousAnswer={previousAnswer}
            truncate={isSmall}
          />

          {assignAndCalendar && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap8, width: '233px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>Assignees</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8 }}>
                  <NavIcon name="profile" size={24} />
                  <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>{assignee}</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>Due Date</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8 }}>
                  <NavIcon name="arrow-right" size={24} />
                  <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.secondary, whiteSpace: 'nowrap' }}>{dueDate}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: DcSuggests + close button */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          {hasLittleMan && (
            <DcSuggests size={isSmall ? 'small' : 'big'} answerType={answerType} />
          )}
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: 0, right: 0, background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', transform: hasLittleMan ? 'translate(0, -4px)' : 'none' }}
          >
            <NavIcon name="close" size={24} />
          </button>
        </div>
      </div>

      {/* ── Bottom row: source filter tabs + action icons ── */}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>

        {/* Scrollable tabs with right fade */}
        <div style={{ position: 'relative', flex: '1 0 0', minWidth: '1px', overflow: 'hidden', height: '24px', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: spacing.gap4, alignItems: 'center' }}>
            {sourceTabs.map((tab, i) => (
              <SourceFilterTab
                key={i}
                label={tab.label}
                sourceType={tab.sourceType}
                selected={tab.selected ?? false}
                onClick={() => onTabClick?.(i)}
              />
            ))}
          </div>
          {/* Right overflow gradient fade */}
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '47px', background: 'linear-gradient(to right, rgba(255,255,255,0) 11%, white 41%)', pointerEvents: 'none' }} />
          {/* Right arrow indicator */}
          <div style={{ position: 'absolute', right: '4px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <NavIcon name="arrow-right" size={16} />
          </div>
        </div>

        {/* Divider + icon buttons */}
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Divider />
          <IconBtn name="verify" size={24} onClick={onVerifyAll} />
          <IconBtn name="reaction-comment" size={24} onClick={onComments} />
        </div>
      </div>

    </div>
  )
}
