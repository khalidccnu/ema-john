import React from 'react';
import 'boxicons';

const Product = ({name, price, seller, ratings, img}) => {
    return (
        <div className="card card-compact bg-neutral-200/30 shadow-sm">
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="font-medium">Price: ${price}</h4>
                <span className="text-gray-500">Manufacturer: {seller}</span>
                <span className="text-gray-500">Rating: {ratings}</span>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-accent px-4">
                        <span>Add to Cart</span>
                        <box-icon type="solid" name="cart-add"></box-icon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;