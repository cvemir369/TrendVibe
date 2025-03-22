import titleCase from "../utils/titleCase";
import { useProductContext } from "../context/ProductContext";
import QuantityControls from "./QuantityControls";
import { Link } from "react-router-dom";
import { addToCart, updateCartItemQuantity } from "../utils/cart";

const ProductCard = ({ product }) => {
  const { activeCategory, setActiveCategory, cart, setCart } =
    useProductContext();

  const handleActiveCategory = () => {
    setActiveCategory(activeCategory ? "" : product.category);
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
    <div className="card bg-base-100 w-96 shadow-xl">
      <Link to={`products/${product.id}`}>
        <figure className="px-10 pt-10">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl max-h-40"
          />
        </figure>
      </Link>
      <div className="card-body items-center text-center flex flex-col justify-between">
        <h2 className="card-title hover:underline">
          <Link to={`products/${product.id}`}>{product.title}</Link>
        </h2>
        <div className="flex flex-col gap-3 text-center items-center">
          <p className="font-semibold text-2xl mt-auto">{product.price} €</p>
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
          <div
            className="link link-neutral text-sm"
            onClick={handleActiveCategory}
          >
            {activeCategory
              ? `See All Categories`
              : `More from ${titleCase(product.category)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
