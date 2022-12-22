import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjConstruction } from "../components/InfoSection/Data";
import Histoire from "../components/Histoire/Histoire";
import HistoireSideNavBar from "../components/Histoire/HistoireSideNavBar/HistoireSideNavBar";
import { Helmet } from "react-helmet";
// import { Layout } from "./PageStyle";
import HistoirePianArticle from "../components/Histoire/HistoirePianArticle/HistoirePianArticle";

const HistoirePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Histoire</title>
        <link rel="canonical" href="https://www.a2pmp.fr/histoire" />
        <meta
          name="description"
          content="Histoire de Pian sur Garonne (la commune, les lavoirs...)"
        />
      </Helmet>
      {/* <Layout> */}
      <Header />
      <HistoireSideNavBar />
      <InfoSection {...homeObjConstruction} />
      <Histoire />
      <HistoirePianArticle />
      {/* </Layout> */}
      <Footer />
    </>
  );
};

export default HistoirePage;
