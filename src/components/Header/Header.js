import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";

const Header = ({ isTransparent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isTransparent={isTransparent} />
    </>
  );
};

export default Header;
