import { Logo } from './Logo'

export default {
  title: 'Components/Logo/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const cardStyle = {
  border: '1.5px solid #E0D0FF',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'inline-block',
}

const cellStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px 48px',
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={cardStyle}>
        <div style={cellStyle}>
          <Logo />
        </div>
      </div>
    </div>
  ),
}
