import { useState, useEffect, useRef } from 'react'
import { colors, textStyles, radii } from '../../tokens.js'
import { NavIcon } from '../Icon/NavIcon.jsx'
import { IconButton } from '../Icon/IconButton.jsx'

function MicCloseButton({ onClick }) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? colors.dividerSubtle : hover ? colors.surfacePressed : colors.surface
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPressed(false) }} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0, display: 'flex' }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3Z" fill={bg}/>
        <path d="M9 16L16 9M9 9L16 16" stroke={colors.primary} strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

function MicCheckButton({ onClick }) {
  const [hover, setHover] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? colors.purplePressed : hover ? colors.purpleHover : colors.purple
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPressed(false) }} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0, display: 'flex' }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3Z" fill={bg}/>
        <path d="M7.5 12.5L10.7692 16L17 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

function PlaceholderStyle() {
  return (
    <style>{`
      .dc-tf textarea::placeholder { color: ${colors.muted}; }
    `}</style>
  )
}

const BAR_COUNT = 90
const BAR_WIDTH = 2.4
const BAR_GAP   = 5
const SLOT      = BAR_WIDTH + BAR_GAP  // 7.5px — one bar + its gap
const TICK_MS   = 200                  // how long it takes to scroll one slot

function MicRecordingOverlay({ onCancel, onConfirm, onChange }) {
  const [bars, setBars]   = useState([])
  const innerRef          = useRef(null)
  const rafRef            = useRef(null)
  const audioRef          = useRef(null)
  const recognitionRef    = useRef(null)
  const barsRef           = useRef([])
  const offsetRef         = useRef(0)
  const silenceTimerRef   = useRef(null)

  function resetSilenceTimer() {
    clearTimeout(silenceTimerRef.current)
    silenceTimerRef.current = setTimeout(onCancel, 12000)
  }

  useEffect(() => {
    let ctx, stream
    const pxPerFrame = SLOT / (TICK_MS / (1000 / 60))
    resetSilenceTimer()

    // Speech recognition — types out words as you speak
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (SR) {
      const recognition = new SR()
      recognition.continuous = true
      recognition.interimResults = true
      recognition.onresult = (e) => {
        let transcript = ''
        for (let i = 0; i < e.results.length; i++) {
          transcript += e.results[i][0].transcript
        }
        onChange?.({ target: { value: transcript } })
      }
      recognition.start()
      recognitionRef.current = recognition
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(s => {
        stream = s
        ctx = new AudioContext()
        const analyser = ctx.createAnalyser()
        analyser.fftSize = 1024
        ctx.createMediaStreamSource(stream).connect(analyser)
        const data = new Uint8Array(analyser.fftSize)

        function tick() {
          offsetRef.current += pxPerFrame

          if (offsetRef.current >= SLOT) {
            offsetRef.current -= SLOT
            analyser.getByteTimeDomainData(data)
            let sum = 0
            for (let j = 0; j < data.length; j++) {
              const v = (data[j] - 128) / 128
              sum += v * v
            }
            const rms  = Math.min(1, Math.sqrt(sum / data.length) * 14)
            const h    = Math.max(0.04, rms)
            if (h > 0.1) resetSilenceTimer()
            const prev = barsRef.current
            const next = prev.length < BAR_COUNT ? [...prev, h] : [...prev.slice(1), h]
            barsRef.current = next
            setBars([...next])
          }

          if (innerRef.current) {
            innerRef.current.style.transform = `translateX(-${offsetRef.current}px)`
          }

          rafRef.current = requestAnimationFrame(tick)
        }

        audioRef.current = { ctx, stream }
        tick()
      })
      .catch(() => {})

    return () => {
      clearTimeout(silenceTimerRef.current)
      recognitionRef.current?.stop()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (audioRef.current) {
        audioRef.current.stream.getTracks().forEach(t => t.stop())
        audioRef.current.ctx.close()
      }
    }
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: radii.boxSm,
      height: '24px',
      width: '100%',
      flexShrink: 0,
    }}>
      {/* Overflow container clips the sliding inner row */}
      <div style={{ flex: 1, overflow: 'hidden', height: '100%' }}>
        <div
          ref={innerRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: `${BAR_GAP}px`,
            height: '100%',
          }}
        >
          {bars.map((h, i) => {
            const isBar = h > 0.06
            return (
              <div
                key={i}
                style={{
                  flex: `0 0 ${BAR_WIDTH}px`,
                  height: isBar ? `${Math.max(BAR_WIDTH, Math.round(h * 20))}px` : `${BAR_WIDTH}px`,
                  backgroundColor: colors.secondary,
                  borderRadius: isBar ? '1.5px' : '50%',
                }}
              />
            )
          })}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px', flexShrink: 0 }}>
        <MicCloseButton  onClick={onCancel} />
        <MicCheckButton  onClick={onConfirm} />
      </div>
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
  const [isRecording, setIsRecording] = useState(false)
  const textareaRef = useRef(null)

  const hasValue = value.length > 0
  const isAi = type === 'ai'
  const isSmall = size === 'small'

  const sendIconName = hasValue ? 'send-active' : 'send-disabled'

  function handleSend() {
    onSend?.()
    if (promptEngineer) onPromptEngineerChange?.(false)
  }

  const paddingTop    = isSmall ? '12px' : '16px'
  const paddingH      = isSmall ? '16px' : '24px'
  const paddingBottom = '16px'
  const minTextareaH  = isSmall ? 47 : 43
  const maxTextareaH  = isSmall ? 94 : 90
  const defaultPlaceholder = type === 'feedback' ? 'Type your feedback here' : 'Add a Comment'

  // Auto-resize the textarea between min and max on every value change
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    const capped = Math.max(minTextareaH, Math.min(el.scrollHeight, maxTextareaH))
    el.style.height = `${capped}px`
    el.style.overflowY = el.scrollHeight > maxTextareaH ? 'auto' : 'hidden'
  }, [value, minTextareaH, maxTextareaH])

  return (
    <div className="dc-tf" style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      <PlaceholderStyle />
      <div style={{
        backgroundColor: colors.white,
        border: `1px solid ${colors.dividerSubtle}`,
        borderRadius: radii.box,
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>

        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          placeholder={isRecording ? 'Listening...' : (placeholder || defaultPlaceholder)}
          onClick={isRecording ? () => setIsRecording(false) : undefined}
          style={{
            resize: 'none', border: 'none', outline: 'none',
            minHeight: minTextareaH,
            ...textStyles.body12Regular,
            color: colors.primary,
            backgroundColor: 'transparent',
            overflowY: 'hidden',
            cursor: isRecording ? 'text' : undefined,
            fontStyle: isRecording ? 'italic' : 'normal',
            boxSizing: 'border-box',
            width: '100%',
            paddingTop: paddingTop,
            paddingLeft: paddingH,
            paddingRight: paddingH,
            paddingBottom: 0,
          }}
        />

        <div style={{ flexShrink: 0, paddingLeft: paddingH, paddingRight: paddingH, paddingBottom: paddingBottom, marginTop: '8px' }}>
          {isRecording ? (
            <MicRecordingOverlay
              onCancel={() => setIsRecording(false)}
              onConfirm={() => { setIsRecording(false); onRecordingConfirm?.() }}
              onChange={onChange}
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
                  <NavIcon name={promptEngineer ? 'checkbox-filled-small' : 'checkbox-small'} size={16} />
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
                    <IconButton name={sendIconName} size={16} onClick={handleSend} />
                  ) : (
                    <IconButton name="mic-small" size={16} onClick={() => setIsRecording(true)} />
                  )}
                </div>
              ) : (
                <IconButton
                  name={sendIconName}
                  size={16}
                  onClick={hasValue ? handleSend : undefined}
                  disabled={!hasValue}
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
