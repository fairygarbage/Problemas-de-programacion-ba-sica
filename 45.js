
const fs = require('fs');

fs.readFile('datos.dat', 'utf8', (err, data) => {

    let lineas = data.split('\n');

    console.log(`Bienvenido al programa de consultas. Por favor, introduzca el ID que desea consultar:`);
    let idConsultar = prompt('ID: ');

    lineas.forEach(linea => {
        let datos = linea.split(' ');
        let id = datos[0];

        if (id == idConsultar) {
            console.log(`ID: ${datos[0]}, Nombre: ${datos[1]}, Edad: ${datos[2]}, Estado: ${datos[3]}`);
        }
    });
});
