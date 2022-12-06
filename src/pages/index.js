import React from "react";
import Chantiers from "../components/CardsComponent/CardsComponent";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  // homeObjFour,
} from "../components/InfoSection/Data";
import Header from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header isTransparent={true} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Chantiers />
      {/* <InfoSection {...homeObjFour} /> */}
      <Footer />
    </>
  );
}

export default Home;
