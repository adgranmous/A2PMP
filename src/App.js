// import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import ActuPage from "./pages/actu";
import ContactPage from "./pages/contact";
import ContactSent from "./pages/contactSent";
import ChantiersPage from "./pages/chantiers";
import HistoirePage from "./pages/histoire";
import TemoignagesPage from "./pages/temoignages";
import ArticlesPage from "./pages/articles";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/actu" element={<ActuPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/contact/sent" element={<ContactSent />} />
            <Route exact path="/chantiers" element={<ChantiersPage />} />
            <Route exact path="/histoire" element={<HistoirePage />} />
            <Route exact path="/temoignages" element={<TemoignagesPage />} />
            <Route exact path="/articles" element={<ArticlesPage />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
