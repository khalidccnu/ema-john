import React, {useEffect, useState} from 'react';
import Product from "./Product.jsx";
import 'boxicons';

const Shop = () => {
    let countPressCart = 0;

    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const toggleCart = ({currentTarget: elem}) => {
        elem.parentElement.classList.toggle("left-full");

        if (countPressCart) {
            elem.firstElementChild.setAttribute("name", "left-arrow");
            countPressCart--;
        } else {
            elem.firstElementChild.setAttribute("name", "right-arrow");
            countPressCart++;
        }
    }

    useEffect(_ => {
        fetch(`./products.json`).then(r => r.json()).then(data => setProducts(data));
    }, []);

    return (
        <section className="py-5">
            <div className="container relative">
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
                <div className="cart fixed top-1/2 -translate-y-1/2 left-full right-1.5 bg-neutral-300 px-5 py-6 rounded-box">
                    <div className="absolute top-1/2 right-[calc(100%_-_1.25rem)] -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={e => toggleCart(e)}>
                        <box-icon type='solid' name='left-arrow' color="rgb(212 212 212)" size="3rem"></box-icon>
                    </div>
                    <div>
                        <h2 className="relative font-semibold text-2xl text-center after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 after:bg-gray-500">Order Summery</h2>
                        <ul className="mt-5 mb-4 space-y-1.5">
                            <li>Selected Items: </li>
                            <li>Total Price: $</li>
                            <li>Total Shipping Charge: $</li>
                            <li>Tax: $</li>
                        </ul>
                        <h3>Grand Total: $</h3>
                    </div>
                    <div className="mt-5 space-y-1.5">
                        <button type="button" className="btn btn-sm w-full space-x-1 text-white">
                            <span>Clear Cart</span>
                            <box-icon name='trash' color='#fff'></box-icon>
                        </button>
                        <button type="button" className="btn btn-sm w-full space-x-1 text-white">
                            <span>Review Order</span>
                            <box-icon name='right-arrow-alt' color='#fff'></box-icon>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;