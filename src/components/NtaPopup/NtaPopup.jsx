import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing, strokeWidths } from '../../tokens.js'
import { NavIcon }              from '../Icon/NavIcon.jsx'
import { VerifyAndDeny }        from '../VerifyDeny/VerifyAndDeny.jsx'
import { TypeTag }              from '../TypeTag/TypeTag.jsx'
import { PrimaryDiagnosisLabel } from '../PrimaryDiagnosisLabel/PrimaryDiagnosisLabel.jsx'
import { SourceCellHeader }     from '../SourceCellHeader/SourceCellHeader.jsx'

// ── Shared text style ────────────────────────────────────────────────────────
const text12 = {
  fontFamily:  fonts.montserrat,
  fontSize:    fontSizes.xs,
  fontWeight:  fontWeights.regular,
  lineHeight:  lineHeights.sm,
  color:       colors.primary,
  whiteSpace:  'nowrap',
}

// ── Stacked source icons (decorative card-deck layout) ───────────────────────
const STACK_ICONS = [
  { bg: '#E9FAFB', border: 'rgba(37,202,220,0.2)', top: '11%', right: '22%', left: '11%', bottom: '22%' },
  { bg: '#FFF9E5', border: 'rgba(255,197,0,0.2)',  top: '22%', right: '11%', left: '22%', bottom: '11%' },
  { bg: '#E5FBF0', border: 'rgba(0,214,109,0.2)',  top: '31%', right: '1%',  left: '31%', bottom: '2%'  },
  { bg: '#E5FBF0', border: 'rgba(0,214,109,0.2)',  top: '0',   right: '33%', left: '0',   bottom: '33%' },
]

function StackedSourceIcon() {
  return (
    <div style={{ position: 'relative', width: 16, height: 16, flexShrink: 0 }}>
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
    <div style={{
      display:      'flex',
      alignItems:   'center',
      gap:          spacing.gap8,
      height:       '34px',
      padding:      `${spacing.gap8} ${spacing.gap24}`,
      borderBottom: `1px solid ${colors.dividerSubtle}`,
    }}>
      <StackedSourceIcon />
      <span style={{ ...text12, color: colors.primary }}>
        Date range: {dateRange}
      </span>
    </div>
  )
}

// ── Column header row ─────────────────────────────────────────────────────────
function ColumnHeaders() {
  const headerLabel = (text, style) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap4, padding: `${spacing.gap8} 0`, ...style }}>
      <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xxxs, fontWeight: fontWeights.medium, lineHeight: 'normal', color: colors.primary, whiteSpace: 'nowrap' }}>
        {text}
      </span>
      <NavIcon name="sort-arrows" size={12} />
    </div>
  )
  return (
    <div style={{
      display:         'flex',
      alignItems:      'center',
      gap:             spacing.gap24,
      height:          '32px',
      padding:         `0 ${spacing.gap24}`,
      backgroundColor: colors.white,
      borderBottom:    `1px solid ${colors.dividerSubtle}`,
    }}>
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
  const bgBase  = isEven ? colors.white : colors.background
  const bg      = hovered ? colors.surface : bgBase

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         'flex',
        alignItems:      'center',
        gap:             spacing.gap24,
        height:          '32px',
        padding:         `0 ${spacing.gap24}`,
        backgroundColor: bg,
        borderBottom:    `1px solid ${colors.dividerSubtle}`,
        transition:      'background-color 0.1s',
        ...styleProp,
      }}
    >
      {/* Diagnosis (flex-1): status dot + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8, flex: '1 0 0', minWidth: 0, height: '32px', overflow: 'hidden' }}>
        <VerifyAndDeny type={verifyType === 'empty' ? 'empty' : verifyType} size="small" />
        <span style={{ ...text12, overflow: 'hidden', textOverflow: 'ellipsis' }}>{diagnosis}</span>
      </div>

      {/* Clinical Category (154px): TypeTag */}
      <div style={{ width: '154px', flexShrink: 0, display: 'flex', alignItems: 'center', height: '32px' }}>
        {type && <TypeTag label={type} />}
      </div>

      {/* MDS Mapping (130px): text + optional label */}
      <div style={{ width: '130px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: spacing.gap4, height: '32px' }}>
        <span style={text12}>{mdsMapping}</span>
        {diagnosisLabel && <PrimaryDiagnosisLabel type={diagnosisLabel} />}
      </div>
    </div>
  )
}

// ── Collapsible section ───────────────────────────────────────────────────────
function DiagnosisSection({ title, dateRange, fileName, rows }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap4, width: '100%' }}>
      {/* Section header — full row is clickable */}
      <div
        onClick={() => setCollapsed(c => !c)}
        style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8, cursor: 'pointer', userSelect: 'none' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
            <path
              d={collapsed ? 'M6 4L10 8L6 12' : 'M4 6L8 10L12 6'}
              stroke={colors.primary}
              strokeWidth={strokeWidths.icon}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        <NavIcon name="primary-diagnosis" size={16} />
        <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.semibold, lineHeight: lineHeights.md, color: '#323338', whiteSpace: 'nowrap' }}>
          {title}
        </span>
      </div>

      {/* Table card */}
      {!collapsed && (
        <div style={{ border: `1px solid ${colors.dividerSubtle}`, borderRadius: radii.box, overflow: 'hidden', width: '100%' }}>
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
    <div style={{
      display:         'flex',
      flexDirection:   'column',
      gap:             spacing.gap16,
      padding:         spacing.gap24,
      backgroundColor: colors.white,
      border:          `1px solid ${colors.divider}`,
      borderRadius:    radii.box,
      overflow:        'hidden',
    }}>
      <span style={{ fontFamily: fonts.montserrat, fontSize: fontSizes.xl2, fontWeight: fontWeights.semibold, lineHeight: 'normal', color: colors.primary }}>
        {title}
      </span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.gap24, width: '100%' }}>
        {sections.map((section, i) => (
          <DiagnosisSection key={i} {...section} />
        ))}
      </div>
    </div>
  )
}
