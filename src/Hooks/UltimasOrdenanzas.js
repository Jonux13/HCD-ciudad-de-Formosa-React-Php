import React, { useState, useEffect, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileImage } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@mui/material";

// Crear un objeto global de caché para almacenar las URLs cargadas por archivo y página
const cache = {};

const PdfList = memo(({ fileName }) => {
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
        // Aquí cambiamos la ruta para apuntar a la carpeta "sesiones" en lugar de "pdfs"
        const response = await fetch(`/storage/pdfs.php?file=${fileName}`);
        const data = await response.json(); // Se espera que el backend PHP devuelva un JSON con las URLs de los archivos
        cache[fileName] = data; // Almacenar los resultados en el caché
        setCurrentFiles(data);
      } catch (error) {
        console.error("Error fetching file URLs:", error);
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

export default PdfList;
