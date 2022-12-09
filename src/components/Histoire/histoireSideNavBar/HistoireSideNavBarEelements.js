import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBarNavContainer = styled.div`
  width: 20vw;
  ${"" /* height: 100vh; */}
  margin: 0;
  padding: 150px 0 0;
`;

export const SidebarNavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #101522;
  padding: 30px 10px 10px;
  border-top-right-radius: 6%;
  border-bottom-right-radius: 6%;
  border-bottom: solid 1px #01bf71;
  border-top: solid 1px #01bf71;
  border-right: solid 1px #01bf71;
`;

export const SideBarNavLinks = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0 0 15px;
  font-size: small;

  &:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
  }
`;
