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

function Navbar({ toggle }) {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
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
