let tabla = [];

for (let pag = 0; pag < 3; pag++) {
    tabla[pag] = [];
    for (let fil = 0; fil < 4; fil++) {
        tabla[pag][fil] = [];
        for (let col = 0; col < 5; col++) {
            tabla[pag][fil][col] = pag * 20 + fil * 5 + col + 1;
        }
    }
}

console.log(tabla);
