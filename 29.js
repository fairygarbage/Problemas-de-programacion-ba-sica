let contador = 0;

for (let i = 0; i < 100; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    if (dado1 + dado2 === 10) {
        contador++;
    }
}

console.log(`En 100 tiradas de dos dados salieron 10 en ${contador} ocasiones`);
