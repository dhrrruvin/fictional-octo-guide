import { useEffect, useMemo, useState } from "react";

export default function useFilters(products, selectedCategories, setSelectedCategories) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const res = await response.json();
    setCategories(res);
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  const brands = useMemo(() => {
    const categoryFilteredProducts =
      selectedCategories.length === 0
        ? products
        : products.filter((product) =>
          selectedCategories.some(
            (cat) => cat.slug === product.category
          )
        );

    return [
      ...new Set(
        categoryFilteredProducts
          .map((product) => product.brand)
          .filter(Boolean)
      ),
    ].sort();
  }, [products, selectedCategories]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => {
      const exists = prev.some(
        (item) => item.slug === category.slug
      );

      if (exists) {
        return prev.filter(
          (item) => item.slug !== category.slug
        );
      }

      return [...prev, category];
    });
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.some(
          (cat) => cat.slug === product.category
        );

      const brandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

      const minMatch =
        !minPrice ||
        product.price >= Number(minPrice);

      const maxMatch =
        !maxPrice ||
        product.price <= Number(maxPrice);

      return (
        categoryMatch &&
        brandMatch &&
        minMatch &&
        maxMatch
      );
    });
  }, [
    products,
    selectedCategories,
    selectedBrands,
    minPrice,
    maxPrice,
  ]);

  return {
    filteredProducts,

    categories,
    brands,

    minPrice,
    setMinPrice,

    maxPrice,
    setMaxPrice,

    toggleCategory,

    selectedBrands,
    toggleBrand,
  };
}