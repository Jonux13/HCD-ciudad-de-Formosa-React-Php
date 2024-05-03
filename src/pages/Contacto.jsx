import React from "react";
import GoogleMapsComponent from "../Components/GoogleMapsComponent"
import Mapa from "../Components/Mapa"
import "./contacto.css";

function Contacto() {
  return (
    <section id="contact" className="contact contacto-container">
      <div className="container" data-aos="fade-up">
        <div className="section-title contacto">
          <h2>Contacto</h2>
          <p></p>
        </div>
      
          <Mapa />
       
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info info-contacto">
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
  );
}

export default Contacto;
