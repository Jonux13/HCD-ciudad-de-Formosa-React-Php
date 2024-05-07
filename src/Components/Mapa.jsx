import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Components/Mapa.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import imageSrc from '../../public/assets/img/edificio/foto8.webp';

let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
});

const position = [-26.17834954085042, -58.16492206232086];  

const Mapa = () => {
  return (
    <>
      <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="mapa">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconUbicacion}>
          <Popup className="popup">
          <h6>Honorable Concejo Deliberante</h6>
            <img src={imageSrc} alt="Descripción de la imagen"/>
            <p>San Martin 500. Ciudad de Formosa.</p>
          </Popup>
        </Marker>
      </MapContainer>
      
    </>
  );
};

export default Mapa;
