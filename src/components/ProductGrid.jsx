import React from "react";
import ProductCard from "./ProductCard";

function SkeletonCard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1.5px solid #e9ecf0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 200,
          background: "#f1f5f9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="shimmer" style={{ position: "absolute", inset: 0 }} />
      </div>
      <div style={{ padding: "14px 16px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
        {[40, 75, 55, 90].map((w, i) => (
          <div
            key={i}
            style={{
              height: i === 1 ? 18 : 12,
              width: `${w}%`,
              borderRadius: 6,
              background: "#f1f5f9",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="shimmer" style={{ position: "absolute", inset: 0 }} />
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          <div style={{ height: 28, width: "30%", borderRadius: 6, background: "#f1f5f9", position: "relative", overflow: "hidden" }}>
            <div className="shimmer" style={{ position: "absolute", inset: 0 }} />
          </div>
          <div style={{ height: 32, width: "38%", borderRadius: 10, background: "#f1f5f9", position: "relative", overflow: "hidden" }}>
            <div className="shimmer" style={{ position: "absolute", inset: 0 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProductGrid
 * Props:
 *   products {array}   — list of product objects
 *   loading  {bool}    — show skeleton placeholders
 *   count    {number}  — skeleton count (default 12)
 */
export default function ProductGrid({ products, loading, count = 12 }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
      "
    >
      {loading
        ? Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)
        : products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}