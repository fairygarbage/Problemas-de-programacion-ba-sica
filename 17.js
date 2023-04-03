
let num1 = +prompt("Ingrese un número: ");
let num2 = +prompt("Ingrese otro número mayor o igual que el primero: ");
let contador = 0;
let sumaMultiplos2 = 0;

if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            console.log(i);
            contador++;
            sumaMultiplos2 += i;
        }
    }
    console.log(`Hay ${contador} múltiplos de 2 entre los números ingresados y su suma es ${sumaMultiplos2}`);
} else {
    console.log("Los números ingresados no son válidos");
}
