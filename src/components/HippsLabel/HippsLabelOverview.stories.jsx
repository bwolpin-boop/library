import { HippsLabel } from './HippsLabel'

export default {
  title: '🟢   🗓 HippsLabel/Overview',
  component: HippsLabel,
}

export const Overview = {
  render: () => (
    <div style={{ padding: 24 }}>
      <HippsLabel amount="$646.37" code="AGSFG" />
    </div>
  )
}
