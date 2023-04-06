import axios from "axios";

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

export const shoppingCart = async (items) => {
  if (typeof items === "object" && !(items instanceof Array)) items = 0;

  let products =
    items ||
    (await axios.get(`./products.json`).then((response) => response.data));

  const getCart = getCartFromLS();
  const cartItems = [];

  for (let item in getCart) {
    const elem = products.find((product) => product.id === item);
    elem.quantity = getCart[item];
    cartItems.push(elem);
  }

  return cartItems;
};

export const shoppingCartCalc = (cartItems) => {
  let totalPrice = cartItems.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );
  let totalShippingCharge = cartItems.reduce(
    (total, current) => total + current.shipping * current.quantity,
    0
  );
  let tax = (totalPrice * 7) / 100;
  let grandTotal = totalPrice + totalShippingCharge + tax;

  return { totalPrice, totalShippingCharge, tax, grandTotal };
};
