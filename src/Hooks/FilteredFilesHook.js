export const filteredFiles = (isSearching, docus, docusSearch) => {
    if (!Array.isArray(docus)) {
        console.error('docus no es un array:', docus);
        return []; // Retorna un array vacío si `docus` no es un array
    }

    return docus.filter(file => {
        // Asegúrate de que `file` es un objeto y contiene una propiedad `nombres` que es una cadena
        if (file && typeof file === 'object' && typeof file.nombres === 'string') {
            return isSearching ? file.nombres.toLowerCase().includes(docusSearch.toLowerCase()) : true;
        } else {
            console.warn('Elemento no es un objeto con propiedad `nombres`:', file);
            return false; // Excluye elementos que no son objetos con propiedad `nombres`
        }
    }).map(file => ({ url: file.url, nombres: file.nombres })); // Devuelve un array de objetos con `url` y `nombres`
};




// export const filteredFiles = (isSearching, docus, docusSearch) => {
//     return docus.filter(file =>
//         isSearching ? file.nombres.toLowerCase().includes(docusSearch.toLowerCase()) : true
//     );
// };
