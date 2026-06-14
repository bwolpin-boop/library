import { VerifyAndDeny } from './VerifyAndDeny.jsx'

export function GroupOfVerifyDenyAndPending({
  hasPending = true,
  // Per-button forceState for Storybook/display purposes
  denyState,
  verifyState,
  pendingState,
  // onClick handlers
  onDeny,
  onVerify,
  onPending,
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <VerifyAndDeny type="deny"    forceState={denyState}    onClick={onDeny} />
      <VerifyAndDeny type="verify"  forceState={verifyState}  onClick={onVerify} />
      {hasPending && (
        <VerifyAndDeny type="pending" forceState={pendingState} onClick={onPending} />
      )}
    </div>
  )
}
