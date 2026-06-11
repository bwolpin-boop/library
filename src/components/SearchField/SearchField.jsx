import { useState } from 'react'
import { colors, fonts, fontSizes, fontWeights, radii } from '../../tokens.js'

function PlaceholderStyle() {
  return (
    <style>{`
      .dc-sf input::placeholder { color: ${colors.secondary}; }
      .dc-sf input:disabled { cursor: not-allowed; }
    `}</style>
  )
}

function SearchIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <circle cx="11" cy="11" r="6.5" stroke={colors.secondary} strokeWidth="1.2"/>
      <path d="M15.5 15.5L20 20" stroke={colors.secondary} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

function ClearButton({ size, onClick }) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? colors.dividerSubtle : hover ? colors.surfacePressed : 'transparent'
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        background: bg,
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        borderRadius: radii.icon,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 16.5L16.5 7M7 7L16.5 16.5" stroke={colors.secondary} strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

const sizeConfig = {
  dashboard: {
    width: 344,
    height: 48,
    paddingH: '12px',
    paddingV: '12px',
    gap: '8px',
    iconSize: 24,
    radius: '8px',
    fontSize: fontSizes.base,
    lineHeight: '1.428',
    errorFontSize: fontSizes.xs,
  },
  middle: {
    width: 220,
    height: 28,
    paddingH: '8px',
    paddingV: '4px',
    gap: '8px',
    iconSize: 20,
    radius: '8px',
    fontSize: fontSizes.xs,
    lineHeight: '18px',
    errorFontSize: fontSizes.xxxs,
  },
  small: {
    width: 140,
    height: 22,
    paddingH: '8px',
    paddingV: '0px',
    gap: '4px',
    iconSize: 16,
    radius: radii.boxSm,
    fontSize: fontSizes.xs,
    lineHeight: '18px',
    errorFontSize: null,
  },
}

export function SearchField({
  size = 'dashboard',
  value = '',
  onChange,
  placeholder = 'Search',
  disabled = false,
  error = '',
  onClear,
  iconLeft = true,
  iconRight = true,
}) {
  const [focused, setFocused] = useState(false)
  const config = sizeConfig[size]

  let borderColor
  if (disabled) borderColor = 'transparent'
  else if (error) borderColor = colors.error
  else if (focused) borderColor = colors.purple
  else borderColor = colors.dividerSubtle

  const bg = disabled ? colors.dividerSubtle : colors.white

  return (
    <div className="dc-sf" style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
      <PlaceholderStyle />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: config.gap,
        width: `${config.width}px`,
        height: `${config.height}px`,
        paddingLeft: config.paddingH,
        paddingRight: config.paddingH,
        paddingTop: config.paddingV,
        paddingBottom: config.paddingV,
        backgroundColor: bg,
        border: disabled ? 'none' : `1px solid ${borderColor}`,
        borderRadius: config.radius,
        boxSizing: 'border-box',
        transition: 'border-color 0.15s',
      }}>
        {iconLeft && <SearchIcon size={config.iconSize} />}
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: fonts.montserrat,
            fontSize: config.fontSize,
            fontWeight: fontWeights.regular,
            lineHeight: config.lineHeight,
            color: value ? colors.primary : colors.secondary,
            padding: 0,
          }}
        />
        {iconRight && <ClearButton size={config.iconSize} onClick={onClear} />}
      </div>
      {error && config.errorFontSize && (
        <span style={{
          fontFamily: fonts.montserrat,
          fontSize: config.errorFontSize,
          fontWeight: fontWeights.regular,
          color: colors.error,
          lineHeight: 'normal',
        }}>
          {error}
        </span>
      )}
    </div>
  )
}
