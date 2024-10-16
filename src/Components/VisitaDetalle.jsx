import React, { useState, useEffect, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";

// Componente que muestra los detalles de la visita
function VisitaDetalle() {
  const { id } = useParams(); // Obtiene el id de la visita desde la URL
  const [visita, setVisita] = useState(null); // Estado para almacenar la visita
  const [images, setImages] = useState({}); // Estado para almacenar las imágenes
  const [loading, setLoading] = useState(true); // Estado de carga
  const imagesRef = useRef(images); // Usar useRef para caché de imágenes

  // Función para hacer el fetch de los datos de la visita
  useEffect(() => {
    const fetchVisita = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://concejoformosa.org/visitas.php?file=${encodeURIComponent(id)}`
        ); // Llamada al endpoint con el id de la visita
        const data = await response.json(); // Asumimos que el API devuelve JSON
        setVisita(data); // Guardar los datos de la visita en el estado

        // Cargar imágenes secundarias en caché
        if (data && data.images) {
          data.images.forEach((image) => {
            if (!imagesRef.current[image]) {
              imagesRef.current[image] = `/path/to/images/${image}`; // Simulamos la ruta de la imagen
            }
          });
        }

        setImages({ ...imagesRef.current }); // Actualizar el estado de las imágenes
      } catch (error) {
        console.error("Error al obtener los detalles de la visita:", error);
      } finally {
        setLoading(false); // Cambiar el estado de carga a falso cuando termine
      }
    };

    fetchVisita();
  }, [id]);

  // Si los datos de la visita aún no están cargados, mostramos el Skeleton (indicador de carga)
  if (loading || !visita) {
    return (
      <section id="service-details" className="service-details section section-visitas">
        <Skeleton variant="rectangular" width="100%" height={400} />
      </section>
    );
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
        <img
          src={visita.image ? visita.image : "/default-placeholder-image.png"}
          alt={visita.title}
          className="img-fluid services-img"
          loading="lazy"
        />
        <div className="title-paragrafh">
          <h3>{visita.titles}</h3>
          <p>{visita.description}</p>
        </div>
        <div className="image-gallery">
          {visita.images && visita.images.length > 0 ? (
            visita.images.map((imagen, index) => (
              <img
                key={index}
                src={images[imagen] || "/default-placeholder-image.png"}
                alt={`Imagen de ${visita.title}`}
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
