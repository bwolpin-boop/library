import { spacing } from '../../tokens.js'
import { ThumbsComponent } from '../Icon/ThumbsComponent.jsx'
import { Comments } from '../Icon/Comments.jsx'
import { GroupOfVerifyDenyAndPending } from '../VerifyDeny/GroupOfVerifyDenyAndPending.jsx'

export function RowHoverActions({
  hasVerifyAndDeny = true,
  hasPending = true,
  commentsCount,
  upCount,
  downCount,
  upPressed = false,
  downPressed = false,
  activeVerify = null,    // 'verify' | 'deny' | 'pending' | null — seeds GroupOfVerifyDenyAndPending
  onUpClick,
  onDownClick,
  onCommentsClick,
  onDeny,
  onVerify,
  onPending,
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: spacing.gap24, justifyContent: 'flex-end', flexShrink: 0 }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: spacing.gap16, flexShrink: 0 }}>
        <ThumbsComponent
          upCount={upCount}
          downCount={downCount}
          upPressed={upPressed}
          downPressed={downPressed}
          onUpClick={onUpClick}
          onDownClick={onDownClick}
        />
        <Comments count={commentsCount} onClick={onCommentsClick} />
      </div>
      {hasVerifyAndDeny && (
        <GroupOfVerifyDenyAndPending
          hasPending={hasPending}
          initialActiveType={activeVerify}
          onDeny={onDeny}
          onVerify={onVerify}
          onPending={onPending}
        />
      )}
    </div>
  )
}
