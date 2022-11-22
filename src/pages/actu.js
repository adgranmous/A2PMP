import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjActu } from "../components/InfoSection/Data";

const ActuPage = () => {
  return (
    <>
      <Header />
      <InfoSection {...homeObjActu} />
      <Footer />
    </>
  );
};

export default ActuPage;
