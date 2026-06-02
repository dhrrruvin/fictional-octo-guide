import { BrowserRouter, Routes, Route } from "react-router";

import ProductListingPage from "../pages/ProductListPage";
import ProductDetail from "../pages/ProductDetail";
// import MainLayout from "../components/layouts/MainLayout";
// import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<MainLayout />}> */}
        <Route
          path="/"
          element={<ProductListingPage />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

        {/* <Route
          path="*"
          element={<NotFoundPage />}
        /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}