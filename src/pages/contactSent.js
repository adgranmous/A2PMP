import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjSent } from "../components/InfoSection/Data";
import RedirectionComponent from "../components/RedirectionComponent/RedirectionComponent";

const contactSent = () => {
  return (
    <>
      <Header />
      <InfoSection {...homeObjSent} />
      <RedirectionComponent />
      <Footer />
    </>
  );
};

export default contactSent;
