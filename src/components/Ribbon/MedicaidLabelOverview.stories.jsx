import { MedicaidLabel } from './MedicaidLabel'

export default {
  title: '🟢   🎀 Ribbon/MedicaidLabel/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

export const Overview = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: '"Montserrat", sans-serif' }}>
      <MedicaidLabel type="medicaid" state="TX" />
      <MedicaidLabel type="medicare" state="TX" />
    </div>
  ),
}
