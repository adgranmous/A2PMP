import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import { histoireObjLavoir } from "../components/InfoSection/Data";
import Histoire from "../components/Histoire/Histoire";
import { Layout } from "./PageStyle";
import HistoireSideNavBar from "../components/Histoire/HistoireSideNavBar/HistoireSideNavBar";
import HistoireLavoirArticle from "../components/Histoire/HistoireLavoirArticle/HistoireLavoirArticle";

const histoireLavoir = () => {
  return (
    <>
      <Header />
      <Layout>
        <HistoireSideNavBar />
        <InfoSection {...histoireObjLavoir} />
        <Histoire />
      </Layout>
      <HistoireLavoirArticle />
      <Footer />
    </>
  );
};

export default histoireLavoir;
