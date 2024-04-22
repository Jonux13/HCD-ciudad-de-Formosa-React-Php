import React from "react";
import "./concejales.css";

function BloquePro() {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title edificio">
            <h2>Bloque Pro</h2>
            <p>Concejal electo perteneciente al bloque Pro.</p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto2.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Cecilia Macarena Romero Depretto</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BloquePro;
