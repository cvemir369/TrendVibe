import { Link } from "react-router-dom";

const QuantityControls = ({ quantity, onDecrease, onIncrease }) => (
  <div className="flex items-center gap-2">
    <button
      className="btn btn-primary"
      onClick={onDecrease}
      aria-label="Decrease quantity"
    >
      -
    </button>
    <Link
      to="/cart"
      className="btn btn-primary text-sm font-medium px-3 py-1 shadow-sm"
    >
      {quantity} in cart
    </Link>
    <button
      className="btn btn-primary"
      onClick={onIncrease}
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>
);

export default QuantityControls;
