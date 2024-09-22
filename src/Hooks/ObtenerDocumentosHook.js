export const obtenerDocumentos = async (docusSearch, setDocus, setBuscando) => {
    try {
      const response = await fetch(`https://concejoformosa.org//api/pdf?search=${encodeURIComponent(docusSearch)}`);
      if (!response.ok) {
        throw new Error('Error al obtener los documentos');
      }
      const data = await response.json();
      
      // Imprimir datos recibidos para inspeccionar su estructura
      // console.log('Datos recibidos:', data);
  
      // Convertir datos en array si es necesario
      const dataArray = Array.isArray(data) ? data : Object.values(data);
  
      // Verificar la conversión
      // console.log('Datos procesados como array:', dataArray);
  
      // Actualizar el estado con el array de documentos
      setDocus(dataArray);
    } catch (error) {
      console.error('Error al obtener los documentos:', error.message);
      setDocus([]); // Manejar la ausencia de documentos
    } finally {
      setBuscando(false); // Terminar el estado de "buscando"
    }
  };
  



