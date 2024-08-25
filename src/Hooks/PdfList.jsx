import React, { useState, useEffect } from "react";
import { getPdfUrls } from "./PdfSesiones";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import "../pages/sesionesOrdinarias.css"



const PdfList = ({ fileName }) => {
  const [pdfUrls, setPdfUrls] = useState([]);

  useEffect(() => {
    // console.log("fileName:", fileName);
    const fetchPdfUrls = async () => {
      const urls = await getPdfUrls(fileName);
      setPdfUrls(urls);
    };

    fetchPdfUrls();
  }, [fileName]);

  const handleFileClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {pdfUrls.map((file, index) => (
        <div key={index} className="pdf-item mx-1"  onClick={() => handleFileClick(file.url)}>
          {file.type === "pdf" ? (
            <FontAwesomeIcon icon={faFilePdf} className="icono-pdf" />
          ) : (
            <FontAwesomeIcon icon={faFileImage} className="icono-imagen" />
            
          )}
        </div>
      ))}
    </div>
  );
};

export default PdfList;





