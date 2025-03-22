import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="max-w-screen-xl mx-auto flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
