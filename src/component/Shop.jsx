import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(_ => {
        fetch(`./products.json`).then(r => r.json()).then(data => setProducts(data));
    }, []);

    return (
        <section className="py-5">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {products.map(product => <Product key={product.id} {...product} />)}
                </div>
            </div>
        </section>
    );
};

export default Shop;