import React from "react";

/**
 * StarRating
 * Props:
 *   rating  {number}  — value between 0–5 (supports decimals)
 *   size    {number}  — icon size in px (default 14)
 *   showValue {bool}  — show numeric value next to stars (default true)
 */
export default function StarRating({ rating = 0, size = 14, showValue = true }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fill = Math.min(1, Math.max(0, rating - i));
    return fill >= 1 ? "full" : fill >= 0.5 ? "half" : "empty";
  });

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
      {stars.map((type, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`hg-${i}-${Math.round(rating * 10)}`}>
              <stop offset={type === "full" ? "100%" : type === "half" ? "50%" : "0%"} stopColor="#f59e0b" />
              <stop offset={type === "full" ? "100%" : type === "half" ? "50%" : "0%"} stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={
              type === "full"
                ? "#f59e0b"
                : type === "half"
                ? `url(#hg-${i}-${Math.round(rating * 10)})`
                : "#e2e8f0"
            }
            stroke={type === "empty" ? "#d1d5db" : "#f59e0b"}
            strokeWidth="0.8"
          />
        </svg>
      ))}
      {showValue && (
        <span style={{ fontSize: size - 1, color: "#94a3b8", marginLeft: 2, fontVariantNumeric: "tabular-nums" }}>
          {rating.toFixed(1)}
        </span>
      )}
    </span>
  );
}