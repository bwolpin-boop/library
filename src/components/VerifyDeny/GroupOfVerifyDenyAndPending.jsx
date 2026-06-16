import { useState, useEffect } from 'react'
import { VerifyAndDeny } from './VerifyAndDeny.jsx'

export function GroupOfVerifyDenyAndPending({
  hasPending = true,
  // Seed the initial selection — used when the component remounts (e.g. hover overlay)
  initialActiveType = null,
  // External forced status: 'denied' | 'verified' | 'pending' | null
  forcedStatus,
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

  useEffect(() => {
    if (forcedStatus === undefined) return
    if (forcedStatus === 'denied')   setActiveType('deny')
    else if (forcedStatus === 'verified') setActiveType('verify')
    else if (forcedStatus === 'pending')  setActiveType('pending')
    else setActiveType(null)
  }, [forcedStatus])

  function handleClick(type, externalHandler) {
    setActiveType(prev => prev === type ? null : type)
    externalHandler?.()
  }

  const denyForce    = denyState    ?? (activeType === 'deny'    ? 'clicked' : undefined)
  const verifyForce  = verifyState  ?? (activeType === 'verify'  ? 'clicked' : undefined)
  const pendingForce = pendingState ?? (activeType === 'pending' ? 'clicked' : undefined)

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
      <VerifyAndDeny type="deny"    tooltipLabel="Deny"    forceState={denyForce}    onClick={() => handleClick('deny',    onDeny)} />
      <VerifyAndDeny type="verify"  tooltipLabel="Verify"  forceState={verifyForce}  onClick={() => handleClick('verify',  onVerify)} />
      {hasPending && (
        <VerifyAndDeny type="pending" tooltipLabel="Pending" forceState={pendingForce} onClick={() => handleClick('pending', onPending)} />
      )}
    </div>
  )
}
