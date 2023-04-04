
const fs = require('fs');

fs.readFile('datos.dat', 'utf8', (err, data) => {

    let lineas = data.split('\n');
    let nuevoFichero = '';
    let modificacionEncontrada = false;

    console.log(`Bienvenido al programa de modificaciones. Por favor, introduzca el ID que desea modificar: `);
    let idModificar = prompt('ID: ');

    lineas.forEach(linea => {
        let datos = linea.split(' ');
        let id = datos[0];

        if (id == idModificar) {
            modificacionEncontrada = true;
            console.log('Introduzca los nuevos datos:');
            let nombre = prompt('Nombre: ');
            let edad = prompt('Edad: ');
            let direccion = prompt('Dirección: ');
            nuevoFichero += `${id} ${nombre} ${edad} ${direccion}\n`;
            console.log('Modificación realizada correctamente.');
        } else {
            nuevoFichero += `${linea}\n`;
        }
    });

    if (!modificacionEncontrada) {
        console.log('No se ha encontrado un registro con ese ID.');
    }

    fs.writeFile('datos.dat', nuevoFichero, err => {
    });
});
