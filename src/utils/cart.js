export const addToCart = (product, setCart) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productInCart = cart.find((item) => item.id === product.id);

  if (productInCart) {
    productInCart.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  setCart([...cart]);
};

export const updateCartItemQuantity = (product, newQuantity, setCart) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cart.findIndex((item) => item.id === product.id);

  if (itemIndex !== -1) {
    if (newQuantity > 0) {
      cart[itemIndex].quantity = newQuantity;
    } else {
      cart.splice(itemIndex, 1);
    }
  } else if (newQuantity > 0) {
    cart.push({ ...product, quantity: newQuantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  setCart([...cart]);
};
