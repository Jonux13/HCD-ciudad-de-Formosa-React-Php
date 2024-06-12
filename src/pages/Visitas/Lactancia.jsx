import React from 'react'
import { NavLink } from "react-router-dom";


const Lactancia = () => {
  return (
    <section
    id="service-details"
    className="service-details section section-visitas"
  >
    <NavLink to="/institucional/visitas" className="read-more link-volver">
      <div data-aos="fade-up">
        <span className="read-more">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </div>
    </NavLink>
    <div className="container-all" data-aos="fade-up">
      <div className="container-title-visita text-center">
        <h4>Día de la Acción por la Salud de las Mujeres</h4>
        <span>05/06/24</span>
      </div>
    </div>

    <div
      className="col-lg-8 ps-lg-5 text-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446651424_122101999274335787_7533347121489445389_n.webp"
        alt
        className="img-fluid services-img"
      />

      <div className="title-paragrafh">
        <h3> Inuguración del espacio amigo de la lactancia.</h3>
        <p>
        En el Día de la Acción por la Salud de las Mujeres, habilitaron el "Espacio Amigo de Lactancia" en el Concejo Deliberante. 
Esta sala de lactancia está totalmente acondicionada para que las madres trabajadoras que estén dando de mamar cuenten con un espacio íntimo y confortable con su bebé y puedan continuar con la alimentación de la o el niño o puedan extraerse leche materna.
Si bien el nuevo edificio ya contaba con este lugar, ahora fue renombrado y es el primero en la ciudad que tiene habilitación del Ministerio de Desarrollo Humano.
La iniciativa surgió de la comisión de género y diversidad y de la inauguración participaron el presidente del Concejo Deliberante, Dario Di Martino, las concejalas María "Petu"  Argañaraz, Beatriz Segovia, Teresa Galvan y el concejal Horacio Petit. También estuvieron presentes el Dr. Ricardo Fabro, director de Maternidad e Infancia y la Lic. Marianela Rojas coordinadora de Nutrición y Lactancia, pertenecientes al Ministerio de Desarrollo Humano.
        </p>
      </div>

      <img
        src="/assets/img/visitas/lactancia/AnyConv.com__444489669_122101996610335787_1862800966481399014_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
        <img
        src="/assets/img/visitas/lactancia/AnyConv.com__445680025_122101999178335787_316589541462305891_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
         <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446863761_122101999304335787_5941457304543865399_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
         <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446871835_122101999418335787_5229244543148592571_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
         <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446872366_122101999148335787_2169845854511430206_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
         <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446873028_122101999286335787_8422616671993691806_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
         <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446917026_122101999226335787_7324587098620177945_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
         <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446951728_122101999346335787_2711651909466137333_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
         <img
        src="/assets/img/visitas/lactancia/AnyConv.com__446951781_122101999250335787_2037435072813594164_n.webp"
        alt
        className="img-fluid services-img text-center"
      />
    </div>

    <NavLink to="/institucional/visitas" className="read-more">
      <span className="read-more link-size">
        <i className="fas fa-reply icon-with-margin" />
        Volver
      </span>
    </NavLink>
  </section>
  )
}

export default Lactancia