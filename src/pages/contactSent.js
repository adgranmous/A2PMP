import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import { homeObjSent } from "../components/InfoSection/Data";
import RedirectionComponent from "../components/RedirectionComponent/RedirectionComponent";
import { Layout } from "./PageStyle";

const contactSent = () => {
  return (
    <>
      <Header />
      <Layout>
        <InfoSection {...homeObjSent} />
        <RedirectionComponent />
      </Layout>
      <Footer />
    </>
  );
};

export default contactSent;
