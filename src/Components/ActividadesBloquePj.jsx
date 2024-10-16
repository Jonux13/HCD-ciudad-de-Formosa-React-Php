import React, { useState, useEffect, useRef, memo } from "react";
import { NavLink } from "react-router-dom";
import { Box, Pagination, Skeleton } from "@mui/material";
import { visitasData } from "../../data/visitasData";

// Componente memoizado para evitar renderizados innecesarios
const VisitItem = memo(({ visita, image, loading }) => (
  <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
    <NavLink to={`/visita/${visita.id}`} className="read-more">
      <div className="service-item item-cyan position-relative">
        {loading ? (
          <Skeleton
            variant="rectangular"
            sx={{ marginRight: 1.5, borderRadius: 2, width: "100%", height: 180 }}
          />
        ) : (
          <img src={image} alt={visita.title} className="icon" />
        )}
        <div className="visit-info">
          <h3>{visita.title}</h3>
          <span className="centered-span">{visita.date}</span>
          <p>{visita.description}</p>
          <span className="read-more link-visitas">
            <span className="text">Ver más</span> <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
    </NavLink>
  </div>
));

function Visitas() {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const imagesRef = useRef(images); // Usar useRef para almacenar imágenes

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const indexOfLastItem = page * ITEMS_PER_PAGE;
      const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
      const currentVisitas = visitasData.slice(indexOfFirstItem, indexOfLastItem);

      const fetchImage = async (visita) => {
        if (imagesRef.current[visita.id]) return; // Si ya está en caché, no solicitar

        try {
          const response = await fetch(`https://concejoformosa.org/visitas.php?file=${encodeURIComponent(visita.image)}`);
          if (!response.ok) throw new Error("Error en la respuesta de la red");

          const data = await response.json();
          imagesRef.current[visita.id] = data.length > 0 ? `https://concejoformosa.org${data[0].url}` : "/default-placeholder-image.png";
        } catch (error) {
          console.error("Error fetching image:", error);
          imagesRef.current[visita.id] = "/default-placeholder-image.png"; // Placeholder en caso de error
        }
      };

      await Promise.all(currentVisitas.map(fetchImage));

      setImages({ ...imagesRef.current }); // Actualizar el estado
      setLoading(false);
    };

    fetchImages();
  }, [page]);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);
  };

  const sortedVisitas = visitasData.sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentVisitas = sortedVisitas.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="title">Visitas al Hcd</h2>
          <p>Visitas realizadas al Honorable Concejo Deliberante</p>
        </div>

        <div className="container">
          <div className="row g-5">
            {currentVisitas.map((visita) => (
              <VisitItem key={visita.id} visita={visita} image={images[visita.id]} loading={loading} />
            ))}
          </div>

          <Box mt={6}>
            <Pagination
              count={Math.ceil(visitasData.length / ITEMS_PER_PAGE)}
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

export default Visitas;
