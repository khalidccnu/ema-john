import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav.jsx";
import IsOnline from "../component/IsOnline.jsx";
import Footer from "../component/Footer.jsx";

const Root = () => {
  return (
    <>
      <Nav navLink={true} />
      <IsOnline>
        <Outlet />
      </IsOnline>
      <Footer />
    </>
  );
};

export default Root;
