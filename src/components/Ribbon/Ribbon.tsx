import React from "react";
import NavIcons from "./NavIcons";
import SectionBadge from "./SectionBadge";
import PrimaryDiagnosisLabel from "./PrimaryDiagnosisLabel";
import { RibbonProps, SectionData } from "./types";
import styles from "./Ribbon.module.css";

const DEFAULT_SECTIONS: SectionData[] = [
  { letter: "A", state: "disabled" },
  { letter: "B", state: "disabled" },
  { letter: "C", state: "disabled" },
  { letter: "D", state: "verified" },
  { letter: "E", state: "active", count: 1 },
  { letter: "F", state: "active", count: 1 },
  { letter: "G", state: "disabled" },
  { letter: "H", state: "active", count: 1 },
  { letter: "I", state: "error" },
  { letter: "J", state: "active", count: 1 },
  { letter: "K", state: "disabled" },
  { letter: "L", state: "active", count: 1 },
  { letter: "M", state: "disabled" },
  { letter: "N", state: "disabled" },
  { letter: "O", state: "disabled" },
  { letter: "P", state: "disabled" },
  { letter: "Q", state: "disabled" },
  { letter: "R", state: "disabled" },
];

const SectionsRow: React.FC<{ sections: SectionData[] }> = ({ sections }) => (
  <div className={styles.sectionsRow}>
    {sections.map((s) => (
      <SectionBadge key={s.letter} {...s} />
    ))}
  </div>
);

const ArdDateNav: React.FC<{
  date: string;
  onPrev?: () => void;
  onNext?: () => void;
}> = ({ date, onPrev, onNext }) => (
  <div className={styles.ardDateNav}>
    <span className={styles.ardLabel}>Based on ARD: </span>
    <div className={styles.ardDateControls}>
      <NavIcons icon="arrow-left" onClick={onPrev} aria-label="Previous ARD" />
      <span className={styles.ardDate}>{date}</span>
      <NavIcons icon="arrow-right" onClick={onNext} aria-label="Next ARD" />
    </div>
  </div>
);

const FeedbackButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button type="button" className={styles.btnPrimary} onClick={onClick}>
    <span className={styles.btnIcon} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="3" width="12" height="8" rx="2" stroke="white" strokeWidth="1.3" />
        <path d="M4 6h6M4 8.5h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
    Give feedback
  </button>
);

const Ribbon: React.FC<RibbonProps> = ({
  type = "ribbon",
  banner = false,
  ardDate = "04/23/24",
  sections = DEFAULT_SECTIONS,
  ntaText = "Dolphincare detected 34 diagnoses in discharge summaries",
  onClose,
  onFeedback,
  onViewSources,
  onSetPrimaryDiagnosis,
  className,
}) => {
  if (type === "nta") {
    return (
      <div className={`${styles.ribbon} ${styles.nta} ${className ?? ""}`}>
        <div className={styles.ntaLeft}>
          <NavIcons icon="arrow-right" />
          <NavIcons icon="dc-icon" />
          <span className={styles.ntaText}>{ntaText}</span>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={onViewSources}
          >
            View sources
          </button>
          <NavIcons icon="close" onClick={onClose} aria-label="Close" />
        </div>
      </div>
    );
  }

  if (banner) {
    return (
      <div className={`${styles.bannerWrapper} ${className ?? ""}`}>
        {/* Banner top row */}
        <div className={`${styles.ribbon} ${styles.bannerTop}`}>
          <div className={styles.bannerTopLeft}>
            <div className={styles.titleGroup}>
              <span className={styles.title}>Dolphincare Findings</span>
              <ArdDateNav date={ardDate} />
            </div>
            <SectionsRow sections={sections} />
          </div>
          <div className={styles.actions}>
            <FeedbackButton onClick={onFeedback} />
            <NavIcons icon="close" onClick={onClose} aria-label="Close" />
          </div>
        </div>

        {/* Banner bottom row */}
        <div className={`${styles.ribbon} ${styles.bannerBottom}`}>
          <span className={styles.title}>Dolphincare Findings</span>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={onSetPrimaryDiagnosis}
            >
              <PrimaryDiagnosisLabel showText={false} />
              Set as Primary diagnosis
            </button>
            <NavIcons icon="close" onClick={onClose} aria-label="Close" />
          </div>
        </div>
      </div>
    );
  }

  /* Default: single-row ribbon */
  return (
    <div className={`${styles.ribbon} ${styles.ribbonDefault} ${className ?? ""}`}>
      <div className={styles.ribbonLeft}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>Dolphincare Findings</span>
          <NavIcons icon="questionmark" />
        </div>
        <ArdDateNav date={ardDate} />
      </div>
      <SectionsRow sections={sections} />
      <div className={styles.actions}>
        <FeedbackButton onClick={onFeedback} />
        <NavIcons icon="close" onClick={onClose} aria-label="Close" />
      </div>
    </div>
  );
};

export default Ribbon;
