const fs = require('fs');

console.log('Bienvenido al programa de altas');

let id = prompt('Introduce el ID: ');
let nombre = prompt('Introduce el nombre: ');
let apellidos = prompt('Introduce los apellidos: ');
let direccion = prompt('Introduce la dirección: ');
let estado = prompt('Introduce el estado: ');

let registro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;

fs.appendFile('DATOS.DAT', registro, (err) => {
    console.log('El registro ha sido guardado');
});
