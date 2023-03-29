import React, {useEffect, useState} from 'react';
import 'boxicons';
import {addProductToLS, getCartFromLS, removeProductFromLS} from "../utility/index.js";

const Product = ({id, name, price, seller, ratings, img, addToCart, clearCart}) => {
    const [existProduct, setExistProduct] = useState(false);

    const checkProductInLS = _ => {
        const cart = getCartFromLS();

        id in cart ? setExistProduct(true) : existProduct ? setExistProduct(false) : null;
    }

    const handleAddToCart = _ => {
        addProductToLS(id);
        setExistProduct(true);
        addToCart(true);
    }

    const handleRemoveFromCart = _ => {
        removeProductFromLS(id);
        setExistProduct(false);
        addToCart(true);
    }

    useEffect(_ => {
        checkProductInLS();
    }, [clearCart]);

    return (
        <div className="card card-compact bg-neutral-200/30 shadow-sm">
            <figure className="relative">
                <img src={img} alt="" />
                {
                    existProduct ? (
                        <button className="absolute top-4 right-4" onClick={handleRemoveFromCart}>
                            <box-icon name='message-rounded-minus' color='rgb(218, 13, 13)'></box-icon>
                        </button>
                    ) : null
                }
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="font-medium">Price: ${price}</h4>
                <span className="text-gray-500">Manufacturer: {seller}</span>
                <span className="text-gray-500">Rating: {ratings}</span>
            </div>
            <div className="card-actions justify-end pr-4 pb-4">
                <button className="btn btn-sm btn-accent px-4" onClick={handleAddToCart}>
                    <span>Add to Cart</span>
                    <box-icon type="solid" name="cart-add"></box-icon>
                </button>
            </div>
        </div>
    );
};

export default Product;