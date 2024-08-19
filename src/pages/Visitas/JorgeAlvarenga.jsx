import React from "react";
import { NavLink } from "react-router-dom";

const JorgeAlvarenga = () => {
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
          <h4> Visita de Jorge Octavio Alvarenga</h4>
          <span>28/06/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/Jorge Octavio Alvarenga/450307242_122117232362335787_5862900273079745651_n.jpg"
          alt
          className="img-fluid services-img"
        />

        <div className="title-paragrafh">
          <h3>visita de Jorge Octavio Alvarenga.</h3>
          <p>
            Hoy, el Honorable Concejo Deliberante recibió la visita de Jorge
            Octavio Alvarenga. Con su sencillez y seguridad, cautivó a todos al
            recitar una poesía el pasado 28 de junio en el acto realizado en el
            mástil municipal. Durante su visita, recorrió el edificio y fue
            recibido con emoción por los concejales del bloque justicialista.
            Este encuentro especial fomenta el intercambio cultural y artístico
            en la comunidad, desde las infancias, recordándonos la importancia
            de la poesía y el arte como herramientas de unión y expresión.
            ¡Muchas gracias, Jorge Octavio, por visitarnos y compartir tu
            talento con nosotros!
          </p>
        </div>
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

export default JorgeAlvarenga;
