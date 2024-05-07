import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/Visitas/consul.css";

const AniversarioFormosa = () => {
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
          <h4>145º Aniversario de la Fundación de la Ciudad de Formosa</h4>
          <span>08/04/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/8 de abril/AnyConv.com__WhatsApp Image 2024-05-03 at 11.21.47 (1).webp"
          alt
          className="img-fluid services-img"
        />

        <h3>8 de Abril Aniversario de la Fundación de la Ciudad de Formosa.</h3>
        <p>
          En el marco de los festejos por el 145º Aniversario de la Fundación de
          la Ciudad de Formosa, tuvo lugar en la tarde de este lunes en el
          espacio cultural del nuevo edificio del Concejo Deliberante un paseo
          artístico con la presencia de distintos exponentes formoseños de la
          pintura y la escultura entre otras expresiones. Una actividad abierta
          al público en general, conté con la colaboración de los jóvenes de
          distintos colegios y artesanos locales. Agradecemos a los artistas que
          nos acompañaron : el pintor Clemar Morales, Claudia Belloni, Cielo
          Dimitroff, Alicia Cuello y el escultor Jorge Balassi. También fue
          parte de la gala el maestro José Luis Irala y músicos invitados como
          Diego Naser y su grupo. El fuerte crecimiento de Formosa en estos
          últimos años, se lo debemos a nuestro Gobernador Gildo Insfrán y al
          Ingeniero Jorge Jofré.
        </p>

        <img
          src="/assets/img/visitas/8 de abril/AnyConv.com__WhatsApp Image 2024-05-03 at 11.21.47 (2).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/8 de abril/AnyConv.com__WhatsApp Image 2024-05-03 at 11.21.47 (2).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/8 de abril/AnyConv.com__WhatsApp Image 2024-05-03 at 11.21.48 (1).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/8 de abril/AnyConv.com__WhatsApp Image 2024-05-03 at 11.21.48.webp"
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

export default AniversarioFormosa;
