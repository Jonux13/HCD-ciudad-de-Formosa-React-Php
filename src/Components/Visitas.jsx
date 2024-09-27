import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Visitas() {
  const [visitas, setVisitas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Carga los datos desde el archivo JSON
    fetch('/visitasData.json', { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setVisitas(data);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError('No se pudieron cargar los datos de visitas.');
        }
      });

    // Cleanup function to abort fetch if component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2 className="title">Visitas al Hcd</h2>
          <p>Visitas realizadas al Honorable Concejo Deliberante</p>
        </div>

        <div className="container">
          <div className="row g-5">
            {visitas.map((visita) => (
              <div key={visita.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <NavLink to={`/visita/${visita.id}`} className="read-more">
                  <div className="service-item item-cyan position-relative">
                    <img src={visita.image} alt={visita.title} className="icon" />
                    <div className="visit-info">
                      <h3>{visita.title}</h3>
                      <span className="centered-span">{visita.date}</span>
                      <p>{visita.description}</p>
                      <span className="read-more link-visitas">
                        <span className="text">Ver más</span> <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Visitas;
