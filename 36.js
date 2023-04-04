
let matriz = [];

for (let i = 0; i < 4; i++) {
    let fila = [];
    for (let j = 0; j < 5; j++) {
        let numAleatorio = Math.floor(Math.random() * 100) + 1;
        fila.push(numAleatorio);
    }
    matriz.push(fila);
}

function trans(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}
console.log(matriz);
console.log(trans(matriz));
