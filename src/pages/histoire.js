import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjConstruction } from "../components/InfoSection/Data";
import Histoire from "../components/Histoire/Histoire";
import { Layout } from "./PageStyle";

const HistoirePage = () => {
  return (
    <>
      <Header />
      <Layout>
        <InfoSection {...homeObjConstruction} />
        <Histoire />
      </Layout>
      <Footer />
    </>
  );
};

export default HistoirePage;
