import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Ordenanzas from "./pages/Ordenanzas";
import Navbar from "./Components/Navbar";
import Contacto from "./pages/Contacto";
import Acerca from "./pages/Acerca";
import ScrollToTop from "./Components/ScrollToTop";
import AutoridadesAnteriores from "./pages/AutoridadesAnteriores";
import Edificio from "./pages/Edificio";
import Consejales from "./pages/Consejales";
import AutoridadesActuales from "./pages/AutoridadesActuales";
import BloqueUcr from "./pages/BloqueUcr";
import BloquePj from "./pages/BloquePj";
import BloqueNuevoPais from "./pages/BloqueNuevoPais";
import Bloque5DeMarzo from "./pages/Bloque5DeMarzo";
import BloquePro from "./pages/BloquePro";
import SesionesOrdinarias from "./pages/SesionesOrdinarias";
import Comisiones from "./pages/Comisiones";
import SesionesVivo from "./pages/SesionesVivo";
import Visitas from "./pages/Visitas/Visitas";
import DiaDelAnimal from "./pages/Visitas/DiaDelAnimal";
import Consul from "./pages/Visitas/Consul";
import AniversarioFormosa from "./pages/Visitas/AniversarioFormosa";
import Escuela445 from "./pages/Visitas/Escuela445";
import Aniversario25deMayo from "./pages/Visitas/Aniversario25deMayo";
import Lactancia from "./pages/Visitas/Lactancia";
import Campeon from "./pages/Visitas/Campeon";
import VeinteDeJunio from "./pages/Visitas/VeinteDeJunio";
import UltimasOrdenanzas from "./pages/UltimasOrdenanzas";
import ColegioMaradona from "./pages/Visitas/ColegioMaradona";
import JorgeAlvarenga from "./pages/Visitas/JorgeAlvarenga";
import Irala from "./pages/Visitas/Irala";
import Turistas from "./pages/Visitas/Turistas";
import ExpoFest from "./pages/Visitas/ExpoFest";

function AppRouter() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route
          path="/autoridadesActuales"
          element={<AutoridadesActuales />}
        />
        <Route
          path="/autoridadesAnteriores"
          element={<AutoridadesAnteriores />}
        />
        <Route path="/visitas" element={<Visitas />} />
        <Route path="/consul" element={<Consul />} />
        <Route path="/DiaDelAnimal" element={<DiaDelAnimal />} />
        <Route path="/aniversarioFormosa" element={<AniversarioFormosa />} />
        <Route path="/escuela445" element={<Escuela445 />} />
        <Route path="/Aniversario25deMayo" element={<Aniversario25deMayo />} />
        <Route path="/lactancia" element={<Lactancia />} />
        <Route path="/campeon" element={<Campeon />} />
        <Route path="/veinteDeJunio" element={<VeinteDeJunio />} />
        <Route path="/colegioMaradona" element={<ColegioMaradona />} />
        <Route path="/JorgeAlvarenga" element={<JorgeAlvarenga />} />
        <Route path="/Irala" element={<Irala />} />
        <Route path="/turistas" element={<Turistas />} />
        <Route path="/expoFest" element={<ExpoFest />} />
        <Route path="/edificio" element={<Edificio />} />
        <Route path="/concejales" element={<Consejales />} />
        <Route path="/comisiones" element={<Comisiones />} />
        <Route path="/pj" element={<BloquePj />} />
        <Route path="/ucr" element={<BloqueUcr />} />
        <Route path="/nuevoPais" element={<BloqueNuevoPais />} />
        <Route path="/5DeMarzo" element={<Bloque5DeMarzo />} />
        <Route path="/pro" element={<BloquePro />} />
        <Route path="/ordenanzas" element={<Ordenanzas />} />
        <Route path="/ultimasOrdenazas" element={<UltimasOrdenanzas />} />
        <Route path="/sesionesOrdinarias" element={<SesionesOrdinarias />} />
        <Route path="/sesionesEnVivo" element={<SesionesVivo />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRouter;
