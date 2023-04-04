import React from "react";
import { useNavigation, useNavigate } from "react-router-dom";
import imgHome from "../asset/home.jpg";
import { CircleLoader } from "react-spinners";

const Home = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();

  return (
    <section className="py-5">
      <div className="container">
        {state !== "idle" ? (
          <div className="mx-auto w-fit">
            <CircleLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center w-fit mx-auto">
            <div className="mb-5 md:mb-0 md:mr-12">
              <small className="text-gray-500">Sale up to 70% off</small>
              <div className="mb-5">
                <h2 className="font-bold text-3xl">
                  New Collection For Summer
                </h2>
                <p className="text-gray-800">
                  Discover all the new arrivals of ready-to-wear collection.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-accent rounded"
                onClick={(_) => navigate("/shop")}
              >
                Shop Now
              </button>
            </div>
            <div className="max-w-xs">
              <img
                src={imgHome}
                alt=""
                className="rounded-lg shadow-[-10px_10px] shadow-yellow-100"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
