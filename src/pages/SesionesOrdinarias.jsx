import React from "react";
import PdfList from "../Hooks/PdfList";
import "./sesionesOrdinarias.css"




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
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA
                06-03-24 A LAS 19:00 Hs.{" "}
                <div className="d-flex">
                  <PdfList  fileName="1° Sesion Ordinaria 06.03.24.pdf" />
                  <PdfList  fileName="1°Sesion.webp" />
                  <PdfList  fileName="1°Sesion_2.webp" />
                  <PdfList  fileName="1°Sesion_3.webp" />

                </div>
              </li>

              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA
                13-03-24 A LAS 19:00 Hs.
                <PdfList fileName="2° Sesion Ordinaria 11.03.24.pdf" />
              </li>
              <li>
                <i className="ri-circle-fill" />
                SUMARIO DE ASUNTOS ENTRADOS PARA LA “SESIÓN ORDINARIA” DEL DÍA
                20-03-24 A LAS 19:00 Hs.
                <div className="d-flex">
                <PdfList  fileName="3° Sesion ORdinaria 18.03.24.pdf" />
                <PdfList  fileName="3° Sesion_1.webp" />
                <PdfList  fileName="3° Sesion_2.webp" />
                <PdfList  fileName="3° Sesion_3.webp" />
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
