import React from "react";
import "./videoEnVivo.css";

function VideoEnVivo() {
  return (
    <div
      className="col-lg-6 video-box align-self-baseline position-relative"
      data-aos="fade-right"
      data-aos-delay={100}
    >
      <img
        src="/assets/img/seccion_en_vivo/consejo deliberante sala.webp"
        className="img-fluid"
        alt=""
      />
      <a
        href="https://www.facebook.com/profile.php?id=61560073619264"
        className="glightbox play-btn mb-4"
        data-vbtype="video"
        data-autoplay="true"
        target="_blank"
        rel="noreferrer"
        // onClick={(e) => e.preventDefault()}
      />
      <a />
      {/* <div class="en-vivo">
        <div class="bolita"></div>
        <span>En Vivo</span>
      </div> */}
    </div>
  );
}

export default VideoEnVivo;
