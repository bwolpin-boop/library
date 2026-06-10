import { Button } from './Button'
import { LinkButton } from './LinkButton'
import { Link2Button } from './Link2Button'
import { StandardButton } from './StandardButton'

export default {
  title: '🟢   🆗 Button/Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const sectionTitleStyle = {
  fontFamily: font,
  fontSize: '14px',
  fontWeight: 700,
  color: '#222222',
  marginBottom: '12px',
}

const cardStyle = {
  border: '1.5px solid #E0D0FF',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '40px',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '90px repeat(4, 1fr)',
}

const colHeaderStyle = {
  fontFamily: font,
  fontSize: '11px',
  fontWeight: 600,
  color: '#A3A3A3',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  textAlign: 'center',
  padding: '12px 8px',
  backgroundColor: '#F8F5FF',
}

const rowLabelStyle = {
  fontFamily: font,
  fontSize: '12px',
  fontWeight: 600,
  color: '#222222',
  display: 'flex',
  alignItems: 'center',
  padding: '16px 16px',
  borderTop: '1px solid #F0F0F0',
}

const cellStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 8px',
  borderTop: '1px solid #F0F0F0',
}

const emptyStyle = {
  ...cellStyle,
  color: '#D9D9D9',
  fontFamily: font,
  fontSize: '14px',
}

function Cell({ children }) {
  if (children === '—') return <div style={emptyStyle}>—</div>
  return <div style={cellStyle}>{children}</div>
}

function Section({ label, columns = ['Default', 'Small', 'Icon Left', 'Disabled'], rows }) {
  return (
    <div>
      <div style={sectionTitleStyle}>{label}</div>
      <div style={cardStyle}>
        <div style={gridStyle}>
          <div style={{ ...colHeaderStyle, backgroundColor: '#F8F5FF' }} />
          {columns.map(col => (
            <div key={col} style={colHeaderStyle}>{col}</div>
          ))}
          {rows.map(({ label, cells }) => (
            <>
              <div key={label} style={rowLabelStyle}>{label}</div>
              {cells.map((cell, i) => <Cell key={i}>{cell}</Cell>)}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font, maxWidth: '860px' }}>
      <Section
        label="Buttons"
        rows={[
          {
            label: 'Primary',
            cells: [
              <Button type="primary" size="default" label="Button" />,
              <Button type="primary" size="small" label="Button" />,
              <Button type="primary" size="default" label="Button" iconLeft />,
              <Button type="primary" size="default" label="Button" disabled />,
            ],
          },
          {
            label: 'Secondary',
            cells: [
              <Button type="secondary" size="default" label="Button" />,
              <Button type="secondary" size="small" label="Button" />,
              <Button type="secondary" size="default" label="Button" iconLeft />,
              <Button type="secondary" size="default" label="Button" disabled />,
            ],
          },
          {
            label: 'Tertiary',
            cells: [
              <Button type="tertiary" size="default" label="Button" />,
              <Button type="tertiary" size="small" label="Button" />,
              <Button type="tertiary" size="default" label="Button" iconLeft />,
              <Button type="tertiary" size="default" label="Button" disabled />,
            ],
          },
        ]}
      />

      <Section
        label="Links"
        rows={[
          {
            label: 'Link',
            cells: [
              <LinkButton size="default" label="Link" />,
              <LinkButton size="small" label="Link" />,
              <LinkButton size="default" label="Link" iconLeft />,
              <LinkButton size="default" label="Link" disabled />,
            ],
          },
          {
            label: 'Link 2',
            cells: [
              <Link2Button size="default" label="Link 2" />,
              <Link2Button size="small" label="Link 2" />,
              '—',
              <Link2Button size="default" label="Link 2" disabled />,
            ],
          },
        ]}
      />

      <Section
        label="Other"
        rows={[
          {
            label: 'Standard',
            cells: [
              <StandardButton size="default" label="View All Diagnoses" />,
              <StandardButton size="small" label="View All Diagnoses" />,
              '—',
              <StandardButton size="default" label="View All Diagnoses" disabled />,
            ],
          },
        ]}
      />
    </div>
  ),
}
