import { NtaPopup } from './NtaPopup'

export default {
  title: '🟠   📁 sources/NTA Popup/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', width: 922 }}>
      <NtaPopup />
    </div>
  ),
}
