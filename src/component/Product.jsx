import React, { useEffect, useState } from "react";
import { UilEye, UilMinusCircle, UilShoppingBag } from "./Unicons.jsx";
import {
  addProductToLS,
  getCartFromLS,
  removeProductFromLS,
} from "../utility/index.js";

const Product = ({ product, productDetail, addToCart, clearCart }) => {
  const { id, name, price, seller, ratings, img } = product;

  const [existProduct, setExistProduct] = useState(false);

  const checkProductInLS = (_) => {
    const cart = getCartFromLS();

    id in cart
      ? setExistProduct(true)
      : existProduct
      ? setExistProduct(false)
      : null;
  };

  const handleAddToCart = (_) => {
    addProductToLS(id);
    setExistProduct(true);
    addToCart(true);
  };

  const handleRemoveFromCart = (_) => {
    removeProductFromLS(id);
    setExistProduct(false);
    addToCart(true);
  };

  useEffect(
    (_) => {
      checkProductInLS();
    },
    [clearCart]
  );

  return (
    <div className="card card-compact bg-neutral-200/30 shadow-sm">
      <figure className="relative">
        <img src={img} alt="" />
        <label
          htmlFor="product-detail"
          className="absolute top-4 left-4 cursor-pointer"
          onClick={(_) => productDetail(product)}
        >
          <UilEye className="h-4 fill-green-500" />
        </label>
        {existProduct ? (
          <button
            className="absolute top-4 right-4"
            onClick={handleRemoveFromCart}
          >
            <UilMinusCircle className="h-4 fill-red-500" />
          </button>
        ) : null}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h4 className="font-medium">Price: ${price}</h4>
        <span className="text-gray-500">Manufacturer: {seller}</span>
        <span className="text-gray-500">Rating: {ratings}</span>
      </div>
      <div className="card-actions justify-end pr-4 pb-4">
        <button
          className="btn btn-sm btn-accent px-4"
          onClick={handleAddToCart}
        >
          <span>Add to Cart</span>
          <UilShoppingBag className="h-5 fill-[rgb(59,_38,_0)]" />
        </button>
      </div>
    </div>
  );
};

export default Product;
