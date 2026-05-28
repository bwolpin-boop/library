import { SectionState } from "./SectionBadge";

export interface SectionData {
  letter: string;
  state: SectionState;
  count?: number;
}

export type RibbonVariant = "ribbon" | "nta";

export interface RibbonProps {
  /** Visual variant: banner ribbon or NTA notification */
  type?: RibbonVariant;
  /** When true, the ribbon expands into a two-row banner layout */
  banner?: boolean;
  /** ARD date string, e.g. "04/23/24" */
  ardDate?: string;
  /** Section letter badges to render */
  sections?: SectionData[];
  /** NTA summary text */
  ntaText?: string;
  onClose?: () => void;
  onFeedback?: () => void;
  onViewSources?: () => void;
  onSetPrimaryDiagnosis?: () => void;
  className?: string;
}
