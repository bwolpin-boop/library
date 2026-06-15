import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii } from '../../tokens.js'
import { SourceTypeIcon } from '../Icon/SourceTypeIcon.jsx'
import { SourceAlsoAnswers } from '../SourceAlsoAnswers/SourceAlsoAnswers.jsx'

const reg12 = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm }

export function SourceHeader({
  type          = 'sources',  // 'sources' | 'ipa' | 'prescrub'
  sourceType    = 'IV Fluids',
  uploadedDate  = '15/12/2025',
  docName,
  // SourceAlsoAnswers props
  tabs          = ['M1200B', 'M1201A', 'M1202C'],
  activeTabIndex = 0,
  strengthLabel = 'Strong',
  onTabClick,
  onDeny,
  onVerify,
  onClick,
}) {
  const [hovered, setHovered] = useState(false)

  const isSources = type === 'sources'
  const isIpa     = type === 'ipa'

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:              'flex',
        alignItems:           'center',
        justifyContent:       'space-between',
        padding:              isIpa ? '4px 24px' : '6.5px 24px',
        height:               isIpa ? 32 : 34,
        borderBottom:         `1px solid ${colors.dividerSubtle}`,
        boxSizing:            'border-box',
        backgroundColor:      hovered ? colors.surface : 'transparent',
        borderTopLeftRadius:  radii.box,
        borderTopRightRadius: radii.box,
        cursor:               'pointer',
        transition:           'background-color 0.1s',
      }}
    >
      {/* Left: icon + date + optional doc name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <SourceTypeIcon type={sourceType} size={16} />
        <span style={{
          ...reg12,
          color:           colors.primary,
          whiteSpace:      'nowrap',
          textDecoration:  hovered ? 'underline' : 'none',
        }}>
          Uploaded date: {uploadedDate}
        </span>
        {isSources && docName && (
          <span style={{ ...reg12, color: colors.secondary, whiteSpace: 'nowrap' }}>
            {docName}
          </span>
        )}
      </div>

      {/* Right: tabs (sources) | strength+verify (ipa) | nothing (prescrub) */}
      {(isSources || isIpa) && (
        <SourceAlsoAnswers
          type={isIpa ? 'IPA' : 'Source popup'}
          hasText={isSources}
          hasVerifyAndDeny={isIpa}
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          strengthLabel={strengthLabel}
          onTabClick={onTabClick}
          onDeny={onDeny}
          onVerify={onVerify}
        />
      )}
    </div>
  )
}
