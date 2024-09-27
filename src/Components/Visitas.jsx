import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { visitasData } from "../../data/visitasData"; // Importa los datos desde el archivo .js
import { Box, Pagination } from "@mui/material"; // Importa Pagination de Material-UI

function Visitas() {
  const ITEMS_PER_PAGE = 6;
  const location = useLocation(); // Obtiene la ubicación actual
  const [page, setPage] = useState(() => {
    // Recupera la página guardada desde localStorage o establece 1 si no existe
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  useEffect(() => {
    // Almacena la página actual en localStorage
    localStorage.setItem("currentPage", page);
  }, [page]);

  // Efecto para limpiar el localStorage cuando se salga de la sección "Visitas"
  useEffect(() => {
    const handleLocationChange = () => {
      if (!location.pathname.startsWith("/visitas")) {
        // Elimina la página guardada si la ubicación no es parte de "Visitas"
        localStorage.removeItem("currentPage");
      }
    };

    handleLocationChange(); // Verifica la ubicación al cargar

    return () => {
      handleLocationChange(); // Verifica la ubicación al desmontar
    };
  }, [location]);

  // Calcula el índice del último y primer elemento en la página actual
  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentVisitas = visitasData.slice(indexOfFirstItem, indexOfLastItem); // Elementos que se mostrarán en la página actual

  // Función para manejar el cambio de página
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0); // Lleva el scroll a la parte superior
  };

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
                    <img src={visita.image} alt={visita.title} className="icon" />
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

          {/* Componente de paginación */}
          <Box mt={6}>
            <Pagination
              count={Math.ceil(visitasData.length / ITEMS_PER_PAGE)} // Número total de páginas
              page={page} // Página actual
              onChange={handleChange} // Maneja el cambio de página
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

