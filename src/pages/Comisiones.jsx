import React from "react";
import PdfList from "../Hooks/PdfList";
import "./comisiones.css";

const Comisiones = () => {
  return (
    <section id="about" className="about about_section">
      <div className="container" data-aos="fade-up">
        <div className="section-title acerca">
          <h2>Comisiones</h2>
          <p>Honorable Concejo Deliberante de la Ciudad de Formosa</p>
        </div>
        <div className="row content sesiones-ordinarias">
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul className="custom-list-com">
              <li>
                <i className="ri-circle-fill" />
                INTEGRACIÓN de las Comisiones Permanentes <span>
                  06-03-24
                </span>{" "}
                <div className="d-flex container-list">
                  <PdfList fileName="RESOLUCIÓN Nº 805 INTEGRACION DE LAS COMISIONES 07.03.24.pdf" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comisiones;
