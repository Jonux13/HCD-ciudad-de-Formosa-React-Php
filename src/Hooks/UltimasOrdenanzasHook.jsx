import React, { useState, useEffect, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@mui/material";

// Crear un objeto global de caché para almacenar las URLs cargadas por archivo y página
const cache = {};

const ObtenerDocumentosHook = memo(({ fileName }) => {
  const [currentFiles, setCurrentFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFileUrls = async () => {
      setIsLoading(true);

      // Verificar si los datos ya están cacheados
      if (cache[fileName]) {
        setCurrentFiles(cache[fileName]);
        setIsLoading(false);
        return;
      }

      try {
        // Aquí apuntamos a la API 
        const response = await fetch(
          `https://concejoformosa.org/api/pdf?search=${encodeURIComponent(fileName)}`
        );
        if (!response.ok) {
          throw new Error('Error al obtener los documentos');
        }

        const data = await response.json();
        
        // Validar y convertir los datos a un array si es necesario
        const dataArray = Array.isArray(data) ? data : Object.values(data);

        // Guardar los resultados en caché
        cache[fileName] = dataArray;

        // Actualizar estado con los archivos
        setCurrentFiles(dataArray);

      } catch (error) {
        console.error("Error fetching file URLs:", error.message);
        setCurrentFiles([]); // Manejar error
      } finally {
        setIsLoading(false);
      }
    };

    fetchFileUrls();
  }, [fileName]);

  const handleFileClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      {isLoading && currentFiles.length === 0 ? (
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

export default ObtenerDocumentosHook;
