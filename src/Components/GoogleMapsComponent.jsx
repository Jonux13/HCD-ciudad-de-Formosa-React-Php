import React, { useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapsComponent = () => {
  // Configuración del mapa
  const mapContainerStyle = {
    width: '100%',
    height: '270px', // Cambia esto según tus necesidades
  };

  const center = {
    lat: -26.17855657118123,
    lng: -58.16490328250713,     
  };

  const mapOptions = {
    zoom: 16,
    center: center,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC1hEVq1p8rQeNMq_XfLCEddlaS_UDSAH0"> {/* Coloca tu clave aquí */}
      <GoogleMap mapContainerStyle={mapContainerStyle} {...mapOptions}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
