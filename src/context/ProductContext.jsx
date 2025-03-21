import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { use } from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      setAllProducts(res.data);
    } catch (error) {
      console.error("Error during getAllProducts GET request", error);
    }
  };

  const getAllCategories = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setAllCategories(res.data);
    } catch (error) {
      console.error("Error during getAllCategories GET request", error);
    }
  };

  const getProductsByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setActiveCategory(category);
      setAllProducts(res.data);
    } catch (error) {
      console.error("Error during getProductsByCategory GET request", error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      getProductsByCategory(activeCategory);
    } else {
      getAllProducts();
    }
  }, [activeCategory]);

  return (
    <ProductContext.Provider
      value={{ allProducts, allCategories, activeCategory, setActiveCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
