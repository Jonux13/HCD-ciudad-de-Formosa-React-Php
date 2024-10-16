import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Pagination, Skeleton } from "@mui/material";
import { visitasData } from "../../data/visitasData";

function Visitas() {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const [images, setImages] = useState({}); // Almacena las URLs de las imágenes
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true); // Iniciar la carga
      const fetchedImages = { ...images }; // Mantener las imágenes ya cargadas

      // Calcular el índice de las visitas en la página actual
      const indexOfLastItem = page * ITEMS_PER_PAGE;
      const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
      const currentVisitas = visitasData.slice(indexOfFirstItem, indexOfLastItem);

      for (const visita of currentVisitas) {
        if (!fetchedImages[visita.id]) { // Solo solicitar si no está en caché
          try {
            const response = await fetch(`https://concejoformosa.org/visitas.php?file=${encodeURIComponent(visita.image)}`);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (data.length > 0) {
              fetchedImages[visita.id] = `https://concejoformosa.org${data[0].url}`;
            } else {
              console.warn(`No image found for ${visita.image}`);
              fetchedImages[visita.id] = "/default-placeholder-image.png"; // Placeholder si no hay imagen
            }
          } catch (error) {
            console.error("Error fetching image:", error);
            fetchedImages[visita.id] = "/default-placeholder-image.png"; // Placeholder en caso de error
          }
        }
      }

      setImages(fetchedImages);
      setLoading(false); // Finalizar la carga
    };

    fetchImages();
  }, [page]); // Cambiar dependencia a page para que se ejecute cuando cambie la página

  // Función para convertir el formato "DD/MM/YY" a un objeto Date
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`20${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
  };

  // Ordenar el arreglo visitasData por fecha
  const sortedVisitas = visitasData.sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
  });

  // Filtrar las visitas actuales para mostrar solo las de la página actual
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
              <div key={visita.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <NavLink to={`/visita/${visita.id}`} className="read-more">
                  <div className="service-item item-cyan position-relative">
                    {loading ? (
                      <Skeleton variant="rectangular" sx={{ marginRight: 1.5, borderRadius: 2, width: '100%', height: 180 }}/>
                    ) : (
                      <img
                        src={images[visita.id]}
                        alt={visita.title}
                        className="icon"
                      />
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
