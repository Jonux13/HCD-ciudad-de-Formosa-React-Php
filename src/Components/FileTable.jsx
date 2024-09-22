import React from 'react';
import { faFilePdf, faFileWord, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// Componente FileTable
const FileTable = ({ files }) => {
  return (
    files.length > 0 ? (
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">N˚ de ordenanza</th>
            <th scope="col">Descripción</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{getFileNumber(file.nombres)}</td>
              <td>{getFileDescription(file.nombres)}</td>
              <td>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon 
                    icon={getFileIcon(file.nombres)} 
                    className={getFileIconClass(file.nombres)} // Aplicar clase CSS
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <ul>
        <li className="archivo">
          <FontAwesomeIcon icon={faBan} className="icono-rojo" />
          No se encontró el archivo, contáctenos al siguiente correo electrónico{' '}
          <b>honorableconcejodeliberantefsa@gmail.com</b>
        </li>
      </ul>
    )
  );
};

// Función para obtener el número del nombre del archivo
const getFileNumber = (fileName) => {
  return fileName.split(' - ')[0] || 'Número no disponible';
};

// Función para obtener la descripción del nombre del archivo
const getFileDescription = (fileName) => {
  return fileName.split(' - ')[1] || 'Descripción no disponible';
};

// Función para obtener el ícono en función de la extensión del archivo
const getFileIcon = (fileName) => {
  const extension = fileName.split('.').pop().toLowerCase();
  if (extension === 'pdf') {
    return faFilePdf; // Ícono de PDF
  } else if (extension === 'docx' || extension === 'doc') {
    return faFileWord; // Ícono de Word
  } else {
    return faBan; // Ícono de archivo no reconocido
  }
};

// Función para obtener la clase CSS en función de la extensión del archivo
const getFileIconClass = (fileName) => {
  const extension = fileName.split('.').pop().toLowerCase();
  if (extension === 'pdf') {
    return 'icono-pdf'; // Clase para archivos PDF
  } else if (extension === 'docx' || extension === 'doc') {
    return 'icono-word'; // Clase para archivos Word
  } else {
    return 'icono-default'; // Clase para archivos no reconocidos
  }
};


// Validación de props
FileTable.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired, // URL del archivo (string, requerido)
      nombres: PropTypes.string.isRequired, // Nombre del archivo (string, requerido)
    })
  ).isRequired // Arreglo de objetos de archivo, requerido
};

export default FileTable;
