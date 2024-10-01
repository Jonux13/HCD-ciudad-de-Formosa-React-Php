import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ActividadesBloquePjDetalleData } from "../../data/ActividadesBloquePjDetalleData";
import "../Components/ActividadesBloquePjDetalle.css";

function ActividadesBloquePjDetalle() {
  const { id } = useParams(); // Obtiene el id de la URL
  const visitaEncontrada = ActividadesBloquePjDetalleData.find((v) => v.id === parseInt(id)); // Busca la visita por ID
  const [visita] = useState(visitaEncontrada);



  return (
    <section id="service-details" className="service-details section section-visitas">
      <NavLink to="/actividades/" className="read-more link-volver">
        <div data-aos="fade-up">
          <span className="read-more">
            <i className="fas fa-reply icon-with-margin" />
            Volver
          </span>
        </div>
      </NavLink>

      <div className="container-all" data-aos="fade-up">
        <div className="container-title-visita text-center">
          <h4 className="title">{visita.title}</h4>
          <span>{visita.date}</span>
        </div>
      </div>

      <div className="col-lg-8 ps-lg-5 text-center" data-aos="fade-up" data-aos-delay={100}>
        <img src={visita.image} alt={visita.title} className="img-fluid services-img" loading="lazy" />
        <div className="title-paragrafh">
          <h3>{visita.titles}</h3>
          <p>{visita.description}</p>
        </div>
        <div>
          {visita.images.map((imagen, index) => (
            <img key={index} src={imagen} alt={`Imagen de ${visita.title}`} className="img-fluid services-img text-center" loading="lazy" />
          ))}
        </div>
      </div>

      <NavLink to="/actividades" className="read-more">
        <span className="read-more link-size">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </NavLink>
    </section>
  );
}

export default ActividadesBloquePjDetalle;