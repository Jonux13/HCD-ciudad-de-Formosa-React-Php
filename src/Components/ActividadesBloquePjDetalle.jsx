import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { visitasDetalle } from "../../data/visitasDetalle";
import Skeleton from '@mui/material/Skeleton';
import "../Components/visitasDetalle.css";

// Función para obtener la URL de la imagen, usando un placeholder en caso de error
const fetchImageUrl = async (imageName) => {
  const response = await fetch(`https://concejoformosa.org/visitas.php?file=${encodeURIComponent(imageName)}`);
  if (!response.ok) throw new Error("Error fetching image");
  const data = await response.json();
  // Usar imagen por defecto si falla o no se encuentra
  return data.length > 0 ? `https://concejoformosa.org${data[0].url}` : "/assets/img/default-placeholder-image.png";
};

const VisitaDetalle = () => {
  const { id } = useParams();
  const visita = visitasDetalle.find((v) => v.id === parseInt(id));
  const [loading, setLoading] = useState(true);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        // Cargar imagen principal
        const mainImage = await fetchImageUrl(visita.image);
        setMainImageUrl(mainImage);

        // Cargar imágenes adicionales
        setLoadingImages(true);
        const urls = await Promise.all(visita.images.map(fetchImageUrl));
        setImageUrls(urls);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
        setLoadingImages(false);
      }
    };

    loadImages();
  }, [visita]);

  return (
    <section id="service-details" className="service-details section section-visitas">
      <NavLink to="/visitas/" className="read-more link-volver">
        <span className="read-more"><i className="fas fa-reply icon-with-margin" /> Volver</span>
      </NavLink>

      <div className="container-all text-center" data-aos="fade-up">
        <h4>{visita.title}</h4>
        <span>{visita.date}</span>
      </div>

      <div className="col-lg-8 ps-lg-5 text-center" data-aos="fade-up" data-aos-delay={100}>
        {/* Imagen principal con Skeleton mientras carga */}
        {loading ? (
          <Skeleton variant="rectangular" sx={{ borderRadius: 1, width: "100%", height: 500 }} />
        ) : (
          <img src={mainImageUrl} alt={visita.title} className="img-fluid services-img" loading="lazy" />
        )}

        <h3>{visita.titles}</h3>
        <p>{visita.description}</p>

        {/* Imágenes adicionales con Skeleton mientras cargan */}
        <div>
          {loadingImages ? (
            Array.from({ length: visita.images.length }).map((_, index) => (
              <Skeleton key={index} variant="rectangular" sx={{ borderRadius: 1, width: "100%", height: 400, marginBottom: 1 }} />
            ))
          ) : (
            imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`Imagen de ${visita.title}`} className="img-fluid services-img" loading="lazy" />
            ))
          )}
        </div>
      </div>

      <NavLink to="/visitas" className="read-more">
        <span className="read-more link-size"><i className="fas fa-reply icon-with-margin" /> Volver</span>
      </NavLink>
    </section>
  );
};

export default VisitaDetalle;
