import React, { useEffect, useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductGrid from '../components/ProductGrid'
import Pagination from '../components/Pagination'
import useFilters from '../hooks/useFilters'
import FilterSidebar from '../components/FilterSidebar'

const ProductListingPage = () => {
  const data = useProducts()

  const filters = useFilters(data.products, data.selectedCategories, data.setSelectedCategories);

  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 12;

  const startIndex =
    (currentPage - 1) * PAGE_SIZE;

  const paginatedProducts =
    filters.filteredProducts.slice(
      startIndex,
      startIndex + PAGE_SIZE
    );

  const totalPages = Math.ceil(
    filters.filteredProducts.length / PAGE_SIZE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [
    data.selectedCategories,
    filters.selectedBrands,
    filters.minPrice,
    filters.maxPrice,
  ]);

  return (
    <div className="min-h-screen bg-slate-50">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Title */}
        <div className="mb-8">
          <h1
            className="
              text-3xl
              font-bold
              text-slate-900
            "
          >
            Products
          </h1>
        </div>

        <div
          className="
            grid
            lg:grid-cols-[280px_1fr]
            gap-8
          "
        >
          <FilterSidebar
            {...filters}
            selectedCategories={data.selectedCategories}
          />
          <div>

            <ProductGrid
              products={
                paginatedProducts
              }
              loading={data.loading}
            />

            {!data.loading && (
              <Pagination
                currentPage={
                  currentPage
                }
                totalPages={
                  totalPages
                }
                onPageChange={
                  setCurrentPage
                }
              />
            )}
          </div>
        </div>

      </main>
    </div>
  )
}

export default ProductListingPage