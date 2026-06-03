import { useFilterContext } from "../context/FilterContext";

export default function FilterSidebar({
  categories,
  brands,

  selectedCategories,

  selectedBrands,

  minPrice,
  setMinPrice,

  maxPrice,
  setMaxPrice,

  toggleCategory,
  toggleBrand,
}) {

  const { resetFilters } = useFilterContext();

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    minPrice ||
    maxPrice;

  return (
    <aside
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-5
        shadow-sm
        h-fit
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h2
          className="
          text-lg
          font-semibold
        "
        >
          Filters
        </h2>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="
            text-sm
            font-medium
            text-red-500
            hover:text-red-600
          "
          >
            Reset
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Category
        </label>

        <div
          className="max-h-56
            overflow-y-auto
            space-y-2
            pr-2
          "
        >
          {categories.map((category, i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategories.some(
                  (item) => item.slug === category.slug
                )}
                onChange={() => toggleCategory(category)}
              />

              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          Brand
        </label>

        <div className="max-h-56 overflow-y-auto space-y-2 pr-2">
          {brands.map((brand, i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />

              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <label className="block font-medium mb-2">
          Price Range
        </label>

        <div className="space-y-3">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(e.target.value)
            }
            className="
              w-full
              border
              rounded-lg
              px-3
              py-2
            "
          />

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value)
            }
            className="
              w-full
              border
              rounded-lg
              px-3
              py-2
            "
          />
        </div>
      </div>
    </aside>
  );
}