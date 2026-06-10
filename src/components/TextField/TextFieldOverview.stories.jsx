import { useState } from 'react'
import { TextField } from './TextField'

export default {
  title: '🟠   🍃 Text Fields/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'Comment / Big',          type: 'comment',  size: 'big' },
  { label: 'Feedback / Small',       type: 'feedback', size: 'small' },
  { label: 'AI / Big',               type: 'ai',       size: 'big' },
]

function LiveField({ type, size }) {
  const [value, setValue] = useState('')
  const [pe, setPe] = useState(false)
  return (
    <TextField
      type={type}
      size={size}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      promptEngineer={pe}
      onPromptEngineerChange={setPe}
      onSend={() => setValue('')}
    />
  )
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '640px' }}>
        {variants.map(({ label, type, size }) => (
          <div key={label}>
            <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              {label}
            </div>
            <LiveField type={type} size={size} />
          </div>
        ))}
      </div>
    </div>
  ),
}
