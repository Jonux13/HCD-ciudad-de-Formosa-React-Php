import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import ContadorVistas from "./ContadorVistas";


function Header() {
  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay={100}
          >
           
              <div className="col-xl-7 col-lg-9 text-left custom-margin">
                <h1>
                  <span>Honorable</span>
                  <span>Concejo</span>
                  <span>Deliberante</span>
                </h1>
                <h2>Ciudad de Formosa</h2>
              </div>
          

            <ContadorVistas />

            <div className="row icon-boxes">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 caja-container"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-university" />
                  </div>
                  <h4 className="title">
                    <a href="#">Institucional</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink
                      to="autoridadesActuales"
                      className="nav-link scrollto"
                    >
                      Autoridades Actuales
                    </NavLink>

                    <NavLink
                      to="autoridadesAnteriores"
                      className="nav-link scrollto"
                    >
                      Autoridades Anteriores
                    </NavLink>

                    {/* <NavLink
                      to="/institucional/edificio"
                      className="nav-link scrollto"
                    >
                      Edificio
                    </NavLink> */}

                 
                  <NavLink
                    to="visitas"
                    className="nav-link scrollto"
                 
                  >
                    Visitas al HCD
                  </NavLink>
             
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 caja-container icon"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-feather-alt" />
                  </div>
                  <h4 className="title">
                    <a href="#">Legislativo</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink
                      to="sesionesOrdinarias"
                      className="nav-link scrollto"
                    >
                      Sesiones Ordinarias
                    </NavLink>

                    <li>
                    <NavLink
                    to="/sesionesEnVivo"
                    className="nav-link scrollto"
                 
                  >
                    Sesiones en vivo
                  </NavLink>
                    </li>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 caja-container"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-users" />
                  </div>
                  <h4 className="title">
                    <a href="#">Concejales</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink
                      to="/concejales"
                      className="nav-link scrollto"
                    >
                      Concejales
                    </NavLink>
                    <NavLink
                      to="/comisiones"
                      className="nav-link scrollto"
                    >
                      Comisiones
                    </NavLink>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 caja-container"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="fas fa-file-alt" />
                  </div>
                  <h4 className="title">
                    <a href="#">Ordenanzas</a>
                  </h4>
                  <div className="description decription-box">
                    <NavLink
                      to="/ordenanzas"
                      className="nav-link scrollto"
                    >
                      Ordenanzas
                    </NavLink>
                    <NavLink
                      to="/ultimasOrdenazas"
                      className="nav-link scrollto"
                    >
                      Últimas Ordenanzas
                    </NavLink>
                    {/* <NavLink
                      to="/ordenanzas/resoluciones"
                      className="nav-link scrollto"
                    >
                      Resoluciones
                    </NavLink> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
      </div>
    </>
  );
}

export default Header;
