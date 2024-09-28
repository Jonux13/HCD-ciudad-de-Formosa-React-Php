import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { visitasData } from "../../data/visitasData";
import { Box, Pagination } from "@mui/material";

const PageContext = React.createContext(null);

function Visitas() {
  const ITEMS_PER_PAGE = 6;

  const [page, setPage] = useState(1); 
 

  const handleChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentVisitas = visitasData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PageContext.Provider value={{ page }}>
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
    </PageContext.Provider>
  );
}

export default Visitas;







