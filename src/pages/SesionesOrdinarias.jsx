import React, { useState, useEffect } from "react";
import PdfList from "../Hooks/PdfList";
import { itemsSesionesOrdinarias } from "../../data/itemsSesionesOrdinarias";
import { Box, Pagination } from "@mui/material";
import "./sesionesOrdinarias.css";

function SesionesOrdinarias() {
  const [page, setPage] = useState(1);
  const [sortedItems, setSortedItems] = useState([]);


  const ITEMS_PER_PAGE = 4;
  const indexOfLastItem = page * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = itemsSesionesOrdinarias.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, value) => {
    setPage(value);
  };

   // Función para convertir el formato "DD/MM/YY" a un objeto Date
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('-');
  // Asumiendo que 'year' es de dos dígitos y perteneciente al siglo 21
  return new Date(`20${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
};

  // Ordenar el arreglo SesionesOrdinarias por fecha
  useEffect(() => {
    const sortedSesionesOrdinarias = itemsSesionesOrdinarias.sort((a, b) => {
      return parseDate(b.date) - parseDate(a.date);
    });
    setSortedItems(sortedSesionesOrdinarias); // Guardar el arreglo ordenado en el estado
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  
  return (
    <section id="about" className="about about_section">
      <div className="container" data-aos="fade-up">
        <div className="section-title acerca">
          <h2>Sesiones Ordinarias</h2>
          <p>Honorable Concejo Deliberante de la Ciudad de Formosa</p>
        </div>
        <div className="row content sesiones-ordinarias">
          <div className="col-lg-6 pt-4 pt-lg-0">
      
                 <ul className="custom-list">
              {currentItems.map((item, index) => (
                <li key={index}>
                  <i className="ri-circle-fill" />
                  <p>
                  SUMARIO Y EFEMERIDES DE ASUNTOS ENTRADOS PARA LA “SESIÓN
                  ORDINARIA” DEL DÍA <span>{item.date}</span> A LAS 19:00 Hs.
                </p>
               
                <div className="d-flex container-list">
                  {item.files.map((fileName, fileIndex) => (
                    <PdfList key={fileIndex} fileName={fileName} />
                  ))}
                </div>
                </li>
              ))}
            </ul>

            <Box mt={2}>
              <Pagination
                className="page"
                count={Math.ceil(itemsSesionesOrdinarias.length / ITEMS_PER_PAGE)}
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
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SesionesOrdinarias;
