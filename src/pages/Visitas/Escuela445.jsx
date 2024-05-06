import React from 'react'
import { NavLink } from "react-router-dom";
import "../../pages/Visitas/consul.css";

const Escuela445 = () => {
  return (
    <section id="service-details" className="service-details section section-visitas">
    <NavLink to="/institucional/visitas" className="read-more link-volver">
          <span className="read-more">
            <i className="fas fa-reply icon-with-margin" />
            Volver
          </span>
        </NavLink>
      <div className="container-all" data-aos="fade-up">
 
        <div className="container-title-visita text-center">
          <h4>Directivos de la Escuela N°445</h4>
          <span>10/04/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/Escuela N°445/AnyConv.com__WhatsApp Image 2024-05-03 at 11.19.43.webp"
          alt
          className="img-fluid services-img"
        />

        <div className="title-paragrafh">
          <h3>
          Visita de Directivos de la Escuela N°445.
          </h3>
          <p>
          Hoy con gran emoción recibí al Sr. Director Williams Iván Karpiel y a su colega en representación de la Escuela N°445 "Dr.Esteban L. Maradona" del Barrio Liborsi del cuál el Honorable Concejo Deliberante de Formosa es Padrino. Agradezco la visita y aprovecho para extender mis saludos a todos, personal Docente, Alumnos , Padres y comunidad. Gracias.
          </p>
        </div>

        <img
          src="/assets/img/visitas/Escuela N°445/AnyConv.com__WhatsApp Image 2024-05-03 at 11.19.43 (1).webp"
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

export default Escuela445