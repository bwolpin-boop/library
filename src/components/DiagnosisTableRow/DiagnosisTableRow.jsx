import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, spacing } from '../../tokens.js'
import { RowCells }        from '../RowCells/RowCells.jsx'
import { RowHoverActions } from '../RowHoverActions/RowHoverActions.jsx'
import { VerifyAndDeny }   from '../VerifyDeny/VerifyAndDeny.jsx'

// rgb tuples for gradient computation
const BG_RGB = {
  white:         '255,255,255',
  surfaceHover:  '247,247,248',
  surface:       '247,247,248',
  surfaceActive: '235,235,235',
}

export function DiagnosisTableRow({
  // Status dot in column 1
  verifyStatus = 'none',    // 'none' | 'verify' | 'pending' | 'deny'
  // Alternating row shading
  rowVariant = 'light',     // 'light' | 'dark'
  // Content
  diagnosis     = 'Hypertension (High Blood Pressure)',
  hasDescription = true,
  description   = 'The patient presented with a closed dislocation of the right hip...',
  clinicalCategory = 'Acute',
  mdsMapping    = 'HGHGD',
  sourceType    = 'Documents',
  // Reaction counts (passed to RowHoverActions)
  commentsCount,
  upCount,
  downCount,
  hasPending    = true,
  // Callbacks
  onVerify, onDeny, onPending, onClick,
  style, className,
}) {
  const [hovered, setHovered] = useState(false)

  const bgDefault = rowVariant === 'light' ? colors.white   : colors.surface
  const bgHover   = rowVariant === 'light' ? colors.surfaceHover : colors.surfaceActive
  const bg        = hovered ? bgHover : bgDefault
  const bgRgb     = hovered
    ? (rowVariant === 'light' ? BG_RGB.surfaceHover  : BG_RGB.surfaceActive)
    : (rowVariant === 'light' ? BG_RGB.white         : BG_RGB.surface)

  const textSm = {
    fontFamily:  fonts.montserrat,
    fontSize:    fontSizes.xs,
    fontWeight:  fontWeights.regular,
    lineHeight:  lineHeights.sm,
    color:       colors.primary,
    whiteSpace:  'nowrap',
    flexShrink:  0,
  }

  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        position:        'relative',
        display:         'flex',
        alignItems:      'center',
        gap:             spacing.gap24,
        height:          '32px',
        padding:         `0 ${spacing.gap24}`,
        backgroundColor: bg,
        borderBottom:    `1px solid ${colors.dividerSubtle}`,
        cursor:          onClick ? 'pointer' : 'default',
        transition:      'background-color 0.1s',
        ...style,
      }}
    >
      {/* Column 1 — Diagnosis (234px): status dot + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8, width: '234px', height: '32px', overflow: 'hidden', flexShrink: 0 }}>
        <VerifyAndDeny type={verifyStatus === 'none' ? 'empty' : verifyStatus} size="small" />
        <span style={textSm}>{diagnosis}</span>
      </div>

      {/* Column 2 — Description (flex): text, optional */}
      {hasDescription && (
        <div style={{ display: 'flex', alignItems: 'center', flex: '1 0 0', minWidth: 0, height: '32px', overflow: 'hidden' }}>
          <span style={{ ...textSm, overflow: 'hidden', textOverflow: 'ellipsis' }}>{description}</span>
        </div>
      )}

      {/* Column 3 — Clinical Category (154px): medical label badge */}
      <div style={{ width: '154px', flexShrink: 0 }}>
        <RowCells type="medical label" location="PCC" size="small" medicalLabel={clinicalCategory} />
      </div>

      {/* Column 4 — MDS Mapping (130px): text */}
      <div style={{ display: 'flex', alignItems: 'center', width: '130px', height: '32px', flexShrink: 0 }}>
        <span style={textSm}>{mdsMapping}</span>
      </div>

      {/* Column 5 — Source: source type icon */}
      <RowCells type="source" location="PCC" size="small" sourceType={sourceType} />

      {/* Hover actions — overlaid right side with fade gradient */}
      {hovered && (
        <div style={{
          position:   'absolute',
          right:      spacing.gap24,
          top:        '4px',
          display:    'flex',
          alignItems: 'center',
          paddingLeft: spacing.gap24,
          background: `linear-gradient(to right, rgba(${bgRgb},0), ${bg} 40%)`,
        }}>
          <RowHoverActions
            commentsCount={commentsCount}
            upCount={upCount}
            downCount={downCount}
            hasPending={hasPending}
            onVerify={onVerify}
            onDeny={onDeny}
            onPending={onPending}
          />
        </div>
      )}
    </div>
  )
}
