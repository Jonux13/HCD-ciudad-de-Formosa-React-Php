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
import Resoluciones from "./pages/Resoluciones";
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
          path="/institucional/autoridadesActuales"
          element={<AutoridadesActuales />}
        />
        <Route
          path="/institucional/autoridadesAnteriores"
          element={<AutoridadesAnteriores />}
        />
        <Route path="/institucional/visitas" element={<Visitas />} />
        <Route path="/institucional/visitas/consul" element={<Consul />} />
        <Route path="/institucional/visitas/DiaDelAnimal" element={<DiaDelAnimal />} />
        <Route path="/institucional/visitas/aniversarioFormosa" element={<AniversarioFormosa />} />
        <Route path="/institucional/visitas/escuela445" element={<Escuela445 />} />
        <Route path="/institucional/visitas/Aniversario25deMayo" element={<Aniversario25deMayo />} />
        <Route path="/institucional/visitas/lactancia" element={<Lactancia />} />
        <Route path="/institucional/visitas/campeon" element={<Campeon />} />
        <Route path="/institucional/visitas/veinteDeJunio" element={<VeinteDeJunio />} />
        <Route path="/institucional/visitas/colegioMaradona" element={<ColegioMaradona />} />
        <Route path="/institucional/visitas/JorgeAlvarenga" element={<JorgeAlvarenga />} />
        <Route path="/institucional/visitas/Irala" element={<Irala />} />
        <Route path="/institucional/visitas/turistas" element={<Turistas />} />
        <Route path="/institucional/visitas/expoFest" element={<ExpoFest />} />
        <Route path="/institucional/edificio" element={<Edificio />} />
        <Route path="/concejales/concejales" element={<Consejales />} />
        <Route path="/concejales/comisiones" element={<Comisiones />} />
        <Route
          path="/concejales/bloqueDeConcejales/pj"
          element={<BloquePj />}
        />
        <Route
          path="/concejales/bloqueDeConcejales/ucr"
          element={<BloqueUcr />}
        />
        <Route
          path="/concejales/bloqueDeConcejales/nuevoPais"
          element={<BloqueNuevoPais />}
        />
        <Route
          path="/concejales/bloqueDeConcejales/5DeMarzo"
          element={<Bloque5DeMarzo />}
        />
        <Route
          path="/concejales/bloqueDeConcejales/pro"
          element={<BloquePro />}
        />
        <Route path="/ordenanzas/ordenanzas" element={<Ordenanzas />} />
        <Route path="/ordenanzas/ultimasOrdenazas" element={<UltimasOrdenanzas />} />
        <Route
          path="/legislativo/sesionesOrdinarias"
          element={<SesionesOrdinarias />}
        />
        <Route path="/legislativo/sesionesEnVivo" element={<SesionesVivo />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRouter;
