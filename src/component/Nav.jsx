import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../asset/logo.svg";

const Nav = ({ navLink }) => {
  const [hbMenu, setHbMenu] = useState(false);

  const handleHbMenu = (_) => {
    setHbMenu(!hbMenu);
  };

  return (
    <>
      <nav className="bg-neutral-900">
        <div className="container">
          <div className="navbar justify-between">
            <div className="navbar-brand">
              <img src={brandLogo} alt="" />
            </div>
            {navLink ? (
              <div className="navbar-nav relative">
                <span
                  className="sm:hidden cursor-pointer"
                  onClick={handleHbMenu}
                >
                  {hbMenu ? (
                    <box-icon
                      type="regular"
                      name="menu-alt-right"
                      color="#fff"
                    ></box-icon>
                  ) : (
                    <box-icon
                      type="regular"
                      name="menu"
                      color="#fff"
                    ></box-icon>
                  )}
                </span>
                <ul
                  className={`menu menu-compact sm:menu-normal sm:menu-horizontal absolute sm:static ${
                    hbMenu ? "top-10" : "-top-60"
                  } right-0 bg-neutral-800 sm:bg-transparent w-52 sm:w-auto p-2 sm:p-0 rounded-box shadow sm:shadow-none capitalize`}
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
