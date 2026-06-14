import { GroupOfVerifyDenyAndPending } from './GroupOfVerifyDenyAndPending'

export default {
  title: '🟢   😂 Icon/Verify and Deny/Group Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

const font = '"Montserrat", sans-serif'

const ROWS = [
  { label: 'All default',      props: {} },
  { label: 'Deny hover',       props: { denyState:    'hover'   } },
  { label: 'Deny clicked',     props: { denyState:    'clicked' } },
  { label: 'Verify hover',     props: { verifyState:  'hover'   } },
  { label: 'Verify clicked',   props: { verifyState:  'clicked' } },
  { label: 'Pending hover',    props: { pendingState: 'hover'   } },
  { label: 'Pending clicked',  props: { pendingState: 'clicked' } },
  { label: 'No pending',       props: { hasPending: false }       },
]

export const Overview = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: font }}>
      <div style={{ border: '1.5px solid #E0D0FF', borderRadius: '12px', overflow: 'hidden', display: 'inline-block' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '160px auto', fontFamily: font, fontSize: '11px', fontWeight: 600, color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.05em', backgroundColor: '#F8F5FF' }}>
          <div style={{ padding: '12px 16px' }}>State</div>
          <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>Preview</div>
        </div>
        {ROWS.map(({ label, props }) => (
          <div key={label} style={{ display: 'grid', gridTemplateColumns: '160px auto', borderTop: '1px solid #F0F0F0', alignItems: 'center' }}>
            <div style={{ padding: '12px 16px', fontSize: '12px', color: '#838383', fontFamily: font }}>{label}</div>
            <div style={{ padding: '12px 16px', borderLeft: '1px solid #F0F0F0' }}>
              <GroupOfVerifyDenyAndPending {...props} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}
