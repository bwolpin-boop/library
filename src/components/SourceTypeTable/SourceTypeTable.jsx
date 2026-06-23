import { useState, useCallback, useEffect } from 'react'
import { colors, radii, strokeWidths } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { SourceTypeIcon } from '../Icon/SourceTypeIcon.jsx'
import { SourceHeader } from '../SourceHeader/SourceHeader.jsx'
import { PdfTitle } from '../PdfTitle/PdfTitle.jsx'
import { HeaderCells } from '../HeaderCells/HeaderCells.jsx'
import { IvFluidsRow, TABLE_COL_GAP, TABLE_COL_WIDTHS } from '../IvFluidsRow/IvFluidsRow.jsx'
import { DiagnosisTableRow } from '../DiagnosisTableRow/DiagnosisTableRow.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'

// ─── Default column definitions per tabular table type ────────────────────────

const { vol: W_VOL, dosage: W_DOSAGE, date: W_DATE, page: W_PAGE } = TABLE_COL_WIDTHS

// NavIcon name shown next to the collapse arrow in the table title row
const TABLE_TITLE_ICON = {
  'iv-fluids':    'table-iv-fluids',
  'tube-feeding': 'table-tube-feeding',
  surgery:        'table-surgery',
  diagnosis:      'table-diagnosis',
}

const DEFAULT_COLUMNS = {
  'iv-fluids':    [{ label: 'Fluid name' }, { label: 'Dose',      width: W_VOL }, { label: 'Rate',      width: W_DOSAGE }, { label: 'Given on', width: W_DATE }, { label: 'Page', width: W_PAGE }],
  'tube-feeding': [{ label: 'Formula name' }, { label: 'Dose', width: W_VOL }, { label: 'Given on', width: W_DATE }, { label: 'Page', width: W_PAGE }],
  surgery:        [{ label: 'Surgery name' }, { label: 'Category',         width: W_DATE }, { label: 'Page', width: W_PAGE }],
  diagnosis:      [{ label: 'Diagnosis' },   { label: 'Clinical Category', width: 165 }, { label: 'MDS Mapping', width: 80 }],
}

const TABULAR_TYPES = new Set(['iv-fluids', 'tube-feeding', 'surgery', 'diagnosis'])

// ─── Sub-components ──────────────────────────────────────────────────────────

function TableHeaderRow({ columns }) {
  return (
    <div
      className="dc:flex dc:items-center dc:px-gap24 dc:border-b dc:border-divider-subtle dc:bg-white"
      style={{
        gap: TABLE_COL_GAP,
        height: 32,
        borderRadius: `${radii.box} ${radii.box} 0 0`,
      }}
    >
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
      className="dc:bg-transparent dc:border-none dc:p-0 dc:cursor-pointer dc:inline-flex dc:items-center dc:gap-gap4 dc:shrink-0"
    >
      <NavIcon name="export" size={24} />
      <span className="dc:font-montserrat dc:font-regular dc:text-sm dc:leading-sm dc:text-primary">View doc</span>
    </button>
  )
}

// Card footer: reactions (thumbs + comments) on left, optional "View doc" on right
function CardFooter({ upCount, downCount, commentsCount, onUpClick, onDownClick, onCommentsClick, onViewDoc }) {
  return (
    <div className="dc:flex dc:items-center dc:justify-between dc:px-gap24 dc:pb-gap12">
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
    <div
      className="dc:self-stretch dc:shrink-0"
      style={{
        width: 11,
        borderRadius: 30,
        background: 'linear-gradient(180deg, #F3FFF2 0%, #F3F2FF 32.5%, #FFF2FA 62.5%, #FFF2F2 100%)',
      }}
    />
  )
}

// ─── Content areas per table type ────────────────────────────────────────────

function TabularContent({ tableType, columns, rows, viewMoreCount, initialRowCount = 5, sourcePopup, forcedRowStatus, active, onRowClick, onViewMore, onVerify, onDeny, onPending, onUpClick, onDownClick, onCommentsClick }) {
  const [expanded,  setExpanded]  = useState(false)
  const [activeIdx, setActiveIdx] = useState(null)
  const toggle = useCallback(() => setExpanded(e => !e), [])

  useEffect(() => { if (!active) setActiveIdx(null) }, [active])

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
        const lastStyle = isLastDataRow ? { borderBottomWidth: 0, borderRadius: `0 0 ${radii.box} ${radii.box}` } : undefined

        if (tableType === 'diagnosis') {
          return (
            <DiagnosisTableRow
              key={i}
              diagnosis={row.name}
              clinicalCategory={row.dosage ?? row.clinicalCategory ?? 'Acute'}
              mdsMapping={row.volume ?? row.mdsMapping ?? ''}
              verifyStatus="none"
              rowVariant={i % 2 === 0 ? 'light' : 'dark'}
              onVerify={onVerify}
              onDeny={onDeny}
              onPending={onPending}
              onUpClick={onUpClick}
              onDownClick={onDownClick}
              onCommentsClick={onCommentsClick}
              style={lastStyle}
            />
          )
        }

        return (
          <IvFluidsRow
            key={i}
            purpose={purpose}
            type={row.type ?? 'Default'}
            forcedStatus={forcedRowStatus}
            selected={i === activeIdx}
            onClick={onRowClick ? () => { setActiveIdx(i); onRowClick(row) } : undefined}
            indicator={row.indicator}
            name={row.name}
            volume={row.volume ?? row.amount}
            dosage={row.dosage ?? row.frequency}
            showVolume={tableType !== 'surgery'}
            showDosage={tableType !== 'tube-feeding' && tableType !== 'surgery'}
            date={row.date}
            pages={row.pages}
            pageRef={row.pageRef ?? row.page}
            hasMorePages={row.hasMorePages ?? false}
            lineNumber={row.lineNumber ?? (sourcePopup ? i + 1 : undefined)}
            onVerify={onVerify}
            onDeny={onDeny}
            onPending={onPending}
            onUpClick={onUpClick}
            onDownClick={onDownClick}
            onCommentsClick={onCommentsClick}
            style={lastStyle}
          />
        )
      })}
      {hasMore && (
        <IvFluidsRow
          purpose={expanded ? 'view less' : 'view more'}
          count={expanded ? undefined : hiddenCount}
          onClick={() => { toggle(); onViewMore?.() }}
          style={{ borderBottom: 'none', borderRadius: `0 0 ${radii.box} ${radii.box}` }}
        />
      )}
    </>
  )
}

function TextContent({ text, isQuote, clampLines, onClick }) {
  return (
    <div
      onClick={onClick}
      className="dc:px-gap24 dc:py-gap12"
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <p
        className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:m-0"
        style={{
          fontStyle: isQuote ? 'italic' : 'normal',
          ...(clampLines ? {
            display:           '-webkit-box',
            WebkitLineClamp:   clampLines,
            WebkitBoxOrient:   'vertical',
            overflow:          'hidden',
          } : {}),
        }}
      >
        {isQuote ? `"${text}"` : text}
      </p>
    </div>
  )
}

function DocStringsContent({ texts }) {
  return (
    <div className="dc:flex dc:flex-col dc:gap-gap8 dc:px-gap24">
      {texts.map((t, i) => (
        <div key={i} className="dc:flex dc:items-start dc:gap-gap4">
          {/* bullet dot */}
          <div className="dc:w-gap16 dc:h-gap16 dc:shrink-0 dc:flex dc:items-center dc:justify-center">
            <div className="dc:w-1 dc:h-1 dc:rounded-full dc:bg-secondary dc:shrink-0" />
          </div>
          <p className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:italic dc:m-0 dc:flex-1">
            {`"${t}"`}
          </p>
        </div>
      ))}
    </div>
  )
}

function AiContent({ aiTitle, text, onSeeMore }) {
  return (
    <div className="dc:flex dc:px-gap24 dc:items-stretch" style={{ gap: 10 }}>
      <AiGradientBar />
      <div className="dc:flex dc:flex-col dc:gap-gap4 dc:flex-1">
        <div className="dc:flex dc:items-center" style={{ gap: 4 }}>
          <NavIcon name="ai" size={24} />
          <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary">{aiTitle}</span>
        </div>
        <p className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:m-0">{text}</p>
        {onSeeMore && (
          <button
            onClick={onSeeMore}
            className="dc:bg-transparent dc:border-none dc:p-0 dc:cursor-pointer dc:text-left"
          >
            <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:underline">See more</span>
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
  hoverable     = true,   // false → disables the content-area hover (use in side panel)
  clampLines,             // number → clamp text to N lines; undefined → no clamp
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
  initialRowCount = 5,
  // Text / quote / doc strings
  text          = '',
  texts,        // array of strings for doc-strings tableType
  isQuote       = false,
  // AI summary
  aiTitle       = 'AI-Generated Summary',
  // Reactions
  upCount,
  downCount,
  commentsCount,
  // Callbacks
  onHeaderClick,  // called when the uploaded-date header row is clicked
  onRowClick,     // called when a tabular row is clicked (row data passed as argument)
  onTextClick,    // called when the text/quote body is clicked
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
  forcedRowStatus,
  active = false,  // true when the side panel is open for this table
}) {
  const [collapsed,    setCollapsed]    = useState(false)
  const [cardDenied,   setCardDenied]   = useState(false)
  const [cardHovered,  setCardHovered]  = useState(false)
  const [cardPressed,  setCardPressed]  = useState(false)

  const isTabular  = TABULAR_TYPES.has(tableType)
  const isText     = !isTabular && tableType !== 'ai-summary'
  const isAi       = tableType === 'ai-summary'

  useEffect(() => {
    if (forcedRowStatus === 'denied')  setCardDenied(true)
    if (forcedRowStatus === 'Default') setCardDenied(false)
  }, [forcedRowStatus])

  function handleToggle() {
    setCollapsed(c => !c)
    onToggle?.()
  }

  // Default title from tableType if not provided
  // Prescrub mode (sourcePopup=false) always clamps to 5 lines unless explicitly overridden
  const effectiveClampLines = clampLines ?? (!sourcePopup ? 5 : undefined)

  const displayTitle = title ?? {
    'iv-fluids':          'IV Fluids',
    'tube-feeding':       'Tube Feeding',
    surgery:              'Surgery',
    diagnosis:            'Diagnosis',
    'highlighted-text':   'Progress Notes',
    'doc-string':         'String',
    'doc-strings':        'More Strings',
    'ai-summary':         'AI Summary',
  }[tableType] ?? tableType

  // Compute text content area background color
  const textBgColor = active
    ? colors.surface
    : hoverable
      ? (cardPressed ? colors.surfaceActive : cardHovered ? colors.surface : 'transparent')
      : 'transparent'

  return (
    <div className="dc:flex dc:flex-col dc:gap-gap4">

      {/* Title row — entire row is clickable when arrow is shown */}
      {hasTitle && (
        <div
          onClick={hasArrow ? handleToggle : undefined}
          className={[
            'dc:flex dc:items-center dc:gap-gap8 dc:select-none',
            hasArrow ? 'dc:cursor-pointer' : 'dc:cursor-default',
          ].join(' ')}
        >
          {hasArrow && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="dc:shrink-0">
              <path
                d={collapsed ? 'M4 6L8 10L12 6' : 'M4 10L8 6L12 10'}
                stroke={colors.primary}
                strokeWidth={strokeWidths.icon}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {TABLE_TITLE_ICON[tableType] && (
            <NavIcon name={TABLE_TITLE_ICON[tableType]} size={16} />
          )}
          <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:whitespace-nowrap" style={{ color: '#323338' }}>{displayTitle}</span>
        </div>
      )}

      {/* Card */}
      {!collapsed && (
        <div className="dc:border dc:border-divider-subtle dc:rounded-box dc:flex dc:flex-col">
          {/* Upload date row */}
          <SourceHeader
            type={sourcePopup ? 'sources' : 'prescrub'}
            sourceType={sourceType}
            uploadedDate={uploadedDate}
            tabs={tabs}
            forcedStatus={forcedRowStatus}
            active={active}
            onTabClick={onTabClick}
            onDeny={() => { setCardDenied(true); onDeny?.() }}
            onVerify={() => { setCardDenied(false); onVerify?.() }}
            onClick={onHeaderClick}
          />

          {/* PDF filename row — not shown for plain text notes */}
          {!isText && <PdfTitle title={docName} />}

          {/* Content */}
          <div
            className="dc:flex dc:flex-col"
            style={{ gap: isTabular ? 0 : '12px' }}
          >
            {isTabular && (
              <TabularContent
                tableType={tableType}
                columns={columns}
                rows={rows}
                viewMoreCount={viewMoreCount}
                initialRowCount={initialRowCount}
                sourcePopup={sourcePopup}
                forcedRowStatus={forcedRowStatus}
                active={active}
                onRowClick={onRowClick}
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
              // Wrapper covers the full content area including behind the actions.
              // Background color is here (full opacity always) — denied opacity only
              // affects the inner text div. Hover is disabled when hoverable=false.
              <div
                onMouseEnter={hoverable ? () => setCardHovered(true) : undefined}
                onMouseLeave={hoverable ? () => { setCardHovered(false); setCardPressed(false) } : undefined}
                onMouseDown={hoverable ? () => setCardPressed(true) : undefined}
                onMouseUp={hoverable ? () => setCardPressed(false) : undefined}
                className="dc:flex dc:flex-col dc:gap-gap12 dc:pt-gap12"
                style={{
                  backgroundColor: textBgColor,
                  transition: 'background-color 0.1s',
                }}
              >
                <div style={{ opacity: cardDenied ? 0.5 : 1, transition: 'opacity 0.15s' }}>
                  {(tableType === 'doc-strings' || tableType === 'doc-string') ? (
                    <DocStringsContent texts={texts?.length ? texts : [text]} />
                  ) : (
                    <TextContent text={text} isQuote={isQuote} clampLines={effectiveClampLines} onClick={onTextClick} />
                  )}
                </div>
                <CardFooter
                  upCount={upCount}
                  downCount={downCount}
                  commentsCount={commentsCount}
                  onUpClick={onUpClick}
                  onDownClick={onDownClick}
                  onCommentsClick={onCommentsClick}
                  onViewDoc={onViewDoc}
                />
              </div>
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
