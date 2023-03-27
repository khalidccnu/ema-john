import React from 'react';
import Product from "./Product.jsx";

const Products = ({products, addToCart, showAll, setShowAll}) => {
    return (
        <div className="products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.slice(0, showAll ? products.length : 6).map(product => <Product addToCart={addToCart} key={product.id} {...product} />)}
            </div>
            {
                showAll || (
                    <div className="mt-5 text-center">
                        <button type="button" className="btn btn-sm btn-info" onClick={_ => setShowAll(true)}>Show All</button>
                    </div>
                )
            }
        </div>
    );
};

export default Products;