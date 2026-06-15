import { SidePanel } from './SidePanel'

export default {
  title: '🟠   📁 sources/Side Panel/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

export const Overview = {
  render: () => (
    <div style={{ position: 'relative', width: 400, height: 500, border: '1px solid #E7E7E7', borderRadius: 10, overflow: 'hidden', background: '#f5f5f5' }}>
      <SidePanel
        sourceType="Progress Notes"
        uploadedDate="15/12/2025"
        docName="progress_notes_dec_2025.pdf"
      />
    </div>
  ),
}
