import React from 'react'
import { NavLink } from "react-router-dom";


const Campeon = () => {
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
        <h4> ¡Exitos Campeón!</h4>
        <span>11/06/24</span>
      </div>
    </div>

    <div
      className="col-lg-8 ps-lg-5 text-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <img
        src="/assets/img/visitas/campeón/AnyConv.com__WhatsApp Image 2024-06-11 at 12.27.47 (1).webp"
        alt
        className="img-fluid services-img"
      />

      <div className="title-paragrafh">
        <h3>Joaquín un joven con muchísimo talento.</h3>
        <p>
        Hoy con mucho entusiasmo y alegría recibí a Joaquín un joven con muchísimo talento que con tan solo 19 años ya es campeón con 4 coronas nos comento sus hazañas como también sus necesidades y se esta preparando para el mundial de han-do que se realizara en la provincia de Buenos Aires.

¡EXITOS CAMPEON!
        </p>
      </div>

      <img
        src="/assets/img/visitas/campeón/AnyConv.com__WhatsApp Image 2024-06-11 at 12.27.47 (2).webp"
        alt
        className="img-fluid services-img text-center"
      />
        <img
        src="/assets/img/visitas/campeón/AnyConv.com__WhatsApp Image 2024-06-11 at 12.27.47.webp"
        alt
        className="img-fluid services-img text-center"
      />
          <img
        src="/assets/img/visitas/campeón/AnyConv.com__WhatsApp Image 2024-06-11 at 12.27.48.webp"
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

export default Campeon