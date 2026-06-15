import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'

export function SideBarTitle({
  label   = 'HOW Bridgeview.pdf',
  onClick,
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '100%', minWidth: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        fontFamily:    fonts.montserrat,
        fontSize:      fontSizes.lg,
        fontWeight:    fontWeights.semibold,
        lineHeight:    'normal',
        color:         colors.primary,
        whiteSpace:    'nowrap',
        overflow:      'hidden',
        textOverflow:  'ellipsis',
        minWidth:      0,
        flexShrink:    1,
        textDecoration: hovered ? 'underline' : 'none',
      }}>
        {label}
      </span>

      <button
        onClick={onClick}
        style={{
          display:         'inline-flex',
          alignItems:      'center',
          justifyContent:  'center',
          width:           24,
          height:          24,
          flexShrink:      0,
          backgroundColor: hovered ? colors.surface : 'transparent',
          border:          'none',
          borderRadius:    radii.boxSm,
          cursor:          onClick ? 'pointer' : 'default',
          padding:         0,
          overflow:        'hidden',
          transition:      'background-color 0.1s',
        }}
      >
        <NavIcon name="export" size={24} />
      </button>
    </div>
  )
}
