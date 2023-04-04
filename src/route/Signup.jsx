import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import logoGoogle from "../asset/logo-google.png";

const Signup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    "cf-password": "",
  });
  const { state } = useNavigation();

  const changeInput = ({ target }) => {
    const { name, value } = target;

    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-5">
      <div className="container">
        {state !== "idle" ? (
          <div className="mx-auto w-fit">
            <CircleLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="artboard phone-2 max-w-full !h-auto mx-auto border rounded p-5">
            <h2 className="font-semibold text-2xl text-center">Signup</h2>
            <form
              className="form-control mt-5 space-y-4"
              onSubmit={handleSignup}
            >
              <div>
                <label className="label label-text pt-0">Email</label>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  className="input input-sm input-bordered rounded-none w-full"
                  onChange={changeInput}
                  required={true}
                />
              </div>
              <div>
                <label className="label label-text pt-0">Password</label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  className="input input-sm input-bordered rounded-none w-full"
                  onChange={changeInput}
                  required={true}
                />
              </div>
              <div>
                <label className="label label-text pt-0">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cf-password"
                  value={input["cf-password"]}
                  className="input input-sm input-bordered rounded-none w-full"
                  onChange={changeInput}
                  required={true}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-sm btn-accent w-full">
                  Signup
                </button>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2">
                <span>Already have an account?</span>
                <Link to="/login" className="text-accent">
                  Login
                </Link>
              </div>
              <div className="divider">or</div>
              <div className="flex justify-center items-center p-2 border space-x-2">
                <img src={logoGoogle} alt="" className="w-6" />
                <span>Continue with Google</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
