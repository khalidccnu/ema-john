import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(_ => {
        fetch(`./products.json`).then(r => r.json()).then(data => setProducts(data));
    }, []);

    return (
        <section className="py-5">
            <div className="container">
                <div className="products">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {products.slice(0, showAll ? products.length : 6).map(product => <Product key={product.id} {...product} />)}
                    </div>
                    {
                        showAll || (
                            <div className="mt-5 text-center">
                                <button type="button" className="btn btn-sm btn-info" onClick={_ => setShowAll(true)}>Show All</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Shop;