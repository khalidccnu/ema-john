import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { UilArrowRight, UilTrashAlt } from "../component/Unicons.jsx";
import {
  deleteCartFromLS,
  removeProductFromLS,
  shoppingCartCalc,
} from "../utility/index.js";
import imgEmptyCart from "../asset/empty-cart.svg";

const OrderReview = () => {
  const { state } = useNavigation();
  const products = useLoaderData();
  const [cart, setCart] = useState(products);
  const [cartCalc, setCartCalc] = useState({
    totalPrice: 0,
    totalShippingCharge: 0,
    tax: 0,
    grandTotal: 0,
  });
  const [rmProductFromCart, setRMProductFromCart] = useState(false);

  const removeProduct = (id) => {
    removeProductFromLS(id);

    const remainingProducts = cart.filter((product) => product.id !== id);

    setCart(remainingProducts);
    setRMProductFromCart(!rmProductFromCart);
  };

  const handleClearCart = (_) => {
    deleteCartFromLS();
    setCart([]);
  };

  useEffect(
    (_) => {
      const orderCalc = shoppingCartCalc(cart);
      setCartCalc({ ...orderCalc });
    },
    [rmProductFromCart]
  );

  return (
    <section className="py-5">
      <div className="container">
        {state !== "idle" ? (
          <div className="mx-auto w-fit">
            <CircleLoader color="#36d7b7" />
          </div>
        ) : cart.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="cart-product space-y-4">
              {cart.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex items-center p-4 rounded-lg bg-neutral-300/50"
                  >
                    <div className="max-w-[4rem]">
                      <img src={product.img} alt="" className="rounded-lg" />
                    </div>
                    <div className="mx-4">
                      <h4 className="font-semibold">{product.name}</h4>
                      <h6 className="font-medium">Price: {product.price}</h6>
                      <span>Shipping Charge: {product.shipping}</span>
                      <br />
                      <span>Quantity: {product.quantity}</span>
                    </div>
                    <div className="ml-auto">
                      <button
                        className="btn btn-sm btn-circle btn-error"
                        onClick={(_) => removeProduct(product.id)}
                      >
                        <UilTrashAlt className="h-4 fill-white" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="order-summary">
              <div className="bg-neutral-300/50 px-5 py-6 rounded-lg">
                <div>
                  <h2 className="relative font-semibold text-2xl text-center after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 after:bg-gray-500">
                    Order Summery
                  </h2>
                  <ul className="mt-5 mb-4 space-y-1.5">
                    <li>Selected Items: {cart.length}</li>
                    <li>Total Price: ${cartCalc.totalPrice}</li>
                    <li>
                      Total Shipping Charge: ${cartCalc.totalShippingCharge}
                    </li>
                    <li>Tax: ${cartCalc.tax}</li>
                  </ul>
                  <h3>Grand Total: ${cartCalc.grandTotal}</h3>
                </div>
                <div className="mt-5 space-y-1.5">
                  <button
                    type="button"
                    className="btn btn-sm w-full h-auto py-2 space-x-1 text-white"
                    onClick={handleClearCart}
                  >
                    <span>Clear Cart</span>
                    <UilTrashAlt className="h-4 fill-white" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm w-full h-auto py-2 space-x-1 text-white"
                  >
                    <span>Proceed Checkout</span>
                    <UilArrowRight className="h-4 fill-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-sm mx-auto">
            <img src={imgEmptyCart} alt="" />
            <div className="alert mt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Your cart is empty!</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderReview;
