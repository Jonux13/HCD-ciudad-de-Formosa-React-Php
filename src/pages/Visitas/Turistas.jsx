import React from "react";
import { NavLink } from "react-router-dom";

const Turistas = () => {
  return (
    <section
      id="service-details"
      className="service-details section section-visitas"
    >
      <NavLink to="/institucional/visitas/" className="read-more link-volver">
        <div data-aos="fade-up">
          <span className="read-more">
            <i className="fas fa-reply icon-with-margin" />
            Volver
          </span>
        </div>
      </NavLink>
      <div className="container-all" data-aos="fade-up">
        <div className="container-title-visita text-center">
          <h4> Visita de turistas de Comodoro Rivadavia </h4>
          <span>17/07/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/turistas comodoro rivadavia/451693983_122119062884335787_7698212394212258536_n_2_11zon.jpg"
          alt
          className="img-fluid services-img"
        />

        <div className="title-paragrafh">
          <h3>Visita de turistas de Comodoro Rivadavia.</h3>
          <p>
          Esta mañana, las turistas Estela de Córdoba y Catalina de Comodoro Rivadavia, acompañadas por el operador local Fernando Gaona, realizaron el tradicional City Tour por la ciudad de Formosa. Durante su recorrido, visitaron el nuevo edificio del Honorable Concejo Deliberante de Formosa y tuvieron una grata sorpresa: el Presidente del cuerpo, Concejal Dario Di Martino, interrumpió una reunión para saludarlas y permitirles acceder a la Sala de Sesiones, brindándoles la oportunidad de conocer de cerca el moderno edificio del HCD.
          Las turistas expresaron su alegría por vivir esta experiencia en nuestra ciudad.
          </p>
        </div>

        <img
          src="/assets/img/visitas/turistas comodoro rivadavia/451382349_122119060454335787_14247777087326127_n_1_11zon.jpg"
          alt
          className="img-fluid services-img"
        />
           <img
          src="/assets/img/visitas/turistas comodoro rivadavia/451746258_122119062848335787_399652946044847786_n_3_11zon.jpg"
          alt
          className="img-fluid services-img"
        />
           <img
          src="/assets/img/visitas/turistas comodoro rivadavia/451819681_122119060442335787_1502906046433252005_n_4_11zon.jpg"
          alt
          className="img-fluid services-img"
        />
           <img
          src="/assets/img/visitas/turistas comodoro rivadavia/451969432_122119060184335787_6570600887242538296_n_5_11zon.jpg"
          alt
          className="img-fluid services-img"
        />
      </div>

      <NavLink to="/institucional/visitas" className="read-more">
        <span className="read-more link-size">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </NavLink>
    </section>
  );
};

export default Turistas;
