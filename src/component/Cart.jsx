import React, {useState} from 'react';
import {deleteCartFromLS} from "../utility/index.js";

const Cart = ({cart, addToCart}) => {
    let totalPrice = 0, totalShippingCharge = 0, tax = 0, grandTotal = 0;

    const [showCart, setShowCart] = useState(false);

    if (cart.length) {
        totalPrice = cart.reduce((total, current) => total + (current.price * current.quantity), 0);
        totalShippingCharge = cart.reduce((total, current) => total + (current.shipping * current.quantity), 0);
        tax = totalPrice * cart.length / 100;
        grandTotal = totalPrice + totalShippingCharge + tax;
    }

    const toggleCart = ({currentTarget: elem}) => {
        if (showCart) {
            elem.parentElement.classList.replace("left-[70%]", "left-full");
            elem.firstElementChild.setAttribute("name", "left-arrow");
            setShowCart(false);
        } else {
            elem.parentElement.classList.replace("left-full", "left-[70%]");
            elem.firstElementChild.setAttribute("name", "right-arrow");
            setShowCart(true);
        }
    }

    const handleClearCart = _ => {
        deleteCartFromLS();
        addToCart(true);
    }

    return (
        <div className="cart fixed top-1/2 -translate-y-1/2 left-full bg-neutral-300 px-5 py-6 rounded-box transition-[left] duration-300">
            <div className="absolute top-1/2 right-[calc(100%_-_1.25rem)] -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={e => toggleCart(e)}>
                <box-icon type='solid' name='left-arrow' color="rgb(212 212 212)" size="3rem"></box-icon>
            </div>
            <div>
                <h2 className="relative font-semibold text-2xl text-center after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 after:bg-gray-500">Order Summery</h2>
                <ul className="mt-5 mb-4 space-y-1.5">
                    <li>Selected Items: {cart.length}</li>
                    <li>Total Price: ${totalPrice}</li>
                    <li>Total Shipping Charge: ${totalShippingCharge}</li>
                    <li>Tax: ${tax}</li>
                </ul>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
            <div className="mt-5 space-y-1.5">
                <button type="button" className="btn btn-sm w-full space-x-1 text-white" onClick={handleClearCart}>
                    <span>Clear Cart</span>
                    <box-icon name='trash' color='#fff'></box-icon>
                </button>
                <button type="button" className="btn btn-sm w-full space-x-1 text-white">
                    <span>Review Order</span>
                    <box-icon name='right-arrow-alt' color='#fff'></box-icon>
                </button>
            </div>
        </div>
    );
};

export default Cart;