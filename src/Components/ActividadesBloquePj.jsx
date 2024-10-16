import React, { useState, useEffect, memo, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Box, Pagination, Skeleton } from "@mui/material";
import { ActividadesBloquePjData } from "../../data/ActividadesBloquePjData";

// Componente memoizado
const ActividadItem = memo(({ actividad, image, loading }) => (
  <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
    <NavLink to={`/actividad/${actividad.id}`} className="read-more">
      <div className="service-item item-cyan position-relative">
        {loading ? (
          <Skeleton
            variant="rectangular"
            sx={{ marginRight: 1.5, borderRadius: 2, width: "100%", height: 180 }}
          />
        ) : (
          <img src={image} alt={actividad.title} className="icon" />
        )}
        <div className="visit-info">
          <h3>{actividad.title}</h3>
          <span className="centered-span">{actividad.date}</span>
          <p>{actividad.description}</p>
          <span className="read-more link-visitas">
            <span className="text">Ver más</span> <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
    </NavLink>
  </div>
));

function ActividadesBloquePj() {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const imagesRef = useRef(images);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const indexOfLastItem = page * ITEMS_PER_PAGE;
      const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
      const currentActividades = ActividadesBloquePjData.slice(indexOfFirstItem, indexOfFirstItem + ITEMS_PER_PAGE);

      const fetchImage = async (actividad) => {
        if (imagesRef.current[actividad.id]) return;

        try {
          const response = await fetch(`https://concejoformosa.org/actividades.php?file=${encodeURIComponent(actividad.image)}`);
          const data = await response.json();
          imagesRef.current[actividad.id] = data.length > 0 ? `https://concejoformosa.org${data[0].url}` : "/default-placeholder-image.png";
        } catch (error) {
          console.error("Error fetching image:", error);
          imagesRef.current[actividad.id] = "/default-placeholder-image.png";
        }
      };

      await Promise.all(currentActividades.map(fetchImage));

      setImages({ ...imagesRef.current });
      setLoading(false);
    };

    fetchImages();
  }, [page]);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`20${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
  };

  const sortedActividades = ActividadesBloquePjData.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentActividades = sortedActividades.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="title">ACTIVIDADES BLOQUE PJ</h2>
          <p>Actividades Realizadas por el Bloque Pj</p>
        </div>

        <div className="container">
          <div className="row g-5">
            {currentActividades.map((actividad) => (
              <ActividadItem
                key={actividad.id}
                actividad={actividad}
                image={images[actividad.id]}
                loading={loading}
              />
            ))}
          </div>

          <Box mt={6}>
            <Pagination
              count={Math.ceil(ActividadesBloquePjData.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handleChange}
              color="primary"
              size="large"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "0.8rem",
                  height: "25px",
                  minWidth: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                "& .MuiPaginationItem-rounded.Mui-selected": {
                  bgcolor: "#2487ce",
                },
              }}
            />
          </Box>
        </div>
      </section>
    </div>
  );
}

export default ActividadesBloquePj;
