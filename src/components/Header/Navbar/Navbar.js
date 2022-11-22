import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

function Navbar({ toggle, isTransparent }) {
  const [transparentBackground, setTransparentBackground] =
    useState(isTransparent);

  const changeNav = () => {
    if (window.scrollY >= 80 && transparentBackground) {
      console.log(transparentBackground);
      setTransparentBackground(false);
    } else if (window.scrollY < 80 && !transparentBackground) {
      console.log(transparentBackground);
      setTransparentBackground(true);
    }
  };

  const savedChangeNav = useRef(changeNav);

  savedChangeNav.current = changeNav;

  useEffect(() => {
    function callChangeNav() {
      savedChangeNav.current();
    }
    if (isTransparent) {
      window.addEventListener("scroll", callChangeNav);
    }
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav transparentBackground={transparentBackground}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              A2PMP
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/actu"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Actualités
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/chantiers"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Chantiers
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/histoire"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Histoire
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/temoignages"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Témoignages
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/articles"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  Articles
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/contact">Contact</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
