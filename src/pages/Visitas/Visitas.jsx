import React from "react";
import { NavLink } from "react-router-dom";
import "../../pages/Visitas/visitas.css";

function Visitas() {
  return (
    <div>
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Visitas al Hcd</h2>
          <p>Visitas realizadas al Honorable Concejo Deliberante</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink to="/institucional/visitas/consul" className="read-more">
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/visita consul/AnyConv.com__WhatsApp Image 2024-05-03 at 11.29.06 (1).webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>Visita de la Cónsul de la República del Paraguay</h3>
                    <span className="centered-span">13/03/24</span>
                    <p>
                      El pasado 13 de marzo, la Cónsul de la República del
                      Paraguay, María Noelia López Sanguinetti, realizó una
                      visita de cortesía al Presidente del Concejo Deliberante
                      de la ciudad de Formosa.
                    </p>
                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink
                to="/institucional/visitas/DiaDelAnimal"
                className="read-more"
              >
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.58 (1).webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>Día del Animal</h3>
                    <span className="centered-span">29/03/24</span>
                    <p>
                      Hoy con mucha alegría, en el "Honorable Concejo
                      Deliberante", recibimos a niños del Jardín Infantes
                      "Mickey Mouse", de la Escuela N°3 y del Colegio "Don
                      Bosco", en el marco del "Día del Animal".
                    </p>

                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink
                to="/institucional/visitas/aniversarioFormosa"
                className="read-more"
              >
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/8 de abril/AnyConv.com__WhatsApp Image 2024-05-03 at 11.21.47 (1).webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>
                      145º Aniversario de la Fundación de la Ciudad de Formosa
                    </h3>
                    <span className="centered-span">08/04/24</span>
                    <p>
                      En el marco de los festejos por el 145º Aniversario de la
                      Fundación de la Ciudad de Formosa, tuvo lugar en el
                      espacio cultural del nuevo edificio del Concejo
                      Deliberante...
                    </p>
                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink
                to="/institucional/visitas/escuela445"
                className="read-more"
              >
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/Escuela N°445/AnyConv.com__WhatsApp Image 2024-05-03 at 11.19.43.webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>
                      Visita de directivos de la escuela Escuela
                      N°445"Dr.Esteban L. Maradona"{" "}
                    </h3>
                    <span className="centered-span">10/04/24</span>
                    <p>
                      Recibimos al Sr. Director Williams Iván Karpiel y a su
                      colega en representación de la Escuela N°445 "Dr.Esteban
                      L. Maradona" del Barrio Liborsi.
                    </p>
                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink
                to="/institucional/visitas/Aniversario25deMayo"
                className="read-more"
              >
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/25 de mayo/foto-2-2024-05-28.webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>
                      Festejando el aniversario 214° de la Revolucion de Mayo{" "}
                    </h3>
                    <span className="centered-span">25/05/24</span>
                    <p>
                      En el "espacio cultural" del Honorable Concejo Deliberante,
                      junto al presidente Dario Di Martino y concejales, 
                      estuvimos festejando el aniversario 214° de la Revolución
                      de Mayo.
                    </p>
                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink
                to="/institucional/visitas/lactancia"
                className="read-more"
              >
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/lactancia/AnyConv.com__446651424_122101999274335787_7533347121489445389_n.webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>
                    Inuguración del espacio amigo de la lactancia{" "}
                    </h3>
                    <span className="centered-span">05/06/24</span>
                    <p>
                    En el Día de la Acción por la Salud de las Mujeres, habilitaron el "Espacio Amigo de Lactancia" en el Concejo Deliberante.
                    </p>
                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink
                to="/institucional/visitas/campeon"
                className="read-more"
              >
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/campeón/AnyConv.com__WhatsApp Image 2024-06-11 at 12.27.47 (1).webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>
                    ¡Exitos Campeón!{" "}
                    </h3>
                    <span className="centered-span">11/06/24</span>
                    <p>
                    Hoy con mucho entusiasmo y alegría recibí a Joaquín un joven con muchísimo talento que con tan solo 19 años ya es campeón con 4 coronas .
                    </p>
                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink
                to="/institucional/visitas/veinteDeJunio"
                className="read-more"
              >
                <div className="service-item item-cyan position-relative">
                  <img
                    src="/assets/img/visitas/20 de junio/AnyConv.com__448827349_122112906050335787_7371799334959944045_n_1_11zon.webp"
                    alt=""
                    className="icon"
                  />
                  <div className="visit-info">
                    <h3>
                    20 de junio día de la bandera{" "}
                    </h3>
                    <span className="centered-span">20/06/24</span>
                    <p>
                    Hoy en conmemoración al Gral. Manuel Belgrano celebramos el día de la bandera.
                    </p>
                    <span className="read-more link-visitas">
                      <span className="text">Ver más</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </NavLink>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visitas;
