import React from 'react'
import { NavLink } from "react-router-dom";


function Visitas() {
  return (
  <div>
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Visitas al Hcd</h2>
      <p>Visitas realizadas al Honorable Concejo Deliberante</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <NavLink
                    to="/institucional/visitas/consul"
                    className="read-more"               
                  >
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/visita consul/AnyConv.com__WhatsApp Image 2024-05-03 at 11.29.06 (1).webp" alt="" className="icon" />
            <div>
              <h3>Visita de la Cónsul de la República del Paraguay</h3>
              <span>13/03/24</span>
              <p>El pasado 13 de marzo, la Cónsul de la República del Paraguay, María Noelia López Sanguinetti, realizó una visita de cortesía al Presidente del Concejo Deliberante de la ciudad de Formosa.</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
          </NavLink>
        </div>{/* End Service Item */}

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <NavLink
                    to="/institucional/visitas/DiaDelAnimal"
                    className="read-more"               
                  >
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/dia del animal/AnyConv.com__WhatsApp Image 2024-05-03 at 11.25.58 (1).webp" alt="" className="icon" />
            <div>
              <h3>Día del Animal</h3>
              <span>29/03/24</span>
              <p>Hoy con mucha alegría, en el "Honorable Concejo Deliberante", recibimos a niños del Jardín Infantes "Mickey Mouse", de la Escuela N°3 y del Colegio "Don Bosco", en el marco del "Día del Animal".</p>
              
              <span className="read-more link-visitas">Ver más <i className="bi bi-arrow-right" /></span>
                
            </div>
          </div>
          </NavLink>
        </div>{/* End Service Item */}
        
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <NavLink
                    to="/institucional/visitas/aniversarioFormosa"
                    className="read-more"               
                  >
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/8 de abril/AnyConv.com__WhatsApp Image 2024-05-03 at 11.21.47 (1).webp" alt="" className="icon" />
            <div>
              <h3>145º Aniversario de la Fundación de la Ciudad de Formosa</h3>
              <span>08/04/24</span>
              <p>En el marco de los festejos por el 145º Aniversario de la Fundación de la Ciudad de Formosa, tuvo lugar en el espacio cultural del nuevo edificio del Concejo Deliberante...</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
          </NavLink>

        </div>{/* End Service Item */}

        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <NavLink
                    to="/institucional/visitas/escuela445"
                    className="read-more"               
                  >
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/Escuela N°445/AnyConv.com__WhatsApp Image 2024-05-03 at 11.19.43.webp" alt="" className="icon" />
            <div>
              <h3>Visita de directivos de la escuela Escuela N°445"Dr.Esteban L. Maradona" </h3>
              <span>10/04/24</span>
              <p>Recibimos al Sr. Director Williams Iván Karpiel y a su colega en representación de la Escuela N°445 "Dr.Esteban L. Maradona" del Barrio Liborsi.</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
          </NavLink>
        </div>{/* End Service Item */}
      </div>
    </div>
  </section>
</div>

  )
}

export default Visitas