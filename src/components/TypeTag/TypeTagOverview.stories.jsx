import { TypeTag } from './TypeTag'

export default {
  title: '🟢   💊 IPA components/Type Tag/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const variants = [
  { label: 'Acute' },
  { label: 'Medical Management' },
  { label: 'Skilled Nursing' },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: font, display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      {variants.map(({ label }) => (
        <TypeTag key={label} label={label} />
      ))}
    </div>
  ),
}
