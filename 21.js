let sumaPares = 0;
let sumaImpares = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    } else {
        sumaImpares += i;
    }
}

console.log(`La suma de los números pares entre 1 y 1000 es ${sumaPares} y la suma de los números impares entre 1 y 1000 es ${sumaImpares}`);
