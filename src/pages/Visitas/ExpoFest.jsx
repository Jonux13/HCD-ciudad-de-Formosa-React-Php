import React from "react";
import { NavLink } from "react-router-dom";

const ExpoFest = () => {
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
          <h4> Expo Fest </h4>
          <span>17/08/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.18 (2)_7_11zon.webp"
          alt
          className="img-fluid services-img"
        />

        <div className="title-paragrafh">
          <h3>Expo Fest.</h3>
          <p>
            Hoy estuvimos compartiendo junto al presidente del HCD Dario Di
            Martino , concejales de la ciudad , vecinos y también estudiantes de
            distintos colegios, en una tarde de feria , música y baile. También
            tuvimos la presencia de la banda de música del Regimiento Monte 29 y
            el Coro "Kanta conmigo"
          </p>
        </div>

        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.17_1_11zon.webp"
          alt
          className="img-fluid services-img"
        />
        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.17 (1)_2_11zon.webp"
          alt
          className="img-fluid services-img"
        />
        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.17 (2)_3_11zon.webp"
          alt
          className="img-fluid services-img"
        />
        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.17 (3)_4_11zon.webp"
          alt
          className="img-fluid services-img"
        />

        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.18_5_11zon.webp"
          alt
          className="img-fluid services-img"
        />
        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.18 (1)_6_11zon.webp"
          alt
          className="img-fluid services-img"
        />
        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.18 (2)_7_11zon.webp"
          alt
          className="img-fluid services-img"
        />
        <img
          src="/assets/img/visitas/expoFest/AnyConv.com__WhatsApp Image 2024-08-21 at 09.47.18 (3)_8_11zon.webp"
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

export default ExpoFest;
