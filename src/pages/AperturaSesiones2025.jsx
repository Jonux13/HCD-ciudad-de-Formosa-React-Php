import React from 'react'
import { NavLink } from "react-router-dom";


const AperturaSesiones2025 = () => {
  return (
    <section
    id="service-details"
    className="service-details section section-visitas"
  >
    <NavLink to="/" className="read-more link-volver">
      <div data-aos="fade-up">
        <span className="read-more">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </div>
    </NavLink>
    <div className="container-all" data-aos="fade-up">
      <div className="container-title-visita text-center">
        <h4>Apertura de Sesiones Ordinarias del Año 2025</h4>
        <span>05/3/25</span>
      </div>
    </div>

    <div
      className="col-lg-8 ps-lg-5 text-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
       <img
        src="/assets/img/aper-sesiones-ordinarias/aperr-ses-ord-1.webp"
        alt
        className="img-fluid services-img"
      />
      <img
        src="/assets/img/aper-sesiones-ordinarias/aperr-ses-ord-2.webp"
        alt
        className="img-fluid services-img"
      />

       <img
        src="/assets/img/aper-sesiones-ordinarias/aperr-ses-ord-3.webp"
        alt
        className="img-fluid services-img"
      />
       <img
        src="/assets/img/aper-sesiones-ordinarias/aperr-ses-ord-4.webp"
        alt
        className="img-fluid services-img"
      />
       <img
        src="/assets/img/aper-sesiones-ordinarias/aperr-ses-ord-5.webp"
        alt
        className="img-fluid services-img"
      />
       <img
        src="/assets/img/aper-sesiones-ordinarias/aperr-ses-ord-6.webp"
        alt
        className="img-fluid services-img"
      />
       <img
        src="/assets/img/aper-sesiones-ordinarias/aperr-ses-ord-7.webp"
        alt
        className="img-fluid services-img"
      />

      
    </div>

    <NavLink to="/" className="read-more">
      <span className="read-more link-size">
        <i className="fas fa-reply icon-with-margin" />
        Volver
      </span>
    </NavLink>
  </section>
  )
}

export default AperturaSesiones2025