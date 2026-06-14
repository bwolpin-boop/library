import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon }                from '../Icon/NavIcon.jsx'
import { SourceTypeIcon }         from '../Icon/SourceTypeIcon.jsx'
import { ThumbsComponent }        from '../Icon/ThumbsComponent.jsx'
import { Comments }               from '../Icon/Comments.jsx'
import { PdfTitle }               from '../PdfTitle/PdfTitle.jsx'
import { SourcePopupTopSection }  from '../SourceHeader/SourcePopupTopSection.jsx'

// ─── Source card ─────────────────────────────────────────────────────────────

function Bullet({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.gap4, padding: `0 ${spacing.gap24}` }}>
      <div style={{
        width: '6px', height: '6px', borderRadius: '50%',
        backgroundColor: colors.primary,
        flexShrink: 0, marginTop: '7px',
      }} />
      <span style={{
        fontFamily:  fonts.montserrat,
        fontWeight:  fontWeights.regular,
        fontStyle:   'italic',
        fontSize:    fontSizes.xs,
        lineHeight:  lineHeights.base,
        color:       colors.primary,
        flex: '1 0 0',
      }}>
        {text}
      </span>
    </div>
  )
}

function ViewDocButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display:    'inline-flex',
        alignItems: 'center',
        gap:        spacing.gap4,
        background: 'none',
        border:     'none',
        cursor:     'pointer',
        padding:    0,
        flexShrink: 0,
      }}
    >
      <NavIcon name="export" size={24} />
      <span style={{
        fontFamily:  fonts.montserrat,
        fontWeight:  fontWeights.regular,
        fontSize:    fontSizes.base,
        lineHeight:  '1.428',
        color:       colors.primary,
      }}>
        View doc
      </span>
    </button>
  )
}

export function SourceCard({
  sourceType   = 'Documents',
  uploadDate   = '15/12/2025',
  pdfTitle     = 'Diagnosis hospital_records file hypervention .pdf',
  quotes       = [
    '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."',
    '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."',
    '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."',
  ],
  commentCount = 4,
  upCount,
  downCount,
  onViewDoc,
  onUpClick,
  onDownClick,
  onCommentsClick,
}) {
  return (
    <div style={{
      display:      'flex',
      flexDirection: 'column',
      gap:          spacing.gap12,
      border:       `1px solid ${colors.dividerSubtle}`,
      borderRadius: radii.box,
      width:        '100%',
      overflow:     'hidden',
    }}>
      {/* Card header — source icon + upload date */}
      <div style={{
        display:      'flex',
        alignItems:   'center',
        gap:          spacing.gap8,
        height:       '34px',
        padding:      `0 ${spacing.gap24}`,
        borderBottom: `1px solid ${colors.dividerSubtle}`,
        flexShrink:   0,
      }}>
        {/* Small source icon */}
        <div style={{
          display:         'inline-flex',
          alignItems:      'center',
          padding:         '2px',
          borderRadius:    radii.icon,
          backgroundColor: 'rgba(0, 214, 109, 0.1)',
          flexShrink:      0,
          width:           '16px',
          height:          '16px',
        }}>
          <SourceTypeIcon type={sourceType} size={12} />
        </div>
        <span style={{
          fontFamily:  fonts.montserrat,
          fontWeight:  fontWeights.regular,
          fontSize:    fontSizes.xs,
          lineHeight:  lineHeights.sm,
          color:       colors.primary,
          whiteSpace:  'nowrap',
        }}>
          Uploaded date: {uploadDate}
        </span>
      </div>

      {/* PDF filename */}
      <PdfTitle title={pdfTitle} />

      {/* Quote bullets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap8 }}>
        {quotes.map((q, i) => <Bullet key={i} text={q} />)}
      </div>

      {/* Footer — thumbs + comments + view doc */}
      <div style={{
        display:      'flex',
        alignItems:   'center',
        justifyContent: 'space-between',
        padding:      `0 ${spacing.gap24} ${spacing.gap12}`,
        flexShrink:   0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap16 }}>
          <ThumbsComponent upCount={upCount} downCount={downCount} onUpClick={onUpClick} onDownClick={onDownClick} />
          <Comments count={commentCount} onClick={onCommentsClick} />
        </div>
        <ViewDocButton onClick={onViewDoc} />
      </div>
    </div>
  )
}

// ─── Main popup ───────────────────────────────────────────────────────────────

const DEFAULT_CARDS = [
  { sourceType: 'Documents', uploadDate: '15/12/2025', pdfTitle: 'Diagnosis hospital_records file hypervention .pdf', commentCount: 4 },
  { sourceType: 'Documents', uploadDate: '15/12/2025', pdfTitle: 'Diagnosis hospital_records file hypervention .pdf', commentCount: 4 },
  { sourceType: 'Documents', uploadDate: '15/12/2025', pdfTitle: 'Diagnosis hospital_records file hypervention .pdf', commentCount: 4 },
]

export function SourcePopup({
  // Header props (passed to SourcePopupTopSection)
  qCode          = '#K0520A2',
  questionTitle  = 'IV Fluids in hospital',
  previousAnswer = '1. Yes',
  hasLittleMan   = true,
  sourceTabs,
  answerType     = 'yes-dc',
  onClose,
  onTabClick,
  onVerifyAll,
  onComments,
  // Card list
  cards          = DEFAULT_CARDS,
  onCardViewDoc,
  onCardUpClick,
  onCardDownClick,
  onCardComments,
  // Container
  style,
  className,
}) {
  return (
    <div
      className={className}
      style={{
        display:        'flex',
        flexDirection:  'column',
        gap:            spacing.gap16,
        width:          '922px',
        height:         '730px',
        padding:        spacing.gap24,
        backgroundColor: colors.white,
        border:         `1px solid ${colors.divider}`,
        borderRadius:   radii.box,
        overflow:       'hidden',
        boxSizing:      'border-box',
        ...style,
      }}
    >
      {/* Sticky header */}
      <div style={{ flexShrink: 0, backgroundColor: colors.white }}>
        <SourcePopupTopSection
          qCode={qCode}
          questionTitle={questionTitle}
          previousAnswer={previousAnswer}
          hasLittleMan={hasLittleMan}
          sourceTabs={sourceTabs}
          answerType={answerType}
          onClose={onClose}
          onTabClick={onTabClick}
          onVerifyAll={onVerifyAll}
          onComments={onComments}
        />
      </div>

      {/* Scrollable card list */}
      <div style={{
        flex:         '1 0 0',
        overflowY:    'auto',
        display:      'flex',
        flexDirection: 'column',
        gap:          spacing.gap24,
        minHeight:    0,
      }}>
        {cards.map((card, i) => (
          <SourceCard
            key={i}
            sourceType={card.sourceType}
            uploadDate={card.uploadDate}
            pdfTitle={card.pdfTitle}
            quotes={card.quotes}
            commentCount={card.commentCount}
            upCount={card.upCount}
            downCount={card.downCount}
            onViewDoc={() => onCardViewDoc?.(i, card)}
            onUpClick={() => onCardUpClick?.(i, card)}
            onDownClick={() => onCardDownClick?.(i, card)}
            onCommentsClick={() => onCardComments?.(i, card)}
          />
        ))}
      </div>
    </div>
  )
}
