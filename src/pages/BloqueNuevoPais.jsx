import React from "react";
import "./concejales.css";

function BloqueNuevoPais() {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title edificio">
            <h2>Bloque Nuevo Pais</h2>
            <p>Concejal electo perteneciente al bloque Nuevo País .</p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto3.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Patricio Guillermo Evans</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BloqueNuevoPais;
