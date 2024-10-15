// useImageList.js
import { useState, useEffect } from "react";

// Crear un objeto global de caché para almacenar las URLs cargadas por archivo
const imageCache = {};

const useImageList = (fileName) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImageUrls = async () => {
      setIsLoading(true);

      // Verificar si los datos ya están cacheados
      if (imageCache[fileName]) {
        setImageUrls(imageCache[fileName]);
        setIsLoading(false);
        return;
      }

      try {
        // Cambiar la ruta para apuntar al endpoint correcto
        const response = await fetch(`/storage/sesiones.php?file=${fileName}`);
        const data = await response.json();
        imageCache[fileName] = data; // Cachear los datos
        setImageUrls(data);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageUrls();
  }, [fileName]);

  return { imageUrls, isLoading };
};

export default useImageList;
