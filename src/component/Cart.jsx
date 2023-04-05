import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCartFromLS } from "../utility/index.js";

const Cart = ({ cart, addToCart, clearCart }) => {
  let totalPrice = 0,
    totalShippingCharge = 0,
    tax = 0,
    grandTotal = 0;

  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  if (cart.length) {
    totalPrice = cart.reduce(
      (total, current) => total + current.price * current.quantity,
      0
    );
    totalShippingCharge = cart.reduce(
      (total, current) => total + current.shipping * current.quantity,
      0
    );
    tax = (totalPrice * 7) / 100;
    grandTotal = totalPrice + totalShippingCharge + tax;
  }

  const toggleCart = ({ currentTarget: elem }) => {
    if (showCart) {
      elem.parentElement.classList.replace("left-1/2", "left-full");
      elem.parentElement.classList.remove("-translate-x-1/2");
      elem.firstElementChild.classList.replace(
        "uil-arrow-to-right",
        "uil-left-arrow-from-left"
      );
      setShowCart(false);
    } else {
      elem.parentElement.classList.replace("left-full", "left-1/2");
      elem.parentElement.classList.add("-translate-x-1/2");
      elem.firstElementChild.classList.replace(
        "uil-left-arrow-from-left",
        "uil-arrow-to-right"
      );
      setShowCart(true);
    }
  };

  const handleClearCart = (_) => {
    deleteCartFromLS();
    clearCart(true);
    addToCart(true);
  };

  return (
    <div className="cart fixed top-1/2 -translate-y-1/2 left-full bg-neutral-300 min-w-[14rem] px-5 py-6 rounded-box transition-[left] duration-300">
      <div
        className="absolute top-1/2 right-[calc(100%_-_1.25rem)] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={(e) => toggleCart(e)}
      >
        <i className="uil uil-left-arrow-from-left text-4xl"></i>
      </div>
      <div>
        <h2 className="relative font-semibold text-2xl text-center after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 after:bg-gray-500">
          Order Summery
        </h2>
        <ul className="mt-5 mb-4 space-y-1.5">
          <li>Selected Items: {cart.length}</li>
          <li>Total Price: ${totalPrice}</li>
          <li>Total Shipping Charge: ${totalShippingCharge}</li>
          <li>Tax: ${tax}</li>
        </ul>
        <h3>Grand Total: ${grandTotal}</h3>
      </div>
      <div className="mt-5 space-y-1.5">
        <button
          type="button"
          className="btn btn-sm w-full h-auto py-2 space-x-1 text-white"
          onClick={handleClearCart}
        >
          <span>Clear Cart</span>
          <i className="uil uil-trash-alt"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm w-full h-auto py-2 space-x-1 text-white"
          onClick={(_) => navigate("/order-review")}
        >
          <span>Review Order</span>
          <i className="uil uil-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
