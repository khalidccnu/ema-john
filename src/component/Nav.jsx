import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { UilBars, UilTimesCircle } from "./Unicons.jsx";
import brandLogo from "../asset/logo.svg";

const Nav = ({ navLink }) => {
  const [hbMenu, setHbMenu] = useState(false);
  const collapseHbMenu = useRef();

  const handleHbMenu = (_) => {
    setHbMenu(!hbMenu);
  };

  const handleCollapseHbMenu = ({ target: elem }) => {
    if (!collapseHbMenu.current.contains(elem)) setHbMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCollapseHbMenu);

    return () =>
      document.removeEventListener("mousedown", handleCollapseHbMenu);
  }, []);

  return (
    <>
      <nav className="bg-neutral-900" ref={collapseHbMenu}>
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
                    <UilTimesCircle className="h-6 fill-white" />
                  ) : (
                    <UilBars className="h-6 fill-white" />
                  )}
                </span>
                <ul
                  className={`menu menu-compact sm:menu-normal sm:menu-horizontal absolute sm:static ${
                    hbMenu ? "top-10" : "-top-60"
                  } right-0 bg-neutral-800 sm:bg-transparent w-52 sm:w-auto p-2 sm:p-0 rounded-box shadow sm:shadow-none z-50 capitalize`}
                >
                  <li className="text-white" onClick={(_) => setHbMenu(false)}>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "bg-accent" : ""
                      }
                    >
                      home
                    </NavLink>
                  </li>
                  <li className="text-white" onClick={(_) => setHbMenu(false)}>
                    <NavLink
                      to="/shop"
                      className={({ isActive }) =>
                        isActive ? "bg-accent" : ""
                      }
                    >
                      shop
                    </NavLink>
                  </li>
                  <li className="text-white" onClick={(_) => setHbMenu(false)}>
                    <NavLink
                      to="/order-review"
                      className={({ isActive }) =>
                        isActive ? "bg-accent" : ""
                      }
                    >
                      order review
                    </NavLink>
                  </li>
                  <li className="text-white" onClick={(_) => setHbMenu(false)}>
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
