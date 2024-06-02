import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./footer.css";

function Footer() {
  const backtotopRef = useRef(null); // Crea una referencia al botón

  useEffect(() => {
    const backtotop = backtotopRef.current; // Obtén la referencia del botón

    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };

    window.addEventListener("load", toggleBacktotop);
    document.addEventListener("scroll", toggleBacktotop); // Corrección: usa 'scroll' en document

    // Limpieza del efecto:
    return () => {
      window.removeEventListener("load", toggleBacktotop);
      document.removeEventListener("scroll", toggleBacktotop);
    };
  }, []); // Ejecuta el efecto solo una vez al renderizar

  const navigate = useNavigate(); // Hook para navegar a diferentes rutas

  const handleClick = () => {
    // Desplaza la vista al principio de la página
    window.scrollTo(0, 0);
    // Navega a la ruta raíz
    navigate("/");
  };

  return (
    <>
      <div>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-contact ">
                  <div className="footer-container">
                    <NavLink to="/" className="logo">
                      <img
                        src="/assets/img/logo/COAFormosaMunicipalidad monocromatico.png"
                        alt="Logo"
                        className="img-logo img-fluid"
                        onClick={handleClick}
                      />
                    </NavLink>
                    <NavLink to="/" className="logo" onClick={handleClick}>
                      <h3>HCD</h3>
                    </NavLink>
                  </div>

                  <p>
                    San Martín 500 <br />
                    Ciudad de Formosa, Formosa
                    <br />
                    Argentina <br />
                    <br />
                    {/* <strong>Phone:</strong> +1 5589 55488 55<br /> */}
                    <strong>Email:</strong> <br />
                    honorableconcejodeliberantefsa@gmail.com
                    <br />
                  </p>
                  <div className="social-links text-md-right pt-3 pt-md-0 social-facebook">
                    <div>
                      <a
                        href="https://www.facebook.com/profile.php?id=61560073619264"
                        className="facebook"
                        target="blank"
                      >
                        <i className="bx bxl-facebook" />
                      </a>
                      <span>Facebook</span>
                    </div>

                    <div className="social-links text-md-right pt-3 pt-md-0 social-instagram">
                      <a
                        href="https://www.instagram.com/formosahcd/"
                        className="instagram"
                        target="blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                      <span>Instagram</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 footer-links columna-footer">
                  <h4>Links Útiles</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink
                        to="/"
                        className="nav-link scrollto"
                        onClick={handleClick}
                      >
                        Inicio
                      </NavLink>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/acerca" className="nav-link scrollto">
                        Acerca
                      </NavLink>
                    </li>

                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a
                        href="https://www.formosatuciudad.gob.ar/"
                        target="blank"
                        className="nav-link scrollto"
                      >
                        Municipalidad
                      </a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a
                        href="https://www.formosa.gob.ar/"
                        target="blank"
                        className="nav-link scrollto"
                      >
                        Gobierno de Formosa
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-links columna-footer">
                  <h4>Consultas</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/ordenanzas/ordenanzas" className="nav-link scrollto">
                        Ordenanzas
                      </NavLink>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/concejales/concejales" className="nav-link scrollto">
                        Concejales
                      </NavLink>
                    </li>

                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="/contacto" className="nav-link scrollto">
                        Contacto
                      </NavLink>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <NavLink to="#" className="nav-link scrollto">
                        Política de Privacidad
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-t  d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start d-flexcontainer-powered ">
        
              <div className="logo-container ms-2">
                <div className="">Powered by</div>

                <img
                  src="assets/img/logoConcept/NEW Logo Concept 03.png"
                  alt="imagen logo concept"
                />
                <div className="credits-2">Soluciones Tecnológicas</div>
              </div>
            </div>
          </div>
        </footer>
        {/* End Footer */}
        <a href="#" className="back-to-top" ref={backtotopRef}>
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
}

export default Footer;
