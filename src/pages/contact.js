import React from "react";
import Footer from "../components/Footer/Footer";
import Mailer from "../components/Mailer/Mailer";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="https://www.a2pmp.fr/contact" />
        <meta name="description" content="Contactez-nous par email" />
      </Helmet>
      <Header />
      <Mailer />
      <Footer />
    </>
  );
};

export default ContactPage;
