import React, { useEffect } from "react";
import "./videoPlayer.css";

export const ShowImage = ({ src, onHide }) => {
  useEffect(() => {
    // Temporizador para ocultar la imagen después de 5 segundos
    const timer = setTimeout(() => {
      onHide(); // Llama a la función proporcionada para ocultar la imagen
    }, 25000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <div className="image">
    <img
      src="/assets/img/nestor-barrios/Nestor-Barrios.webp"
      alt="Vista previa"
      className="custom-image"
    />
  </div>
  );
};
