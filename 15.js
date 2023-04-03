

let num1 = +prompt("Ingrese un número: ");
let num2 = +prompt("Ingrese otro número: ");
let contador = 0;
let contadorPares = 0;
let sumaImpares = 0;

if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
        contador++;
        if (i % 2 === 0) {
            contadorPares++;
        } else {
            sumaImpares += i;
        }
    }
    console.log(`Hay ${contador} números naturales entre los números ingresados y ${contadorPares} de ellos son pares. La suma de los impares es ${sumaImpares}`);
} else {
    console.log("Los números ingresados no son válidos");
}
