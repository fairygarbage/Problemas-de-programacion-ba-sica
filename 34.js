let calificaciones = [];
let sumaCalificaciones = 0;
let encontrado = false;
let buscarNota = +prompt("Ingrese la nota a buscar: ");

for (let i = 0; i < 10; i++) {
    let calificacion = +prompt(`Ingrese la calificación ${i + 1}: `);
    calificaciones.push(calificacion);
    sumaCalificaciones += calificacion;
    if (calificacion === buscarNota) {
        encontrado = true;
    }
}

let media = sumaCalificaciones / 10;

console.log(`Las calificaciones son ${calificaciones} y la media es ${media}`);

if (encontrado) {
    console.log(`La nota ${buscarNota} fue encontrada`);
} else {
    console.log(`La nota ${buscarNota} no fue encontrada`);
}
