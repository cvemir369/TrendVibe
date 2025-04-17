import { Link } from "react-router-dom";
import { updateCartItemQuantity } from "../utils/cart";

const CartItem = ({ item, setCart }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.id !== item.id)
      );

      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const filteredCart = updatedCart.filter(
        (cartItem) => cartItem.id !== item.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
    } else {
      updateCartItemQuantity(item, newQuantity, setCart);
    }
  };

  return (
    <>
      <tr className="border-b border-gray-200 flex flex-col md:flex-row md:table-row">
        <td className="p-2">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <Link
                to={`/products/${item.id}`}
                className="mask mask-squircle h-12 w-12 md:h-16 md:w-16"
              >
                <img src={item.image} alt={`Image of ${item.title}`} />
              </Link>
            </div>
            <div>
              <Link
                to={`/products/${item.id}`}
                className="font-bold text-xs md:text-base block mb-1"
              >
                {item.title}
              </Link>
              <div className="badge badge-ghost badge-sm text-xs md:text-xs">
                {item.category}
              </div>
            </div>
          </div>
        </td>
        <td className="px-4 text-xs md:text-sm">
          {item.description.length > 200
            ? `${item.description.slice(0, 200)}...`
            : item.description}
        </td>
        <td className="px-4 min-w-28 text-sm md:text-base">
          <span className="md:hidden">Price: </span>
          {item.price} €
        </td>
        <td className="p-2 min-w-36">
          <div className="flex items-center">
            <button
              className="btn btn-xs md:btn-sm"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              -
            </button>
            <span className="mx-2 text-sm md:text-base">{item.quantity}</span>
            <button
              className="btn btn-xs md:btn-sm"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              +
            </button>
          </div>
        </td>
        <th className="px-4 min-w-28 text-sm md:text-base">
          <span className="md:hidden">Total price: </span>
          {(item.price * item.quantity).toFixed(2)} €
        </th>
        <td>
          <button
            onClick={() => handleQuantityChange(0)}
            className="btn btn-secondary btn-sm md:btn-md"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
