import React, { useState, useEffect, useRef } from "react";
import { useParams, NavLink } from "react-router-dom";
import { visitasDetalle } from "../../data/visitasDetalle";
import Skeleton from '@mui/material/Skeleton';
import "../Components/visitasDetalle.css";

// Componente VisitaDetalle
function VisitaDetalle() {
  const { id } = useParams(); // Obtiene el id de la URL
  const visitaEncontrada = visitasDetalle.find((v) => v.id === parseInt(id)); // Busca la visita por ID
  const [visita, setVisita] = useState(visitaEncontrada);
  const [loading, setLoading] = useState(true);
  const imageRef = useRef(visita?.image); // Usar useRef para almacenar la imagen principal

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        // No necesitas hacer un fetch aquí ya que la imagen ya está en el objeto
        imageRef.current = `https://concejoformosa.org/${visita.image}`; // Asignar directamente la URL de la imagen principal
      } catch (error) {
        console.error("Error fetching image:", error);
        imageRef.current = "/default-placeholder-image.png"; // Placeholder en caso de error
      } finally {
        setLoading(false);
      }
    };

    if (visita) {
      fetchImage();
    }
  }, [visita]);

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
          <h4>{visita?.title}</h4>
          <span>{visita?.date}</span>
        </div>
      </div>

      <div className="col-lg-8 ps-lg-5 text-center" data-aos="fade-up" data-aos-delay={100}>
        {loading ? (
          <Skeleton variant="rectangular" sx={{ borderRadius: 1, width: "100%", height: 400 }} />
        ) : (
          <img src={`https://concejoformosa.org/${visita?.image}`} alt={visita?.title} className="img-fluid services-img" loading="lazy" />
        )}

        <div className="title-paragrafh">
          <h3>{visita?.titles}</h3>
          <p>{visita?.description}</p>
        </div>

        {/* Renderizar las imágenes adicionales */}
        {visita?.images && visita.images.length > 0 && (
          <div>
            {visita.images.map((imagen, index) => (
              <img 
                key={index} 
                src={`https://concejoformosa.org${imagen}`} // Asegúrate de que haya una barra diagonal antes de `imagen`
                alt={`Imagen adicional ${index + 1} de ${visita.title}`} 
                className="img-fluid services-img text-center" 
                loading="lazy" 
              />
            ))}
          </div>
        )}
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
