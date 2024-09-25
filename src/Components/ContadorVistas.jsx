import React, { useEffect, useState } from "react";
import "./ContadorVistas.css";

function ContadorVistas() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Llamada a contador.php para obtener el valor del contador
    const fetchContador = async () => {
      try {
        const response = await fetch('https://concejoformosa.org/contador.php');
        const data = await response.json();
        setContador(data.contador);
      } catch (error) {
        console.error('Error al obtener el contador:', error);
      }
    };

    fetchContador();
  }, []);

  return (
    <div>
      <div className="text-left">
        <a href="#" className="btn-get-started scrollto" onClick={(e) => e.preventDefault()}>
          <span className="label">visitas: </span>
          <span className="contador">{contador}</span>
        </a>
      </div>
    </div>
  );
}

export default ContadorVistas;

