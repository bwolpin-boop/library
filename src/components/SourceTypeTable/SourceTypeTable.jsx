import { useState, useCallback } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { SourceTypeIcon } from '../Icon/SourceTypeIcon.jsx'
import { SourceHeader } from '../SourceHeader/SourceHeader.jsx'
import { PdfTitle } from '../PdfTitle/PdfTitle.jsx'
import { HeaderCells } from '../HeaderCells/HeaderCells.jsx'
import { IvFluidsRow } from '../IvFluidsRow/IvFluidsRow.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'

// ─── Text styles ─────────────────────────────────────────────────────────────

const sb12  = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, lineHeight: lineHeights.md }
const reg12 = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm }

// ─── Default column definitions per tabular table type ────────────────────────

const DEFAULT_COLUMNS = {
  'iv-fluids':    [{ label: 'Fluid name' }, { label: 'Dose', width: 55 }, { label: 'Rate', width: 100 }, { label: 'Given on', width: 72 }, { label: 'Page', width: 80 }],
  'tube-feeding': [{ label: 'Item' },       { label: 'Amount', width: 55 }, { label: 'Frequency', width: 100 }, { label: 'Given on', width: 72 }, { label: 'Page', width: 80 }],
  surgery:        [{ label: 'Procedure' },  { label: 'Type', width: 55 }, { label: 'Details', width: 100 }, { label: 'Date', width: 72 }, { label: 'Page', width: 80 }],
  diagnosis:      [{ label: 'Diagnosis' },  { label: 'Code', width: 55 }, { label: 'Type', width: 100 }, { label: 'Date', width: 72 }, { label: 'Page', width: 80 }],
}

const TABULAR_TYPES = new Set(['iv-fluids', 'tube-feeding', 'surgery', 'diagnosis'])

// ─── Sub-components ──────────────────────────────────────────────────────────

function TableHeaderRow({ columns }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: spacing.gap16,
      height: 32,
      padding: `0 ${spacing.gap24}`,
      borderBottom: `1px solid ${colors.dividerSubtle}`,
      backgroundColor: colors.white,
      borderRadius: `${radii.box} ${radii.box} 0 0`,
    }}>
      {columns.map((col, i) => (
        <div
          key={i}
          style={{
            flex: col.width ? undefined : '1 0 0',
            width: col.width ?? undefined,
            minWidth: col.width ? undefined : '1px',
            flexShrink: col.width ? 0 : undefined,
          }}
        >
          <HeaderCells label={col.label} variant="default" />
        </div>
      ))}
    </div>
  )
}

// "View doc" button shown bottom-right on text cards
function ViewDocButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        flexShrink: 0,
      }}
    >
      <NavIcon name="export" size={24} />
      <span style={{ ...reg12, fontSize: fontSizes.sm, color: colors.primary }}>View doc</span>
    </button>
  )
}

// Card footer: reactions (thumbs + comments) on left, optional "View doc" on right
function CardFooter({ upCount, downCount, commentsCount, onUpClick, onDownClick, onCommentsClick, onViewDoc }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `0 ${spacing.gap24} ${spacing.gap12}`,
    }}>
      <RowHoverActions
        hasVerifyAndDeny={false}
        upCount={upCount}
        downCount={downCount}
        commentsCount={commentsCount}
        onUpClick={onUpClick}
        onDownClick={onDownClick}
        onCommentsClick={onCommentsClick}
      />
      {onViewDoc && <ViewDocButton onClick={onViewDoc} />}
    </div>
  )
}

// Gradient color bar for AI summary
function AiGradientBar() {
  return (
    <div style={{
      width: 11,
      alignSelf: 'stretch',
      borderRadius: 30,
      flexShrink: 0,
      background: 'linear-gradient(180deg, #F3FFF2 0%, #F3F2FF 32.5%, #FFF2FA 62.5%, #FFF2F2 100%)',
    }} />
  )
}

// ─── Content areas per table type ────────────────────────────────────────────

function TabularContent({ tableType, columns, rows, viewMoreCount, initialRowCount = 7, sourcePopup, onViewMore, onVerify, onDeny, onPending, onUpClick, onDownClick, onCommentsClick }) {
  const [expanded, setExpanded] = useState(false)
  const toggle = useCallback(() => setExpanded(e => !e), [])

  const cols    = columns ?? DEFAULT_COLUMNS[tableType] ?? DEFAULT_COLUMNS['iv-fluids']
  const purpose = sourcePopup ? 'source popup' : 'prescrub'
  const hasMore     = rows.length > initialRowCount
  const visibleRows = hasMore && !expanded ? rows.slice(0, initialRowCount) : rows
  const hiddenCount = viewMoreCount ?? (rows.length - initialRowCount)

  return (
    <>
      <TableHeaderRow columns={cols} />
      {visibleRows.map((row, i) => {
        const isLastDataRow = !hasMore && i === visibleRows.length - 1
        return (
          <IvFluidsRow
            key={i}
            purpose={purpose}
            type={row.type ?? 'Default'}
            name={row.name}
            volume={row.volume ?? row.amount}
            dosage={row.dosage ?? row.frequency}
            date={row.date}
            pageRef={row.pageRef ?? row.page}
            lineNumber={row.lineNumber ?? (sourcePopup ? i + 1 : undefined)}
            onVerify={onVerify}
            onDeny={onDeny}
            onPending={onPending}
            onUpClick={onUpClick}
            onDownClick={onDownClick}
            onCommentsClick={onCommentsClick}
            style={isLastDataRow ? { borderBottom: 'none' } : undefined}
          />
        )
      })}
      {hasMore && (
        <IvFluidsRow
          purpose={expanded ? 'view less' : 'view more'}
          count={expanded ? undefined : hiddenCount}
          onClick={() => { toggle(); onViewMore?.() }}
          style={{ borderBottom: 'none' }}
        />
      )}
    </>
  )
}

function TextContent({ text, isQuote }) {
  return (
    <div style={{ padding: `0 ${spacing.gap24}` }}>
      <p style={{
        ...reg12,
        color: colors.primary,
        fontStyle: isQuote ? 'italic' : 'normal',
        margin: 0,
      }}>
        {isQuote ? `"${text}"` : text}
      </p>
    </div>
  )
}

function AiContent({ aiTitle, text, onSeeMore }) {
  return (
    <div style={{ display: 'flex', gap: 10, padding: `0 ${spacing.gap24}`, alignItems: 'stretch' }}>
      <AiGradientBar />
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap4, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <NavIcon name="ai" size={24} />
          <span style={{ ...reg12, color: colors.primary }}>{aiTitle}</span>
        </div>
        <p style={{ ...reg12, color: colors.primary, margin: 0 }}>{text}</p>
        {onSeeMore && (
          <button
            onClick={onSeeMore}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
          >
            <span style={{ ...reg12, color: colors.primary, textDecoration: 'underline' }}>See more</span>
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function SourceTypeTable({
  tableType     = 'iv-fluids',
  sourcePopup   = true,
  hasTitle      = true,
  hasArrow      = true,
  title,
  sourceType    = 'IV Fluids',
  uploadedDate  = '15/12/2025',
  docName       = 'Diagnosis hospital_records file hypervention .pdf',
  tabs          = ['M1200B', 'M1201A', 'M1202C'],
  onTabClick,
  // Tabular
  columns,
  rows            = [],
  viewMoreCount,
  initialRowCount = 7,
  // Text / quote
  text          = '',
  isQuote       = false,
  // AI summary
  aiTitle       = 'AI-Generated Summary',
  // Reactions
  upCount,
  downCount,
  commentsCount,
  // Callbacks
  onToggle,
  onViewDoc,
  onViewMore,
  onSeeMore,
  onUpClick,
  onDownClick,
  onCommentsClick,
  onVerify,
  onDeny,
  onPending,
}) {
  const [collapsed, setCollapsed] = useState(false)

  const isTabular  = TABULAR_TYPES.has(tableType)
  const isText     = !isTabular && tableType !== 'ai-summary'
  const isAi       = tableType === 'ai-summary'

  function handleToggle() {
    setCollapsed(c => !c)
    onToggle?.()
  }

  // Default title from tableType if not provided
  const displayTitle = title ?? {
    'iv-fluids':          'IV Fluids',
    'tube-feeding':       'Tube Feeding',
    surgery:              'Surgery',
    diagnosis:            'Diagnosis',
    'highlighted-text':   'Progress Notes',
    'doc-quote':          'Doc Quote',
    'more-doc-quotes':    'More Doc Quotes',
    'ai-summary':         'AI Summary',
  }[tableType] ?? tableType

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap4 }}>

      {/* Title row — entire row is clickable when arrow is shown */}
      {hasTitle && (
        <div
          onClick={hasArrow ? handleToggle : undefined}
          style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8, cursor: hasArrow ? 'pointer' : 'default', userSelect: 'none' }}
        >
          {hasArrow && <NavIcon name={collapsed ? 'arrow-down' : 'arrow-up'} size={16} />}
          <span style={{ ...sb12, color: '#323338', whiteSpace: 'nowrap' }}>{displayTitle}</span>
        </div>
      )}

      {/* Card */}
      {!collapsed && (
        <div style={{
          border: `1px solid ${colors.dividerSubtle}`,
          borderRadius: radii.box,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Upload date row */}
          <SourceHeader
            type="sources"
            sourceType={sourceType}
            uploadedDate={uploadedDate}
            tabs={tabs}
            onTabClick={onTabClick}
          />

          {/* PDF filename row */}
          <PdfTitle title={docName} />

          {/* Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isTabular ? 0 : spacing.gap12,
            paddingTop: isTabular ? 0 : spacing.gap12,
          }}>
            {isTabular && (
              <TabularContent
                tableType={tableType}
                columns={columns}
                rows={rows}
                viewMoreCount={viewMoreCount}
                initialRowCount={initialRowCount}
                sourcePopup={sourcePopup}
                onViewMore={onViewMore}
                onVerify={onVerify}
                onDeny={onDeny}
                onPending={onPending}
                onUpClick={onUpClick}
                onDownClick={onDownClick}
                onCommentsClick={onCommentsClick}
              />
            )}

            {isText && (
              <>
                <TextContent text={text} isQuote={isQuote || tableType === 'doc-quote' || tableType === 'more-doc-quotes'} />
                <CardFooter
                  upCount={upCount}
                  downCount={downCount}
                  commentsCount={commentsCount}
                  onUpClick={onUpClick}
                  onDownClick={onDownClick}
                  onCommentsClick={onCommentsClick}
                  onViewDoc={onViewDoc}
                />
              </>
            )}

            {isAi && (
              <>
                <AiContent aiTitle={aiTitle} text={text} onSeeMore={onSeeMore} />
                <CardFooter
                  upCount={upCount}
                  downCount={downCount}
                  commentsCount={commentsCount}
                  onUpClick={onUpClick}
                  onDownClick={onDownClick}
                  onCommentsClick={onCommentsClick}
                  onViewDoc={onViewDoc}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
