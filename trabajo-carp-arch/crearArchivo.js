/*  const fs = require('fs');
const path = require('path');

const nombreCarpeta = 'miCarpeta';
const nombreArchivo = 'archivoNuevo.txt';
const contenidoArchivo = 'Este es el contenido del archivo dentro de la carpeta.';

// Crear la carpeta //
fs.mkdir(nombreCarpeta, { recursive: true }, (err) => {
    if (err) {
        console.error('Error al crear la carpeta:', err);
    } else {
        console.log(`La carpeta ${nombreCarpeta} se ha creado con éxito.`);

        // Crear el archivo dentro de la carpeta //

        const rutaArchivo = path.join(nombreCarpeta, nombreArchivo);

        fs.writeFile(rutaArchivo, contenidoArchivo, (err) => {
            if (err) {
                console.error('Error al crear el archivo:', err);
            } else {
                console.log(`El archivo ${nombreArchivo} se ha creado con éxito dentro de ${nombreCarpeta}.`);
            }
        });
    }
});
*/
//escribir dentro del  archivo //
/*  const fs = require('fs');

const nuevoContenido = 'Este es el nuevo contenido que reemplaza el anterior.';
const nombreArchivo = 'archivoNuevo.txt';

fs.writeFile(nombreArchivo, nuevoContenido, (err) => {
    if (err) {
        console.error('Error al sobrescribir el archivo:', err);
    } else {
        console.log(`El archivo ${nombreArchivo} ha sido sobrescrito con éxito.`);
    }
});
*/
// eliminar archivo  //

/*   
const fs = require('fs');

const nombreArchivo = 'miCarpeta/archivoNuevo.txt';

fs.writeFile(nombreArchivo, '', (err) => {
    if (err) {
        console.error('Error al sobrescribir el archivo:', err);
    } else {
        console.log(`El contenido del archivo ${nombreArchivo} ha sido eliminado.`);
    }
});
*/
//eliminar carpeta//

const fs = require('fs');

const nombreCarpeta = 'miCarpeta';

fs.rm(nombreCarpeta, { recursive: true, force: true }, (err) => {
    if (err) {
        console.error('Error al eliminar la carpeta y su contenido:', err);
    } else {
        console.log(`La carpeta ${nombreCarpeta} y su contenido han sido eliminados con éxito.`);
    }
});