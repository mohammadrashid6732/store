import { Routes, Route, Navigate } from "react-router-dom";
//pages
import ProductsPage from "./pages/ProductsPage";
import ProductsProvider from "./context/ProductsProvider";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/404";
import CartProvider from "./context/CartProvider";
import Layout from "./components/Layout";
function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
