import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import "boxicons";
import { getCartFromLS } from "../utility/index.js";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [cart, setCart] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [clearCart, setClearCart] = useState(false);

  useEffect((_) => {
    (async (_) => {
      !loading ? await setLoading(true) : null;
      await fetch(`./products.json`)
        .then((r) => r.json())
        .then((data) => setProducts(data));

      setLoading(false);
    })();
  }, []);

  useEffect(
    (_) => {
      const cartItems = [];

      if (products.length) {
        const getCart = getCartFromLS();

        for (let item in getCart) {
          const elem = products.find((product) => product.id === item);
          elem.quantity = getCart[item];
          cartItems.push(elem);
        }
      }

      setCart(cartItems);
      setAddToCart(false);
    },
    [products, addToCart]
  );

  return (
    <section className="py-5">
      <div className="container relative">
        {loading ? (
          <div className="mx-auto w-fit">
            <CircleLoader color="#36d7b7" />
          </div>
        ) : (
          <>
            <Products
              products={products}
              addToCart={setAddToCart}
              clearCart={clearCart}
              showAll={showAll}
              setShowAll={setShowAll}
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
