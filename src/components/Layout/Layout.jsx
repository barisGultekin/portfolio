import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/projects/ardeo",
    "/projects/wire",
    "/projects/brevvit",
    "/projects/arflip",
    "/projects/iztechsailing",
    "/projects/envsoc",
    "/projects/chair-configurator"
  ];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="layout">
      {showNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
