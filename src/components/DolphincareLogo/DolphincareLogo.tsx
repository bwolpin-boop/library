import React from "react";
import styles from "./DolphincareLogo.module.css";

interface DolphincareLogoProps {
  className?: string;
}

const DolphincareLogo: React.FC<DolphincareLogoProps> = ({ className }) => (
  <span className={`${styles.logo} ${className ?? ""}`}>Dolphincare</span>
);

export default DolphincareLogo;
