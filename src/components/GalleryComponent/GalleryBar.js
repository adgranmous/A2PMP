import React, { useState } from "react";
import {
  SideBarNavContainer,
  SidebarNavLinksWrapper,
  SideBarNavLinks,
} from "../Histoire/HistoireSideNavBar/HistoireSideNavBarEelements";
import {
  GalleryContainer,
  GalleryLDJ,
  LDJimg,
  Panorama,
  PanoramaImg,
  CloseIcon,
  LdjH1,
} from "./GalleryElements";
import { data3 } from "./DataPhoto";

const GalleryBar = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <SideBarNavContainer>
        <SidebarNavLinksWrapper>
          <SideBarNavLinks to="/chantiers">
            Le lavoir de Jacques
          </SideBarNavLinks>
          <SideBarNavLinks to="/chantiers/cress">
            La créssonnière
          </SideBarNavLinks>
          <SideBarNavLinks to="/chantiers/bar">Le bar</SideBarNavLinks>
          <SideBarNavLinks to="/chantiers/couturat">Couturat</SideBarNavLinks>
          <SideBarNavLinks to="/chantiers/eglise">L'eglise</SideBarNavLinks>
        </SidebarNavLinksWrapper>
      </SideBarNavContainer>
      <Panorama className={model ? "model open" : "model"}>
        <PanoramaImg alt="panorama" src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </Panorama>

      <LdjH1 id="bar">Le bar</LdjH1>
      <GalleryContainer>
        {data3.map((item, index) => {
          return (
            <GalleryLDJ key={index} onClick={() => getImg(item.imgSrc)}>
              <LDJimg src={item.imgSrc} />
            </GalleryLDJ>
          );
        })}
      </GalleryContainer>
    </>
  );
};

export default GalleryBar;
