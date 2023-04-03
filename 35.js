let matriz = [];

for (let i = 0; i < 4; i++) {
    let fila = [];
    for (let j = 0; j < 5; j++) {
        let numAleatorio = Math.floor(Math.random() * 100) + 1;
        fila.push(numAleatorio);
    }
    matriz.push(fila);
}

console.log(matriz);
