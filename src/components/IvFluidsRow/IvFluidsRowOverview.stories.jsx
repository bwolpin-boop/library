import { IvFluidsRow } from './IvFluidsRow'

export default {
  title: '🟠   📁 sources/IV Fluids Row/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'
const sectionLabel = (t) => (
  <div style={{ fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', marginTop: '20px' }}>{t}</div>
)

const baseProps = {
  name: 'Sodium Chloride',
  volume: '50 mL',
  dosage: '80 mL/3x a day',
  date: '15/04/2025',
  pageRef: 'pg. 12',
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, width: 705 }}>
      {sectionLabel('Prescrub')}
      <IvFluidsRow {...baseProps} purpose="prescrub" type="Default" />
      <IvFluidsRow {...baseProps} purpose="prescrub" type="verified" />
      <IvFluidsRow {...baseProps} purpose="prescrub" type="pending" />
      <IvFluidsRow {...baseProps} purpose="prescrub" type="denied" />

      {sectionLabel('Source Popup')}
      <IvFluidsRow {...baseProps} purpose="source popup" lineNumber="23" />
      <IvFluidsRow {...baseProps} purpose="source popup" lineNumber="24" name="Dextrose 5%" volume="100 mL" />

      {sectionLabel('View More / View Less')}
      <IvFluidsRow purpose="view more" count={234} />
      <IvFluidsRow purpose="view less" />
    </div>
  ),
}
