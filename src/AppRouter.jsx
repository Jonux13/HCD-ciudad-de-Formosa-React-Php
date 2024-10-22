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
import Concejales from "./pages/Concejales";
import AutoridadesActuales from "./pages/AutoridadesActuales";
import BloqueUcr from "./pages/BloqueUcr";
import BloquePj from "./pages/BloquePj";
import BloqueNuevoPais from "./pages/BloqueNuevoPais";
import Bloque5DeMarzo from "./pages/Bloque5DeMarzo";
import BloquePro from "./pages/BloquePro";
import SesionesOrdinarias from "./pages/SesionesOrdinarias";
import Comisiones from "./pages/Comisiones";
import SesionesVivo from "./pages/SesionesVivo";
import Visitas from "./Components/Visitas";
import UltimasOrdenanzas from "./pages/UltimasOrdenanzas";
import VisitaDetalle from './Components/VisitaDetalle';
import ActividadesBloquePj from "./Components/ActividadesBloquePj";
import ActividadesBloquePjDetalle from "./Components/ActividadesBloquePjDetalle";
import NotFoundPage from "./Components/NotFoundPage";
import Layout from "./Hooks/Layout";

function AppRouter() {
  return (
    <div>
      <ScrollToTop />
 
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/acerca" element={<Layout><Acerca /></Layout>} />
        <Route path="/autoridadesActuales" element={<Layout><AutoridadesActuales /></Layout>} />
        <Route path="/autoridadesAnteriores" element={<Layout><AutoridadesAnteriores /></Layout>} />
        <Route path="/visitas" element={<Layout><Visitas /></Layout>} />
        <Route path="/visita/:id" element={<Layout><VisitaDetalle /></Layout>} />
        <Route path="/edificio" element={<Layout><Edificio /></Layout>} />
        <Route path="/concejales" element={<Layout><Concejales /></Layout>} />
        <Route path="/comisiones" element={<Layout><Comisiones /></Layout>} />
        <Route path="/pj" element={<Layout><BloquePj /></Layout>} />
        <Route path="/actividades" element={<Layout><ActividadesBloquePj /></Layout>} />
        <Route path="/actividad/:id" element={<Layout><ActividadesBloquePjDetalle /></Layout>} />
        <Route path="/ucr" element={<Layout><BloqueUcr /></Layout>} />
        <Route path="/nuevoPais" element={<Layout><BloqueNuevoPais /></Layout>} />
        <Route path="/5DeMarzo" element={<Layout><Bloque5DeMarzo /></Layout>} />
        <Route path="/pro" element={<Layout><BloquePro /></Layout>} />
        <Route path="/ordenanzas" element={<Layout><Ordenanzas /></Layout>} />
        <Route path="/ultimasOrdenazas" element={<Layout><UltimasOrdenanzas /></Layout>} />
        <Route path="/sesionesOrdinarias" element={<Layout><SesionesOrdinarias /></Layout>} />
        <Route path="/sesionesEnVivo" element={<Layout><SesionesVivo /></Layout>} />
        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
   
    </div>
  );
}

export default AppRouter;
