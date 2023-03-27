import React, {useEffect, useState} from 'react';
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import 'boxicons';
import {getCartFromLS} from "../utility/index.js";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [cart, setCart] = useState([]);
    const [addToCart, setAddToCart] = useState(false);

    useEffect(_ => {
        fetch(`./products.json`).then(r => r.json()).then(data => setProducts(data));
    }, []);

    useEffect(_ => {
        const cartItems = [];

        if (products.length) {
            const getCart = getCartFromLS();

            for (let item in getCart) {
                const elem = products.find(product => product.id === item);
                elem.quantity = getCart[item];
                cartItems.push(elem);
            }
        }

        setCart(cartItems);
        setAddToCart(false);
    }, [products, addToCart]);

    return (
        <section className="py-5">
            <div className="container relative">
                <Products products={products} addToCart={setAddToCart} showAll={showAll} setShowAll={setShowAll} />
                <Cart cart={cart} addToCart={setAddToCart} />
            </div>
        </section>
    );
};

export default Shop;