import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Pagination } from "@mui/material";
import { visitasData } from "../../data/visitasData";

function Visitas() {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const [images, setImages] = useState({}); // Almacenará las URLs de las imágenes

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = {};
      for (const visita of visitasData) {
        try {
          const response = await fetch(`https://concejoformosa.org/visitas.php?file=${encodeURIComponent(visita.image)}`);
          
          // Verificar que la respuesta es OK
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          if (data.length > 0) {
            // Almacena la URL de la imagen
            fetchedImages[visita.id] = `https://concejoformosa.org${data[0].url}`; // Añade el dominio
          } else {
            console.warn(`No image found for ${visita.image}`);
          }
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentVisitas = visitasData.slice(indexOfFirstItem, indexOfLastItem);

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
                    {/* Aquí se usa la URL de la imagen que obtenemos del fetch */}
                    <img
                      src={images[visita.id] || "/default-placeholder-image.png"}
                      alt={visita.title}
                      className="icon"
                    />
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
