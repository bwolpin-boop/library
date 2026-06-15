import { SidePanel } from './SidePanel'

export default {
  title: '🟠   📁 sources/Side Panel/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

export const Overview = {
  render: () => (
    <div style={{ padding: 40, fontFamily: font, display: 'flex', gap: 32 }}>
      <div style={{ position: 'relative', width: 340, height: 260, border: '1px solid #E7E7E7', borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
        <SidePanel sourceType="IV Fluids" uploadedDate="15/12/2025" docName="iv_fluids_chart_dec2025.pdf" />
      </div>
      <div style={{ position: 'relative', width: 340, height: 260, border: '1px solid #E7E7E7', borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
        <SidePanel sourceType="Progress Notes" uploadedDate="10/12/2025" docName="progress_notes_dec_2025_b.pdf" />
      </div>
    </div>
  ),
}
