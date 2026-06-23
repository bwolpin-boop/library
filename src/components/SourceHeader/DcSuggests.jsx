import { MdsAndDcAnswer } from '../Icon/MdsAndDcAnswer.jsx'
import { DolphinMan } from './DolphinMan.jsx'

export function DcSuggests({
  size        = 'big',    // 'big' | 'small'
  answerType  = 'yes-dc', // passed through to MdsAndDcAnswer
}) {
  const isBig = size === 'big'

  return (
    <div
      className="dc:relative dc:inline-flex dc:items-end dc:justify-between dc:gap-0 dc:py-gap8 dc:px-gap16 dc:rounded-box dc:bg-white dc:[box-shadow:0px_0px_7.5px_rgba(0,0,0,0.25)] dc:box-border dc:overflow-hidden"
      style={{ width: isBig ? '283px' : '169px' }}
    >
      <div className="dc:flex dc:flex-col dc:gap-gap8 dc:items-start dc:justify-center dc:shrink-0">
        <span className="dc:font-montserrat dc:text-xs dc:font-regular dc:leading-sm dc:text-primary dc:whitespace-nowrap">
          DolphinCare Suggests:
        </span>
        <MdsAndDcAnswer type={answerType} />
      </div>
      {isBig && <DolphinMan height={50} />}
    </div>
  )
}
