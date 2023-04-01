import React, { useState } from "react";
import Product from "./Product.jsx";
import ProductDetail from "./ProductDetail.jsx";

const Products = ({ products, addToCart, clearCart, showAll, setShowAll }) => {
  const [productDetail, setProductDetail] = useState([]);

  return (
    <div className="products">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.slice(0, showAll ? products.length : 6).map((product) => (
          <Product
            addToCart={addToCart}
            clearCart={clearCart}
            key={product.id}
            product={product}
            productDetail={setProductDetail}
          />
        ))}
      </div>
      {showAll || (
        <div className="mt-5 text-center">
          <button
            type="button"
            className="btn btn-sm btn-info"
            onClick={(_) => setShowAll(true)}
          >
            Show All
          </button>
        </div>
      )}
      <ProductDetail product={productDetail} />
    </div>
  );
};

export default Products;
