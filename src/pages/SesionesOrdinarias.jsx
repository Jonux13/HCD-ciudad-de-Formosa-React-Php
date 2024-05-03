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
        <div className="row content sesiones-ordinarias">
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
                SUMARIO Y EFEMERIDES DE ASUNTOS ENTRADOS PARA LA “SESIÓN
                ORDINARIA” DEL DÍA <span>27-03-24</span> A LAS 19:00 Hs.
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

              <li>
                <i className="ri-circle-fill" />
                SUMARIO Y EFEMERIDES DE ASUNTOS ENTRADOS PARA LA “SESIÓN
                ORDINARIA” DEL DÍA <span>10-04-24</span> A LAS 19:00 Hs.
                <div className="d-flex container-list">
                  <PdfList fileName="5° Sesion Ordinaria 09.04.24.pdf" />
                  <PdfList fileName="Image 2024-04-11 at 18.12.12.webp" />
                  <PdfList fileName="Image 2024-04-11 at 18.12.13.webp" />
                  <PdfList fileName="Image 2024-04-11 at 18.14.44.webp" />
                </div>
              </li>

              <li>
                <i className="ri-circle-fill" />
                SUMARIO Y EFEMERIDES DE ASUNTOS ENTRADOS PARA LA “SESIÓN
                ORDINARIA” DEL DÍA <span>17-04-24</span> A LAS 19:00 Hs.
                <div className="d-flex container-list">
                  <PdfList fileName="6° Sesion Ordinaria 16.04.24.pdf" />
                  <PdfList fileName="AnyConv.com__15bac5e1-ed73-4b23-92c6-64358a5a7b3e.webp" />
                  <PdfList fileName="AnyConv.com__1daf78f5-b5f8-4881-815e-afc367a43a59.webp" />
                  <PdfList fileName="AnyConv.com__3135fb0a-d759-4ff4-8310-aac44c521bf1.webp" />
                  <PdfList fileName="AnyConv.com__88a40ed3-a116-42a8-bee5-c9479873123f.webp" />
                  <PdfList fileName="AnyConv.com__8f54e29a-b4ed-4403-8425-641b0d686030.webp" />
                </div>
              </li>

              <li>
                <i className="ri-circle-fill" />
                SUMARIO Y EFEMERIDES DE ASUNTOS ENTRADOS PARA LA “SESIÓN
                ORDINARIA” DEL DÍA <span>24-04-24</span> A LAS 19:00 Hs.
                <div className="d-flex container-list">
                  <PdfList fileName="7°° Sesion Ordinaria 23.04.24.pdf" />
                  <PdfList fileName="AnyConv.com__00091520-97dc-4284-9d54-7ebb59cb768f.webp" />
                  <PdfList fileName="AnyConv.com__1cb2ad03-6938-4d3e-8f1c-150cb997ab1c.webp" />
                  <PdfList fileName="AnyConv.com__6710fe06-5e3d-48a3-947e-25802494e9ae.webp" />
                  <PdfList fileName="AnyConv.com__81f663c6-5c29-4a50-974b-2b2f2d294967.webp" />
                  <PdfList fileName="AnyConv.com__d4d6861a-3d57-41d3-b7ae-8b5c41e4f5ab.webp" />
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
