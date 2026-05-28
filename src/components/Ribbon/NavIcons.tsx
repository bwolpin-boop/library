import React from "react";
import styles from "./NavIcons.module.css";

export type NavIconType =
  | "close"
  | "arrow-right"
  | "arrow-left"
  | "dc-icon"
  | "questionmark"
  | "poc";

interface NavIconsProps {
  icon?: NavIconType;
  className?: string;
  onClick?: () => void;
}

const CloseIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path
      d="M1 1L9 9M9 1L1 9"
      stroke="#222"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
    <path
      d="M1 1L5 5L1 9"
      stroke="#222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
    <path
      d="M5 1L1 5L5 9"
      stroke="#222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QuestionmarkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="#888" strokeWidth="1.5" />
    <text
      x="7"
      y="11"
      textAnchor="middle"
      fill="#888"
      fontSize="8"
      fontFamily="Montserrat, sans-serif"
      fontWeight="700"
    >
      ?
    </text>
  </svg>
);

const DCIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="9" fill="#a852ff" opacity="0.15" />
    <text
      x="11"
      y="15"
      textAnchor="middle"
      fill="#a852ff"
      fontSize="9"
      fontFamily="Montserrat, sans-serif"
      fontWeight="700"
    >
      DC
    </text>
  </svg>
);

const POCIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="3"
      fill="#11be68"
      opacity="0.15"
    />
    <path
      d="M6 14 Q8 8 12 10 Q16 12 18 7"
      stroke="#11be68"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="12" cy="12" r="2" fill="#11be68" opacity="0.5" />
  </svg>
);

const NavIcons: React.FC<NavIconsProps> = ({
  icon = "close",
  className,
  onClick,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "close":
        return <CloseIcon />;
      case "arrow-right":
        return <ArrowRightIcon />;
      case "arrow-left":
        return <ArrowLeftIcon />;
      case "questionmark":
        return <QuestionmarkIcon />;
      case "dc-icon":
        return <DCIcon />;
      case "poc":
        return <POCIcon />;
      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      className={`${styles.root} ${className ?? ""}`}
      onClick={onClick}
      aria-label={icon}
    >
      {renderIcon()}
    </button>
  );
};

export default NavIcons;
