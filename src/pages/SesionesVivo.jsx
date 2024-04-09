import React from "react";
import VideoEnVivo from "../Components/VideoEnVivo";


function SesionesVivo() {
  return (
    <>
    <section id="about-video" className="about-video">
      <div className="container" data-aos="fade-up">
        <div className="row">
        <VideoEnVivo  />

          <div
            className="col-lg-6 pt-3 pt-lg-0 content"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <h3>Sesiones en vivo.</h3>
            <p className="fst-italic">
              ¡Bienvenido a las sesiones en vivo del Concejo Deliberante de la
              Ciudad de Formosa!
            </p>
            <ul>
              <li>
                <i className="ri-circle-fill" /> Es un honor darles la
                bienvenida a este espacio de participación Ciudadana y
                transparencia democrática. Las sesiones en vivo del Concejo
                Deliberante de la ciudad de Formosa representan un canal directo
                para presenciar el proceso deliberativo que da forma a nuestra
                comunidad en tiempo real.
              </li>
              <li>
                <i className="ri-circle-fill" /> Durante estas sesiones, se
                discuten y deciden temas cruciales que afectan directamente a la
                comunidad.
              </li>
              <li>
                <i className="ri-circle-fill" /> Desde debates sobre políticas
                públicas hasta decisiones sobre proyectos de infraestructura.
              </li>
            </ul>
            <p>
              Para acceder a las sesiones en vivo, los invitamos cordialmente,{" "}
              <strong>
                simplemente haz clic en el botón de play en la imagen.
              </strong>
              &nbsp;No dejen pasar esta oportunidad de participar activamente en
              la construcción de nuestro futuro común y ser testigos del proceso
              democrático en acción.
            </p>
          </div>
        </div>
      </div>
    </section>
     </>
  );
}

export default SesionesVivo;
