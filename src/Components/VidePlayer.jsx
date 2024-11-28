import React, { useEffect, useState } from "react";
import './videoPlayer.css';

export const VidePlayer = ({ src, onVideoEnd }) => {
  const [isMuted, setIsMuted] = useState(true); // Inicia en 'muted'
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsMuted(false); // Desactiva el silencio
    const video = document.getElementById('videoElement');
    video.muted = false; // Activa el sonido
    video.play(); // Reproduce el video
  };
  
  return (
    <div className="video-overlay">
      <video
        className="custom-video"
        src={src}
        onEnded={onVideoEnd}
        autoPlay
        muted={isMuted} // Mantiene el silencio activo hasta que el botón se presione
      />
      {isMuted && (
        <button className="play-button" onClick={handlePlay}>
          Activar Sonido
        </button>
      )}
    </div>
  );
};
