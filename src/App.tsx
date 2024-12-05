import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { MainBanner } from "./Components/MainBanner";
import { SectionButtons } from "./Components/SectionButtons";
import { Footer } from "./Components/Footer";
import { ColabsIMA } from "./Components/ColabElem/ColabsIMA";
import ColecIMA from "./Components/ColabElem/ColecIMA";
import CulturaIMA from "./Components/ColabElem/CulturaIMA"; // Nuevo componente
import MediosIMA from "./Components/ColabElem/MediosIMA"; // Nuevo componente
import ArtistasIMA from "./Components/ColabElem/ArtistasIMA"; // Nuevo componente
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <>
                <MainBanner />
                <SectionButtons />
              </>
            }
          />
          {/* Ruta para colaboradores */}
          <Route path="/colaboradores" element={<ColabsIMA />} />
          {/* Ruta para ColecIMA */}
          <Route path="/colecima" element={<ColecIMA />} />
          {/* Nuevas rutas */}
          <Route path="/cultura" element={<CulturaIMA />} />
          <Route path="/medios" element={<MediosIMA />} />
          <Route path="/artista" element={<ArtistasIMA />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
