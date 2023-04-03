import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav.jsx";
import Footer from "../component/Footer.jsx";

const Root = () => {
  return (
    <>
      <Nav navLink={true} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
