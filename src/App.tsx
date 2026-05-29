import React from "react";
import { Ribbon } from "./components/Ribbon";
import { DolphincareLogo } from "./components/DolphincareLogo";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <div
      style={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          marginBottom: 8,
        }}
      >
        DolphincareLogo
      </h2>
      <DolphincareLogo />

      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          marginBottom: 8,
        }}
      >
        Ribbon — default (single row)
      </h2>
      <Ribbon
        type="ribbon"
        banner={false}
        onClose={() => alert("close")}
        onFeedback={() => alert("feedback")}
      />

      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          marginBottom: 8,
        }}
      >
        Ribbon — banner (two rows)
      </h2>
      <Ribbon
        type="ribbon"
        banner={true}
        onClose={() => alert("close")}
        onFeedback={() => alert("feedback")}
        onSetPrimaryDiagnosis={() => alert("set primary")}
      />

      <h2
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: 18,
          marginBottom: 8,
        }}
      >
        NTA notification
      </h2>
      <Ribbon
        type="nta"
        ntaText="Dolphincare detected 34 diagnoses in discharge summaries"
        onClose={() => alert("close")}
        onViewSources={() => alert("view sources")}
      />
    </div>
  );
};

export default App;
