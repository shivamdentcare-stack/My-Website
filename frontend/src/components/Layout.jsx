import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="md:pl-72 pt-16 md:pt-0">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
