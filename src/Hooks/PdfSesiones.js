import { index } from "../../Db";

const storage = index.storage();

const getPdfUrls = async (fileName) => {
  try {
    const storageRef = storage.ref();
    const pdfFilesSnapshot = await storageRef.listAll();

    const pdfUrls = await Promise.all(
      pdfFilesSnapshot.items.map(async (item) => {
        const url = await item.getDownloadURL();
        const fileType = item.name.split('.').pop().toLowerCase(); // Obtener la extensión del archivo y convertirla en minúscula
        return { name: item.name, url, type: fileType }; 
      })
    );

    console.log("PDF URLs:", pdfUrls);

    // Filtrar por el nombre del archivo
    const filteredPdfUrls = pdfUrls.filter(pdf => {
      console.log("PDF Name:", pdf.name);
      console.log("Provided File Name:", fileName);
      return pdf.name && pdf.name.trim() === fileName.trim();
    });

    console.log("Filtered PDF URLs:", filteredPdfUrls);

    return filteredPdfUrls;
  } catch (error) {
    console.error("Error al obtener los enlaces de descarga de los archivos PDF:", error);
    return [];
  }
};

export { getPdfUrls };




