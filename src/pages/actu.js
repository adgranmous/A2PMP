import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjActu,actuObjCout } from "../components/InfoSection/Data";
import { Layout } from "./PageStyle";

const ActuPage = () => {
  return (
    <>
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
