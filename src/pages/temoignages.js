import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Temoignage from "../components/Temoignage/Temoignage";
import { Helmet } from "react-helmet";

const TemoignagesPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Temoignages</title>
        <link rel="canonical" href="https://www.a2pmp.fr/temoignages" />
        <meta
          name="description"
          content="Souvenirs d'antan recueillis par l'A2PMP"
        />
      </Helmet>
      <Header />
      <Temoignage />
      <Footer />
    </>
  );
};

export default TemoignagesPage;
