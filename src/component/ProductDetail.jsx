import React from "react";

const ProductDetail = ({
  product: { img, name, price, category, seller, ratings },
}) => {
  const vsRating = [];
  let emptyRating = <i className="uil uil-star"></i>;
  let halfRating = <i className="uis uis-star-half-alt"></i>;
  let fullRating = <i className="uis uis-star"></i>;

  for (let i = 0; i < 5; i++) {
    if (ratings !== undefined) {
      let intRatings;
      let isInt = Number.isInteger(ratings);

      isInt ? (intRatings = ratings) : (intRatings = Math.trunc(ratings));

      i < intRatings
        ? vsRating.push(fullRating)
        : !isInt && i === intRatings
        ? vsRating.push(halfRating)
        : vsRating.push(emptyRating);
    }
  }

  return (
    <>
      <input type="checkbox" id="product-detail" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative sm:max-w-2xl lg:max-w-4xl">
          <label
            htmlFor="product-detail"
            className="btn btn-sm btn-circle absolute top-2 right-2"
          >
            ✕
          </label>
          <div className="card sm:card-side mt-4">
            <figure className="max-w-sm mx-auto">
              <img src={img} alt="" className="rounded-box" />
            </figure>
            <div className="card-body justify-between">
              <div>
                <h2 className="card-title">{name}</h2>
                <small className="-mt-3 text-yellow-500">
                  {vsRating.map((rating) => rating)}
                </small>
                <div className="flex justify-between">
                  <h4 className="font-medium">${price}</h4>
                  <h4 className="flex items-center space-x-1">
                    <i className="uil uil-user-circle"></i>
                    <span>{seller}</span>
                  </h4>
                </div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-accent font-medium text-[0.7rem]">
                  {category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
