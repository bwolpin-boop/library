import { useState } from 'react'
import { VerifyAndDeny } from './VerifyAndDeny.jsx'

export function GroupOfVerifyDenyAndPending({
  hasPending = true,
  // Seed the initial selection — used when the component remounts (e.g. hover overlay)
  initialActiveType = null,
  // Story/display overrides — take priority over internal selection
  denyState,
  verifyState,
  pendingState,
  // onClick handlers for consumers
  onDeny,
  onVerify,
  onPending,
}) {
  const [activeType, setActiveType] = useState(initialActiveType)

  function handleClick(type, externalHandler) {
    setActiveType(prev => prev === type ? null : type)
    externalHandler?.()
  }

  const denyForce    = denyState    ?? (activeType === 'deny'    ? 'clicked' : undefined)
  const verifyForce  = verifyState  ?? (activeType === 'verify'  ? 'clicked' : undefined)
  const pendingForce = pendingState ?? (activeType === 'pending' ? 'clicked' : undefined)

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <VerifyAndDeny type="deny"    forceState={denyForce}    onClick={() => handleClick('deny',    onDeny)} />
      <VerifyAndDeny type="verify"  forceState={verifyForce}  onClick={() => handleClick('verify',  onVerify)} />
      {hasPending && (
        <VerifyAndDeny type="pending" forceState={pendingForce} onClick={() => handleClick('pending', onPending)} />
      )}
    </div>
  )
}
