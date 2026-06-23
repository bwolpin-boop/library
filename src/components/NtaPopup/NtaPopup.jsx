import { useState } from 'react'
import { NavIcon }              from '../Icon/NavIcon.jsx'
import { VerifyAndDeny }        from '../VerifyDeny/VerifyAndDeny.jsx'
import { TypeTag }              from '../TypeTag/TypeTag.jsx'
import { PrimaryDiagnosisLabel } from '../PrimaryDiagnosisLabel/PrimaryDiagnosisLabel.jsx'
import { SourceCellHeader }     from '../SourceCellHeader/SourceCellHeader.jsx'

// ── Stacked source icons (decorative card-deck layout) ───────────────────────
const STACK_ICONS = [
  { bg: '#E9FAFB', border: 'rgba(37,202,220,0.2)', top: '11%', right: '22%', left: '11%', bottom: '22%' },
  { bg: '#FFF9E5', border: 'rgba(255,197,0,0.2)',  top: '22%', right: '11%', left: '22%', bottom: '11%' },
  { bg: '#E5FBF0', border: 'rgba(0,214,109,0.2)',  top: '31%', right: '1%',  left: '31%', bottom: '2%'  },
  { bg: '#E5FBF0', border: 'rgba(0,214,109,0.2)',  top: '0',   right: '33%', left: '0',   bottom: '33%' },
]

function StackedSourceIcon() {
  return (
    <div className="dc:relative dc:w-[16px] dc:h-[16px] dc:shrink-0">
      {STACK_ICONS.map((s, i) => (
        <div key={i} style={{
          position:        'absolute',
          inset:           `${s.top} ${s.right} ${s.bottom} ${s.left}`,
          backgroundColor: s.bg,
          border:          `0.444px solid ${s.border}`,
          borderRadius:    '1px',
          boxShadow:       '0.667px 0px 0.667px rgba(0,0,0,0.1)',
        }} />
      ))}
    </div>
  )
}

// ── Date range source header row ─────────────────────────────────────────────
function DateRangeHeader({ dateRange }) {
  return (
    <div className="dc:flex dc:items-center dc:gap-gap8 dc:h-[34px] dc:px-gap24 dc:py-gap8 dc:border-b dc:border-divider-subtle">
      <StackedSourceIcon />
      <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">
        Date range: {dateRange}
      </span>
    </div>
  )
}

// ── Column header row ─────────────────────────────────────────────────────────
function ColumnHeaders() {
  const headerLabel = (text, style) => (
    <div className="dc:flex dc:items-center dc:gap-gap4 dc:py-gap8" style={style}>
      <span className="dc:font-montserrat dc:text-xxxs dc:font-medium dc:text-primary dc:whitespace-nowrap" style={{ lineHeight: 'normal' }}>
        {text}
      </span>
      <NavIcon name="sort-arrows" size={12} />
    </div>
  )
  return (
    <div className="dc:flex dc:items-center dc:gap-gap24 dc:h-[32px] dc:px-gap24 dc:bg-white dc:border-b dc:border-divider-subtle">
      {headerLabel('Diagnosis',          { flex: '1 0 0', minWidth: 0 })}
      {headerLabel('Clinical Category',  { width: '154px', flexShrink: 0 })}
      {headerLabel('MDS Mapping',        { width: '130px', flexShrink: 0 })}
    </div>
  )
}

// ── Single data row ───────────────────────────────────────────────────────────
function DiagnosisRow({ diagnosis, type, mdsMapping, diagnosisLabel, verifyType = 'empty', rowIndex = 0, style: styleProp }) {
  const [hovered, setHovered] = useState(false)
  const isEven  = rowIndex % 2 === 0
  const bgClass = hovered ? 'dc:bg-surface' : isEven ? 'dc:bg-white' : 'dc:bg-background'

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`dc:flex dc:items-center dc:gap-gap24 dc:h-[32px] dc:px-gap24 dc:border-b dc:border-divider-subtle dc:transition-[background-color] dc:duration-100 ${bgClass}`}
      style={styleProp}
    >
      {/* Diagnosis (flex-1): status dot + text */}
      <div className="dc:flex dc:items-center dc:gap-gap8 dc:h-[32px] dc:overflow-hidden" style={{ flex: '1 0 0', minWidth: 0 }}>
        <VerifyAndDeny type={verifyType === 'empty' ? 'empty' : verifyType} size="small" />
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap dc:overflow-hidden dc:text-ellipsis">{diagnosis}</span>
      </div>

      {/* Clinical Category (154px): TypeTag */}
      <div className="dc:flex dc:items-center dc:h-[32px]" style={{ width: '154px', flexShrink: 0 }}>
        {type && <TypeTag label={type} />}
      </div>

      {/* MDS Mapping (130px): text + optional label */}
      <div className="dc:flex dc:items-center dc:gap-gap4 dc:h-[32px]" style={{ width: '130px', flexShrink: 0 }}>
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">{mdsMapping}</span>
        {diagnosisLabel && <PrimaryDiagnosisLabel type={diagnosisLabel} />}
      </div>
    </div>
  )
}

// ── Collapsible section ───────────────────────────────────────────────────────
function DiagnosisSection({ title, dateRange, fileName, rows }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="dc:flex dc:flex-col dc:gap-gap4 dc:w-full">
      {/* Section header — full row is clickable */}
      <div
        onClick={() => setCollapsed(c => !c)}
        className="dc:flex dc:items-center dc:gap-gap8 dc:cursor-pointer dc:select-none"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="dc:shrink-0">
            <path
              d={collapsed ? 'M6 4L10 8L6 12' : 'M4 6L8 10L12 6'}
              stroke="#323338"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        <NavIcon name="primary-diagnosis" size={16} />
        <span className="dc:font-montserrat dc:text-xs dc:font-semibold dc:leading-md dc:whitespace-nowrap" style={{ color: '#323338' }}>
          {title}
        </span>
      </div>

      {/* Table card */}
      {!collapsed && (
        <div className="dc:border dc:border-divider-subtle dc:rounded-box dc:overflow-hidden dc:w-full">
          <DateRangeHeader dateRange={dateRange} />
          <SourceCellHeader title={fileName} />
          <ColumnHeaders />
          {rows.map((row, i) => (
            <DiagnosisRow
              key={i}
              {...row}
              rowIndex={i}
              style={i === rows.length - 1 ? { borderBottom: 'none' } : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Default data ──────────────────────────────────────────────────────────────
const SAMPLE_ROWS = [
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP', diagnosisLabel: 'nta-blue' },
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP' },
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Medical Management', mdsMapping: 'IGHFP', diagnosisLabel: 'primary-set' },
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP' },
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Medical Management', mdsMapping: 'IGHFP', diagnosisLabel: 'nta-blue' },
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP', diagnosisLabel: 'nta-blue' },
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP' },
  { diagnosis: 'Hypertension (High Blood Pressure)', type: 'Acute',              mdsMapping: 'IGHFP', diagnosisLabel: 'nta-blue' },
]

const DEFAULT_SECTIONS = [
  { title: 'Reasons for hospitalization',          dateRange: '15/12/2025 - 15/12/2025', fileName: 'Diagnosis hospital_records file hypervention .pdf', rows: SAMPLE_ROWS },
  { title: 'Other Key Hospitalization Diagnoses',  dateRange: '15/12/2025 - 15/12/2025', fileName: 'Diagnosis hospital_records file hypervention .pdf', rows: SAMPLE_ROWS.slice(0, 8) },
]

// ── Main export ───────────────────────────────────────────────────────────────
export function NtaPopup({
  title    = 'Discharge Summary Diagnosis Guide',
  sections = DEFAULT_SECTIONS,
}) {
  return (
    <div className="dc:flex dc:flex-col dc:gap-gap16 dc:p-gap24 dc:bg-white dc:border dc:border-divider dc:rounded-box dc:overflow-hidden">
      <span className="dc:font-montserrat dc:text-xl2 dc:font-semibold dc:text-primary" style={{ lineHeight: 'normal' }}>
        {title}
      </span>

      <div className="dc:flex dc:flex-col dc:gap-gap24 dc:w-full">
        {sections.map((section, i) => (
          <DiagnosisSection key={i} {...section} />
        ))}
      </div>
    </div>
  )
}
