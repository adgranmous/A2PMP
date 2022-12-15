import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import ActuPage from "./pages/actu";
import ContactPage from "./pages/contact";
import ContactSent from "./pages/contactSent";
import ChantiersPage from "./pages/chantiers";
import ChantiersCressPage from "./pages/chantierCress";
import ChantiersBarPage from "./pages/chantierBar";
import ChantiersCouturatPage from "./pages/chantierCouturat";
import ChantiersEglisePage from "./pages/chantierEglise";
import HistoirePage from "./pages/histoire";
import HistoireLavoirsPage from "./pages/histoireLavoir";
import TemoignagesPage from "./pages/temoignages";
import ArticlesPage from "./pages/articles";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A2PMP</title>
        <link rel="canonical" href="https://a2pmp.fr" />
        <meta
          name="description"
          content="Association pour la Préservation du Patrimoine et de la Mémoire de
          Pian sur Garonne"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/actu" element={<ActuPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/contact/sent" element={<ContactSent />} />
          <Route exact path="/chantiers" element={<ChantiersPage />} />
          <Route
            exact
            path="/chantiers/cress"
            element={<ChantiersCressPage />}
          />
          <Route exact path="/chantiers/bar" element={<ChantiersBarPage />} />
          <Route
            exact
            path="/chantiers/couturat"
            element={<ChantiersCouturatPage />}
          />
          <Route
            exact
            path="/chantiers/eglise"
            element={<ChantiersEglisePage />}
          />
          <Route exact path="/histoire" element={<HistoirePage />} />
          <Route
            exact
            path="/histoire/lavoirs"
            element={<HistoireLavoirsPage />}
          />
          <Route exact path="/temoignages" element={<TemoignagesPage />} />
          <Route exact path="/articles" element={<ArticlesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
