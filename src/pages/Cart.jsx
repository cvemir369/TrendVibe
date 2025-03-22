import { useProductContext } from "../context/ProductContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, setCart, cartCount, cartTotal } = useProductContext();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold my-3">Cart</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
              <th></th>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tfoot>
        </table>
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
