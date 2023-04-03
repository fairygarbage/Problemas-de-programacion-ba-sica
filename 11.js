let numero = Number(prompt('Introduce un número: '));
let contador = 0;

for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0) {
        console.log(i);
        contador++;
    }
}

console.log(`Se han encontrado ${contador} múltiplos de 3`);
