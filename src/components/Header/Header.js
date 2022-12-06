import React, { useState, useEffect, useRef } from "react";

import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import { HeaderStyled } from "./HeaderElements";

const Header = ({ isTransparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transparentBackground, setTransparentBackground] =
    useState(isTransparent);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY >= 80 && transparentBackground) {
      setTransparentBackground(false);
    } else if (window.scrollY < 80 && !transparentBackground) {
      setTransparentBackground(true);
    }
  };

  const savedChangeNav = useRef(changeNav);

  savedChangeNav.current = changeNav;

  useEffect(() => {
    function callChangeNav() {
      savedChangeNav.current();
    }
    window.addEventListener("scroll", callChangeNav);
  }, []);

  return (
    <HeaderStyled transparentBackground={transparentBackground}>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </HeaderStyled>
  );
};

export default Header;
