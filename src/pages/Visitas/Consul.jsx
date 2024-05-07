import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/Visitas/consul.css";

const Consul = () => {
  return (
    <div>
      <section
        id="service-details"
        className="service-details section section-visitas"
      >
        <NavLink to="/institucional/visitas" className="read-more link-volver">
          <div data-aos="fade-up">
            <span className="read-more">
              <i className="fas fa-reply icon-with-margin" />
              Volver
            </span>
          </div>
        </NavLink>
        <div className="container-all" data-aos="fade-up">
          <div className="container-title-visita text-center">
            <h4>Visita de la Cónsul de la República del Paraguay</h4>
            <span>13/03/24</span>
          </div>
        </div>

        <div
          className="col-lg-8 ps-lg-5 text-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <img
            src="/assets/img/visitas/visita consul/AnyConv.com__WhatsApp Image 2024-05-03 at 11.29.06 (1).webp"
            alt
            className="img-fluid services-img"
          />

          <div className="title-paragrafh">
            <h3>
              Visita de la Cónsul de la República del Paraguay, María Noelia
              López Sanguinetti.
            </h3>
            <p>
              El pasado 13 de marzo, la Cónsul de la República del Paraguay,
              María Noelia López Sanguinetti, realizó una visita de cortesía al
              Presidente del Concejo Deliberante de la ciudad de Formosa, Don
              Darío Di Martino, en la sede del legislativo municipal. En la
              ocasión, los Cónsules felicitaron al concejal Di Martino por la
              nueva sede del Concejo Deliberante, inaugurada el pasado 24 de
              febrero. Igualmente, manifestaron la predisposición del Consulado
              de la República del Paraguay de ejercer como articulador en las
              relaciones con las autoridades municipales paraguayas, además de
              trabajar de manera conjunta en eventos culturales, deportivos,
              turísticos, académicos y comerciales. Por su parte, el concejal Di
              Martino agradeció la deferencia y expresó su admiración hacia el
              pujante ritmo de desarrollo y crecimiento de la República del
              Paraguay, señalando como ejemplos recientes las nuevas rutas de
              Pilar - Alberdi y el nuevo puente Héroes del Chaco. Asimismo,
              manifestó con entusiasmo la predisposición el Concejo Deliberante
              para trabajar de manera conjunta en beneficio de ambas partes.
              Acompañaron a la Jefa de Misión, el Cónsul Gustavo Irala; y los
              Cónsules de Primera David Florenciañez Amarilla y Francisco
              Maciel.
            </p>
          </div>

          <img
            src="/assets/img/visitas/visita consul/AnyConv.com__WhatsApp Image 2024-05-03 at 11.29.06 (2).webp"
            alt
            className="img-fluid services-img text-center"
          />

          <img
            src="/assets/img/visitas/visita consul/AnyConv.com__WhatsApp Image 2024-05-03 at 11.29.06.webp"
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
    </div>
  );
};

export default Consul;
