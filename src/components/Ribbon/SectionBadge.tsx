import React from "react";
import styles from "./SectionBadge.module.css";

export type SectionState = "active" | "verified" | "error" | "disabled";

export interface SectionBadgeProps {
  letter: string;
  state?: SectionState;
  count?: number;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({
  letter,
  state = "disabled",
  count,
}) => {
  return (
    <div className={`${styles.root} ${styles[state]}`}>
      <span className={styles.letter}>{letter}</span>
      {state === "active" && count !== undefined && (
        <span className={styles.badge}>{count}</span>
      )}
      {state === "verified" && <span className={styles.verifiedDot} />}
      {state === "error" && <span className={styles.errorDot} />}
    </div>
  );
};

export default SectionBadge;
