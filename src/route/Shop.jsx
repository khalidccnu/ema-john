import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { getCartFromLS } from "../utility/index.js";
import Products from "../component/Products.jsx";
import Cart from "../component/Cart.jsx";

const Shop = () => {
  const { state } = useNavigation();
  const products = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [clearCart, setClearCart] = useState(false);

  let productsPerPage = 9;
  let lastProductIndex = currentPage * productsPerPage;
  let firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  useEffect(
    (_) => {
      const cartItems = [];
      const getCart = getCartFromLS();

      for (let item in getCart) {
        const elem = products.find((product) => product.id === item);
        elem.quantity = getCart[item];
        cartItems.push(elem);
      }

      setCart(cartItems);
      addToCart ? setAddToCart(false) : null;
    },
    [addToCart]
  );

  return (
    <section className="py-5">
      <div className="container relative">
        {state !== "idle" ? (
          <div className="mx-auto w-fit">
            <CircleLoader color="#36d7b7" />
          </div>
        ) : (
          <>
            <Products
              currentProducts={currentProducts}
              productsLength={products.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              perPage={productsPerPage}
              addToCart={setAddToCart}
              clearCart={clearCart}
            />
            <Cart
              cart={cart}
              addToCart={setAddToCart}
              clearCart={setClearCart}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Shop;
