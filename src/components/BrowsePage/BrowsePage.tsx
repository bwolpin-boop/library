import React, { useState } from "react";
import styles from "./BrowsePage.module.css";

/* ── Figma asset URLs ── */
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/cb1fbbf6-9122-463c-a107-f1889b783b72";
const imgStar2 = "https://www.figma.com/api/mcp/asset/8dcad291-f1b6-4a34-bec6-2f2cbcb36101";
const imgVector4 = "https://www.figma.com/api/mcp/asset/8b51897a-3210-4b3c-acdd-46c32137eccb";
const imgVector7 = "https://www.figma.com/api/mcp/asset/14e49ae6-0bc4-48e4-a51b-90c7ec3a27e0";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/3831fbef-a9e5-4c35-8578-bea7395c2981";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/8fe1b597-477c-4880-9804-c21acd359094";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/231990d7-110f-40f4-982e-d14fc6764af4";
const imgEllipse13 = "https://www.figma.com/api/mcp/asset/1cdbf9e9-bcf1-47b3-9705-f6c55e449128";
const imgVector8 = "https://www.figma.com/api/mcp/asset/aa3b49b6-ceef-4ba3-b801-b79ebf9ed8af";
const imgGroup15 = "https://www.figma.com/api/mcp/asset/d5432e5b-c0b1-4e7c-b2a6-d8b8d45db62c";
const imgStar1 = "https://www.figma.com/api/mcp/asset/f02cebc4-010f-4bcb-9c49-844b0456435b";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/317248cc-5bac-471b-b170-860020491655";
const imgVector2 = "https://www.figma.com/api/mcp/asset/1b088e60-71e7-44e0-8ef4-4767679c3714";
const imgVector3 = "https://www.figma.com/api/mcp/asset/6efe6600-8517-4ff6-8679-bc360dd87277";
const imgVector = "https://www.figma.com/api/mcp/asset/ba698cf5-c85a-494e-88f2-4f76ebb1f190";

/* ── Icons ── */
function SearchPlusIcon() {
  return (
    <div style={{ position: "relative", width: 25, height: 25, overflow: "hidden" }}>
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: 9, height: 9,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ position: "relative", width: 9, height: 9 }}>
          <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgGroup15} />
        </div>
      </div>
    </div>
  );
}

function MicIcon() {
  return (
    <div style={{ position: "relative", width: 25, height: 25, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "72% 52% 16% 48%" }}>
        <div style={{ position: "absolute", inset: "-16.67% -0.5px" }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgVector} />
        </div>
      </div>
      <div style={{ position: "absolute", inset: "40% 28% 28% 24%" }}>
        <div style={{ position: "absolute", inset: "-6.25% -4.17%" }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgVector2} />
        </div>
      </div>
      <div style={{ position: "absolute", inset: "12% 40% 40% 36%" }}>
        <div style={{ position: "absolute", inset: "-4.17% -8.33%" }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgVector3} />
        </div>
      </div>
    </div>
  );
}

function HeartIcon() {
  return (
    <div style={{ position: "relative", width: 24, height: 24, overflow: "hidden" }}>
      <div style={{
        position: "absolute",
        top: "50%", left: "calc(50% - 0.15px)",
        transform: "translate(-50%, -50%)",
        width: 22, height: 18,
      }}>
        <div style={{ position: "absolute", inset: "11.17% 4.9% -3.39% 4.46%" }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgVector4} />
        </div>
      </div>
    </div>
  );
}

function CartIconWithBadge() {
  return (
    <div style={{ position: "relative", width: 32, height: 32, overflow: "hidden", flexShrink: 0 }}>
      <div style={{ position: "absolute", left: 9, top: 27, width: 3, height: 3 }}>
        <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgEllipse5} />
      </div>
      <div style={{ position: "absolute", left: 16, top: 27, width: 3, height: 3 }}>
        <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgEllipse6} />
      </div>
      <div style={{ position: "absolute", left: 2, top: 11, width: 18.5, height: 14.5 }}>
        <div style={{ position: "absolute", inset: "-3.45% -2.7%" }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgVector7} />
        </div>
      </div>
      <div style={{ position: "absolute", left: 13, top: 2, width: 17, height: 17 }}>
        <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgEllipse7} />
      </div>
      <span style={{
        position: "absolute",
        left: 19, top: 5,
        fontFamily: "'Figtree', sans-serif",
        fontWeight: 600,
        fontSize: 11,
        lineHeight: "normal",
        color: "#faf8f6",
        letterSpacing: -0.01,
        width: 5,
      }}>1</span>
    </div>
  );
}

function ChevronDown() {
  return (
    <div style={{ position: "relative", width: 16, height: 16, overflow: "hidden", flexShrink: 0 }}>
      <div style={{
        position: "absolute",
        left: "calc(50% + 0.5px)", top: "calc(50% - 0.5px)",
        transform: "translate(-50%, -50%)",
        width: 10, height: 6,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ transform: "rotate(180deg)" }}>
          <div style={{ position: "relative", width: 10, height: 6 }}>
            <div style={{ position: "absolute", inset: "-5.33% -5% -8.33% -5%" }}>
              <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgVector8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div style={{ position: "relative", width: 24, height: 24, overflow: "hidden", flexShrink: 0 }}>
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: 18, height: 18,
      }}>
        <div style={{ position: "absolute", inset: "2.91% 5.1% 11.47% 5.1%" }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgStar1} />
        </div>
      </div>
    </div>
  );
}

function DotSep() {
  return (
    <div style={{ position: "relative", width: 12, height: 12, overflow: "hidden", flexShrink: 0 }}>
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: 2, height: 2,
      }}>
        <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgEllipse1} />
      </div>
    </div>
  );
}

function StarSellerIcon() {
  return (
    <div style={{ position: "relative", width: 24, height: 24, overflow: "hidden", flexShrink: 0 }}>
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: 18, height: 18,
      }}>
        <div style={{ position: "absolute", inset: "2.91% 5.1% 11.47% 5.1%" }}>
          <img alt="" style={{ display: "block", width: "100%", height: "100%" }} src={imgStar2} />
        </div>
      </div>
    </div>
  );
}

/* ── Filter labels ── */
const FILTERS = ["Filters", "Object", "Occasion", "Style", "Material", "Artist", "Price"];

/* ── Product Card ── */
function ProductCard() {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className={styles.card}>
      {/* Image area */}
      <div className={styles.imageWrapper}>
        <div className={styles.freeShippingBadge}>Free Shipping</div>
        <button
          className={styles.favoriteBtn}
          onClick={(e) => { e.stopPropagation(); setFavorited(f => !f); }}
          aria-label="Add to favorites"
        >
          <HeartIcon />
        </button>
      </div>

      {/* Card body */}
      <div className={styles.cardBody}>
        <div className={styles.cardInfo}>
          <p className={styles.cardTitle}>Artwork Painting Sunshine</p>
          <div className={styles.cardSubInfo}>
            <p className={styles.cardDate}>May 22-24</p>
            <div className={styles.cardMeta}>
              <span className={styles.cardPrice}>$15.98</span>
              <DotSep />
              <StarRating />
              <span className={styles.ratingValue}>1.8</span>
              <DotSep />
              <div className={styles.starSellerBadge}>
                <StarSellerIcon />
                <span className={styles.starSellerText}>Star Seller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Browse Page ── */
const ROWS = 5;
const COLS = 4;

const BrowsePage: React.FC = () => (
  <div className={styles.page}>
    {/* Nav */}
    <nav className={styles.nav}>
      {/* Logo */}
      <div className={styles.navLeft}>
        <div className={styles.logo}>
          <img alt="logo" src={imgEllipse3} />
        </div>
      </div>

      {/* Search + filters centered */}
      <div className={styles.searchWrap}>
        <div className={styles.searchBar}>
          <div className={styles.searchLeft}>
            <SearchPlusIcon />
            <span className={styles.searchPlaceholder}>Search for anything</span>
          </div>
          <MicIcon />
        </div>

        <div className={styles.filterBar}>
          {FILTERS.map(label => (
            <button key={label} className={styles.filterChip}>
              {label}
              <ChevronDown />
            </button>
          ))}
        </div>
      </div>

      {/* Right actions */}
      <div className={styles.navRight}>
        <span className={styles.switchHosting}>Switch to hosting</span>
        <button className={styles.navIconBtn} aria-label="Wishlist">
          <HeartIcon />
        </button>
        <CartIconWithBadge />
        <div className={styles.userAvatar}>
          <img alt="avatar" src={imgEllipse13} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
          <span style={{ position: "absolute", fontFamily: "'Figtree', sans-serif", fontWeight: 500, fontSize: 16, color: "#000", letterSpacing: -0.01 }}>B</span>
        </div>
      </div>
    </nav>

    {/* Product grid */}
    <div className={styles.gridWrapper}>
      {Array.from({ length: ROWS }, (_, row) => (
        <div key={row} className={styles.gridRow}>
          {Array.from({ length: COLS }, (_, col) => (
            <ProductCard key={col} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default BrowsePage;
