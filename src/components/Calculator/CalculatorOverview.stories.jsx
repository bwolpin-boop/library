import { Calculator } from './Calculator'

export default {
  title: '🟢   💊 Calculator/Calculator/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const label = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
    {text}
  </div>
)

const TYPES = [
  { type: 'positive',          desc: 'positive' },
  { type: 'no result',         desc: 'no result' },
  { type: 'alert',             desc: 'alert' },
  { type: 'no result 2',       desc: 'no result 2' },
  { type: '1 answer',          desc: '1 answer' },
  { type: 'didnt affect hipps',desc: 'didnt affect hipps' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '48px', fontFamily: font, display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {TYPES.map(({ type, desc }) => (
        <div key={type}>
          {label(desc)}
          <Calculator calculatorType={type} />
        </div>
      ))}

      <div>
        {label('positive — with info icon')}
        <Calculator calculatorType="positive" infoIcon />
      </div>
    </div>
  ),
}
