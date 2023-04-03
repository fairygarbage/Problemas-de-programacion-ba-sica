let numeroMayor = 0;
let numeroMenor = Infinity;

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt('Ingresa el número: '));
    if (numero > numeroMayor) {
        numeroMayor = numero;
    }
    if (numero < numeroMenor) {
        numeroMenor = numero;
    }
}

console.log(`El número mayor es ${numeroMayor} y el número menor es ${numeroMenor}`);
