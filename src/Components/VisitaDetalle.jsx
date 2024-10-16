import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import "../Components/visitasDetalle.css";

// URL base para las imágenes alojadas en el servidor Apache
const SERVER_URL = "https://concejoformosa.org/storage/visitas";
const API_URL = "https://concejoformosa.org/visitas.php";

// Componente VisitaDetalle
function VisitaDetalle() {
  const { id } = useParams(); // Obtiene el id de la URL
  const [visita, setVisita] = useState(null); // Estado para almacenar los detalles de la visita
  const [loading, setLoading] = useState(true); // Estado para controlar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  // Efecto para hacer fetch a la API
  useEffect(() => {
    // Realiza la solicitud a la API
    const fetchVisita = async () => {
      try {
        const response = await fetch(`${API_URL}?id=${id}`); // Llamada a la API con el id de la visita
        if (!response.ok) {
          throw new Error("Error al obtener los detalles de la visita");
        }
        const data = await response.json(); // Parseamos la respuesta a JSON
        setVisita(data); // Guardamos los detalles en el estado
        setLoading(false); // Desactivamos el loading
      } catch (error) {
        setError(error.message); // Manejo de errores
        setLoading(false); // Desactivamos el loading
      }
    };

    fetchVisita(); // Llama a la función fetch
  }, [id]); // Se ejecuta cuando cambia el id

  // Manejo de estado de carga y errores
  if (loading) {
    return <Skeleton variant="rectangular" sx={{ borderRadius: 1, width: "100%", height: 400 }} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!visita) {
    return <div>No se encontraron detalles de la visita.</div>;
  }

  return (
    <section id="service-details" className="service-details section section-visitas">
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
        {visita.image ? (
          <img
            src={`${SERVER_URL}/${visita.image}`}  // Construye la URL completa para la imagen principal
            alt={visita.title}
            className="img-fluid services-img"
            loading="lazy"
          />
        ) : (
          <Skeleton variant="rectangular" sx={{ borderRadius: 1, width: "100%", height: 400 }} />
        )}

        <div className="title-paragrafh">
          <h3>{visita.titles}</h3>
          <p>{visita.description}</p>
        </div>

        {/* Renderizado de imágenes adicionales */}
        <div className="additional-images">
          {Array.isArray(visita.images) && visita.images.length > 0 ? (
            visita.images.map((imagen, index) => (
              <img
                key={index}
                src={`${SERVER_URL}/${imagen}`}  // Construye la URL completa para cada imagen adicional
                alt={`Imagen ${index + 1} de ${visita.title}`}
                className="img-fluid services-img"
                loading="lazy"
              />
            ))
          ) : (
            <p>No hay imágenes adicionales disponibles.</p>
          )}
        </div>
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

export default VisitaDetalle;
