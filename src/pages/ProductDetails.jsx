import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import QuantityControls from "../components/QuantityControls";
import { useProductContext } from "../context/ProductContext";
import { addToCart, updateCartItemQuantity } from "../utils/cart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { cart, setCart } = useProductContext();

  const getProductById = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error("Error during getProductById GET request", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const renderStars = () => {
    const stars = [];
    const rating = product.rating ? product.rating.rate : 0;

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating-7"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked={i <= rating}
          disabled
        />
      );
    }

    return stars;
  };

  const handleAddToCart = () => {
    addToCart(product, setCart);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));

      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const filteredCart = updatedCart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
    } else {
      updateCartItemQuantity(product, newQuantity, setCart);
    }
  };

  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = !!cartItem;

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center my-60">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 rounded-lg pt-8"
            />
          </div>
          <div>
            <Link to="/" className="link-hover text-sm block my-2">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="rating rating-md">
              {renderStars()}
              <div className="ml-2">
                {product.rating ? product.rating.rate : "N/A"}{" "}
                {product.rating ? `(${product.rating.count})` : ""}
              </div>
            </div>
            <p className="mb-4">{product.description}</p>
            <p className="font-semibold text-3xl my-2">{product.price} €</p>
            {/* <button className="btn btn-primary">Add to Cart</button> */}
            <div className="card-actions">
              {isInCart ? (
                <QuantityControls
                  quantity={cartItem.quantity}
                  onDecrease={() =>
                    handleQuantityChange(Math.max(0, cartItem.quantity - 1))
                  }
                  onIncrease={() => handleQuantityChange(cartItem.quantity + 1)}
                />
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={handleAddToCart}
                  aria-label="Add to cart"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
