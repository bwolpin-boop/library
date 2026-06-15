import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon }          from '../Icon/NavIcon.jsx'
import { ThumbsComponent }  from '../Icon/ThumbsComponent.jsx'
import { Comments }         from '../Icon/Comments.jsx'
import { SideBarTitle }     from '../SideBarTitle/SideBarTitle.jsx'
import { SourceTypeTabs }   from '../SourceTypeTab/SourceTypeTabs.jsx'
import { SourceTypeTable }  from '../SourceTypeTable/SourceTypeTable.jsx'
import { Button }           from '../Button/Button.jsx'

// ─── Primary Diagnosis Banner ────────────────────────────────────────────────

function PrimaryDiagnosisBanner({
  title            = 'Set as primary diagnosis',
  description      = 'This is one of 4 options for primary diagnosis. The other 4 are: ',
  relatedDiagnoses = ['hypertension', 'anemia', 'bloodpressure'],
  onSetAsPrimary,
}) {
  const text12 = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.md, color: colors.primary }

  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      gap:            spacing.gap16,
      padding:        `${spacing.gap12} ${spacing.gap16}`,
      border:         `1px solid ${colors.dividerSubtle}`,
      borderRadius:   radii.box,
      backgroundColor: colors.white,
      flexShrink:     0,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: '1 0 0', minWidth: 0 }}>
        <span style={{ ...text12, fontWeight: fontWeights.semibold, lineHeight: lineHeights.md, whiteSpace: 'nowrap' }}>
          {title}
        </span>
        <span style={{ ...text12, lineHeight: lineHeights.md }}>
          {description}
          {relatedDiagnoses.map((d, i) => (
            <span key={d}>
              <span style={{ textDecoration: 'underline' }}>{d}</span>
              {i < relatedDiagnoses.length - 1 ? ', ' : ''}
            </span>
          ))}
        </span>
      </div>
      <Button label="Set as Primary" type="primary" size="small" onClick={onSetAsPrimary} />
    </div>
  )
}

// ─── AI Summary Section ───────────────────────────────────────────────────────

function AiSummary({ text }) {
  const text12 = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm, color: colors.primary }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap4, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap4 }}>
        <NavIcon name="ai" size={24} />
        <span style={{ ...text12, fontWeight: fontWeights.semibold, lineHeight: lineHeights.md, whiteSpace: 'nowrap' }}>
          Ai Summary:
        </span>
      </div>
      <p style={{ ...text12, margin: 0 }}>{text}</p>
    </div>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getUniqueSourceTypes(tables) {
  const seen = new Set()
  return tables.reduce((acc, t) => {
    if (!seen.has(t.sourceType)) { seen.add(t.sourceType); acc.push(t.sourceType) }
    return acc
  }, [])
}

function dedupeBySourceType(tables) {
  const seen = new Set()
  return tables.filter(t => {
    if (seen.has(t.sourceType)) return false
    seen.add(t.sourceType)
    return true
  })
}

// ─── Default data ─────────────────────────────────────────────────────────────

const LOREM = 'The patient presented with a closed dislocation of the right hip, which was initially encountered on 07/22/2025. This condition was resolved during the subsequent hospital stay following surgical intervention.'

const DEFAULT_TABLES = [
  {
    sourceType:   'Progress Notes',
    tableType:    'highlighted-text',
    uploadedDate: '15/12/2025',
    docName:      'progress_notes_dec_2025.pdf',
    text:         LOREM,
  },
  {
    sourceType:   'Assessments',
    tableType:    'doc-quote',
    uploadedDate: '14/12/2025',
    docName:      'mds_assessment_q4_2025.pdf',
    text:         'Patient scored 3/15 on the MDS cognitive performance scale. Short-term memory deficits noted. Requires verbal cueing for daily activities.',
    isQuote:      true,
  },
]

// ─── Main component ───────────────────────────────────────────────────────────

export function SidePanel({
  // Header
  docTitle      = 'HOW Bridgeview.pdf',
  onClose,
  onExport,
  // Actions row
  sourceCount   = 23,
  commentCount  = 4,
  onCommentsClick,
  onUpClick,
  onDownClick,
  // Primary diagnosis banner
  showPrimaryDiagnosis = true,
  primaryDiagnosisTitle,
  primaryDiagnosisDesc,
  relatedDiagnoses,
  onSetAsPrimary,
  // AI Summary
  showAiSummary = true,
  aiSummaryText = LOREM,
  // Source tables (same shape as SourcePopup)
  tables        = DEFAULT_TABLES,
  // Container
  style,
  className,
}) {
  const uniqueTypes  = getUniqueSourceTypes(tables)
  const [selectedTab, setSelectedTab] = useState(null)

  const visibleTables = !selectedTab || selectedTab === 'All'
    ? dedupeBySourceType(tables)
    : tables.filter(t => t.sourceType === selectedTab)

  return (
    <div
      className={[className, 'sp-scroll'].filter(Boolean).join(' ')}
      style={{
        display:         'flex',
        flexDirection:   'column',
        height:          '100%',
        overflowY:       'auto',
        borderLeft:      `1px solid ${colors.dividerSubtle}`,
        padding:         spacing.gap24,
        backgroundColor: colors.white,
        boxSizing:       'border-box',
        gap:             spacing.gap32,
        ...style,
      }}
    >
      {/* ── Top section ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap16, flexShrink: 0 }}>

        {/* Row 1: title + close */}
        <div style={{
          display:         'flex',
          alignItems:      'flex-start',
          justifyContent:  'space-between',
          position:        'sticky',
          top:             0,
          backgroundColor: colors.white,
          zIndex:          10,
          paddingBottom:   spacing.gap16,
          marginBottom:    `-${spacing.gap16}`,
        }}>
          <SideBarTitle label={docTitle} onClick={onExport} />
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexShrink: 0 }}
          >
            <NavIcon name="close" size={24} />
          </button>
        </div>

        {/* Row 2: source count + comments + thumbs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap16, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap4 }}>
            <NavIcon name="dolphincare-logo" size={24} />
            <span style={{
              fontFamily: fonts.montserrat, fontSize: fontSizes.sm,
              fontWeight: fontWeights.medium, lineHeight: 'normal',
              color: colors.secondary, whiteSpace: 'nowrap',
            }}>
              {sourceCount}
            </span>
          </div>
          <Comments count={commentCount} onClick={onCommentsClick} />
          <ThumbsComponent onUpClick={onUpClick} onDownClick={onDownClick} />
        </div>

        {showPrimaryDiagnosis && (
          <PrimaryDiagnosisBanner
            title={primaryDiagnosisTitle}
            description={primaryDiagnosisDesc}
            relatedDiagnoses={relatedDiagnoses}
            onSetAsPrimary={onSetAsPrimary}
          />
        )}

        {showAiSummary && <AiSummary text={aiSummaryText} />}
      </div>

      {/* ── Source tables section ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap8, flexShrink: 0 }}>

        <span style={{
          fontFamily:  fonts.montserrat,
          fontSize:    fontSizes.xs,
          fontWeight:  fontWeights.semibold,
          lineHeight:  lineHeights.md,
          color:       '#323338',
          whiteSpace:  'nowrap',
          flexShrink:  0,
        }}>
          {tables.length} Source{tables.length !== 1 ? 's' : ''}
        </span>

        <SourceTypeTabs
          tabs={['All', ...uniqueTypes]}
          selectedTab={selectedTab ?? 'All'}
          onTabSelect={t => setSelectedTab(t === 'All' ? null : t)}
          size="small"
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap12 }}>
          {visibleTables.map((table, i) => (
            <SourceTypeTable
              key={`${table.sourceType}-${i}`}
              sourcePopup={true}
              tableType={table.tableType}
              sourceType={table.sourceType}
              uploadedDate={table.uploadedDate}
              docName={table.docName}
              rows={table.rows}
              text={table.text}
              isQuote={table.isQuote}
              aiTitle={table.aiTitle}
              hasTitle={false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
