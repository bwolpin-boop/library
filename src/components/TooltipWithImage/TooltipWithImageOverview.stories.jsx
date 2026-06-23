import { TooltipWithImage } from './TooltipWithImage'

export default {
  title: '🟢   🏷 TooltipWithImage/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const sectionTitleStyle = {
  fontFamily: font,
  fontSize: '14px',
  fontWeight: 700,
  color: '#222222',
  marginBottom: '16px',
}

const rowStyle = {
  display: 'flex',
  gap: '32px',
  flexWrap: 'wrap',
  marginBottom: '40px',
}

const TITLE = 'New update for DolphinCare: Get excited for this!'
const BODY  = 'Before you can save you have to make sure to correct all the error messages. Before you can save you have to make sure to correct all the error messages.'

export const Overview = {
  render: () => (
    <div style={{ padding: '24px', fontFamily: font }}>
      <div style={sectionTitleStyle}>Image Below (Default)</div>
      <div style={rowStyle}>
        <TooltipWithImage variant="image-below" badge="New" title={TITLE} body={BODY} primaryLabel="Confirm" secondaryLabel="Dismiss" />
      </div>

      <div style={sectionTitleStyle}>Image Above</div>
      <div style={rowStyle}>
        <TooltipWithImage variant="image-above" badge="New" title={TITLE} body={BODY} primaryLabel="Confirm" secondaryLabel="Dismiss" />
      </div>

      <div style={sectionTitleStyle}>No Badge</div>
      <div style={rowStyle}>
        <TooltipWithImage variant="image-below" badge="" title={TITLE} body={BODY} primaryLabel="Confirm" secondaryLabel="Dismiss" />
      </div>
    </div>
  ),
}
