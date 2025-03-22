import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      setAllProducts(res.data);
    } catch (error) {
      console.error("Error during getAllProducts GET request", error);
    } finally {
      setLoading(false);
    }
  };

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      setAllCategories(res.data);
    } catch (error) {
      console.error("Error during getAllCategories GET request", error);
    } finally {
      setLoading(false);
    }
  };

  const getProductsByCategory = async (category) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setActiveCategory(category);
      setAllProducts(res.data);
    } catch (error) {
      console.error("Error during getProductsByCategory GET request", error);
    } finally {
      setLoading(false);
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

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
      value={{
        allProducts,
        allCategories,
        activeCategory,
        setActiveCategory,
        loading,
        cart,
        setCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
