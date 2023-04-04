
let M = +prompt("Ingrese el número de filas: ");
let N = +prompt("Ingrese el número de columnas: ");
let matriz = [];

for (let i = 0; i < M; i++) {
    matriz[i] = [];
    for (let j = 0; j < N; j++) {
        matriz[i][j] = +prompt(`Ingrese el valor de la posición ${i}, ${j}: `);
    }
}

console.log(`Matriz original: ${matriz}`);

for (let gap = Math.floor(M / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < M; i++) {
        let temp = matriz[i][0];
        let j = i;
        while (j >= gap && matriz[j - gap][0] > temp) {
            matriz[j][0] = matriz[j - gap][0];
            j -= gap;
        }
        matriz[j][0] = temp;
    }
}

console.log(`Matriz ordenada: ${matriz}`);
