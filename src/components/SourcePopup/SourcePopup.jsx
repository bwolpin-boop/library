import { useState, useRef, useCallback, useEffect } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon }                from '../Icon/NavIcon.jsx'
import { SourceTypeIcon }         from '../Icon/SourceTypeIcon.jsx'
import { ThumbsComponent }        from '../Icon/ThumbsComponent.jsx'
import { Comments }               from '../Icon/Comments.jsx'
import { PdfTitle }               from '../PdfTitle/PdfTitle.jsx'
import { SourcePopupTopSection, SourceTabsBar } from '../SourceHeader/SourcePopupTopSection.jsx'
import { SourceTypeTable }        from '../SourceTypeTable/SourceTypeTable.jsx'
import { SidePanel }              from '../SidePanel/SidePanel.jsx'

// ─── SourceCard — kept for standalone use ────────────────────────────────────

function Bullet({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.gap4, padding: `0 ${spacing.gap24}` }}>
      <div style={{
        width: '6px', height: '6px', borderRadius: '50%',
        backgroundColor: colors.primary,
        flexShrink: 0, marginTop: '7px',
      }} />
      <span style={{
        fontFamily: fonts.montserrat,
        fontWeight: fontWeights.regular,
        fontStyle:  'italic',
        fontSize:   fontSizes.xs,
        lineHeight: lineHeights.base,
        color:      colors.primary,
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
        display: 'inline-flex', alignItems: 'center', gap: spacing.gap4,
        background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0,
      }}
    >
      <NavIcon name="export" size={24} />
      <span style={{
        fontFamily: fonts.montserrat, fontWeight: fontWeights.regular,
        fontSize: fontSizes.base, lineHeight: '1.428', color: colors.primary,
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
    '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."',
    '"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."',
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
      display: 'flex', flexDirection: 'column', gap: spacing.gap12,
      border: `1px solid ${colors.dividerSubtle}`, borderRadius: radii.box,
      width: '100%', overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: spacing.gap8,
        height: '34px', padding: `0 ${spacing.gap24}`,
        borderBottom: `1px solid ${colors.dividerSubtle}`, flexShrink: 0,
      }}>
        <SourceTypeIcon type={sourceType} size={16} />
        <span style={{
          fontFamily: fonts.montserrat, fontWeight: fontWeights.regular,
          fontSize: fontSizes.xs, lineHeight: lineHeights.sm, color: colors.primary, whiteSpace: 'nowrap',
        }}>
          Uploaded date: {uploadDate}
        </span>
      </div>
      <PdfTitle title={pdfTitle} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap8 }}>
        {quotes.map((q, i) => <Bullet key={i} text={q} />)}
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: `0 ${spacing.gap24} ${spacing.gap12}`, flexShrink: 0,
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

// ─── Default table data ──────────────────────────────────────────────────────

const LOREM = 'The patient presented with elevated blood pressure readings of 145/92 mmHg on three consecutive visits. Family history positive for hypertension. Patient reports occasional headaches and fatigue. Dietary sodium intake assessed as high.'
const QUOTE = 'Patient continues to require 50 mL/hr continuous IV fluid replacement. Sodium levels trending toward normal range. Plan to reassess in 24 hours and consider transition to oral hydration if tolerated.'

const DEFAULT_TABLES = [
  {
    sourceType:   'Progress Notes',
    tableType:    'highlighted-text',
    uploadedDate: '15/12/2025',
    docName:      'progress_notes_dec_2025.pdf',
    text:         LOREM,
  },
  {
    sourceType:   'Progress Notes',
    tableType:    'doc-quote',
    uploadedDate: '10/12/2025',
    docName:      'progress_notes_dec_2025_b.pdf',
    text:         QUOTE,
    isQuote:      true,
  },
  {
    sourceType:   'IV Fluids',
    tableType:    'iv-fluids',
    uploadedDate: '15/12/2025',
    docName:      'iv_fluids_chart_dec2025.pdf',
    rows: [
      { name: 'Normal Saline (0.9% NaCl)',    volume: '50 mL',  dosage: '80 mL/3x a day', date: '15/04/2025', pages: [12] },
      { name: 'Lactated Ringer\'s Solution',  volume: '100 mL', dosage: '120 mL/2x a day',date: '20/04/2025', pages: [13, 14] },
      { name: 'Plasma-Lyte',                  volume: '50 mL',  dosage: '80 mL/3x a day', date: '15/04/2025', pages: [15] },
    ],
  },
  {
    sourceType:   'IV Fluids',
    tableType:    'iv-fluids',
    uploadedDate: '08/12/2025',
    docName:      'iv_fluids_chart_nov2025.pdf',
    rows: [
      { name: '5% Dextrose in Water (D5W)',   volume: '50 mL',  dosage: '80 mL/3x a day', date: '01/12/2025', pages: [3] },
      { name: 'Human Albumin',                volume: '100 mL', dosage: 'PRN',             date: '02/12/2025', pages: [4, 5, 6, 9] },
    ],
  },
  {
    sourceType:   'Assessments',
    tableType:    'doc-quote',
    uploadedDate: '14/12/2025',
    docName:      'mds_assessment_q4_2025.pdf',
    text:         'Patient scored 3/15 on the MDS cognitive performance scale. Short-term memory deficits noted. Requires verbal cueing for daily activities. Recommend continued monitoring and occupational therapy consultation.',
    isQuote:      true,
  },
  {
    sourceType:   'Mars',
    tableType:    'iv-fluids',
    uploadedDate: '13/12/2025',
    docName:      'medication_administration_dec2025.pdf',
    rows: [
      { name: 'Lisinopril 10mg',   volume: '1 tab', dosage: 'Once daily',    date: '15/12/2025', pages: [1] },
      { name: 'Metformin 500mg',   volume: '1 tab', dosage: 'Twice daily',   date: '15/12/2025', pages: [2] },
      { name: 'Atorvastatin 20mg', volume: '1 tab', dosage: 'Once at night', date: '15/12/2025', pages: [3] },
    ],
  },
]

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

// ─── Main popup ───────────────────────────────────────────────────────────────

export function SourcePopup({
  qCode          = '#K0520A2',
  questionTitle  = 'IV Fluids in hospital',
  previousAnswer = '1. Yes',
  hasLittleMan   = true,
  answerType     = 'yes-dc',
  onClose,
  onVerifyAll,
  onComments,
  tables         = DEFAULT_TABLES,
  style,
  className,
}) {
  const uniqueTypes = getUniqueSourceTypes(tables)

  const [selectedTab,   setSelectedTab]   = useState(null)
  const [sidePanel,     setSidePanel]     = useState(null)   // { table, mode }
  const [deniedByType, setDeniedByType] = useState({})  // sourceType → 'denied' | 'Default' | undefined
  const [commentsOpen,  setCommentsOpen]  = useState(false)
  const [leftWidth,   setLeftWidth]   = useState(615)    // left panel px when both open
  const [divHovered,  setDivHovered]  = useState(false)
  const containerRef = useRef(null)
  const dragging     = useRef(false)

  function handleCommentsToggle() {
    if (commentsOpen) {
      // Deselect — close panel if it was opened via comments
      setCommentsOpen(false)
      setSidePanel(prev => prev?.mode === 'comments' ? null : prev)
    } else {
      // Select — open panel in comments mode
      setCommentsOpen(true)
      setSidePanel({ table: null, mode: 'comments' })
      if (!sidePanel && containerRef.current) {
        const w = containerRef.current.getBoundingClientRect().width
        setLeftWidth(Math.round(w * 0.5))
      }
    }
  }

  function openPanel(table, mode = 'source') {
    setSidePanel(prev =>
      prev?.table === table && prev?.mode === mode ? null : { table, mode }
    )
    // Reset split to 50/50 when opening
    if (!sidePanel && containerRef.current) {
      const w = containerRef.current.getBoundingClientRect().width
      setLeftWidth(Math.round(w * 0.5))
    }
  }

  // Drag-resize
  const onDividerMouseDown = useCallback((e) => {
    e.preventDefault()
    dragging.current = true
    document.body.style.cursor    = 'col-resize'
    document.body.style.userSelect = 'none'

    function onMove(ev) {
      if (!dragging.current || !containerRef.current) return
      const rect  = containerRef.current.getBoundingClientRect()
      const raw   = ev.clientX - rect.left
      const MIN   = 360
      const MAX   = rect.width - 260
      setLeftWidth(Math.max(MIN, Math.min(MAX, raw)))
    }
    function onUp() {
      dragging.current = false
      document.body.style.cursor    = ''
      document.body.style.userSelect = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup',   onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup',   onUp)
  }, [sidePanel])

  function handleDenyAll() {
    const isAll = !selectedTab || selectedTab === 'All'
    const typesToToggle = isAll ? uniqueTypes : [selectedTab]
    setDeniedByType(prev => {
      const allDenied = typesToToggle.every(t => prev[t] === 'denied')
      const next = { ...prev }
      typesToToggle.forEach(type => { next[type] = allDenied ? 'Default' : 'denied' })
      return next
    })
    onVerifyAll?.()
  }

  const isDenyAllActive = !selectedTab || selectedTab === 'All'
    ? uniqueTypes.length > 0 && uniqueTypes.every(t => deniedByType[t] === 'denied')
    : deniedByType[selectedTab] === 'denied'

  const visibleTables = !selectedTab || selectedTab === 'All'
    ? dedupeBySourceType(tables)
    : tables.filter(t => t.sourceType === selectedTab)

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        display:         'flex',
        flexDirection:   'row',
        height:          '730px',
        borderRadius:    radii.box,
        overflow:        'hidden',
        border:          `1px solid ${colors.divider}`,
        backgroundColor: colors.white,
        boxSizing:       'border-box',
        width:           sidePanel ? '100%' : '922px',
        maxWidth:        '100%',
        ...style,
      }}
    >
      {/* Thin 4px scrollbar in disabled color (#E7E7E7) for all scroll areas, offset 4px from the right edge */}
      <style>{`
        .sp-scroll::-webkit-scrollbar { width: 8px; }
        .sp-scroll::-webkit-scrollbar-track { background: transparent; }
        .sp-scroll::-webkit-scrollbar-thumb { background: ${colors.disabled}; border-radius: 2px; border-right: 4px solid transparent; background-clip: content-box; }
        .sp-scroll::-webkit-scrollbar-thumb:hover { background: ${colors.dividerDisabled}; background-clip: content-box; }
      `}</style>
      {/* ── Left: popup content ──────────────────────────────────────────────── */}
      <div className="sp-scroll" style={{
        width:          sidePanel ? `${leftWidth}px` : '100%',
        flexShrink:     0,
        overflowY:      'auto',
        overflowX:      'hidden',
        scrollbarGutter: 'stable',
        display:        'flex',
        flexDirection:  'column',
        height:         '100%',
        transition:     dragging.current ? 'none' : 'width 0.2s ease',
      }}>

        {/* Top section */}
        <div style={{ padding: `${spacing.gap16} ${spacing.gap24} ${spacing.gap16}` }}>
          <SourcePopupTopSection
            qCode={qCode}
            questionTitle={questionTitle}
            previousAnswer={previousAnswer}
            hasLittleMan={hasLittleMan}
            sourceTabs={uniqueTypes}
            selectedTab={selectedTab}
            answerType={answerType}
            hideTabsRow
            onClose={onClose}
            onTabSelect={setSelectedTab}
            onVerifyAll={handleDenyAll}
            onComments={onComments}
          />
        </div>

        {/* Sticky tabs bar */}
        <SourceTabsBar
          sourceTabs={uniqueTypes}
          selectedTab={selectedTab}
          onTabSelect={setSelectedTab}
          onVerifyAll={handleDenyAll}
          onComments={handleCommentsToggle}
          commentsActive={commentsOpen}
          denyAllActive={isDenyAllActive}
          sticky
        />

        {/* Source tables */}
        <div style={{
          display:       'flex',
          flexDirection: 'column',
          gap:           spacing.gap24,
          padding:       spacing.gap24,
          paddingTop:    spacing.gap16,
          flex:          1,
        }}>
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
              forcedRowStatus={deniedByType[table.sourceType]}
              onHeaderClick={() => openPanel(table, 'source')}
              onTextClick={() => openPanel(table, 'source')}
              onCommentsClick={() => openPanel(table, 'comments')}
            />
          ))}
        </div>

      </div>

      {/* ── Drag-resize divider ───────────────────────────────────────────────── */}
      {sidePanel && (
        <div
          onMouseDown={onDividerMouseDown}
          onMouseEnter={() => setDivHovered(true)}
          onMouseLeave={() => setDivHovered(false)}
          style={{
            width:          divHovered ? '10px' : '1px',
            flexShrink:     0,
            height:         '100%',
            cursor:         'col-resize',
            backgroundColor: divHovered
              ? 'rgba(168,82,255,0.3)'
              : colors.dividerSubtle,
            position:       'relative',
            transition:     'width 0.15s ease, background-color 0.15s ease',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            zIndex:         5,
          }}
        >
          {divHovered && (
            <div style={{ position: 'absolute', pointerEvents: 'none' }}>
              <NavIcon name="resize-horizontal" size={24} />
            </div>
          )}
        </div>
      )}

      {/* ── Right: side panel ────────────────────────────────────────────────── */}
      {sidePanel && (
        <div style={{ flex: 1, minWidth: 0, height: '100%', overflow: 'hidden' }}>
          <SidePanel
            docTitle={sidePanel.table?.docName}
            tables={sidePanel.table ? [sidePanel.table] : []}
            showPrimaryDiagnosis={false}
            showAiSummary={false}
            initialActiveTab={sidePanel.mode === 'comments' ? 'comments' : 'sources'}
            onClose={() => setSidePanel(null)}
            onSourceClick={() => setSidePanel(prev => prev ? { ...prev, mode: 'source' } : prev)}
            onCommentsClick={() => setSidePanel(prev => prev ? { ...prev, mode: 'comments' } : prev)}
            style={{ borderLeft: 'none' }}
          />
        </div>
      )}
    </div>
  )
}
