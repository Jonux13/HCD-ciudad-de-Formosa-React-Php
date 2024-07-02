import React from 'react'
import { NavLink } from "react-router-dom";


function VeinteDeJunio() {
  return (
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
        <h4> 20 de Junio Día de la Bandera</h4>
        <span>20/06/24</span>
      </div>
    </div>

    <div
      className="col-lg-8 ps-lg-5 text-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <img
        src="/assets/img/visitas/20 de junio/AnyConv.com__448827349_122112906050335787_7371799334959944045_n_1_11zon.webp"
        alt
        className="img-fluid services-img"
      />

      <div className="title-paragrafh">
        <h3>Conmemoramos el día de la bandera.</h3>
        <p>
        Hoy en conmemoración al Gral. Manuel Belgrano quien nos ha brindado la identidad como patria, celebramos el día de nuestra bandera en el predio cultural del edificio del Concejo Deliberante, donde junto al Presidente Dario Di Martino, tuvimos una hermosa tarde con un gran espectáculo del coro "CANTEMOS A LA PATRIA" dirigido por el Prof.Jose Irala y varios artistas invitados, tambien feriantes y emprendedores expusieron al público sus producciones.
        </p>
      </div>

      <img
        src="/assets/img/visitas/20 de junio/AnyConv.com__448509741_122112907796335787_220108363116715027_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
        <img
        src="/assets/img/visitas/20 de junio/AnyConv.com__448629927_122112907934335787_30841870218714361_n_5_11zon.webp"
        alt
        className="img-fluid services-img text-center"
      />
          <img
        src="/assets/img/visitas/20 de junio/AnyConv.com__448698712_122112906302335787_6508513616107400430_n_4_11zon.webp"
        alt
        className="img-fluid services-img text-center"
      />

<img
        src="/assets/img/visitas/20 de junio/AnyConv.com__448777644_122112907970335787_6693994191262364496_n_3_11zon.webp"
        alt
        className="img-fluid services-img text-center"
      />

<img
        src="/assets/img/visitas/20 de junio/AnyConv.com__448780959_122112907832335787_2687736910806103632_n_2_11zon.webp"
        alt
        className="img-fluid services-img text-center"
      />

<img
        src="/assets/img/visitas/20 de junio/AnyConv.com__448816507_122112906212335787_3400030809575583186_n .webp"
        alt
        className="img-fluid services-img text-center"
      />
    </div>

    <NavLink to="/institucional/visitas" className="read-more">
      <span className="read-more link-size">
        <i className="fas fa-reply icon-with-margin" />
        Volver
      </span>
    </NavLink>
  </section>
  )
}

export default VeinteDeJunio