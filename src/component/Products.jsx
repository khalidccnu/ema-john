import React, { useState } from "react";
import Product from "./Product.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Products = ({ currentProducts, addToCart, clearCart }) => {
  const [productDetail, setProductDetail] = useState([]);

  return (
    <div className="products">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentProducts.map((product) => (
          <Product
            addToCart={addToCart}
            clearCart={clearCart}
            key={product.id}
            product={product}
            productDetail={setProductDetail}
          />
        ))}
      </div>
      <ProductDetail product={productDetail} />
    </div>
  );
};

export default Products;
