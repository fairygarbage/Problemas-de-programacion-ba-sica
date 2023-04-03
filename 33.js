
let calificaciones = [];
let sumaCalificaciones = 0;

for (let i = 0; i < 10; i++) {
    let calificacion = +prompt(`Ingrese la calificación ${i + 1}: `);
    calificaciones.push(calificacion);
    sumaCalificaciones += calificacion;
}

let media = sumaCalificaciones / 10;

console.log(`Las calificaciones son ${calificaciones} y la media es ${media}`);
