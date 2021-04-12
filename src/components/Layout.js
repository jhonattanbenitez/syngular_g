import React, { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Navbar />
      <Sidbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Layout;
