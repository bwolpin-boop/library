import { NewBadge } from './NewBadge'

export default {
  title: '🟢   😂 Icon/New Badge/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const cardStyle = {
  border: '1.5px solid #E0D0FF',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '40px',
  display: 'inline-block',
}

const headerStyle = {
  fontFamily: font,
  fontSize: '11px',
  fontWeight: 600,
  color: '#A3A3A3',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  padding: '10px 16px',
  backgroundColor: '#F8F5FF',
}

const cellStyle = {
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}

export const Overview = {
  render: () => (
    <div style={{ padding: '24px', fontFamily: font }}>
      <div style={{ fontSize: '14px', fontWeight: 700, color: '#222', marginBottom: '16px' }}>
        New Badge
      </div>
      <div style={cardStyle}>
        <div style={headerStyle}>Labels</div>
        <div style={cellStyle}>
          <NewBadge label="New" />
          <NewBadge label="Beta" />
          <NewBadge label="Updated" />
        </div>
      </div>
    </div>
  ),
}
