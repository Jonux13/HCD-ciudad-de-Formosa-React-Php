import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { ActividadesBloquePjData } from "../../data/ActividadesBloquePjData";

const fetchImageUrl = async (imageName) => {
  const response = await fetch(`https://concejoformosa.org/visitas.php?file=${encodeURIComponent(imageName)}`);
  const data = await response.json();
  return data.length > 0 ? `https://concejoformosa.org${data[0].url}` : "/assets/img/default-placeholder-image.png";
};

const ActividadDetalle = () => {
  const { id } = useParams();
  const actividad = ActividadesBloquePjData.find((a) => a.id === parseInt(id));
  const [loading, setLoading] = useState(true);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        const mainImage = await fetchImageUrl(actividad.image);
        setMainImageUrl(mainImage);

        const urls = await Promise.all(actividad.images.map(fetchImageUrl));
        setImageUrls(urls);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [actividad]);

  return (
    <section id="service-details" className="service-details section section-visitas">
      <NavLink to="/actividadesbloque" className="read-more link-volver">
        <span className="read-more"><i className="fas fa-reply icon-with-margin" /> Volver</span>
      </NavLink>

      <div className="container-all text-center" data-aos="fade-up">
        <h4>{actividad.title}</h4>
        <span>{actividad.date}</span>
      </div>

      <div className="col-lg-8 ps-lg-5 text-center" data-aos="fade-up" data-aos-delay={100}>
        {loading ? (
          <Skeleton variant="rectangular" sx={{ borderRadius: 1, width: "100%", height: 200 }} />
        ) : (
          <img src={mainImageUrl} alt={actividad.title} className="img-fluid services-img" loading="lazy" />
        )}

        <h3>{actividad.titles}</h3>
        <p>{actividad.description}</p>

        <div>
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Imagen de ${actividad.title}`} className="img-fluid services-img" loading="lazy" />
          ))}
        </div>
      </div>

      <NavLink to="/actividadesbloque" className="read-more">
        <span className="read-more link-size"><i className="fas fa-reply icon-with-margin" /> Volver</span>
      </NavLink>
    </section>
  );
};

export default ActividadDetalle;
