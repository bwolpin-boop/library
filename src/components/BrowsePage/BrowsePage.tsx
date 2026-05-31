import React, { useState } from "react";
import styles from "./BrowsePage.module.css";

/* ── Icons (inline SVG to avoid extra deps) ── */
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const MicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5 10a7 7 0 0014 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const HeartIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#e31c5f" : "none"}>
    <path
      d="M12 21C12 21 3 14 3 8.5a4.5 4.5 0 018.254-2.506A4.5 4.5 0 0121 8.5C21 14 12 21 12 21z"
      stroke={filled ? "#e31c5f" : "white"}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const WishlistIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21C12 21 3 14 3 8.5a4.5 4.5 0 018.254-2.506A4.5 4.5 0 0121 8.5C21 14 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const StarFilledIcon = ({ size = 12, color = "#222" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill={color}>
    <path d="M6 1l1.3 2.6L10 4l-2 1.95.47 2.75L6 7.4l-2.47 1.3L4 5.95 2 4l2.7-.4L6 1z" />
  </svg>
);

const StarSellerStarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="#6b3fa0">
    <path d="M6.5 1l1.43 2.9L11 4.38l-2.25 2.19.53 3.1L6.5 8.1l-2.78 1.57.53-3.1L2 4.38l3.07-.48L6.5 1z" />
  </svg>
);

const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Data ── */
const FILTER_LABELS = ["Filters", "Object", "Occasion", "Style", "Material", "Artist", "Price"];

interface Product {
  id: number;
  title: string;
  dateRange: string;
  price: string;
  rating: number;
  freeShipping: boolean;
  imageUrl?: string;
}

const PRODUCTS: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Artwork Painting Sunshine",
  dateRange: "May 22-24",
  price: "$15.98",
  rating: 1.8,
  freeShipping: true,
}));

/* ── Sub-components ── */
function ProductCard({ product }: { product: Product }) {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.title} className={styles.cardImage} />
        ) : (
          <div className={styles.imagePlaceholder} />
        )}
        {product.freeShipping && (
          <span className={styles.freeShippingBadge}>Free Shipping</span>
        )}
        <button
          className={styles.favoriteBtn}
          onClick={(e) => {
            e.stopPropagation();
            setFavorited((f) => !f);
          }}
          aria-label="Add to favorites"
        >
          <HeartIcon filled={favorited} />
        </button>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{product.title}</p>
        <p className={styles.cardDate}>{product.dateRange}</p>
        <div className={styles.cardMeta}>
          <span className={styles.cardPrice}>{product.price}</span>
          <span className={styles.metaDot}>·</span>
          <span className={styles.ratingWrapper}>
            <StarFilledIcon />
            <span className={styles.ratingValue}>{product.rating}</span>
          </span>
          <span className={styles.metaDot}>·</span>
          <span className={styles.starSellerBadge}>
            <StarSellerStarIcon />
            Star Seller
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */
const BrowsePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.page}>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>
            <span className={styles.logoInner}>✡</span>
          </div>
        </div>

        <div className={styles.searchBar}>
          <span className={styles.searchPlusIcon}><PlusIcon /></span>
          <div className={styles.searchDivider} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search for anything"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className={styles.micIcon}><MicIcon /></span>
        </div>

        <div className={styles.navRight}>
          <span className={styles.switchHosting}>Switch to hosting</span>
          <button className={styles.navIconBtn} aria-label="Wishlist">
            <WishlistIcon />
          </button>
          <button className={styles.navIconBtn} aria-label="Cart">
            <CartIcon />
            <span className={styles.cartBadge}>1</span>
          </button>
          <div className={styles.userAvatar}>B</div>
        </div>
      </nav>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        {FILTER_LABELS.map((label) => (
          <button key={label} className={styles.filterChip}>
            {label} <ChevronDown />
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
