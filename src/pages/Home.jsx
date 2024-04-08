import React from "react";
import SwiperUltimasNovedades from "../Components/SwiperUltimasNovedades";
import Header from "../Components/Header";
import VideoEnVivo from "../Components/VideoEnVivo";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <main id="main">
        <Header />
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Acerca del HCD</h2>
              <p>Honorable Concejo Deliberante de la Ciudad de Formosa. </p>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  El Honorable Concejo Deliberante de la Ciudad de Formosa, en
                  su calidad de órgano legislativo local, se erige como una
                  institución fundamental en el desarrollo y la gestión de
                  nuestra comunidad.
                </p>
                <ul>
                  <li>
                    <i className="ri-circle-fill" />
                    Órgano Legislativo Local.
                  </li>
                  <li>
                    <i className="ri-circle-fill" /> Participación Ciudadana.
                  </li>
                  <li>
                    <i className="ri-circle-fill" /> Compromiso con el Bienestar
                    Comunitario.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Comprometido con los principios de transparencia,
                  representatividad y participación ciudadana, el Concejo
                  Deliberante de Formosa trabaja persistentemente para promover
                  el bienestar y el progreso de todos los habitantes de nuestra
                  ciudad.
                </p>
                <NavLink
                  to="/acerca"
                  className="btn-learn-more nav-link scrollto"
                >
                  Saber más
                </NavLink>
                {/* <a href="#" className="btn-learn-more">
                  Saber más
                </a> */}
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}

        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts section-bg">
          <div className="container"></div>
        </section>
        {/* End Counts Section */}

        <SwiperUltimasNovedades />

        {/* ======= About Video Section ======= */}
        <section id="about-video" className="about-video">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <VideoEnVivo />

              <div
                className="col-lg-6 pt-3 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay={100}
              >
                <h3>Sesiones en vivo.</h3>
                <p className="fst-italic">
                  ¡Bienvenido a las sesiones en vivo del Concejo Deliberante de
                  la Ciudad de Formosa!
                </p>
                <ul>
                  <li>
                    <i className="ri-circle-fill" /> Es un honor darles la
                    bienvenida a este espacio de participación Ciudadana y
                    transparencia democrática. Las sesiones en vivo del Concejo
                    Deliberante de la ciudad de Formosa representan un canal
                    directo para presenciar el proceso deliberativo que da forma
                    a nuestra comunidad en tiempo real.
                  </li>
                  <li>
                    <i className="ri-circle-fill" /> Durante estas sesiones, se
                    discuten y deciden temas cruciales que afectan directamente
                    a la comunidad.
                  </li>
                  <li>
                    <i className="ri-circle-fill" /> Desde debates sobre
                    políticas públicas hasta decisiones sobre proyectos de
                    infraestructura.
                  </li>
                </ul>
                <p>
                  Para acceder a las sesiones en vivo, los invitamos
                  cordialmente,{" "}
                  <strong>
                    simplemente haz clic en el botón de play en la imagen.
                  </strong>
                  &nbsp;No dejen pasar esta oportunidad de participar
                  activamente en la construcción de nuestro futuro común y ser
                  testigos del proceso democrático en acción.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Video Section */}

        {/* ======= Frequently Asked Questions Section ======= */}
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Preguntas Frecuentes</h2>
              <p>
                Aquí podra encontrar información sobre el Honorable Consejo
                Deliberante de la Ciudad de Formosa.
              </p>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    ¿Dónde funciona el Concejo Deliberante?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      El Honorable Concejo Deliberante de la Ciudad de Formosa
                      se encuentra ubicado en la calle San Martin 500.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={100}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    ¿Cómo se compone el Honorable Concejo Deliberante ?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Lo conforman los concejales. La cantidad de concejales
                      está estipulado por el régimen municipal que rige a todas
                      las municipalidades de la Provincia de Formosa.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    ¿Cuáles son las funciones de un concejal?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Un concejal es una persona elegida por el pueblo para
                      defender los derechos de los vecinos, procurándoles
                      mayores servicios con el propósito de mejorar su calidad
                      de vida, elevando al Departamento Ejecutivo (Municipalidad
                      de la ciudad de Formosa) proyectos y propuestas para que
                      éste los haga cumplir. Se preocupa por obras, servicios,
                      cultura y educación. El Honorable Concejo Deliberante de
                      la ciudad de Formosa está formado por 12 concejales,
                      organizados en distintas comisiones para desarrollar un
                      trabajo fecundo y coherente.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={300}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    ¿Cómo funciona el Concejo Deliberante?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Los concejales se convocan a través de sesiones, además de
                      las reuniones de comisión que cada una de ésta propone.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={400}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    ¿Qué es una sesión?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Es una reunión de concejales conducida por uno de ellos
                      electo como presidente durante la cual se tratan asuntos
                      de incumbencia del Concejo, de acuerdo con un Orden del
                      Día, votándose las decisiones.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* End Frequently Asked Questions Section */}

        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contacto</h2>
              <p></p>
            </div>
            <div>
              <iframe
                style={{ border: 0, width: "100%", height: 270 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.157858976438!2d-58.185869849237!3d-26.18244428340524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942c4d9c142b7f33%3A0x20308f4c3c618416!2sFormosa%2C%20Provincia%20de%20Formosa!5e0!3m2!1sen!2sar!4v1647432118053!5m2!1sen!2sar"
                frameBorder={0}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Dirección:</h4>
                    <p> San Martín 500, Formosa, Argentina</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>honorableconcejodeliberantefsa@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
    </>
  );
}

export default Home;
