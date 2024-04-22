import React from "react";
import "./concejales.css";
import "./BloquePj.css";

function BloquePj() {
  return (
    <div>
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title edificio">
            <h2>Bloque Pj</h2>
            <p>
              Concejales electos pertenecientes al bloque del Partido
              Justicialista.
            </p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto1.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Ruben Dario Di Martino</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto5.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>José Enrique Delguy</h4>
                  <span>Presidente</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto6.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Marcelo Adrián Sosa</h4>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto7.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Horacio Antonio Pettit</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch center container-concejales"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto8.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Hilda Beatriz Segovia</h4>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto12.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>María Argarañaz</h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch container-concejales"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="member">
                <div className="member-img">
                  <img
                    src="/assets/img/consejales/foto4.webp"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="member-info">
                  <h4>Delia T. del Carmen Galvan</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BloquePj;
