import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import img404 from "../asset/404.svg";

const Error = () => {
  const { status, statusText } = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="card max-w-sm mx-auto mt-12 bg-white">
      <figure>
        <img src={img404} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Oops!</h2>
        <h4 className="font-medium">{status + " " + statusText}</h4>
        <p className="text-gray-500">
          Sorry, an error has occurred, Requested page not found!
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-accent"
            onClick={(_) => navigate(-1)}
          >
            <box-icon name="arrow-back"></box-icon>
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
