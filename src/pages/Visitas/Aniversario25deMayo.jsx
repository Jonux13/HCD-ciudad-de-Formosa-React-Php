import React from 'react'
import { NavLink } from "react-router-dom";


const Aniversario25deMayo = () => {
  return (
    <section
    id="service-details"
    className="service-details section section-visitas"
  >
    <NavLink to="/visitas" className="read-more link-volver">
      <div data-aos="fade-up">
        <span className="read-more">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </div>
    </NavLink>
    <div className="container-all" data-aos="fade-up">
      <div className="container-title-visita text-center">
        <h4>25 de Mayo</h4>
        <span>25/05/24</span>
      </div>
    </div>

    <div
      className="col-lg-8 ps-lg-5 text-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <img
        src="/assets/img/visitas/25 de mayo/foto-2-2024-05-28.webp"
        alt
        className="img-fluid services-img"
      />

      <div className="title-paragrafh">
        <h3>Festejos por el aniversario 214° de la Revolucion de Mayo.</h3>
        <p>
        Hoy estuvimos en el "espacio cultural" del Honorable Concejo Deliberante junto al presidente Dario Di Martino y concejales estuvimos festejando el aniversario 214° de la Revolucion de Mayo, donde tuvimos el agrado de tener a varios feriantes y artistas de nuestra ciudad, recibiendo a todos con un rico chocolate y disfrutando de una tarde a puro folcklore.
¡VIVA LA PATRIA!
        </p>
      </div>

      <img
        src="/assets/img/visitas/25 de mayo/foto-1-2024-05-28.webp"
        alt
        className="img-fluid services-img text-center"
      />
        <img
        src="/assets/img/visitas/25 de mayo/foto-3-2024-05-28.webp"
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
  )
}

export default Aniversario25deMayo