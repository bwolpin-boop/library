import { useState } from 'react'
import { colors, textStyles, radii } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { IconButton } from '../Icon/IconButton.jsx'

function PlaceholderStyle() {
  return (
    <style>{`
      .dc-tf textarea::placeholder { color: ${colors.muted}; }
    `}</style>
  )
}

const BAR_HEIGHTS = [
  0.08,0.10,0.12,0.08,0.15,0.10,0.08,0.20,0.14,0.10,
  0.28,0.40,0.55,0.45,0.62,0.80,0.70,0.90,0.75,0.85,
  1.00,0.88,0.95,0.72,0.84,0.65,0.78,0.60,0.70,0.55,
  0.80,0.65,0.90,0.72,0.60,0.48,0.40,0.30,0.22,0.18,
  0.28,0.20,0.15,0.22,0.12,0.10,0.14,0.08,0.10,0.08,
]

function MicRecordingOverlay({ onCancel, onConfirm }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: colors.white,
      borderRadius: radii.boxSm,
      height: '24px',
      width: '100%',
      flexShrink: 0,
    }}>
      <style>{`
        @keyframes dc-mic-bar {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.25); }
        }
      `}</style>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '2px', overflow: 'hidden', height: '100%' }}>
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 2px',
              height: `${Math.max(2, Math.round(h * 14))}px`,
              backgroundColor: colors.muted,
              borderRadius: '1px',
              transformOrigin: 'center',
              animation: `dc-mic-bar ${0.7 + (i % 6) * 0.12}s ease-in-out ${(i % 9) * 0.07}s infinite`,
            }}
          />
        ))}
      </div>

      <IconButton name="close"     size={16} onClick={onCancel} />
      <IconButton name="checkmark" size={16} onClick={onConfirm} />
    </div>
  )
}

export function TextField({
  type = 'comment',
  size = 'big',
  value = '',
  onChange,
  placeholder,
  onSend,
  onRecordingConfirm,
  promptEngineer = false,
  onPromptEngineerChange,
}) {
  const [sendHover, setSendHover] = useState(false)
  const [sendPressed, setSendPressed] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  const hasValue = value.length > 0
  const isAi = type === 'ai'
  const isSmall = size === 'small'

  const sendIconName = !hasValue ? 'send-small'
    : sendPressed ? 'send-small-pressed'
    : sendHover   ? 'send-small-hover'
    : 'send-small-active'

  const sendHandlers = {
    onMouseEnter: () => setSendHover(true),
    onMouseLeave: () => { setSendHover(false); setSendPressed(false) },
    onMouseDown:  () => setSendPressed(true),
    onMouseUp:    () => setSendPressed(false),
  }

  const paddingTop    = isSmall ? '12px' : '16px'
  const paddingH      = isSmall ? '16px' : '24px'
  const paddingBottom = isSmall ? '16px' : '24px'
  const boxHeight     = isSmall ? '107px' : '154px'
  const defaultPlaceholder = type === 'feedback' ? 'Type your feedback here' : 'Add a Comment'

  return (
    <div className="dc-tf" style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      <PlaceholderStyle />
      <div style={{
        position: 'relative',
        backgroundColor: colors.white,
        border: `1px solid ${colors.dividerSubtle}`,
        borderRadius: radii.box,
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        padding: `${paddingTop} ${paddingH} ${paddingBottom}`,
        height: boxHeight,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '32px',
          background: `linear-gradient(to bottom, ${colors.white}, transparent)`,
          pointerEvents: 'none', zIndex: 1,
        }} />

        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder || defaultPlaceholder}
          style={{
            flex: 1, resize: 'none', border: 'none', outline: 'none',
            ...textStyles.body12Regular,
            color: colors.primary,
            backgroundColor: 'transparent',
            width: '100%', overflowY: 'auto',
          }}
        />

        <div style={{ flexShrink: 0, marginTop: '8px' }}>
          {isRecording ? (
            <MicRecordingOverlay
              onCancel={() => setIsRecording(false)}
              onConfirm={() => { setIsRecording(false); onRecordingConfirm?.() }}
            />
          ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {type === 'comment' ? (
            <button
              onClick={() => onPromptEngineerChange?.(!promptEngineer)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <NavIcon name="checkbox-small" size={16} />
              <span style={{ ...textStyles.body12Regular, color: colors.secondary }}>
                Also send to the prompt engineer
              </span>
            </button>
          ) : (
            <div />
          )}

          {isAi ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <IconButton name="plus-small" size={16} />
              {hasValue ? (
                <IconButton
                  name={sendIconName}
                  size={16}
                  onClick={onSend}
                  onMouseEnter={sendHandlers.onMouseEnter}
                  onMouseLeave={sendHandlers.onMouseLeave}
                  onMouseDown={sendHandlers.onMouseDown}
                  onMouseUp={sendHandlers.onMouseUp}
                />
              ) : (
                <IconButton name="mic-small" size={16} onClick={() => setIsRecording(true)} />
              )}
            </div>
          ) : (
            <IconButton
              name={sendIconName}
              size={16}
              onClick={hasValue ? onSend : undefined}
              disabled={!hasValue}
              onMouseEnter={hasValue ? sendHandlers.onMouseEnter : undefined}
              onMouseLeave={hasValue ? sendHandlers.onMouseLeave : undefined}
              onMouseDown={hasValue ? sendHandlers.onMouseDown : undefined}
              onMouseUp={hasValue ? sendHandlers.onMouseUp : undefined}
            />
          )}
          </div>
          )}
        </div>
      </div>

      {isAi && (
        <p style={{
          ...textStyles.body10Medium,
          color: colors.secondary,
          textAlign: 'center',
          margin: 0,
        }}>
          Claude is Ai and can make mistakes. Please double check responses.
        </p>
      )}
    </div>
  )
}
