import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Articles from "../components/Articles/Articles";
import { Helmet } from "react-helmet";

const ArticlesPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Articles</title>
        <link rel="canonical" href="https://www.a2pmp.fr/projets" />
        <meta
          name="description"
          content="tout les articles de l'A2pmp (les cabanes des vignes...)"
        />
      </Helmet>
      <Header />
      <Articles />
      <Footer />
    </>
  );
};

export default ArticlesPage;
