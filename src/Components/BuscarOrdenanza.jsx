import React, { useState } from "react";
import { obtenerDocumentos } from "../Hooks/ObtenerDocumentosHook";
import { filteredFiles } from "../Hooks/FilteredFilesHook";
import FileTable from "./FileTable";
import "../pages/ordenanzas.css";

export const BuscarOrdenanza = () => {
  const [docusSearch, setDocusSearch] = useState(""); // Término de búsqueda
  const [docus, setDocus] = useState([]); // Lista de archivos
  const [buscando, setBuscando] = useState(false); // Estado de carga
  const [showFiles, setShowFiles] = useState(false); // Controla la visibilidad de archivos

  // Verifica si la entrada es "Año XXXX" (donde XXXX es un número de 4 dígitos)
  const isYearSearch = (input) => /^año\s\d{4}$/.test(input);

  // Manejar la búsqueda cuando se aprieta el botón buscar
  const submitHandler = async (e) => {
    e.preventDefault();
    setBuscando(true); // Indicar que se está realizando una búsqueda


    // Si es una búsqueda por año (formato "Año XXXX")
    if (isYearSearch(docusSearch)) {
      // Aquí podrías ajustar el query si tu API lo requiere para búsquedas por año
    } else {
      console.log("Búsqueda normal por palabra clave o número de ordenanza");
    }

    try {
      await obtenerDocumentos(docusSearch, setDocus, setBuscando); // Obtener documentos
      setShowFiles(true); // Mostrar archivos después de la búsqueda
    } catch (error) {
      console.error("Error al obtener documentos:", error);
    } finally {
      setBuscando(false); // Terminar estado de búsqueda
    }
  };

  // Manejador para abrir el archivo cuando se hace clic
  const handleFileClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="row search-container">
        <div className="col-md-8 label-p form-container">
          <label htmlFor="floatingEmptyPlaintextInput" className="form-label form-text">
            *Ingrese palabra clave, número de la ordenanza, <br /> <div className="form-label-año">o "año XXXX" para buscar por año.</div> 
          </label>
          <form onSubmit={submitHandler} className="d-flex form">
            <input
              className="form-control form-ord flex-grow-1"
              type="text"
              value={docusSearch}
              onChange={(e) => {
                setDocusSearch(e.target.value);
                setShowFiles(false);
              }}
              placeholder='Ej: año 1983'
              required
            />
            <button type="submit" className="btn-ordenanza">
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="searching-container">
        {buscando && (
          <>
            <h2>Buscando...</h2>
            <div className="spinner" />
          </>
        )}
      </div>

      {showFiles && !buscando && (
        <FileTable
          files={filteredFiles(false, docus, docusSearch)} // Cambié isSearching a false
          handleFileClick={handleFileClick}
        />
      )}
    </div>
  );
};
