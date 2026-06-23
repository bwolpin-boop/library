import { useState } from 'react'
import { colors }           from '../../tokens.js'
import { NavIcon }          from '../Icon/NavIcon.jsx'
import { ThumbsComponent }  from '../Icon/ThumbsComponent.jsx'
import { Comments }         from '../Icon/Comments.jsx'
import { SideBarTitle }     from '../SideBarTitle/SideBarTitle.jsx'
import { SourceTypeTabs }   from '../SourceTypeTab/SourceTypeTabs.jsx'
import { SourceTypeTable }  from '../SourceTypeTable/SourceTypeTable.jsx'
import { Button }           from '../Button/Button.jsx'
import { WithTooltip }      from '../Tooltip/WithTooltip.jsx'

// ─── Primary Diagnosis Banner ────────────────────────────────────────────────

function PrimaryDiagnosisBanner({
  title            = 'Set as primary diagnosis',
  description      = 'This is one of 4 options for primary diagnosis. The other 4 are: ',
  relatedDiagnoses = ['hypertension', 'anemia', 'bloodpressure'],
  onSetAsPrimary,
}) {
  return (
    <div className="dc:flex dc:items-center dc:justify-between dc:gap-gap16 dc:px-gap16 dc:py-gap12 dc:border dc:border-divider-subtle dc:rounded-box dc:bg-white dc:shrink-0">
      <div className="dc:flex dc:flex-col dc:flex-1 dc:min-w-0" style={{ gap: 0 }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:text-primary dc:whitespace-nowrap">
          {title}
        </span>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-md dc:text-primary">
          {description}
          {relatedDiagnoses.map((d, i) => (
            <span key={d}>
              <span className="dc:underline">{d}</span>
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
  return (
    <div className="dc:flex dc:flex-col dc:gap-gap4 dc:shrink-0">
      <div className="dc:flex dc:items-center dc:gap-gap4">
        <NavIcon name="ai" size={24} />
        <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:text-primary dc:whitespace-nowrap">
          Ai Summary:
        </span>
      </div>
      <p className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:m-0">{text}</p>
    </div>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getUniqueSourceTypes(tables) {
  const seen = new Set()
  return (tables ?? []).reduce((acc, t) => {
    if (!t) return acc
    if (!seen.has(t.sourceType)) { seen.add(t.sourceType); acc.push(t.sourceType) }
    return acc
  }, [])
}

function dedupeBySourceType(tables) {
  const seen = new Set()
  return (tables ?? []).filter(t => {
    if (!t) return false
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
  sourceCount        = 23,
  commentCount       = 4,
  initialActiveTab   = 'sources',  // 'sources' | 'comments'
  onCommentsClick,
  onSourceClick,
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
  forcedRowStatus,   // synced from SourcePopup's deniedByType
  // Container
  style,
  className,
}) {
  const uniqueTypes  = getUniqueSourceTypes(tables)
  const [selectedTab, setSelectedTab] = useState(null)
  const [activeTab,   setActiveTab]   = useState(initialActiveTab)

  function handleSourceClick() {
    setActiveTab('sources')
    onSourceClick?.()
  }

  function handleCommentsClick() {
    setActiveTab('comments')
    onCommentsClick?.()
  }

  const visibleTables = !selectedTab || selectedTab === 'All'
    ? dedupeBySourceType(tables)
    : tables.filter(t => t.sourceType === selectedTab)

  return (
    <div
      className={[className, 'sp-scroll', 'dc:flex dc:flex-col dc:h-full dc:overflow-y-auto dc:border-l dc:border-divider-subtle dc:bg-white dc:box-border dc:gap-gap32'].filter(Boolean).join(' ')}
      style={{
        padding: '16px 24px 24px',
        ...style,
      }}
    >
      <style>{`
        .sp-scroll::-webkit-scrollbar { width: 8px; }
        .sp-scroll::-webkit-scrollbar-track { background: transparent; }
        .sp-scroll::-webkit-scrollbar-thumb { background: ${colors.disabled}; border-radius: 2px; border-right: 4px solid transparent; background-clip: content-box; }
        .sp-scroll::-webkit-scrollbar-thumb:hover { background: ${colors.dividerDisabled}; background-clip: content-box; }
      `}</style>
      {/* ── Top section ── */}
      <div className="dc:flex dc:flex-col dc:gap-gap16 dc:shrink-0">

        {/* Row 1: title + close */}
        <div
          className="dc:flex dc:items-start dc:justify-between dc:sticky dc:top-0 dc:bg-white dc:z-10"
          style={{ paddingBottom: '16px', marginBottom: '-16px' }}
        >
          <SideBarTitle label={docTitle} onClick={onExport} />
          <button
            onClick={onClose}
            className="dc:bg-transparent dc:border-none dc:cursor-pointer dc:p-0 dc:flex dc:shrink-0"
          >
            <NavIcon name="close" size={24} />
          </button>
        </div>

        {/* Row 2: source tab + comments tab + thumbs — sources/comments are mutually exclusive */}
        <div className="dc:flex dc:items-center dc:gap-gap16 dc:shrink-0">
          <WithTooltip label={`${sourceCount} sources found`}>
            <div
              onClick={handleSourceClick}
              className={`dc:flex dc:items-center dc:gap-gap4 dc:cursor-pointer dc:p-[2px] dc:rounded-icon dc:transition-[background-color] dc:duration-100 ${activeTab === 'sources' ? 'dc:bg-surface-pressed' : 'dc:bg-transparent'}`}
            >
              <NavIcon name="dolphincare-logo" size={20} />
              <span className="dc:font-montserrat dc:text-sm dc:font-medium dc:text-secondary dc:whitespace-nowrap" style={{ lineHeight: 'normal' }}>
                {sourceCount}
              </span>
            </div>
          </WithTooltip>
          <Comments count={commentCount} selected={activeTab === 'comments'} onClick={handleCommentsClick} />
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
      <div className="dc:flex dc:flex-col dc:gap-gap8 dc:shrink-0">

        <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:whitespace-nowrap dc:shrink-0" style={{ color: '#323338' }}>
          {tables.length} Source{tables.length !== 1 ? 's' : ''}
        </span>

        <SourceTypeTabs
          tabs={uniqueTypes}
          selectedTab={selectedTab ?? 'All'}
          onTabSelect={t => setSelectedTab(t === 'All' ? null : t)}
          size="small"
        />

        <div className="dc:flex dc:flex-col dc:gap-gap12">
          {visibleTables.map((table, i) => (
            <SourceTypeTable
              key={`${table.sourceType}-${i}`}
              sourcePopup={true}
              hoverable={false}
              forcedRowStatus={forcedRowStatus}
              onHeaderClick={() => {/* TODO: open PCC side panel */}}
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
