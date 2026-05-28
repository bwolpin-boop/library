import React from "react";
import styles from "./PrimaryDiagnosisLabel.module.css";

interface PrimaryDiagnosisLabelProps {
  showText?: boolean;
  className?: string;
}

const DiamondIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path
      d="M5.5 1L10 5.5L5.5 10L1 5.5L5.5 1Z"
      stroke="#a852ff"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

const PrimaryDiagnosisLabel: React.FC<PrimaryDiagnosisLabelProps> = ({
  showText = true,
  className,
}) => {
  return (
    <span className={`${styles.root} ${className ?? ""}`}>
      <span className={styles.icon}>
        <DiamondIcon />
      </span>
      {showText && <span className={styles.text}>Primary</span>}
    </span>
  );
};

export default PrimaryDiagnosisLabel;
