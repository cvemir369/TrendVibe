import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      console.log(res.data);
      setAllProducts(res.data);
    } catch (error) {
      console.error("Error during getAllProducts GET request", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home allProducts={allProducts} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
