import React from 'react'
import { NavLink } from "react-router-dom";


function Visitas() {
  return (
  <div>
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Visitas</h2>
      <p>Visitas realizadas al Honorable Concejo Deliberante</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/WhatsApp Image 2024-03-29 at 19.38.02 (3).jpeg" alt="" className="icon" />
            <div>
              <h3>Nesciunt Mete</h3>
              <span>14/04/24</span>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <NavLink
                    to="/institucional/visitas/visitas14Abril"
                    className="read-more"               
                  >
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/WhatsApp Image 2024-03-29 at 19.38.02 (3).jpeg" alt="" className="icon" />
            <div>
              <h3>Nesciunt Mete</h3>
              <span>14/04/24</span>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              
              <span className="read-more link-visitas">Ver más <i className="bi bi-arrow-right" /></span>
                
            </div>
          </div>
          </NavLink>
        </div>{/* End Service Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/WhatsApp Image 2024-03-29 at 19.38.02 (3).jpeg" alt="" className="icon" />
            <div>
              <h3>Nesciunt Mete</h3>
              <span>14/04/24</span>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/WhatsApp Image 2024-03-29 at 19.38.02 (3).jpeg" alt="" className="icon" />
            <div>
              <h3>Nesciunt Mete</h3>
              <span>14/04/24</span>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/WhatsApp Image 2024-03-29 at 19.38.02 (3).jpeg" alt="" className="icon" />
            <div>
              <h3>Nesciunt Mete</h3>
              <span>14/04/24</span>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="service-item item-cyan position-relative">
            <img src="/assets/img/visitas/WhatsApp Image 2024-03-29 at 19.38.02 (3).jpeg" alt="" className="icon" />
            <div>
              <h3>Nesciunt Mete</h3>
              <span>14/04/24</span>
              <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
              <a href="service-details.html" className="read-more stretched-link">Ver más <i className="bi bi-arrow-right" /></a>
            </div>
          </div>
        </div>{/* End Service Item */}
      </div>
    </div>
  </section>
</div>

  )
}

export default Visitas