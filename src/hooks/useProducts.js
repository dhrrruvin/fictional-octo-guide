import { useState, useEffect } from "react";

const BASE_URL = "https://dummyjson.com";

async function fetchAllProducts({ page = 1 } = {}) {
  const res = await fetch(`${BASE_URL}/products?limit=0&select=id,title,price,rating,thumbnail,brand,category`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

async function fetchProductsByCategories(categories) {
  const responses = await Promise.all(
    categories.map(async (cat) => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${cat}`
      );

      if (!res.ok) {
        throw new Error(
          `Failed to fetch ${cat}`
        );
      }

      return res.json();
    })
  );

  const products = responses.flatMap(
    (response) => response.products
  );

  const uniqueProducts = [
    ...new Map(
      products.map((product) => [
        product.id,
        product,
      ])
    ).values(),
  ];

  return uniqueProducts;
}

const PAGE_SIZE = 12;

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const loadProducts = async () => {
    setLoading(true);

    try {
      if (!selectedCategories.length) {
        const data = await fetchAllProducts();

        setProducts(data.products);
      } else {
        const products =
          await fetchProductsByCategories(
            selectedCategories.map(c => c.slug)
          );

        setProducts(products);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [selectedCategories])

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchAllProducts({ page })
      .then((data) => {
        if (!cancelled) {
          setProducts(data.products);
          setTotal(data.total);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return { products, loading, error, selectedCategories, setSelectedCategories }
}

export { fetchAllProducts, fetchProductsByCategories }