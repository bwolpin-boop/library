import { colors, strokeWidths } from '../../tokens.js'

const typeConfig = {
  mds: {
    background: colors.disabled,
    borderColor: colors.mdsBlue,
    textColor:   colors.mdsBlue,
  },
  'yes-dc': {
    background: colors.purpleTint,
    borderColor: colors.purple,
    textColor:   colors.purple,
  },
  'not-dc': {
    background: colors.purpleTint,
    borderColor: colors.purple,
    textColor:   colors.purple,
  },
  empty: {
    background: colors.purpleTint,
    borderColor: colors.purple,
    textColor:   colors.purple,
    opacity:     0,
  },
}

export function MdsAndDcAnswer({ type = 'mds' }) {
  if (type === 'no-answer') {
    return (
      <div className="dc:inline-flex dc:items-center dc:justify-center dc:h-[24px] dc:[padding-left:4px] dc:[padding-right:8px]">
        <p className="dc:font-inter dc:text-xs dc:font-medium dc:whitespace-nowrap dc:[line-height:normal] dc:m-0 dc:text-muted">No chosen answer yet</p>
      </div>
    )
  }

  const config = typeConfig[type] ?? typeConfig.mds

  return (
    <div
      className="dc:inline-flex dc:items-center dc:justify-center dc:h-[24px] dc:rounded-box-sm"
      style={{
        padding: '5px 8px',
        backgroundColor: config.background,
        border: `${strokeWidths.icon}px solid ${config.borderColor}`,
        opacity: config.opacity ?? 1,
      }}
    >
      <ol
        className="dc:font-inter dc:text-xs dc:font-medium dc:whitespace-nowrap dc:[line-height:normal] dc:m-0 dc:p-0 dc:list-decimal"
        style={{ color: config.textColor }}
      >
        <li style={{ marginLeft: '18px' }}>Yes</li>
      </ol>
    </div>
  )
}
