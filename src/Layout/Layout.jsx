import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover relative "
      style={{ backgroundImage: `url(https://i.postimg.cc/cCRqJmVK/bg.png)` }}
    >
      <div className="shadow-bg w-full h-full bg-[#0000007c] backdrop-blur-0 ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
