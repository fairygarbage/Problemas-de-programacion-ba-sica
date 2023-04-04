    const fs = require('fs');

fs.readFile('datos.dat', 'utf8', (err, data) => {

    let lineas = data.split('\n');
    let nuevoFichero = '';
    let bajaEncontrada = false;

    console.log(`Bienvenido al programa de bajas. Por favor, introduzca el ID que desea dar de baja:`);
    let idBaja = prompt('ID: ');

    lineas.forEach(linea => {
        let datos = linea.split(' ');
        let id = datos[0];

        if (id === idBaja) {
            bajaEncontrada = true;
            console.log('Baja realizada correctamente.');
        } else {
            nuevoFichero += `${linea}\n`;
        }
    });

    if (!bajaEncontrada) {
        console.log('No se ha encontrado un registro con ese ID.');
    }

    fs.writeFile('datos.dat', nuevoFichero, err => {
    });
});
