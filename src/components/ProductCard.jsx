import React, { useState } from "react";
import { useNavigate } from "react-router";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate()

  const fallback = `https://placehold.co/300x240/f1f5f9/94a3b8?text=${encodeURIComponent(product.title.slice(0, 10))}`;

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        bg-white
        rounded-2xl
        overflow-hidden
        border
        border-slate-200
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Image area */}
      <div
        className="
          relative
          h-56
          bg-slate-50
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <img
          src={imgError ? fallback : product.thumbnail}
          alt={product.title}
          onError={() => setImgError(true)}
          className="
            max-h-44
            object-contain
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
        {/* Category pill */}
        <span
        className="absolute
          bottom-3
          left-3
          z-10
          rounded-full
          bg-slate-900/80
          px-3
          py-1
          text-[10px]
          font-semibold
          uppercase
          tracking-wider
          text-slate-100
          backdrop-blur-sm
        "
          // style={{
          //   position: "absolute",
          //   bottom: 10,
          //   left: 10,
          //   background: "rgba(15,23,42,0.7)",
          //   color: "#e2e8f0",
          //   fontSize: 10,
          //   fontWeight: 600,
          //   letterSpacing: "0.07em",
          //   textTransform: "uppercase",
          //   borderRadius: 99,
          //   padding: "3px 9px",
          //   backdropFilter: "blur(4px)",
          // }}
        >
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px 18px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        {product.brand && (
          <p
            style={{
              margin: 0,
              fontSize: 11,
              fontWeight: 700,
              color: "#94a3b8",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {product.brand}
          </p>
        )}

        <h3
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 600,
            color: "#0f172a",
            lineHeight: 1.4,
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={product.title}
        >
          {product.title}
        </h3>

        <StarRating rating={product.rating} size={13} />

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#0f172a",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              letterSpacing: "-0.02em",
            }}
          >
            ${product.price.toFixed(2)}
          </span>
          <button
            aria-label={`Add ${product.title} to cart`}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0f172a",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "7px 14px",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1e3a5f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0f172a")}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}