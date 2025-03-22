const QuantityControls = ({ quantity, onDecrease, onIncrease }) => (
  <div className="flex items-center gap-2">
    <button
      className="btn btn-primary"
      onClick={onDecrease}
      aria-label="Decrease quantity"
    >
      -
    </button>
    <span>{quantity} in cart</span>
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
