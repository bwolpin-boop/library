import { SourceHeader } from './SourceHeader'

export default {
  title: '🟠   📁 sources/Source Header/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font   = '"Montserrat", sans-serif'
const label  = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8, marginTop: 24 }}>
    {text}
  </div>
)

const common = {
  sourceType:   'IV Fluids',
  uploadedDate: '15/12/2025',
  tabs:         ['M1200B', 'M1201A', 'M1202C'],
}

export const Overview = {
  render: () => (
    <div style={{ padding: 48, fontFamily: font }}>
      {label('sources')}
      <div style={{ width: 712, border: '1px solid #E7E7E7', borderRadius: 4 }}>
        <SourceHeader type="sources" {...common} docName="IV blabla .pdf" />
      </div>

      {label('sources — no doc name')}
      <div style={{ width: 712, border: '1px solid #E7E7E7', borderRadius: 4 }}>
        <SourceHeader type="sources" {...common} />
      </div>

      {label('ipa')}
      <div style={{ width: 712, border: '1px solid #E7E7E7', borderRadius: 4 }}>
        <SourceHeader type="ipa" {...common} strengthLabel="Strong" />
      </div>

      {label('prescrub')}
      <div style={{ width: 712, border: '1px solid #E7E7E7', borderRadius: 4 }}>
        <SourceHeader type="prescrub" {...common} />
      </div>
    </div>
  ),
}
