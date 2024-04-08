import React from 'react';

function VideoEnVivo() {
  return (
    <div className="col-lg-6 video-box align-self-baseline position-relative" data-aos="fade-right" data-aos-delay={100}>
      <img
        src="assets/img/seccion_en_vivo/consejo deliberante sala.webp"
        className="img-fluid"
        alt=""
      />
      <a
        href="#"
        className="glightbox play-btn mb-4"
        data-vbtype="video"
        data-autoplay="true"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default VideoEnVivo;
