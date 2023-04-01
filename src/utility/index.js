export const addProductToLS = (id) => {
  let cart = getCartFromLS();
  const quantity = cart[id];

  if (!quantity) cart[id] = 1;
  else cart[id] = quantity + 1;

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeProductFromLS = (id) => {
  const cart = getCartFromLS();

  delete cart[id];
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCartFromLS = (_) => {
  let cart = {};
  const getCart = localStorage.getItem("cart");

  if (getCart) cart = JSON.parse(getCart);

  return cart;
};

export const deleteCartFromLS = (_) => localStorage.removeItem("cart");
