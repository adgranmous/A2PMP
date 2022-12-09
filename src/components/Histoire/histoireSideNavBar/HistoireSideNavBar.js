import React from "react";
import {
  SideBarNavContainer,
  SidebarNavLinksWrapper,
  SideBarNavLinks,
} from "./HistoireSideNavBarEelements";

const HistoireSideNavBar = () => {
  return (
    <>
      <SideBarNavContainer>
        <SidebarNavLinksWrapper>
          <SideBarNavLinks to="/histoire">Pian sur Garonne</SideBarNavLinks>
          <SideBarNavLinks to="/histoire/lavoirs">Lavoirs</SideBarNavLinks>
        </SidebarNavLinksWrapper>
      </SideBarNavContainer>
    </>
  );
};

export default HistoireSideNavBar;
