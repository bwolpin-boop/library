import { useState, useRef, useEffect } from 'react'
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii } from '../../tokens.js'
import { SourceTypeIcon } from '../Icon/SourceTypeIcon.jsx'
import { SourceAlsoAnswers } from '../SourceAlsoAnswers/SourceAlsoAnswers.jsx'

const reg12 = { fontFamily: fonts.montserrat, fontSize: fontSizes.xs, fontWeight: fontWeights.regular, lineHeight: lineHeights.sm }

const MIN_GAP = 16  // minimum px gap required between left and right sections

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
  const [hovered,   setHovered]   = useState(false)
  const [showRight, setShowRight] = useState(true)

  const containerRef  = useRef(null)
  const leftRef       = useRef(null)
  const rightRef      = useRef(null)
  const rightWidthRef = useRef(0)   // cache last measured right width

  const isSources = type === 'sources'
  const isIpa     = type === 'ipa'
  const hasRight  = isSources || isIpa

  useEffect(() => {
    if (!hasRight) return
    const container = containerRef.current
    if (!container) return

    const check = () => {
      if (rightRef.current) {
        rightWidthRef.current = rightRef.current.offsetWidth
      }
      const leftWidth  = leftRef.current?.offsetWidth ?? 0
      const rightWidth = rightWidthRef.current
      const available  = container.offsetWidth - leftWidth
      setShowRight(available >= rightWidth + MIN_GAP)
    }

    const obs = new ResizeObserver(check)
    obs.observe(container)
    check()
    return () => obs.disconnect()
  }, [hasRight])

  return (
    <div
      ref={containerRef}
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
        backgroundColor:      (onClick && hovered) ? colors.surface : 'transparent',
        borderTopLeftRadius:  radii.box,
        borderTopRightRadius: radii.box,
        cursor:               onClick ? 'pointer' : 'default',
        transition:           'background-color 0.1s',
        overflow:             'hidden',
      }}
    >
      {/* Left: icon + date + optional doc name */}
      <div ref={leftRef} style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
        <SourceTypeIcon type={sourceType} size={16} />
        <span style={{
          ...reg12,
          color:           colors.primary,
          whiteSpace:      'nowrap',
          textDecoration:  (onClick && hovered) ? 'underline' : 'none',
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
      {hasRight && (
        <div
          ref={rightRef}
          style={{
            flexShrink:  0,
            visibility:  showRight ? 'visible' : 'hidden',
            pointerEvents: showRight ? 'auto' : 'none',
          }}
        >
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
        </div>
      )}
    </div>
  )
}
