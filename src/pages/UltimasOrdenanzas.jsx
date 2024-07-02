import React from 'react'
import PdfList from "../Hooks/PdfList";
import "./sesionesOrdinarias.css";

function UltimasOrdenanzas() {
  return (
    <section id="about" className="about about_section">
    <div className="container" data-aos="fade-up">
      <div className="section-title acerca">
        <h2>Últimas Ordenanzas</h2>
        <p>Honorable Concejo Deliberante de la Ciudad de Formosa</p>
      </div>
      <div className="row content sesiones-ordinarias">
        <div className="col-lg-6 pt-4 pt-lg-0">
          <ul className="custom-list">
            <li>
              <i className="ri-circle-fill" />
            N° 8030 - VISTO BUENO JUAN DE LOS SANTOS Y EGIDIO. 
              <div className="d-flex container-list">
                <PdfList fileName="8030 VISTO BUENO JUAN DE LOS SANTOS Y EGIDIO 24.06.24.pdf" />
              </div>
            </li>

            <li>
              <i className="ri-circle-fill" />
            N° 8031 - DECLARACION DE INTERES GRITO ARGENTINO.  
              <div className="d-flex container-list">
                <PdfList fileName="8031 DECLARACION DE INTERES GRITO ARGENTINO 24.06.24.pdf" />
              </div>
            </li>

            <li>
              <i className="ri-circle-fill" />
            N° 8032 -  VISTO BUENO ANGELA BRUNELLI. 
              <div className="d-flex container-list">
                <PdfList fileName="8032 VISTO BUENO ANGELA BRUNELLI 24.06.24.pdf" />
              </div>
            </li>

            <li>
              <i className="ri-circle-fill" />
            N° 8033 -  COND Y EXENCION MARIELA PANIAGUA.
              <div className="d-flex container-list">
                <PdfList fileName="8033 COND Y EXENCION MARIELA PANIAGUA 24.06.24.pdf" />
              </div>
            </li>

            <li>
              <i className="ri-circle-fill" />
            N° 8034 -  VISTO BUENO SAPORITI Y OTRA.
              <div className="d-flex container-list">
                <PdfList fileName="8034 VISTO BUENO SAPÓRITI Y OTRA 27.06.24.pdf" />
              </div>
            </li>

            <li>
              <i className="ri-circle-fill" />
            N° 8035 - RATIFICACIÓN RESCISION UNILATERAL-DACION DE PAGO. 
              <div className="d-flex container-list">
                <PdfList fileName="8035 RATIFICACION RESCISION UNILATERAL-DACION DE PAGO 27.06.24.pdf" />
              </div>
            </li>

            <li>
              <i className="ri-circle-fill" />
            N° 8036 - RATIFICACIÓN CONTRATO SUSCRIPTO TTE URBANO DE PASAJEROS. 
              <div className="d-flex container-list">
                <PdfList fileName="8036 RATIFI CONTRATO SUSCRIPTO TTE URBANO DE PASAJEROS 27.06.24.pdf" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default UltimasOrdenanzas