let numCursos = +prompt("Ingrese el número de cursos: ");
let numAlumnos = +prompt("Ingrese el número de alumnos por curso: ");
let notasAlumnos = [];

for (let i = 0; i < numCursos; i++) {
    notasAlumnos[i] = [];
    for (let j = 0; j < numAlumnos; j++) {
        notasAlumnos[i][j] = +prompt(`Ingrese la nota del alumno ${j + 1} del curso ${i + 1}: `);
    }
}

console.log(notasAlumnos);
