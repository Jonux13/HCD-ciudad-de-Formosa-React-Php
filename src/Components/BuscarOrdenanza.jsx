import React, { useState } from "react";
import { obtenerDocumentos } from "../Hooks/ObtenerDocumentosHook";
import { filteredFiles } from "../Hooks/FilteredFilesHook";
import FileTable from "./FileTable";
import "../pages/ordenanzas.css";

export const BuscarOrdenanza = () => {
  const [docusSearch, setDocusSearch] = useState(""); // Estado para almacenar el término de búsqueda
  const [docus, setDocus] = useState([]); // Estado para almacenar la lista de archivos
  const [isSearching, setIsSearching] = useState(false); // Estado para controlar si se está realizando una búsqueda
  const [showFiles, setShowFiles] = useState(false); // Estado para controlar si se deben mostrar los archivos
  const [buscando, setBuscando] = useState(false); // Estado para controlar "Buscando..."

  // Manejar la búsqueda cuando se aprieta el botón buscar
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("docusSearch:", docusSearch); // Verifica el valor de docusSearch
    setIsSearching(true);
    setBuscando(true); // Indicar que se está realizando una búsqueda
    await obtenerDocumentos(docusSearch, setDocus, setBuscando); // Obtener documentos y finalizar búsqueda
    setShowFiles(true); // Mostrar archivos después de la búsqueda
  };

  // Manejador para abrir el archivo cuando se hace clic
  const handleFileClick = (url) => {
    window.open(url, "_blank");
    setShowFiles(false);
  };

  return (
    <div>
      <div className="row search-container">
        <div className="col-md-8 label-p form-container">
          <label htmlFor="floatingEmptyPlaintextInput" className="form-label">
            *Ingrese palabra clave o el número de la ordenanza.
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
          files={filteredFiles(isSearching, docus, docusSearch)}
          handleFileClick={handleFileClick}
        />
      )}
    </div>
  );
};
