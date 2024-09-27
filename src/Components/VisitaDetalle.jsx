import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "../Components/visitasDetalle.css";

function VisitaDetalle() {
  const { id } = useParams(); // Obtiene el id de la URL
  const [visita, setVisita] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Carga los datos desde el archivo JSON
    fetch('/visitasDetalle.json', { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const visitaEncontrada = data.find(v => v.id === parseInt(id)); // Busca la visita por ID
        if (!visitaEncontrada) {
          throw new Error('Visita no encontrada');
        }
        setVisita(visitaEncontrada);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError('No se pudo cargar los detalles de la visita.');
        }
      });

    // Cleanup function to abort fetch if component unmounts
    return () => {
      controller.abort();
    };
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!visita) {
    return <div>Cargando...</div>;
  }

  return (
    <section id="service-details" className="service-details section section-visitas">
      {/* NavLink de navegación "Volver" */}
      <NavLink to="/visitas/" className="read-more link-volver">
        <div data-aos="fade-up">
          <span className="read-more">
            <i className="fas fa-reply icon-with-margin" />
            Volver
          </span>
        </div>
      </NavLink>

      <div className="container-all" data-aos="fade-up">
        <div className="container-title-visita text-center">
          <h4>{visita.title}</h4>
          <span>{visita.date}</span>
        </div>
      </div>

      <div className="col-lg-8 ps-lg-5 text-center" data-aos="fade-up" data-aos-delay={100}>
        {/* Imagen principal */}
        <img src={visita.image} alt={visita.title} className="img-fluid services-img" />

        {/* Descripción */}
        <div className="title-paragrafh">
          <h3>{visita.titles}</h3>
          <p>{visita.description}</p>
        </div>

        {/* Galería de imágenes adicionales */}
        <div>
          {visita.images.map((imagen, index) => (
            <img key={index} src={imagen} alt={`Imagen de ${visita.title}`} className="img-fluid services-img text-center" />
          ))}
        </div>
      </div>

      {/* NavLink para volver al listado de visitas */}
      <NavLink to="/visitas" className="read-more">
        <span className="read-more link-size">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </NavLink>
    </section>
  );
}

export default VisitaDetalle;

