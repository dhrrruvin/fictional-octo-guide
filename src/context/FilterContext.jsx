import { createContext, useContext, useEffect, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [selectedBrands, setSelectedBrands] =
    useState([]);

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategories,
    selectedBrands,
    minPrice,
    maxPrice,
  ]);

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
  };

  const value = {
    selectedCategories,
    setSelectedCategories,

    selectedBrands,
    setSelectedBrands,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

    currentPage,
    setCurrentPage,

    resetFilters,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}