import { GroupOfVerifyDenyAndPending } from './GroupOfVerifyDenyAndPending'

export default {
  title: '🟢   😂 Icon/Verify and Deny/Group Overview',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

export const Overview = {
  render: () => (
    <div style={{ padding: '48px' }}>
      <GroupOfVerifyDenyAndPending />
    </div>
  ),
}
