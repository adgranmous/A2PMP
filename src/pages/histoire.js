import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjConstruction } from "../components/InfoSection/Data";
import Histoire from "../components/Histoire/Histoire";

const HistoirePage = () => {
  return (
    <>
      <Header />
      <InfoSection {...homeObjConstruction} />
      <Histoire />
      <Footer />
    </>
  );
};

export default HistoirePage;
