import { useState } from 'react'

function PlaceholderStyle() {
  return (
    <style>{`
      .dc-sf input::placeholder { color: #8c8ca1; }
      .dc-sf input:disabled { cursor: not-allowed; }
    `}</style>
  )
}

function SearchIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="dc:shrink-0">
      <circle cx="11" cy="11" r="6.5" stroke="#8c8ca1" strokeWidth="1.2"/>
      <path d="M15.5 15.5L20 20" stroke="#8c8ca1" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

function ClearButton({ size, onClick }) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className={`dc:border-none dc:p-0 dc:cursor-pointer dc:flex dc:items-center dc:justify-center dc:shrink-0 dc:rounded-icon ${pressed ? 'dc:bg-divider-subtle' : hover ? 'dc:bg-surface-pressed' : 'dc:bg-transparent'}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 16.5L16.5 7M7 7L16.5 16.5" stroke="#8c8ca1" strokeWidth="1.2" strokeLinecap="round"/>
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
    fontSize: '16px',
    lineHeight: '1.428',
    errorFontSize: '12px',
  },
  middle: {
    width: 220,
    height: 28,
    paddingH: '8px',
    paddingV: '4px',
    gap: '8px',
    iconSize: 20,
    radius: '8px',
    fontSize: '12px',
    lineHeight: '18px',
    errorFontSize: '8px',
  },
  small: {
    width: 140,
    height: 22,
    paddingH: '8px',
    paddingV: '0px',
    gap: '4px',
    iconSize: 16,
    radius: '4px',
    fontSize: '12px',
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
  else if (error) borderColor = '#e53e3e'
  else if (focused) borderColor = '#a852ff'
  else borderColor = '#e8e8ec'

  const bg = disabled ? '#e8e8ec' : '#ffffff'

  return (
    <div className="dc-sf dc:inline-flex dc:flex-col dc:gap-[4px]">
      <PlaceholderStyle />
      <div
        className="dc:flex dc:items-center dc:box-border dc:transition-[border-color] dc:duration-150"
        style={{
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
        }}
      >
        {iconLeft && <SearchIcon size={config.iconSize} />}
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="dc:flex-1 dc:border-none dc:outline-none dc:bg-transparent dc:font-montserrat dc:font-regular dc:p-0"
          style={{
            minWidth: 0,
            fontSize: config.fontSize,
            lineHeight: config.lineHeight,
            color: value ? '#323338' : '#8c8ca1',
          }}
        />
        {iconRight && value && <ClearButton size={config.iconSize} onClick={onClear} />}
      </div>
      {error && config.errorFontSize && (
        <span
          className="dc:font-montserrat dc:font-regular dc:text-error"
          style={{ fontSize: config.errorFontSize, lineHeight: 'normal' }}
        >
          {error}
        </span>
      )}
    </div>
  )
}
