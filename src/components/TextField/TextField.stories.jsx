import { useState } from 'react'
import { TextField } from './TextField'

export default {
  title: '🟠   🍃 Text Fields/Variants',
  component: TextField,
  args: { type: 'comment', value: '', promptEngineer: false },
  argTypes: {
    type: { control: 'select', options: ['comment', 'feedback', 'ai'] },
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

const LITTLE_TEXT = 'Patient needs to drink more water to stay hydrated.'
const LOT_OF_TEXT = 'Patient needs to drink more water to stay hydrated. The doctor has recommended at least 2 liters per day. Staff should encourage fluids at every meal and during medication rounds. Please document fluid intake carefully in the chart and flag if intake falls below 1 liter.'

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

export const CommentNoText     = { render: (args) => <Controlled {...args} />, args: { type: 'comment' } }
export const CommentLittleText = { render: (args) => <Controlled {...args} />, args: { type: 'comment', value: LITTLE_TEXT } }
export const CommentALotOfText = { render: (args) => <Controlled {...args} />, args: { type: 'comment', value: LOT_OF_TEXT } }
export const FeedbackNoText     = { render: (args) => <Controlled {...args} />, args: { type: 'feedback' } }
export const FeedbackLittleText = { render: (args) => <Controlled {...args} />, args: { type: 'feedback', value: LITTLE_TEXT } }
export const FeedbackALotOfText = { render: (args) => <Controlled {...args} />, args: { type: 'feedback', value: LOT_OF_TEXT } }
export const AiNoText     = { render: (args) => <Controlled {...args} />, args: { type: 'ai' } }
export const AiLittleText = { render: (args) => <Controlled {...args} />, args: { type: 'ai', value: LITTLE_TEXT } }
export const AiALotOfText = { render: (args) => <Controlled {...args} />, args: { type: 'ai', value: LOT_OF_TEXT } }
