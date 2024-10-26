import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [dropdownInstitucionalOpen, setDropdownInstitucionalOpen] =
    useState(false);
  const [dropdownConcejalesOpen, setDropdownConcejalesOpen] = useState(false);
  const [dropdownBloqueConcejalesOpen, setDropdownBloqueConcejalesOpen] =
    useState(false);
  const [dropdownOrdenanzasOpen, setDropdownOrdenanzasOpen] = useState(false);
  const [dropdownLegislativoOpen, setDropdownLegislativoOpen] = useState(false);

  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    // console.log("Toggling mobile nav");

    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    // console.log("Closing mobile nav");
    setIsMobileNavOpen(false);
  };

  const toggleDropdownInstitucional = () => {
    // console.log("Toggle dropdown Institucional");

    setDropdownInstitucionalOpen(!dropdownInstitucionalOpen);
  };

  const toggleDropdownConcejales = (e) => {
    // console.log("Toggle dropdown Concejales");
    e.preventDefault();
    setDropdownConcejalesOpen(!dropdownConcejalesOpen);
  };

  const toggleDropdownBloqueConcejales = (e) => {
    // console.log("BloqueConcejales");
    e.preventDefault();
    setDropdownBloqueConcejalesOpen(!dropdownBloqueConcejalesOpen);
  };

  const toggleDropdownOrdenanzas = () => {
    setDropdownOrdenanzasOpen(!dropdownOrdenanzasOpen);
  };

  const toggleDropdownLegislativo = () => {
    setDropdownLegislativoOpen(!dropdownLegislativoOpen);
  };

  const handleClickInicio = () => {
    // console.log("Se hizo clic en el enlace de inicio");
  };

  return (
    <header
      id="header"
      className={`fixed-top ${hasShadow ? "navbar-shadow" : ""}`}
    >
      {" "}
      <div className="container d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo">
          <img
            src="/assets/img/logo/COAFormosaMunicipalidad_monocromatico.webp"
            alt="Logo"
            className="img-fluid"
          />
        </NavLink>
        <h1 className="logo-hcd">
          <NavLink to="/">HCD</NavLink>
        </h1>
        <nav
          id="navbar"
          className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className="nav-link scrollto"
                onClick={(e) => {
                  handleClickInicio();
                  closeMobileNav();
                }}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/acerca"
                className="nav-link scrollto"
                onClick={closeMobileNav}
              >
                Acerca
              </NavLink>
            </li>

            <li
              className={`dropdown ${
                dropdownInstitucionalOpen ? "active" : ""
              }`}
            >
              <a
                href="#"
                className="nav-link scrollto"
                onClick={(e) => {
                  toggleDropdownInstitucional(e);
                }}
              >
                Institucional <i className="bi bi-chevron-down" />
              </a>

              <ul
                className={`${
                  dropdownInstitucionalOpen ? "dropdown-active" : ""
                }`}
              >
                <li>
                  <NavLink
                    to="/autoridadesActuales"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Autoridades Actuales
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/autoridadesAnteriores"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Autoridades Anteriores
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/visitas"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Visitas al HCD
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/edificio"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Edificio
                  </NavLink>
                </li>
              </ul>
            </li>

            <li
              className={`dropdown ${dropdownConcejalesOpen ? "active" : ""}`}
            >
              <a
                href="#"
                className="nav-link scrollto"
                onClick={toggleDropdownConcejales}
              >
                Concejales <i className="bi bi-chevron-down" />
              </a>
              <ul
                className={`dropdown ${
                  dropdownConcejalesOpen ? "dropdown-active" : ""
                }`}
              >
                <li>
                  <NavLink
                    to="/concejales"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Concejales
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/comisiones"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Comisiones
                  </NavLink>
                </li>
                <li
                  className={`dropdown ${
                    dropdownBloqueConcejalesOpen ? "active" : ""
                  }`}
                >
                  <a
                    href="#"
                    className="nav-link scrollto"
                    onClick={toggleDropdownBloqueConcejales}
                  >
                    Bloque de Concejales <i className="bi bi-chevron-right" />
                  </a>
                  <ul
                    className={`dropdown ${
                      dropdownConcejalesOpen && dropdownBloqueConcejalesOpen
                        ? "dropdown-active"
                        : ""
                    }`}
                  >
                      <a
                    href="#"
                    className="nav-link scrollto"
                    onClick={toggleDropdownBloqueConcejales}
                  >
                    Bloque PJ <i className="bi bi-chevron-right" />
                  </a>
                  <ul
                    className={`dropdown ${
                      dropdownConcejalesOpen && dropdownBloqueConcejalesOpen
                        ? "dropdown-active"
                        : ""
                    }`}
                  >
                      <li>
                      <NavLink
                        to="/pj"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque PJ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/actividades"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Actividades
                      </NavLink>
                    </li>
                  </ul>
                  
                    <li>
                      <NavLink
                        to="/ucr"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque UCR
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/nuevoPais"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque NUEVO PAÍS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/5DeMarzo"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque 5 de MARZO
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pro"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque PRO
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* <li>
              <NavLink
                to="/ordenanzas/ordenanzas"
                className="nav-link scrollto"
                onClick={closeMobileNav}
              >
                Ordenanzas
              </NavLink>
            </li> */}
            <li
              className={`dropdown ${dropdownOrdenanzasOpen ? "active" : ""}`}
            >
              <a
                href="#"
                className="nav-link scrollto"
                onClick={toggleDropdownOrdenanzas}
              >
                Ordenanzas <i className="bi bi-chevron-down" />
              </a>
              <ul
                className={`${dropdownOrdenanzasOpen ? "dropdown-active" : ""}`}
              >
                <li>
                  <NavLink
                    to="/ordenanzas"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Ordenanzas
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/ordenanzas/resoluciones"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Resoluciones
                  </NavLink>
                </li> */}
                      <li>
                  <NavLink
                    to="/ultimasOrdenazas"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Últimas Ordenanzas
                  </NavLink>
                </li>
              </ul>
            </li>

            <li
              className={`dropdown ${dropdownLegislativoOpen ? "active" : ""}`}
            >
              <a
                href="#"
                className="nav-link scrollto"
                onClick={toggleDropdownLegislativo}
              >
                Legislativo <i className="bi bi-chevron-down" />
              </a>
              <ul
                className={`${
                  dropdownLegislativoOpen ? "dropdown-active" : ""
                }`}
              >
                <li>
                  <NavLink
                    to="/sesionesOrdinarias"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Sesiones Ordinarias
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sesionesEnVivo"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Sesiones en vivo
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/contacto"
                className="nav-link scrollto"
                onClick={closeMobileNav}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <i
            className={`bi bi-list mobile-nav-toggle ${
              isMobileNavOpen ? "bi-x" : ""
            }`}
            onClick={toggleMobileNav}
          />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
