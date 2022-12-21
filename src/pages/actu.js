import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjActu, actuObjCout } from "../components/InfoSection/Data";
import { Layout } from "./PageStyle";
import { Helmet } from "react-helmet";

const ActuPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Actualité</title>
        <link rel="canonical" href="https://www.a2pmp.fr/actu" />
        <meta
          name="description"
          content="Toute l'actualité de l'A2PMP (Assemblée générale, chantiers...)"
        />
      </Helmet>
      <Header />
      <Layout>
        <InfoSection {...homeObjActu} />
        <InfoSection {...actuObjCout} />
      </Layout>
      <Footer />
    </>
  );
};

export default ActuPage;
