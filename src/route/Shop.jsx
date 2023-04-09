import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { shoppingCart } from "../utility/index.js";
import Products from "../component/Products.jsx";
import Cart from "../component/Cart.jsx";

const Shop = () => {
  const { state } = useNavigation();
  const products = useLoaderData();
  const [productsLimit, setProductsLimit] = useState(9);
  const [cart, setCart] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [clearCart, setClearCart] = useState(false);

  const currentProducts = products.slice(0, productsLimit);

  const handleCurrentProducts = (_) => {
    if (
      innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    )
      setProductsLimit((prevState) => {
        if (prevState <= products.length) return prevState + 9;
        else return prevState;
      });
  };

  useEffect(() => {
    addEventListener("scroll", handleCurrentProducts);

    return () => removeEventListener("scroll", handleCurrentProducts);
  }, []);

  useEffect(
    (_) => {
      (async (_) => {
        const cartItems = await shoppingCart(products);
        setCart(cartItems);
      })();

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
