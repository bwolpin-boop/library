import { useState } from 'react'
import { TextField } from './TextField'

export default {
  title: '🟠   🍃 Text Fields/Variants',
  component: TextField,
  args: { size: 'big', type: 'comment', value: '', promptEngineer: false },
  argTypes: {
    type: { control: 'select', options: ['comment', 'feedback', 'ai'] },
    size: { control: 'select', options: ['big', 'small'] },
    promptEngineer: { control: 'boolean' },
    value: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '32px', maxWidth: '620px' }}>
        <Story />
      </div>
    ),
  ],
}

function Controlled(args) {
  const [value, setValue] = useState(args.value || '')
  const [pe, setPe] = useState(args.promptEngineer || false)
  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      promptEngineer={pe}
      onPromptEngineerChange={setPe}
      onSend={() => setValue('')}
    />
  )
}

export const Comment       = { render: (args) => <Controlled {...args} />, args: { type: 'comment', size: 'big' } }
export const CommentTyping = { render: (args) => <Controlled {...args} />, args: { type: 'comment', size: 'big', value: 'Patient needs to drink more water to stay hydrated.' } }
export const Feedback      = { render: (args) => <Controlled {...args} />, args: { type: 'feedback', size: 'small' } }
export const FeedbackTyping = { render: (args) => <Controlled {...args} />, args: { type: 'feedback', size: 'small', value: 'Patient needs to drink more water to stay hydrated.' } }
export const Ai            = { render: (args) => <Controlled {...args} />, args: { type: 'ai', size: 'big' } }
export const AiTyping      = { render: (args) => <Controlled {...args} />, args: { type: 'ai', size: 'big', value: 'Patient needs to drink more water to stay hydrated.' } }
