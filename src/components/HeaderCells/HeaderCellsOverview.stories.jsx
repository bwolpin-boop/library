import { HeaderCells } from './HeaderCells'

export default {
  title: '🟢   💊 IPA components/Header Cells/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const label = (text) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
    {text}
  </div>
)

export const Overview = {
  render: () => (
    <div style={{ padding: 48, fontFamily: font, display: 'flex', flexDirection: 'column', gap: 32 }}>
      {label('default — with sort icon')}
      <HeaderCells variant="default" label="Facilities" />

      {label('other labels')}
      <div style={{ display: 'flex', gap: 32 }}>
        <HeaderCells variant="default" label="Date" />
        <HeaderCells variant="default" label="Source" />
        <HeaderCells variant="default" label="Type" />
      </div>

      {label('empty — invisible placeholder')}
      <HeaderCells variant="empty" label="Facilities" />
    </div>
  ),
}
