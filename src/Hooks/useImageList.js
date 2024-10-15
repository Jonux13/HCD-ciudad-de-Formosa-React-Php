// useImageList.js
import { useState, useEffect } from "react";

// Crear un objeto global de caché para almacenar las URLs cargadas por archivo
const imageCache = {};

const useImageList = (fileName) => {
  const [imageUrls, setImageUrls] = useState([]); // Aquí está 'setImageUrls'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Agregado estado para manejar errores

  useEffect(() => {
    const fetchImageUrls = async () => {
      setIsLoading(true);
      setError(null); // Reiniciar error

      // Verificar si los datos ya están cacheados
      if (imageCache[fileName]) {
        setImageUrls(imageCache[fileName]);
        setIsLoading(false);
        return;
      }

      try {
        // Cambiar la ruta para apuntar al endpoint correcto
        const response = await fetch(`/storage/sesiones.php?file=${fileName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        imageCache[fileName] = data; // Cachear los datos
        setImageUrls(data); // Aquí es donde se establece el estado
      } catch (error) {
        console.error("Error fetching image URLs:", error);
        setError(error.message); // Guardar el mensaje de error
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageUrls();
  }, [fileName]); // Asegúrate de que 'fileName' se pase correctamente aquí

  return { imageUrls, isLoading, error }; // Devuelve el estado de error
};

export default useImageList;
