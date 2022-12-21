import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Gallery from "../components/GalleryComponent/Gallery";
import { Helmet } from "react-helmet";

const ChantiersPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chantiers</title>
        <link rel="canonical" href="https://www.a2pmp.fr/chantiers" />
        <meta
          name="description"
          content="Nos chantiers en photos (le lavoir de Jacques, couturat, le bar...)"
        />
      </Helmet>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
};

export default ChantiersPage;
