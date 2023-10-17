import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutPageSuccess from "./pages/CheckoutPageSuccess";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="checkout-was-success" element={<CheckoutPageSuccess />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;
