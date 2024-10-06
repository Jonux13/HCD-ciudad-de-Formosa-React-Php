import React, { useState, useEffect } from "react";
import UltimasOrdenanzasHook from "../Hooks/UltimasOrdenanzasHook";
import { itemsData } from "../../data/itemsUltimasOrdenanzas";
import "./sesionesOrdinarias.css";
import { Box, Pagination } from "@mui/material";

function UltimasOrdenanzas() {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = itemsData.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, value) => {
    setPage(value);
  };
  
  return (
    <section id="about" className="about about_section">
      <div className="container" data-aos="fade-up">
        <div className="section-title acerca">
          <h2>Últimas Ordenanzas</h2>
          <p>Honorable Concejo Deliberante de la Ciudad de Formosa</p>
        </div>
        <div className="row content sesiones-ordinarias">
          <div className="col-lg-6 pt-4 pt-lg-0">         

            <ul className="custom-list">
              {currentItems.map((item) => (
                <li key={item.id}>
                  <i className="ri-circle-fill" />
                  {item.text}
                  <div className="d-flex container-list">
                    <UltimasOrdenanzasHook fileName={item.filePath} />
                  </div>
                </li>
              ))}
            </ul>

            {/* <Box mt={2}>
                <Pagination
                  className="page"
                  count={Math.ceil(itemsData.length / ITEMS_PER_PAGE)}
                  page={page}
                  onChange={handleChange}
                  color="primary"
                  size="small"
                  shape="rounded"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      fontSize: "0.8rem",       
                      height: "25px",
                    },
                    "& .MuiPaginationItem-rounded.Mui-selected": {
                      bgcolor: "#2487ce",
                    },
                  }}
                />
            </Box> */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default UltimasOrdenanzas;
