import React from "react";
import { NavLink } from "react-router-dom";

const ColegioMaradona = () => {
  return (
    <section
      id="service-details"
      className="service-details section section-visitas"
    >
      <NavLink to="/visitas/" className="read-more link-volver">
        <div data-aos="fade-up">
          <span className="read-more">
            <i className="fas fa-reply icon-with-margin" />
            Volver
          </span>
        </div>
      </NavLink>
      <div className="container-all" data-aos="fade-up">
        <div className="container-title-visita text-center">
          <h4> Chicos de 6° del Colegio Privado Dr. Esteban Laureano</h4>
          <span>01/07/24</span>
        </div>
      </div>

      <div
        className="col-lg-8 ps-lg-5 text-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449725208_122115688982335787_2693978756186857485_n_10_11zon.jpg"
          alt
          className="img-fluid services-img"
        />

        <div className="title-paragrafh">
          <h3>Chicos de 6° del Colegio Privado Dr. Esteban
          Laureano Maradona.</h3>
          <p>
            Hoy recibimos a los chicos de 6° del Colegio Privado Dr. Esteban
            Laureano Maradona , que con mucho entusiasmo y alegría nos visitaron
            y tuvimos una linda mañana junto al Presidente Dario Di Martino y la
            concejales. ¡MUCHAS GRACIAS POR SU VISITA!
          </p>
        </div>

        <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449344071_122115689048335787_1423004109228031159_n_1_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
        <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449471415_122115688286335787_6564644257455208725_n_2_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
        <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449599164_122115688688335787_5725404106147142331_n_3_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
          <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449600901_122115688712335787_1262978628456421266_n_4_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
          <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449601498_122115689096335787_1165928040242231985_n_5_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
          <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449609574_122115689012335787_1845834272097648050_n_6_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
          <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449643394_122115688196335787_2445559221351027396_n_7_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
          <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449705063_122115688994335787_1686115844240882375_n_9_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
          <img
          src="/assets/img/visitas/chicos de 6__ del Colegio Privado Dr. Esteban Laureano/449730638_122115688616335787_6190679944837423415_n_11_11zon.jpg"
          alt
          className="img-fluid services-img text-center"
        />
      </div>

      <NavLink to="/visitas" className="read-more">
        <span className="read-more link-size">
          <i className="fas fa-reply icon-with-margin" />
          Volver
        </span>
      </NavLink>
    </section>
  );
};

export default ColegioMaradona;
