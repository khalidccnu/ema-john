import React from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../asset/logo.svg";

const Nav = ({ navLink }) => {
  return (
    <>
      <nav className="bg-neutral-900">
        <div className="container">
          <div className="navbar justify-between">
            <div className="navbar-brand">
              <img src={brandLogo} alt="" />
            </div>
            {navLink ? (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-sm btn-primary md:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu menu-compact md:menu-normal md:menu-horizontal bg-neutral-800 md:bg-transparent w-52 rounded-box mt-3 md:mt-0 p-2 md:p-0 shadow md:shadow-none capitalize md:!relative md:!visible md:!opacity-100"
                >
                  <li className="text-white">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "bg-accent" : ""
                      }
                    >
                      home
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/shop"
                      className={({ isActive }) =>
                        isActive ? "bg-accent" : ""
                      }
                    >
                      shop
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/order-review"
                      className={({ isActive }) =>
                        isActive ? "bg-accent" : ""
                      }
                    >
                      order review
                    </NavLink>
                  </li>
                  <li className="text-white">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "bg-accent" : ""
                      }
                    >
                      login
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
