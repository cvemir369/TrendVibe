import { useProductContext } from "../context/ProductContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, cartCount, cartTotal } = useProductContext();

  if (cartCount === 0) {
    return (
      <div className="container mx-auto p-5">
        <div className="flex flex-col gap-5 justify-center items-center h-96">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <Link to={"/"} className="btn btn-primary text-lg px-12">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold my-3">Cart</h1>
      <div className="overflow-x-auto">
        {/* Show table on medium screens and up */}
        <table className="table hidden md:table">
          {/* head */}
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} setCart={setCart} />
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tfoot>
        </table>

        {/* Mobile view - show simplified list on small screens */}
        <div className="md:hidden space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-md p-4">
              <div className="flex flex-col gap-2">
                <Link to={`/products/${item.id}`} className="font-bold">
                  {item.title}
                </Link>
                <div className="text-sm text-gray-500 line-clamp-2">
                  {item.description}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold">Price: {item.price} €</span>
                  <span className="font-semibold">Qty: {item.quantity}</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <span className="font-bold">
                    Total: {(item.price * item.quantity).toFixed(2)} €
                  </span>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() =>
                        setCart(
                          cart.map((cartItem) =>
                            cartItem.id === item.id
                              ? {
                                  ...cartItem,
                                  quantity: Math.max(1, cartItem.quantity - 1),
                                }
                              : cartItem
                          )
                        )
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() =>
                        setCart(
                          cart.map((cartItem) =>
                            cartItem.id === item.id
                              ? { ...cartItem, quantity: cartItem.quantity + 1 }
                              : cartItem
                          )
                        )
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() =>
                        setCart(
                          cart.filter((cartItem) => cartItem.id !== item.id)
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-end items-end gap-3 mt-8">
          <div className="badge badge-ghost badge-sm p-3">
            Items in Cart: {cartCount}
          </div>
          <div className="font-bold text-xl">Total Price: {cartTotal} €</div>
          <button className="btn btn-primary text-lg px-12">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
