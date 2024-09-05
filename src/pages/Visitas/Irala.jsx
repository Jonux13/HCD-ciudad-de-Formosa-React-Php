import React from "react";
import { NavLink } from "react-router-dom";

const Irala = () => {
  return (
    <section
      id="service-details"
      className="service-details section section-visitas"
    >
      <NavLink to="/visitas/" className="read-more link-volver">
        <div data-aos="fade-up">
          <span className="read-more">
            <i className="fas fa-reply icon-with-margin" />
            Volver
          </span>
        </div>
      </NavLink>
      <div className="container-all" data-aos="fade-up">
        <div className="container-title-visita text-center">
          <h4> Visita del Director Jose Luis Irala </h4>
          <span>08/07/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/Irala/450229492_122117240402335787_4504032577374047395_n_11zon.jpg"
          alt
          className="img-fluid services-img"
        />

        <div className="title-paragrafh">
          <h3>Visita del Director Jose Luis Irala.</h3>
          <p>
            Hoy en el transcurso de la mañana, el presidente del HCD Dario Di
            Martino recibió al Director Jose Luis Irala que trajo un hermoso
            reconocimiento de parte del coro "Kanta Conmigo".
          </p>
        </div>

        <img
          src="/assets/img/visitas/Irala/450198150_122117240630335787_1272931567246374000_n_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
      </div>

      <NavLink to="/visitas" className="read-more">
        <span className="read-more link-size">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </NavLink>
    </section>
  );
};

export default Irala;
