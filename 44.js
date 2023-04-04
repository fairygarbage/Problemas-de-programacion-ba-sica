const fs = require('fs');

fs.readFile('datos.dat', 'utf8', (err, data) => {
    if (err) throw err;

    let lineas = data.split('\n');
    let estado;

    console.log(`Bienvenido al programa de listado. Por favor, introduzca el estado que desea listar: `);
    estado = prompt('Estado: ');

    lineas.forEach(linea => {
        let datos = linea.split(' ');
        let estadoRegistro = datos[3];

        if (estadoRegistro == estado) {
            console.log(`ID: ${datos[0]}, Nombre: ${datos[1]}, Edad: ${datos[2]}, Estado: ${estadoRegistro}`);
        }
    });
});
