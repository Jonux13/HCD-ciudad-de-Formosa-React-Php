import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/Visitas/consul.css";

function DiaDelAnimal() {
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
          <h4>DÍA DEL ANIMAL</h4>
          <span>29/03/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.58 (1).webp"
          alt
          className="img-fluid services-img"
        />

        <h3>
          Visita de niños del Jardín de Infantes "Mickey Mouse", de la Escuela
          N°3 y del Colegio "Don Bosco".
        </h3>
        <p>
          Hoy con mucha alegría, en el "Honorable Concejo Deliberante",
          recibimos a niños del Jardín de Infantes "Mickey Mouse", de la Escuela
          N°3 y del Colegio "Don Bosco", en el marco del "Día del Animal". Los
          ediles legislativos y empleados de la institución les realizaron un
          recorrido por el edificio explicando la labor que se realiza allí, así
          como también compartieron una mañana llena de juegos, concientizacion
          del cuidado animal e información sobre los derechos de nuestras
          mascotas y animales silvestres. ¡Muchas gracias por su visita!.
        </p>

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.56 (5).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.56 (1).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.56 (2).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.56 (3).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.56 (4).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.56 (6).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.56.webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.57.webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.58 (2).webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.58.webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.59.webp"
          alt
          className="img-fluid services-img"
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
}

export default DiaDelAnimal;
