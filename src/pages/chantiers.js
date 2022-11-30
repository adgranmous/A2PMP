import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Gallery from "../components/GalleryComponent/Gallery";
import InfoSection from "../components/InfoSection/InfoSection";
import { chantierObjEglise } from "../components/InfoSection/Data";

const ChantiersPage = () => {
  return (
    <>
      <Header />
      <Gallery />
      <InfoSection {...chantierObjEglise} />
      <Footer />
    </>
  );
};

export default ChantiersPage;
