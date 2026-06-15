import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '../../tokens.js'
import { NavIcon }        from '../Icon/NavIcon.jsx'
import { SourceTypeIcon } from '../Icon/SourceTypeIcon.jsx'

function SidePanelRow({ label, value }) {
  if (!value) return null
  return (
    <div>
      <span style={{
        fontFamily:    fonts.montserrat,
        fontSize:      fontSizes.xxxs,
        fontWeight:    fontWeights.medium,
        color:         colors.secondary,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        {label}
      </span>
      <p style={{
        fontFamily:  fonts.montserrat,
        fontSize:    fontSizes.xs,
        fontWeight:  fontWeights.regular,
        lineHeight:  lineHeights.sm,
        color:       colors.primary,
        margin:      '4px 0 0',
        wordBreak:   'break-word',
      }}>
        {value}
      </p>
    </div>
  )
}

export function SidePanel({
  sourceType,
  uploadedDate,
  docName,
  children,
  onClose,
  width = '320px',
}) {
  return (
    <div style={{
      position:        'absolute',
      top:             0,
      right:           0,
      bottom:          0,
      width,
      backgroundColor: colors.surface,
      borderLeft:      `1px solid ${colors.dividerSubtle}`,
      borderRadius:    `0 ${radii.box} ${radii.box} 0`,
      display:         'flex',
      flexDirection:   'column',
      boxShadow:       '-4px 0 16px rgba(0,0,0,0.08)',
      zIndex:          10,
    }}>

      {/* Header */}
      <div style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        spacing.gap16,
        borderBottom:   `1px solid ${colors.dividerSubtle}`,
        flexShrink:     0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing.gap8 }}>
          {sourceType && <SourceTypeIcon type={sourceType} size={16} />}
          <span style={{
            fontFamily:  fonts.montserrat,
            fontSize:    fontSizes.xs,
            fontWeight:  fontWeights.semibold,
            lineHeight:  lineHeights.sm,
            color:       colors.primary,
          }}>
            {sourceType}
          </span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
          >
            <NavIcon name="close" size={24} />
          </button>
        )}
      </div>

      {/* Body */}
      <div style={{
        flex:            1,
        overflowY:       'auto',
        padding:         spacing.gap16,
        display:         'flex',
        flexDirection:   'column',
        gap:             spacing.gap12,
      }}>
        <SidePanelRow label="Uploaded date" value={uploadedDate} />
        <SidePanelRow label="Document"      value={docName} />
        {children}
      </div>

    </div>
  )
}
