import logoIcon from '../../assets/logo-icon.svg'

export function Logo({ className }) {
  return (
    <div className={`dc:inline-flex dc:items-center dc:gap-gap8${className ? ` ${className}` : ''}`}>
      <img
        src={logoIcon}
        alt="Dolphincare logo icon"
        className="dc:w-[34px] dc:h-[34px] dc:shrink-0"
      />
      <span className="dc:font-montserrat dc:font-bold dc:text-base dc:text-primary dc:[letter-spacing:0.8px] dc:whitespace-nowrap">
        Dolphincare
      </span>
    </div>
  )
}
