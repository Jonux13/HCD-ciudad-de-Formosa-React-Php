import React from 'react'
import { NavLink } from "react-router-dom";


const FinSesionesOrdinarias = () => {
  return (
    <section
    id="service-details"
    className="service-details section section-visitas"
  >
    <NavLink to="/" className="read-more link-volver">
      <div data-aos="fade-up">
        <span className="read-more">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </div>
    </NavLink>
    <div className="container-all" data-aos="fade-up">
      <div className="container-title-visita text-center">
        <h4>Cierre de Sesiones Ordinarias del Año 2024</h4>
        <span>27/11/24</span>
      </div>
    </div>

    <div
      className="col-lg-8 ps-lg-5 text-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <img
        src="/assets/img/fin-sesiones-ordinarias/fin-ses-ord-1.webp"
        alt
        className="img-fluid services-img"
      />

      <div >
        <h3>Di Martino valoró las políticas ejecutadas por el HCD en el año.</h3>
        <p className="title-paragrafh">
        Di Martino valoró las políticas ejecutadas por el HCD en el año para mejorar la calidad de vida de los vecinos de la ciudad
        En el cierre del Período Ordinario de Sesiones concretado este miércoles 27 de noviembre, el presidente del Concejo Deliberante capitalino, Darío Di Martino, resaltó el conjunto de Ordenanzas aprobadas por el cuerpo durante el año con fuerte impacto social y en respuesta directa a los requerimientos de la comunidad. Puso en valor la inauguración de la nueva sede de la entidad en este 2024, uno de los atractivos turísticos de la capital y el amplio acompañamiento a eventos sociales, musicales, artísticos, y educativos, un Concejo de puertas abiertas que mostró una faceta de más cercanía con los vecinos y vecinas, particularmente estudiantes que participaron de actividades culturales, recreativas, artísticas y sociales, un órgano legislativo que se transformó en una verdadera caja de resonancia para todos.
        El Parlamento Comunal y su recurso humano fueron testigos del interés despertado en estudiantes de primaria y secundaria por el trabajo de los ediles al sentarse en una banca a comprobar en persona la responsabilidad de cada concejal y cómo estos velan por el bienestar general. Los niños y jóvenes, luego de agradecer al presidente del Concejo por la gentileza, prometieron interesarse en la labor parlamentaria porque muchos de ellos sueñan con ser los futuros hacedores de las ordenanzas que regulen el funcionamiento de la ciudad. 
        El presidente del HCD sostuvo que a lo largo del 2024 se abordaron temas cruciales que impactan directamente en la calidad de vida de los habitantes de la ciudad de Formosa; Ordenanzas aprobadas que no sólo responden a las necesidades inmediatas, sino que sientan las bases para un desarrollo sostenible y equitativo para cada formoseño. “Estuvimos con la comunidad todo el año porque somos sus representantes y a ella nos debemos”. 
        “La labor del Concejo, en un trabajo articulado con el Intendente Jorge Jofré y el Gobernador Gildo Insfrán, fueron fundamental en este ciclo 2024 para canalizar las inquietudes de los vecinos y traducirlas en acciones concretas”. “De esta manera, hemos ejecutado un amplio programa de acción llegando a cada sector de la ciudad con acciones directas de impacto  en el presente y futuro”, resaltó. 
        En este sentido, Di Martino recordó como destacada la autorización al Departamento Ejecutivo Municipal a la compra directa de automotores para el servicio de transporte público de pasajeros de la ciudad de Formosa. Y además se estableció las líneas de recorrido del sistema. 
        La declaración de interés municipal a la Segunda Jornada Internacional sobre Autismo, Ordenanza N° 8070, Pirotecnia Sonora Cero, atendiendo los requerimientos de familias con niños con TEA y asociaciones protectoras de mascotas. También la Ordenanza N° 8017 sobre el Espacio Amigos de la Lactancia en los ámbitos laborales y establecimientos públicos habilitado en el seno del HCD.
        La Ordenanza N° 8053 por la cual se declaró de interés municipal a las Primeras Jornadas Provinciales para la prevención del consumo problemático digital y apuestas ilegales. La ordenanza N° 8055 declarando ciudadanos notables de la ciudad a peluqueros pioneros de la familia Rojas Telles. 
        Otro de los puntos abordados es el relacionado a la Ordenanza N° 8059 sobre reglamentos para los servicios públicos de remises, taxis y sistema multiplataforma de transporte de pasajeros. 
        Vale señalar la Ordenanza N° 8062 por la cual se designó con el nombre de “Nueva Formosa” al barrio comprendido por los lotes rurales: 131, 149, 150 y las manzanas: 25 a 30; 33 a 38; 41 a 46; 49 a 53; 54 a 58; 60 a 65; 66 a 71 y desde la 72 a 77 del lote rural número 132. 
        La adhesión a la Ley Provincial y Nacional de Prevención del Suicidio. Y la Declaración de interés del evento de Abordaje del Suicidio, realizado en la sede del Concejo Deliberante; Ordenanza N° 8082.
        La compra con recursos propios del Concejo de una unidad de traslado de pasajeros para personas con discapacidad motriz que fue donado al municipio, como respuesta al acompañamiento de la comunidad. 
        La declaración de interés de la Mesa de Trabajo Intersectorial para el abordaje de la problemática del Suicidio en la ciudad de Formosa, que se realizó el pasado 4 de octubre. Y finalmente, se declaró de interés municipal el Primer Torneo de Ajedrez que se realizará el 30 de noviembre en el Salón Auditorio del Honorable Concejo Deliberante.
        </p>
      </div>

        <img
        src="/assets/img/fin-sesiones-ordinarias/fin-ses-ord-2.webp"
        alt
        className="img-fluid services-img text-center"
      />
    </div>

    <NavLink to="/" className="read-more">
      <span className="read-more link-size">
        <i className="fas fa-reply icon-with-margin" />
        Volver
      </span>
    </NavLink>
  </section>
  )
}

export default FinSesionesOrdinarias