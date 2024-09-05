import React, { useState, useEffect, memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { Skeleton } from '@mui/material';
import { getPdfUrls } from './PdfSesiones';

// Crear un objeto global de caché para almacenar las URLs cargadas por archivo y página
const cache = {};

const PdfList = memo(({ fileName, currentPage = 1, itemsPerPage = 4 }) => {
  const [currentFiles, setCurrentFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  const fetchPdfUrls = async () => {
    // Generar una clave única para identificar cada página del archivo
    const cacheKey = `${fileName}-${currentPage}`;

    // Limpia los archivos actuales para que no muestre datos de otras páginas mientras carga la nueva
    setCurrentFiles([]);
    setIsLoading(true);

    // Verificar si los datos ya están cacheados
    if (cache[cacheKey]) {
      // Si ya está cacheado, usar los archivos cacheados y evitar cargar nuevamente
      setCurrentFiles(cache[cacheKey]);
      setIsLoading(false);
      return;
    }

    try {
      const startIndex = (currentPage - 1) * itemsPerPage;

      // Obtener las URLs de los archivos PDF solo para la página actual
      const fetchedUrls = await getPdfUrls(fileName, startIndex, itemsPerPage);

      // Almacenar los resultados en el caché para la página actual
      cache[cacheKey] = fetchedUrls;

      // Actualizar los archivos actuales para la página
      setCurrentFiles(fetchedUrls);
    } catch (error) {
      console.error("Error fetching PDF URLs:", error);
    } finally {
      // Finaliza la carga
      setIsLoading(false);
    }
  };

  fetchPdfUrls();
}, [fileName, currentPage, itemsPerPage]); // Efecto solo se activa cuando cambian el archivo o la página actual


  const handleFileClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {isLoading && currentFiles.length === 0 ? ( // Solo mostrar el Skeleton si no hay archivos y está cargando
        <Skeleton animation="wave" variant="rounded" width={20} height={20} sx={{ marginRight: 0.5, marginBottom: 0.5 }} />
      ) : (
        currentFiles.map((file, index) => (
          <div key={index} className="pdf-item mx-1" onClick={() => handleFileClick(file.url)}>
            {file.type === "pdf" ? (
              <FontAwesomeIcon icon={faFilePdf} className="icono-pdf" />
            ) : (
              <FontAwesomeIcon icon={faFileImage} className="icono-imagen" />
            )}
          </div>
        ))
      )}
    </div>
  );
});

export default PdfList;






