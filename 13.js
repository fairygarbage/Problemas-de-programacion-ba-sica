let multi = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);
        multi++;
    }
}

console.log(`Hay ${multi} múltiplos de 2 o 3 entre 1 y 100`);
