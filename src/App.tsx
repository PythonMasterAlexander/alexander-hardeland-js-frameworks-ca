import GlobalStyles from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { globalThemes } from "./styles/constants/themes";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutPageSuccess from "./pages/CheckoutPageSuccess";

function App() {
  return (
    <>
      <ThemeProvider theme={globalThemes}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route
              path="checkout-was-success"
              element={<CheckoutPageSuccess />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
