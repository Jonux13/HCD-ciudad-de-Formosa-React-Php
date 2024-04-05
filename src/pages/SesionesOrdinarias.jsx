import React from "react";
import PdfList from "../Hooks/PdfList";
import "./sesionesOrdinarias.css";

function SesionesOrdinarias() {
  return (
    <section id="about" className="about about_section">
      <div className="container" data-aos="fade-up">
        <div className="section-title acerca">
          <h2>Sesiones Ordinarias</h2>
          <p>Honorable Concejo Deliberante de la Ciudad de Formosa</p>
        </div>
        <div className="row content">
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul className="custom-list">
              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA{" "}
                <span>06-03-24</span> A LAS 19:00 Hs.{" "}
                <div className="d-flex container-list">
                  <PdfList fileName="1° Sesion Ordinaria 06.03.24.pdf" />
                  <PdfList fileName="1°Sesion.webp" />
                  <PdfList fileName="1°Sesion_2.webp" />
                  <PdfList fileName="1°Sesion_3.webp" />
                </div>
              </li>

              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA{" "}
                <span>13-03-24</span> A LAS 19:00 Hs.
                <div className="d-flex container-list">
                  <PdfList fileName="2° Sesion Ordinaria 11.03.24.pdf" />
                </div>
              </li>
              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA{" "}
                <span>20-03-24</span> A LAS 19:00 Hs.
                <div className="d-flex container-list">
                  <PdfList fileName="3° Sesion ORdinaria 18.03.24.pdf" />
                  <PdfList fileName="3° Sesion_1.webp" />
                  <PdfList fileName="3° Sesion_2.webp" />
                  <PdfList fileName="3° Sesion_3.webp" />
                </div>
              </li>
              <li>
                <i className="ri-circle-fill" />
                SUMARIO Y EFEMERIDES DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA{" "}
                <span>27-03-24</span> A LAS 19:00 Hs.
                <div className="d-flex container-list">
                  <PdfList fileName="2024-03-29 1.pdf" />
                  <PdfList fileName="2024-03-29 2.pdf" />
                  <PdfList fileName="2024-03-29 3.pdf" />
                  <PdfList fileName="2024-03-29 at 19.38.02 (2).pdf" />
                  <PdfList fileName="3° Sesion_3.webp" />
                  <PdfList fileName="1°Sesion_2.webp" />
                  <PdfList fileName="2024-03-29 at 19.38.02 (3).webp" />
                  <PdfList fileName="2024-03-29 at 19.38.02 (4).webp" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SesionesOrdinarias;
