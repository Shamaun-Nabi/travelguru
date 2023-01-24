import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout() {

  return (
    <div
      className="md:h-screen bg-center bg-no-repeat bg-cover relative "
      style={{ backgroundImage: `url(https://i.postimg.cc/cCRqJmVK/bg.png)` }}
    >
      <div className="shadow-bg w-full h-full bg-[#000000c2]  ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
